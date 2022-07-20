import s from './App.module.css';
import HeaderContainer from './components/Header/HeaderContainer';
import FooterContainer from './components/Footer/FooterContainer';

function App() {
  let windowInnerHeight= window.innerHeight;
  return (
    <div className={s.app} style={{height: windowInnerHeight + 'px'}}>
      <HeaderContainer/>

      <div>None</div>

      <FooterContainer/>
    </div>
  );
}

export default App;
