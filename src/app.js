import React from '../../../Library/Caches/typescript/2.9/root_modules/@types/react'
import ReactDOM from '../root_modules/@types/react-dom'
import './app.css'
import App from 'containers/App/App'
import makeRoutes from './routes'
const root = document.querySelector('#root');
const routes = makeRoutes()
ReactDOM.render(
  <App history={testMain}
    routes={routes} />,
  root);