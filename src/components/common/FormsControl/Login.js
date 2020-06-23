import React from "react";
import style from "./Login.module.css";

export const Input = ({input, meta, ...props}) => {
    const hasError =meta.error && meta.touched;
    return (
        <div className={style.input_container}>
            <div>
                <input {...input} {...props} className={(hasError ? style.input_error : "") + " " + style.input} />
            </div>
            {hasError && <div className={(hasError ? style.error_message : "")}>{meta.error}</div>}
        </div>
    )
}