import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';
import { Provider } from 'react-redux';

import logo from './logo.svg';

import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

class RootComponent extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Simple React Todo List</h2>
                </div>
                <div className="App-intro">
                    <div className="row"></div>
                    <Provider store={store}>
                        <App />
                    </Provider>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<RootComponent />, document.getElementById('root'));

if (module.hot) {
    module.hot.accept('./App', () => {
        ReactDOM.render(<RootComponent />, document.getElementById('root'));
    })
}

registerServiceWorker();
