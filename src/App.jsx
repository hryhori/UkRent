import { Routes } from 'react-router-dom';
import s from './App.module.css';
import HeaderContainer from './components/Header/HeaderContainer';
import FooterContainer from './components/Footer/FooterContainer';

function App() {
  return (
    <div className={s.app}>
      <HeaderContainer/>

      <div>None</div>

      <FooterContainer/>
    </div>
  );
}

export default App;
