import React from 'react';

class ReadBank extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      amount: ''
    }
  }

  componentWillMount(){
    console.log(this.props);
  }

  render(){
    return(
      <div>
        ReadBank
      </div> 
    )
  }
}

export default ReadBank;