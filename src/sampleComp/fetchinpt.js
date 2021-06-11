import React from 'react';
import ReactDOM from 'react-dom';



class Fetchinput extends React.Component {

    constructor(props){
        super(props);
        console.log(props);
    
    }

    componentWillMount() {
        console.log('Component WILL MOUNT! Child Comp')
     }
     componentDidMount() {
        console.log('Component DID MOUNT! Child Comp')
     }
     componentWillReceiveProps(newProps) {    
        console.log('Component WILL RECIEVE PROPS! Child Comp')
     }
     shouldComponentUpdate(newProps, newState) {
        console.log('update not child comp');
        return true;
     }
     componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE! Child Comp');
     }
     componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE! Child Comp')
     }
     componentWillUnmount() {
        console.log('Component WILL UNMOUNT! Child Comp')
     }


    render() {
      return <div>
                <p>{this.props.getFetchData}</p>
            </div>
    }
  }





  export default Fetchinput;