import axios from "axios";
function authentication(token) {
    if(token) {
        axios.defaults.headers = {
            authorization: `${token}`
        }
    }
}

export default {
    authentication,
}