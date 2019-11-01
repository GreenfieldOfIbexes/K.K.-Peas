const reviewCount = (reviewCount = 2) =>  {

    return ({
        type: 'UPDATE_COUNT',
        count: reviewCount
    });
}

export default reviewCount
