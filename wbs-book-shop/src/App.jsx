import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('Shop');

  return (
    <div>
      <Header setSelectedOption={setSelectedOption} />
      <Main selectedOption={selectedOption} />
      <Footer />
    </div>
  );
};

export default App;