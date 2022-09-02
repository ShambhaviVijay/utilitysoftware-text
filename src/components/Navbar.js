import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar(props) {
        return (
                <>
                        <div className="container2">
                                <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
                                        <div className="container-fluid">


                                                <a className="navbar-brand mb-2 h1" >TEXT-utils!</a>



                                        </div>
                                </nav>

                                <nav className={`navbar bg-light-${props.mode === 'light' ? 'dark' : 'light'}`}>
                                        <div >
                                                <div className='linkdiv'>

                                                        <NavLink className="navelem" to="/">HOME</NavLink>
                                                        <NavLink className="navelem" to="/about">ABOUT</NavLink>
                                                </div>
                                                <span className=" mb-2 h3">{props.day}</span>

                                                <div className="form-check form-switch">
                                                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"></input>
                                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">MODE</label>
                                                </div>
                                        </div>
                                </nav>
                        </div>

                </>
        )
}
