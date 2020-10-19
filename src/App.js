import React from 'react';
import './App.css';
import MainComponent from './components/mainComponent';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ConfigureStore from './redux/storeConfig';
const store = ConfigureStore();
function App() {
  return (
    <div className="App">
       <Provider store={store}>
        <BrowserRouter>
           <MainComponent/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
