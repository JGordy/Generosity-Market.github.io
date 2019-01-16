// Boilerplate imports from create-react-app
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

// Redux and React-router
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/reducer';

// Components and Routes
import BaseLayout from './containers/BaseLayout/BaseLayout';
import Routes from './routes/Routes';

// creating the redux store with middleware
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk)
    )
);

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <BaseLayout>
      <Routes/>
    </BaseLayout>
  </BrowserRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();
