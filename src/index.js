import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';
import { Provider } from 'react-redux';

import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

class RootComponent extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
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
