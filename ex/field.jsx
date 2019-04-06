import React, { Component } from 'react'

class Field extends Component {
    constructor(props){
        super(props)
        this.state = {value: props.initialValue}
        this.handleChange = this.handleChange.bind(this)/// permite que lá em baixo o onchange seja chamado, mesmo indiretamente
    }

    handleChange(event){
        this.setState({ value: event.target.value })
    }

    render(){
        return(
            <div>
                <label>{this.state.value}<br/></label>
                <input onChange={this.handleChange} value={this.state.value}/>
            </div>
        )
    }

}

export default Field
