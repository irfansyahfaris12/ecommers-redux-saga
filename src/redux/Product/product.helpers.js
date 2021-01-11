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

export const handleFetchProduct = () => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('product')
            .get()
            .then(snapshot => {
                const productArray = snapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        documentID: doc.id
                    }
                })
                resolve(productArray);
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