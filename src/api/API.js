import axios from "axios";
import Constants from "./Constants.js"

// axios
//     .get("http://192.168.43.208:8000/")
//     .then(response => console.log(response))
//     .catch(err => console.log(err));

export const test = () => {
    console.log("test called")
    return axios.get(Constants.BASE_URL)
        .then(response => {
            console.log(response)
            return response.data;
        })
        .catch(error => {
            console.error(error);
            return error;
        })
}

export const getDepartments = (college) => {
    console.log("getDepartments called")
    return axios.post(Constants.BASE_URL + "department", {
        college: college
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
            return error;
        })
}

export const getTimetable = (college, department, year) => {
    console.log("timtable getting");
    return axios.post(Constants.BASE_URL + "timetable_view_class", {
        "department": department,
        "college": college,
        "year": year
    })
        .then((res) => {
            console.log(res);
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
}
