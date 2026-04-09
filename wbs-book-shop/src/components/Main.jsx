import Shop from './Shop';
import Favourites from './Favourites';

const Main = ({ selectedOption }) => {
  return (
    <main>
      {selectedOption === 'Shop' ? <Shop /> : <Favourites />}
    </main>
  );
};

export default Main;