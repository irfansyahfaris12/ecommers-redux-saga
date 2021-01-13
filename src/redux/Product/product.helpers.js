import { firestore } from '../../firebase/utils';

export const handleAddProduct = product => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('product')
            .doc()
            .set(product)
            .then(() => {
                resolve();
            })
            .catch(err =>{
                reject(err)
            })
    })
}

export const handleFetchProduct = ({ filterType, startAfterDoc, persistProduct=[] }) => {
    return new Promise((resolve, reject) => {
        const pageSize = 6;
        
        let ref = firestore.collection('product').limit(pageSize);

        if (filterType) ref = ref.where('productCategory', '==', filterType);
        if(startAfterDoc) ref = ref.startAfter(startAfterDoc)

        ref
            .get()
            .then(snapshot => {
                const totalCount = snapshot.size;

                const data =  [
                    ...persistProduct,
                    ...snapshot.docs.map(doc => {
                        return {
                            ...doc.data(),
                            documentID: doc.id
                        }
                    })
                ]
                resolve({
                    data,
                    queryDoc: snapshot.docs[totalCount - 1],
                    isLastPage: totalCount < 1
                });
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const handleFetchProductDetail = productID => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('product')
            .doc(productID)
            .get()
            .then(snapshot => {
                if(snapshot.exists){
                    resolve(
                        snapshot.data()
                    )
                }
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const handleDeleteProduct = documentID => {
     return new Promise((resolve, reject) => {
         firestore
            .collection('product')
            .doc(documentID)
            .delete()
            .then(() => {
                resolve();
            })
            .catch(err => {
                reject(err)
            })
     })
}