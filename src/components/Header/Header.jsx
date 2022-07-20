import s from './Header.module.css';
import logo from "../../images/Logo.png";
import CompanyName from "../../images/CompanyName.png"
import {PersonCircle} from "react-bootstrap-icons"
import Underline from '../common/Underline/Underline';

const Header = (props) =>{
    return (
        <div className={s.header_wrapper}>
      <div className={s.header}>
        <div className={s.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={s.company_name}>
          <img src={CompanyName} alt="UkRent" />
        </div>
        <div className={s.user_info}>
          <div className={s.user_avatar}>
            <PersonCircle size={30} />
          </div>
          <div className={s.user_name}>Vasiliy Pupkin</div>
        </div>
      </div>

      <Underline/>
        </div>
    );
}

export default Header;