

// set alert function

const setAlert = (mcg, type ="danger") => {

    return `<p class="alert alert-${type} d-flex justify-content-between" data-bs-dismiss="alert">${mcg}<button class="btn-close"></button></p>`

}


// set localStroge data

const setLsData = (key, array) => {

    let data = [];

    if (localStorage.getItem(key)) {
        data = JSON.parse(localStorage.getItem(key))
    }
    data.push(array)

    localStorage.setItem(key, JSON.stringify(data))

}

// get localstorage data

const getLsData = (key) => {

    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key))
    } else {
        return false
    }
}   


// update ls data 

const updateLsData = (key, array) => {
    localStorage.setItem(key, JSON.stringify(array))
}