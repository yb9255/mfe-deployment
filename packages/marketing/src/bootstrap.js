import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory } from 'history';

// "mount" function to start up the app

const mount = (el, { onNavigate }) => {
  const history = createMemoryHistory();

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);
};

// If we are in development in isolation
// call mount immediately

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_marketing-dev-root');

  if (devRoot) {
    mount(devRoot, {});
  }
}

// We are running through container
// and we should export the mount function
export { mount };
