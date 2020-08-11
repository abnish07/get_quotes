import React from 'react'

const Button = (props)=>(
    <>
        <button onClick={props.click}>{props.label}</button>
    </>
)

const Child = props =>(
<div>Value is {props.value}</div>
    )

export default class ChildToParent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count: 0
        }
    }
    handleReduce=()=>{
        this.setState(prev=>({
            count: prev.count-1
        }))
    }
    handleAdd=()=>{
        this.setState(prev=>({
            count: prev.count+1
        }))
    }
    render(){
        return(
            <div>
                {/* <div> Child to Parent Value is{this.state.count}</div> */}
                <Child value={this.state.count} />
                <Button label="Add" click={this.handleAdd} />
                <Button label="Reduce" click={this.handleReduce} />
            </div>
        )
    }
}