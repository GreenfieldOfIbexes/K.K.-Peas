import React from 'react'
import {Modal} from 'react-bootstrap'
import './Photos.css'


class Photos extends React.Component{
    constructor(props){
        super(props)

        this.state={
            display: 'none'
        }

        this.fullSize = this.fullSize.bind(this)
        this.close = this.close.bind(this)
    }

    fullSize(e){
        e.preventDefault()
        this.setState({
            display: 'flex'
        })
    }

    close(){
        this.setState({
            display: 'none'
        })
    }

    render() {
        return (
            <>
                <div className='review-photos-modal' style={{display: this.state.display}} onHide={this.close}>
                    <div className='review-photos-content'>
                        <div className='review-photos-close' onClick={this.close}>x</div>
                        <img src={this.props.photo.url}/>
                    </div>
                </div>
                <a href={this.props.photo.url}>
                    <img className="review-images" onClick={this.fullSize} src={this.props.photo.url} />
                </a>
            </>
        )
    }
}

export default Photos