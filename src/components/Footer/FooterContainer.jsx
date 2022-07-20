import Footer from "./Footer";
import React from "react";
import { connect } from 'react-redux';

class FooterContainer extends React.Component{
    render(){
        return <Footer/>
    }
}

let mapStateToProps =(state) =>{
    return {UserWindowScreenWidth: state.HeaderPart.windowInnerWidth}
}

export default connect(mapStateToProps, {})(FooterContainer)