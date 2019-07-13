import React from 'react'
import {NavLink} from 'react-router-dom'
import './Menu.css'
function Menu() {
    // const activeStyle ={
    //     color: 'green',
    //     fontSize: '2rem'
    // }

    //activeClassName -> class를 설정 , activeStyle -> style을 설정 
    return (
        <div>
            <ul>
                <li><NavLink exact to="/" className="menu" activeClassName='active'>Home</NavLink></li>
                <li><NavLink exact to="/about" className="menu" activeClassName='active'>About</NavLink></li>
                <li><NavLink to="/about/foo" className="menu" activeClassName='active'>About Foo</NavLink></li>
                <li><NavLink to="/posts" className="menu" activeClassName='active'>Posts</NavLink></li>
            </ul>
            <hr/>
        </div>
    )
}

export default Menu
