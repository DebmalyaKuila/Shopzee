import './App.css';

import PageContent from './components/PageContent';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App flex flex-col w-screen h-screen" >
      <BrowserRouter>
      <PageContent/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
