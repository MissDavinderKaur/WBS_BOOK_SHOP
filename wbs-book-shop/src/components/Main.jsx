// Route component for page switching

import Shop from './Shop';
import Favourites from './Favourites';
import Home from './Home';
import Login from './Login';

const Main = ({ selectedOption, setSelectedOption }) => {
  if (selectedOption === 'Shop') return <Shop />;
  if (selectedOption === 'Favourites') return <Favourites />;
  if (selectedOption === 'Home') return <Home setSelectedOption={setSelectedOption} />;
  if (selectedOption === 'Login') return <Login setSelectedOption={setSelectedOption} />;
  return <Home setSelectedOption={setSelectedOption} />; // default
};

export default Main;