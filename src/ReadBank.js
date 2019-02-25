import React from 'react';

class ReadBank extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      amount: '',
      data: this.props.drizzle,
      variables: this.props.drizzleState
    }
  }

  componentWillMount(){
    console.log(this.state.data.variables)
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