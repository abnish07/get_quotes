import React from 'react';
import './App.css';
import ParentToChild from './components/ParentToChild'
import ChildToParent from './components/ChildToParent'
import Random_quote from './components/Random_quote'
import ListOfQuotes from './components/ListOfQuotes'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      
      quotes: this.props.quotes
      
    }
  }

  handleClick=()=>{
    this.setState({
      quotes: this.props.quotes
    })
  }


  
  render(){
    
    return (
      <div className="App">
       <Random_quote />
       <ListOfQuotes quotes={this.props.currentQuotes} />
  
      </div>
    );
  }
}

export default App;
