import { jwtDecode } from "jwt-decode";

class JwtService {

    static getTokenUsername(token) {
        console.log(jwtDecode(token));
    }

    static getTokenRole(token) {
        return jwtDecode(token).role;
    }

}

export default JwtService;