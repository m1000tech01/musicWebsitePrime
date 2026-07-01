import React from 'react'
import { hydrate, render } from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store/store';

const store = configureStore();

const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
  hydrate(<App store={store}/>, rootElement)
} else {
  render(<App store={store}/>, rootElement)
}

registerServiceWorker()
