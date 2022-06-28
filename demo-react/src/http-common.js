import axios from "axios";

export default axios.create({
    baseURL: 'http://a3ba4a26ed7b04494a79dee6154b3716-1143723803.ap-northeast-1.elb.amazonaws.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
    }
});