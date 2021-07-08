import http from "../http-common";

class UserDataService {
    register(data){
        return http.post("/tutorials/register", data)
    }

    logIn(data){
        return http.post("/tutorials/logIn"), data
    }

}

export default new UserDataService();