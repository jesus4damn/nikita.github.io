import {connect} from "react-redux";
import Authorization from "./Authorization";
import {auth} from "../../redux/auth-reducer";









const AuthorizationContainer = connect(null, {auth})(Authorization);


export default AuthorizationContainer;