import React from 'react'
import logo from '../../assets/img/logo.svg'
import './App.css'
import logger from 'redux-logger'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { populateApp } from '../../actions/actions.js'
import appReducer from '../../reducers/appReducer'

const store = createStore(appReducer, applyMiddleware(logger))
store.dispatch(populateApp())

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        </Provider>
    )
}

export default App;
