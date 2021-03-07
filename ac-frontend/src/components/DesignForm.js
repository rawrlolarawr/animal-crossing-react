import React, { Component } from 'react'

class DesignForm extends Component {
    super(props){
        this.state = {
            name: '',
            image: '',
            maCode: '',
            moCode: '',
            design: {}
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState(state => {
            return ({
                name: '',
                image: '',
                maCode: '',
                moCode: '',
                design: {
                    name: this.state.name,
                    img_src: this.state.image,
                    ma_code: this.state.maCode,
                    mo_code: this.state.moCode,
                }
            })
        }, () => this.addDesign(this.state.design))
    }

    addDesign = design => {
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(design)
        }
        
        fetch('http://localhost:3001/designs/new', configObj)
    }

    handleChange = event => {
        this.setState({design: event.target.value})
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' onChange={this.handleChange} placeholder='Name' />
                <input type='submit' value='Create New Design' />    
            </form>
        )
    }
}

export default DesignForm