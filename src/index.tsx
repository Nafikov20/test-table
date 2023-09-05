import { StrictMode } from 'react';

import ReactDOM from 'react-dom/client';

import { App } from './pages/app/app';

import './static/css/index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
