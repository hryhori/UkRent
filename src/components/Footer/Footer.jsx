import s from "./Footer.module.css"
import Underline from '../common/Underline/Underline';
import { Gear, HouseDoor, Map, Search, Star } from "react-bootstrap-icons";

const Footer = (props) =>{
    return(
        <div className={s.footer_wrapper}>
            <Underline/>

            <div className={s.footer}>
                <div className={s.homepage}>
                    <HouseDoor size={40}/>
                </div>
                <div className={s.saved}>
                    <Star size={40}/>
                </div>
                <div className={s.search}>
                    <Search size={40}/>
                </div>
                <div className={s.map}>
                    <Map size={40}/>
                </div>
                <div className={s.settings}>
                    <Gear size={40}/>
                </div>
            </div>
        </div>
    )
}

export default Footer;