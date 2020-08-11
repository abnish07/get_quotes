import React from 'react'

const Item = ({ value }) =><div>Value is {value}</div>

export default class ParentToChild extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }

    handleClick=()=>{
        this.setState({
            count: this.state.count+1
        })
    }

    handleReduce=()=>{
        this.setState({
            count: this.state.count-1
        })
    }

    render(){
        return(
            <div>
                <Item value = {this.state.count} />
                <button onClick={this.handleClick} >Add</button>
                <button onClick={this.handleReduce} >Reduce</button>
            </div>
        )
    }
}