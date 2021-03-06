import React, { Component } from 'react';
import './App.css';
import ReadBank from './ReadBank';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: '',
      drizzleState: ''
    }
  }

  componentDidMount(){
    const { drizzle } = this.props;
    this.unsubscribe = drizzle.store.subscribe(() => {

      // every time the store updates, grab the state from drizzle
      const drizzleState = drizzle.store.getState();
  
      // check to see if it's ready, if so, update local component state
      if (drizzleState.drizzleStatus.initialized) {
        this.setState({ loading: false, drizzleState });
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  render() {
        if (this.state.loading) return "Loading Drizzle...";
        return <div className="App">
                  Drizzle is ready
                  <ReadBank 
                    drizzle={this.props}
                    drizzleState={this.state.drizzleState}  
                  />
               </div>;
  }
}

export default App;
