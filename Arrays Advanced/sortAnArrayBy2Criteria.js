function sortAnArrayByCriteria(array){
let firstSort = array.sort((a, b) => a.localeCompare(b));
let secondSort = firstSort.sort((a, b) => a.length - b.length);
let finalRes = secondSort.map(x => console.log(x))
}
sortAnArrayByCriteria(['alpha', 'beta', 'gamma'])