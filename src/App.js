import './App.css';


import Header from './components/Header';
import PageContent from './components/PageContent';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App flex flex-col w-screen h-screen" >
      <BrowserRouter>
      <Header/>
      <PageContent/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
