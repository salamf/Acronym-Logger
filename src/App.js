import { Routes, Route } from 'react-router-dom';

import LandingPage from "./Pages/LandingPage/LandingPage";
import AddAcronymPage from './Pages/AddAcronymPage/AddAcronymPage';


function App() {
  return (
    <Routes className='app'>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/new-acronym" element={<AddAcronymPage />} />
    </Routes>
  );
}

export default App;
