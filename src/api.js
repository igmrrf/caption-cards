import axios from "axios";

export default axios.create({
	baseURL: "https://capcards-api.herokuapp.com/v1.0/api/"
});
