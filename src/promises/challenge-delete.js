import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

const deleteData = (urlAPI) => {
    const response = fetch(urlAPI, {
        method: "DELETE",
        mode: "cors",
        credentials : 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    return response;
};

deleteData(`${API}/products/202`)
    .then(response =>console.log(response.json()))
    .then(data => console.log(data))
    .catch(error => console.error(error));