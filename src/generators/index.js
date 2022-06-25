function* gen(){
    yield 1;
    yield 2;
    yield 3;
};

const g = gen();

console.log(g.next()); // .next() return an object with two parts.
console.log(g.next());
console.log(g.next());

function* iterate(array){
    for(let value of array){
        yield value;
    }
}

const it = iterate(['David', 'Omar', 'Ana', 'María', 'Juan']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);