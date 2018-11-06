import React, { Component } from 'react'
import logo from '../../assets/img/logo_branco.svg'
import './App.sass'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Vamos começar? :)</p>
                </header>
            </div>
        )
    }
}

export default App
