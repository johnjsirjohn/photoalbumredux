import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import AlbumsListContainer from './components/AlbumsListContainer';

class App extends React.Component {
  render() {
    if (this.props.albums === null) {
      return 'Loading...';
    }
    return (
      <Provider store={store}>
        <div className='App'>
          <header className='App-header'>
            <h1 className='App-title'>Hello</h1>
          </header>
          <AlbumsListContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
