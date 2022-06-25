import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

const postData = async (urlAPI, data) => {
    const response = await fetch(urlAPI, {
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

const data = {
    "title": "Stickers",
    "price": 230123,
    "description": "More stickers for your laptop!!",
    "categoryId": 5,
    "images": ["https://cdn.shopify.com/s/files/1/0537/9483/2552/products/Post_STICKERSFULLSTACKREACTSPECIALISTcopia_480x.jpg?v=1629388356"]
};

postData(`${API}/products`, data)
    .then(response => console.log(response.json()))
    .then(data => console.log(data))
    .catch(error => console.error(error));