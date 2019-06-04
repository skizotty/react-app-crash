import React from 'react'
import { Link } from 'react-router-dom'

export default function header() {
    return (
        <header style={headStyle}>
            <h1>Todo List</h1>
            <Link style={linkStyle} to='/'>Home</Link> | <Link style={linkStyle} to='/about'>About</Link>
        </header>
    )
}

const headStyle = {
    background:'#333',
    color:'white',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color:'white',
    textDecoration:'none'
}