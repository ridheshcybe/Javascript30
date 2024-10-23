const people = [{ name: 'ridhesh', age: 20 }, { name: 'jack', age: 19 }, { name: 'fortan', age: 22 }]
const comments = [
    { text: 'Love this!', id: 86286 },
    { text: 'super good', id: 4741 },
    { text: 'yes', id: 29402 },
    { text: 'nice', id: 50880 }
]

const isAdult = people.some(e => e.age >= 19)
const isEveryoneAdult = people.every(e => e.age >= 19);
const flat = [1, [2]].flat(2);

const findID = comments.find(e => e.id == 29402);
const findIndex = comments.findIndex(e => e.id == 29402);

console.log(flat);
console.table({ isAdult, isEveryoneAdult })
console.table({ findID, find: comments[findIndex] })