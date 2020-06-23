import {connect} from "react-redux";
import Users from "./Users";
import {getUsers} from "../../redux/users-reducer";




const MapStateToProps = (state) => {
    return{
        token: state.authReducer.token
    }
}




const UsersContainer = connect(MapStateToProps, {getUsers})(Users);


export default UsersContainer;