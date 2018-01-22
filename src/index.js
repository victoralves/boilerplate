import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import './index.css'
import App from './components/App/App.js'
import registerServiceWorker from './registerServiceWorker'

ReactGA.initialize('UA-80844385-10')
const logPageView = () => {
    ReactGA.set({ page: window.location.pathname + window.location.search });
    ReactGA.pageview(window.location.pathname + window.location.search);
}

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
logPageView()
