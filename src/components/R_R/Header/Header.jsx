import React from 'react'
import { Select } from '@material-ui/core'
import FiltersContainer from '../../../containers/R_R/FilterContainer.js'
import './Header.css'

class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            sort: 'relevant',
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
        console.log('header props', JSON.stringify(this.props.filters))
        const filters = []
        for(var i in this.props.starFilters){
            filters.push(i)
        }
        return (
            <div className="review-header">
                <div>
                    Sort by:  
                    <Select style={{paddingLeft: '2%'}}value={this.state.sort} onChange={this.handleChange}>
                        <option value="relevant">Relevant</option>
                        <option value="newest">Newest</option>
                        <option value="helpful">Helpful</option>
                    </Select>
                </div>
                {(filters[0]) ? <FiltersContainer/> : <div/>}
            </div>
        )
    }
}

export default Header