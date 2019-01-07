import React, {Component} from 'react';
import { Provider } from 'react-redux';
import Login from './screens/Login'
import store from './redux/store';

export default class App extends Component<Props> {
  render() {
    console.log("Hello");
    return (
        <Provider store={store}>
           <Login/>
        </Provider>
    );
  }
}