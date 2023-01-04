import React from 'react'
import propTypes from 'prop-types'

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">{props.aboutText}</a>
            </li>
            </ul>

            <div className={`form-check mx-2 form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Enable Green Mode</label>
                <input className="form-check-input shadow-none" onClick={() => {props.toggleMode("success")}}  type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            </div>

            <div className={`form-check mx-2 form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Enable Blue Mode</label>
                <input className="form-check-input shadow-none" onClick={() => {props.toggleMode("primary")}} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            </div>
            <div className="flex mx-3 bg-primary" onClick={() => {props.toggleMode("primary")}} style={{height: '30px', width: '30px'}}>

            </div>

            <div className={`form-check mx-2 form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Enable Red Mode</label>
                <input className="form-check-input shadow-none" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            </div>

        </div>
        </div>
    </nav>
  )
}

export default Navbar

// PropTypes is used to verify that props coming are of given data type.
Navbar.propTypes = {
    title: propTypes.string.isRequired,     // .isRequired is used to fill it and don't leave empty.
    aboutText: propTypes.string.isRequired,
}


// Default props is used when you forgot to pass props to component.
Navbar.defaultProps = {
    title: "Enter Title here",
    aboutText: "Enter About here",
}
