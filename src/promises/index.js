const cows = 15;

const countCows = new Promise((resolve, reject) => {
    if (cows > 10) {
        resolve('We have more than 10 cows');
    } else {
        reject('There are less than 10 cows');
    }
});

countCows.then(result => {
    console.log(result);
}).catch((error) => {console.error(error)}).finally(() => {console.log("Finally")});