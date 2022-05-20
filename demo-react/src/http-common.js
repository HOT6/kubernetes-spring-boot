import axios from "axios";

export default axios.create({
    baseURL: 'http://a2db1b87113cb42d7a0660bde6aa047b-137018002.ap-northeast-2.elb.amazonaws.com:8080/api/v1',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
    }
});