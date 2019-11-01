import React from 'react'


class Starfilter extends React.Component {
    constructor(props){
        super(props)
    }


    handlClick(e){
        this.props.updateFilter(e.target.value)
        this.props.updateCount()
    }

    render(){
        return(
            <div value={this.props.rating[0]} onClick={this.handleClick}>
                {this.props.rating[0]} Star
            </div>
        )
    }
}


export default Starfilter