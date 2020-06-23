import React from 'react';
import style from './Users.module.css';





class Users extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.token);
    }

    render() {
        return (<div>
                    <h1 className={style.users_header}>Users</h1>
                </div>);
    }
}


export default Users;