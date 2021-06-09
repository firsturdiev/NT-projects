let api = fetch('https://api.github.com/repos/firsturdiev/NT-projects/contents');
let data = api.data;

console.log(data);