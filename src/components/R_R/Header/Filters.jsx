import React from 'react'


class Filters extends React.Component{
    constructor(props){
        super(props)

        this.remove = this.remove.bind(this)
    }

    remove(){
        this.props.removeFilter(this.props.id)
    }


    render() {
        return(
            <div>
                <div>
                    Rating Filters: 
                </div>
                <button className="review-removeFilter-buttons" onClick={this.remove}>
                    Remove Rating Filters
                </button>
            </div>
        )
    }
}

export default Filters