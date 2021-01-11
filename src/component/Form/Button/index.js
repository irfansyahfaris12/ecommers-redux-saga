import React from 'react'
import './styles.scss'

const Button = ({ children, ...othetProps }) => {
    return (
        <button className="btn" {...othetProps}>
            {children}
        </button>
    )
}

export default Button
