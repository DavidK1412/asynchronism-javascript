import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

const postData = async (urlApi, data) => {
    const response = await fetch(urlApi, {
        method: "POST",
        mode: "cors",
        credentials : 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
    
    return response;
};

const anotherFunction = async (urlApi, data) => {
    try{
        await postData(`${urlApi}/products`, data)
            .then( response => response.json())
            .then( data => console.log(data));
    }catch{
        console.error(error);
    }
};

const data = {
    "title": "Wilson Funko",
    "price": 849,
    "description": "Wilson Funko POP",
    "categoryId": 5,
    "images": ["https://es.aliexpress.com/item/4000270925782.html"]
};

anotherFunction(API, data);