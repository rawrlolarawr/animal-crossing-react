import React, { Component } from 'react'

class DesignForm extends Component {
    constructor(props){
        super(props)
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
        
        fetch('http://localhost:3001/designs', configObj)
    }

    handleChange = event => {
        console.log({event})
        const value = event.target.value
        this.setState({ ...this.state, [event.target.name]: value })
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='name' value={this.state.name} onChange={this.handleChange} placeholder='Name' />
                <input type='text' name='maCode' value={this.state.maCode} onChange={this.handleChange} placeholder='MA Code' />
                <input type='text' name='moCode' value={this.state.moCode} onChange={this.handleChange} placeholder='MO Code' />
                <input type='submit' value='Create New Design' />    
            </form>
        )
    }
}

export default DesignForm