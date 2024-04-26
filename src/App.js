import './App.css';
import React from 'react';
class App extends React.Component {

  state = {
    Person:{fullName:"louay",
    bio:"gmc", 
     profession:"student"},
     shows:false,
     timer:0
  }


  render() {
    const handleClick=()=>{
 
if(this.state.shows===true){
  this.setState({shows:false})
}
else{
  this.setState({shows:true})
}
console.log(this.state.shows)
    }

    

    return <>
  {
    this.state.shows && <> <h2>{this.state.Person.fullName}</h2>
    <h2>{this.state.Person.bio}</h2></>
  }

      <button onClick={()=>handleClick()}> ClickMe</button>
<h1>{this.state.timer}</h1>
    </>
    
  }

}
export default App;