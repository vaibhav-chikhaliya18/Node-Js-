// variable,array,object,function,etc all can export by module
const array = [
  { id: 1, name: "Vaibhav" },
  { id: 2, name: "Akshar" },
  { id: 3, name: "Ronak" },
  { id: 4, name: "Manav" },
  { id: 5, name: "Kevin" },
  { id: 6, name: "Parth" },
  { id: 7, name: "Sagar" },
  { id: 8, name: "Dhruv" },
];
const object = {
    sum : (a,b) => {
        return a+b;
    }
}
const fun = () => {
    let a = 'hello',b = 'world';
    return `${a} ${b}\n`
}

module.exports = {
    array,object,fun
};