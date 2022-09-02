import React from 'react'

export default function Alert(props) {        // && it acts like if else.. if this then okay else execute code after the &&.... 
        return (
                props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>{props.alert.type} </strong>{props.alert.message} </div>
        )
}
