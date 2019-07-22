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

export const getTimetable = (college, department, year, division = "A") => {
    console.log("timtable getting");
    return axios.post(Constants.BASE_URL + "timetable_view_class", {
        params: {
            department: department,
            year: year,
            division: division
        },
        college: college
    })
        .then((res) => {
            // console.log(res);
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
}
export const getFacultyInfo = (college, department, year) => {
    console.log("getting faculty info");
    return axios.post(Constants.BASE_URL + "faculty_info", {
        params: {
            department: department,
            year: year,
        },
        college: college
    })
        .then((res) => {
            // console.log(res);
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
}

export const addTimetable = (request, division = "A", college) => {
    console.log("timtable getting");
    return axios.post(Constants.BASE_URL + "timetable_enter", {
        params: {
            division: division,
            ...request
        },
        college: college
    })
        .then((res) => {
            // console.log(res);
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
}
