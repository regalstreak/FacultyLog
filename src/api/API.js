import axios from "axios";
import Constants from "./Constants.js"

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

export const getCompleteTimetable = (college, request) => {
    console.log("timtable getting");
    return axios.post(Constants.BASE_URL + "timetable_view_class", {
        params: {
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
export const getCompleteFacultyTimetable = (college, request) => {
    console.log("timtable getting");
    return axios.post(Constants.BASE_URL + "timetable_view_faculty", {
        params: {
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

export const getPrincipalTimetable = (college, department, year, division = "A") => {
    console.log("principal timtable getting");
    return axios.post(Constants.BASE_URL + "full_class", {
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

export const getAllFacultyInfo = (college) => {
    console.log("getting all faculty info");
    return axios.post(Constants.BASE_URL + "all_faculty_info", {
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
    console.log("Adding timetable");
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

export const deleteTimetable = (college, srno) => {
    return axios.post(Constants.BASE_URL + "timetable_record_delete", {
        params: {
            srno: srno
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

export const printTimetableClass = (college, request) => {
    console.log('getting csv class');
    let paramsString = `?college=${college}&params[division]=${request.division}&params[year]=${request.year}&params[department]=${request.department}`
    return axios.get(Constants.BASE_URL + "print_time_table_class" + paramsString, {
    }).then(res => {
        return res;
    }).catch(err => {
        console.log(err)
    })
}

export const printTimetableFaculty = (college, request) => {
    console.log('getting csv faculty');
    let paramsString = `?college=${college}&params[sdrn]=${request.sdrn}`
    return axios.get(Constants.BASE_URL + "print_time_table_faculty" + paramsString, {
    }).then(res => {
        return res;
    }).catch(err => {
        console.log(err)
    })
}

export const printTimetableRoom = (college, request) => {
    console.log('getting csv faculty');
    let paramsString = `?college=${college}&params[room]=${request.room}`
    return axios.get(Constants.BASE_URL + "print_time_table_room" + paramsString, {
    }).then(res => {
        return res;
    }).catch(err => {
        console.log(err)
    })
}
