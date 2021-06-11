import React from 'react';
import ReactDOM from 'react-dom';
import Fetchinput from './fetchinpt'



class AddCart extends React.Component {

    constructor(){
        super();
        this.state = {
            getInputval:"sdfs",
            inpVal:""
        }

        this.handleChange = this.handleChange.bind(this);
        this.btnClck = this.btnClck.bind(this);
    }

    handleChange(e)
    {

        this.setState({inpVal: e.target.value})

    }
    btnClck(e)
    {
        this.setState({getInputval: this.state.inpVal})

    }



    componentWillMount() {
        console.log('Component WILL MOUNT!')
     }
     componentDidMount() {
        console.log('Component DID MOUNT!')
     }
     componentWillReceiveProps(newProps) {    
        console.log('Component WILL RECIEVE PROPS!')
     }
     shouldComponentUpdate(newProps, newState) {
        return true;
     }
     componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
     }
     componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
     }
     componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
     }

    render() {
      return <div>
                     <input type="text" value={this.state.inpVal} onChange= {this.handleChange} />
                     <button onClick ={this.btnClck}>clickMe</button>
                     <Fetchinput getFetchData={this.state.getInputval} />
            </div>;


    }
  }





  export default AddCart;