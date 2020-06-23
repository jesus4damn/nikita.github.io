import React from 'react';
import style from './Authorization.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/Login";
import {requiredField} from "../common/Utils/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit ={props.handleSubmit} className={style.login_form}>
            <span className={style.login_header}>
                Login
            </span>
            <Field type="text" autoComplete={"off"} validate={[requiredField]} name={"username"} placeholder="Username" component={Input} />
            <Field type="password" autoComplete={"off"} validate={[requiredField]} name={"password"} placeholder="Password" component={Input} />
            <button className={style.btn_enter}>Enter</button>
            {props.error && <div className={style.error_message_login}>
                {props.error}
            </div>}
        </form>
    );
}


const LoginReduxForm = reduxForm({form:"login"})(LoginForm)


const Authorization = (props) => {
    const onSubmit = (formData) => {
        props.auth(formData.username, formData.password);
    }
    return (<div className={style.container}>
                <LoginReduxForm onSubmit = {onSubmit}/>
            </div>);
}



export default Authorization;