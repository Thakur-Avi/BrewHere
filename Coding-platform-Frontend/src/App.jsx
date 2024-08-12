import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './shared/components/Header';
import Handle from './components/HandleAPI';

function App() {

  return (
    <>
      <BrowserRouter>
        <Handle />
        <Header/>
      </BrowserRouter>

    </>
  );
}

export default App;

