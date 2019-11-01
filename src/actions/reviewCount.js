const reviewCount = (reviewCount = 2) =>  {

    return ({
        type: 'UPDATE_COUNT',
        reviewCount
    });
}

export default reviewCount
