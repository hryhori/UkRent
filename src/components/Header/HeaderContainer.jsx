import Header from "./Header";
import React from "react";
import {connect} from "react-redux"

class HeaderContainer extends React.Component{
    render(){
        return <Header/>
    }
}

let mapStateToProps = (state) =>{
    return{
        UserWindowScreenWidth: state.HeaderPart.windowInnerWidth
    }
}

export default connect(mapStateToProps,{})(HeaderContainer)