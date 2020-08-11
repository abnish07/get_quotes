import React from 'react'
import style from './Random.module.css'

const axios = require('axios').default;

export default class Random_quote extends React.Component{
    constructor(props){
        super(props)
        this.state={
            quotes: []
        }
    }

    handleClick=()=>{
        axios.get("https://programming-quotes-api.herokuapp.com/quotes/random").then(res=>

        this.setState({
            quotes: res.data
        })
        )
        // console.log(res.data))
    }

    render(){
        return(
            <div>
            <div className={style.btn}>
            <button type="submit" onClick={this.handleClick}>Get Random Quotes</button></div>
            <div>
                
                    <div className={style.quotes} >Quotes:-  {this.state.quotes.en}</div>
                    <br/>
                    <div className={style.author}>Author:-{this.state.quotes.author}</div>
            </div>
            </div>
        )
    }
}