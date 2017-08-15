import React,{Component} from 'react';
import * as Redux from "react-redux";

class Home extends Component {
  constructor(props){
    super(props);

  }


  render(){
    return <div>Start Here...</div>

  }
}

export default Redux.connect()(Home);
