const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)?setTimeout(() => resolve('Async!'), 2000): reject(new Error("Error!"));
    })
}

const anotherFn = async () => {
    const something = await fnAsync().then(response => console.log(response)).catch(error => console.error(error))
    console.log('testing');
}

console.log('Before');
anotherFn();
console.log('After');