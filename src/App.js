import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from './Dashboard';
import UserPannel from './Userpannel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<DashBoard/>}></Route>
        <Route path="userpanel" element = {<UserPannel/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
