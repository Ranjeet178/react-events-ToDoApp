import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: ['A','B'],
      textvalue: ""
    };

    // method binding
    this.handleChanges=this.handleChanges.bind(this);
    this.handleClick=this.handleClick.bind(this); 
  }

handleChanges(e) {
  this.setState({textvalue: e.target.value});
}

handleClick(){
  this.state.name.push(this.state.textvalue);
  this.setState(this.state);
}

handleDelItem(i) {
      // for(var i=0;i<this.state.name.length;i++)
      // {
      //    if(this.state.name[i]==v)
      //    {
      //      delete this.state.name[i];
      //    }
      // }
      delete this.state.name[i];
      // again refresh the view
      this.setState(this.state);
}

  render() {
    return (
      <div>
        <input type="text" placeholder="write here..." onBlur={this.handleChanges} />
        <button onClick={this.handleClick} >Click me!</button>
        {this.state.name.map(
          (v,i)=>{
            return <div>
              <h2> {v} 
              <button onClick={this.handleDelItem.bind(this,i)}> Delete </button>
              </h2>
            </div>
          }
        )}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
