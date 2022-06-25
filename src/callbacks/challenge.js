const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; // XMLHttpRequest import
const API = 'https://api.escuelajs.co/api/v1'; //Roots API, URL

const fetchData = (urlApi, callback) => {
    let xhttp = new XMLHttpRequest(); // Instance of object
    xhttp.open('GET', urlApi, true); // Open connection
    xhttp.onreadystatechange = () => { // When the state changes
        if (xhttp.readyState === 4) { // If the state is 4, finished call
            if (xhttp.status === 200) { // If the status is 200, OK
                callback(null, JSON.parse(xhttp.responseText));
            }else{
                const error = new Error('Error ' + urlApi);
                return callback(error, null);
            }
        }
    }
    xhttp.send(); // Send request
};

fetchData(`${API}/products`, (error1, data1) => {
    if(error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`, (error2, data2) => {
        if(error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, (error3, data3) => {
            if(error3) return console.error(error3);
            console.log(data1[0].id, data1[0].title, data1[0].price);
            console.log(data2.id, data2.title, data2.price);
            console.log(data3.name);
        });
    });
})