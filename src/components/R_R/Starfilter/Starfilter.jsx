import React from 'react'


class Starfilter extends React.Component {
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }


    handleClick(e){
        console.log('filter ', this.props.starFilters)
        const filter = this.props.starFilters || []
        filter.push(e.target.value)
        this.props.updateFilter(filter)
        this.props.updateCount()
        this.props.getReviews(this.props.id)
    }

    render(){
        return(
            <button value={this.props.value} onClick={this.handleClick}>
                {this.props.rating[0]} Star
            </button>
        )
    }
}


export default Starfilter