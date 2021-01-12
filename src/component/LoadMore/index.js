import React from 'react'
import Button from '../Form/Button';

const LoadMore = ({ 
    onLoadMoreEvn = () =>{},
}) => {
    return (
        <Button onClick={() => onLoadMoreEvn()}>
            Load More
        </Button>
    )
}

export default LoadMore
