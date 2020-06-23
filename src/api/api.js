import axios from "axios";


const instance = axios.create({
    withCredentials: false,
    baseURL: 'http://emphasoft-test-assignment.herokuapp.com/'
});


export const authAPI = {
    login(username, password){
        return instance.post('api-token-auth/', {username, password}).then(res => res.data).catch(error => error.request);
    }
}

export const usersAPI = {
    get(token){
        return instance.get("api/v1/users/", {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization' : 'Bearer ' + token
            }
        }).then(res => res.data).catch(error => error.request);
    }
}