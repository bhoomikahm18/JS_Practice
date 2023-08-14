//Events and JSON
/* -> String: It is a representation of a information in character set.
Eg: "Hello world" //string
'name=Amar id=101 score=90' //String

let str = '{name: 'Amar', id: 101, score: 90}' //String JSON
*/

//JavaScript Object Notation
/*The above code will run but if we try to access values using dot operator it says undefined
*/
let str = '{name: Amar, id: 101, score: 90}';
console.log(str.id);

let obj = {
    name: 'Amar',
    id: 101,
    score: 90
}
console.log(obj.id);