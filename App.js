// import './App.css';
import { Contact } from '../src/pages/Contact';
// import {Header} from './Header'
import { Home } from '../src/pages/Home';
// import { User } from './Stores/Actions/user';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, combineReducers } from 'redux';

import { Provider } from 'react-redux'

import { Header } from '../src/pages/Header';
import { List } from '../src/pages/List';
import userReducer from './Store/Reducer/user';

function App() {
const rootReducer=combineReducers({
  data:userReducer,
})
const store = createStore(rootReducer);
return(
  <div>
  <Provider store={store}>
    <BrowserRouter>
       <Routes>
           <Route path='/' element={<Header/>}>
           <Route  index element={<Home/>}/>
               <Route path='/list' element={<List/>}/>
               <Route path='/contact' element={<Contact/>}/>
           </Route>
       </Routes>
   </BrowserRouter>
   </Provider>
  </div>
)
}

export default App;