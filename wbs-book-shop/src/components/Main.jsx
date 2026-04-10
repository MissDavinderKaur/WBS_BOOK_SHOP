import Shop from './Shop';
import Favourites from './Favourites';
import Home from './Home';

const Main = ({ selectedOption, setSelectedOption }) => {
  if (selectedOption === 'Shop') return <Shop />;
  if (selectedOption === 'Favourites') return <Favourites />;
  if (selectedOption === 'Home') return <Home setSelectedOption={setSelectedOption} />;
  return <Home />; // default
};

export default Main;