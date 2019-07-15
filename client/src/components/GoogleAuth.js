import React, { Component } from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';

export class GoogleAuth extends Component {
 // state ={isSignedIn: null};

  componentDidMount(){
    window.gapi.load('client:auth2', ()=>{
      window.gapi.client.init({
        clientId: '936425069352-967v07bp2eue1bbct53mfrqaub8brfhc.apps.googleusercontent.com',
        scope:'email'
      }).then(()=>{
        this.auth = window.gapi.auth2.getAuthInstance();
        //this.setState({isSignedIn: this.auth.isSignedIn.get()});
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = (isSignedIn) => {
    //this.setState({isSignedIn: this.auth.isSignedIn.get()});
    if(isSignedIn){
      this.props.signIn(this.auth.currentUser.get().getId());
    }else {
      this.props.signOut();
    }
  }

  OnSignInClick = () => {
    this.auth.signIn();
  }
  OnSignOutClick = () => {
    this.auth.signOut();
  }

renderAuthButton= () =>{
  if(this.props.isSignedIn === null){
    return <div>loading...</div>
  }else if (this.props.isSignedIn){
    return (
      <div>
      <button onClick={this.OnSignOutClick} className="ui red google button">
        <i className="google icon" />
        Sign Out
      </button>
      </div>
    );
  } else {
    return (
      <button onClick={this.OnSignInClick} className="ui red google button">
        <i className="google icon" />
        Sign In With Google
      </button>
    );
  }
}

  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    )
  }
}

const mapStateToProps = state => {
 return {isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId
        }
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);

