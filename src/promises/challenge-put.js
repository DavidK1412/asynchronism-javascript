import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

const changeData = (urlAPI, data) => {
    const response = fetch(urlAPI, {
        method: "PUT",
        mode: "cors",
        credentials : 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });

    return response;
};

const data = {
    "title": "Stickers",
    "price": 100011,
    "description": "More stickers for your laptop!!",
};

changeData(`${API}/products/202`, data)
    .then(response => console.log(response.json()))
    .then(data => console.log(data))
    .catch(error => console.error(error));