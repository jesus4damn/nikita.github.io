import {connect} from "react-redux";
import App from "./App";
import {setAuth} from "./redux/auth-reducer";


const MapStateToProps = (state) => {
    return{
        auth: state.authReducer.auth
    }
}





const AppContainer = connect(MapStateToProps,{setAuth})(App);


export default AppContainer;