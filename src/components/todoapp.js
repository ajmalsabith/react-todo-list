import React, { Component } from 'react';
import './todoapp.css'

class Todoapp extends Component {
  state = {
    textlist: [],
    value: '',
    message:''
  };
  

  add = (event) => {
    event.preventDefault();
    const { value } = this.state;
    

    if(value){
      this.setState({
        textlist: [...this.state.textlist, value],
        value: '',
        message:this.setState.message=''
      });
    } else {
     this.setState({
      message:this.setState.message='please fill '
     })
    
    }
    
  }
  delete=(ind)=>{
   
      console.log(ind);  
      
      const allitmes= this.state.textlist
      allitmes.splice(ind,1)
      this.setState({
        textlist:allitmes
      })
  }

  change = (event) => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div className='todoapp'>
        <h1>Todo App</h1>
        <form onSubmit={this.add}>
          <input type='text' value={value} placeholder='enter items' onChange={this.change} /><br/>
          <span className='span'>{this.state.message}</span>
        </form>

        <hr />

        
        
        <h1>List</h1>
        <hr/>
        {this.state.textlist.map((val, ind) => (
          <ul key={ind+1}>
            <li>
              {ind+1} -  {val}
              <button onClick={()=>this.delete(ind)} className='butt btn btn-dark'>X</button>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Todoapp;
