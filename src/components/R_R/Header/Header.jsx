import React from 'react'
import { Select } from '@material-ui/core'

class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            sort: 'relevant'
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({
            sort: e.target.value
        })
        this.props.sort(e.target.value)
        this.props.updateCount()
        this.props.sortBy(this.props.id, e.target.value)
               
    }

    render() {
        return (
            <div>
                Sort by:  
                <Select style={{paddingLeft: '2%'}}value={this.state.sort} onChange={this.handleChange}>
                    <option value="relevant">Relevant</option>
                    <option value="newest">Newest</option>
                    <option value="helpful">Helpful</option>
                </Select>
            </div>
        )
    }
}

export default Header