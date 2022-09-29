import './App.css';
import Header from './components/Header/Header';
import Activities from './components/Activities/Activities';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='app-main-div'>
      <Header></Header>
      <Activities></Activities>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
