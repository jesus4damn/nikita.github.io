import React from 'react';
import style from './App.module.css';
import AuthorizationContainer from "./components/Authorization/AuthorizationContainer";
import UsersContainer from "./components/Users/UsersContainer";


class App extends React.Component {
    render(){
        if(!this.props.auth){
            return (
                <div className={style.background}>
                    <AuthorizationContainer />
                </div>
            );
        } else {
            return (
                <div className={style.background + " " + style.background2}>
                    <div className={style.btn_exit} onClick={() => this.props.setAuth("", false)}>Exit</div>
                    <UsersContainer />
                </div>
            )
        }
  }
}

export default App;