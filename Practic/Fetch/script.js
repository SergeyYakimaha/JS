// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(data => data.json())
// .then(data => {
//     console.log(data);
// })
// .finally(() => {
// });

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(data => {
//     console.log(data);
//     return data.json();
// })
// .then(data => {
//     console.log(data);
// })
// .finally(() => {
// });

fetch('https://jsonplaceholder.typicode.com/posts')
.then(data => {
    console.log(data);
    return data.json();
})
.then(data => {
    console.log(data);
})
.finally(() => {
});