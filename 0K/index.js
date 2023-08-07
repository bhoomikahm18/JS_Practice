/*let balajiBath = function () {
    console.log('\nBalaji Woke Up');
    console.log('Balaji is Bathing');
    console.log('Balaji is Ready');
}
let kishanBath = function () {
    console.log('\nKishan Woke Up');
    console.log('Kishan is Bathing');
    console.log('Kishan is Ready');
}

kishanBath();
balajiBath();*/

//Mentos Zindagi

/*let balajiBath = function () {
    console.log('\nBalaji Woke Up');
    console.log('Balaji is Bathing');
    console.log('Balaji is Ready');
}
let kishanBath = function (signalHim) {
    setTimeout(() => { console.log('\nKishan Woke Up') }, 2000);
    setTimeout(() => { console.log('Kishan is Bathing') }, 3000);
    setTimeout(() => { console.log('Kishan is Ready') }, 5000);
}

kishanBath();
setTimeout(balajiBath, 7000);*/

//Using Callbacks(Ensuring Happening)
let balajiBath = function () {
    console.log('\nBalaji Woke Up');
    console.log('Balaji is Bathing');
    console.log('Balaji is Ready');
}
let kishanBath = function (signalHim) {
    setTimeout(() => { console.log('\nKishan Woke Up') }, 2000);
    setTimeout(() => { console.log('Kishan is Bathing') }, 3000);
    setTimeout(() => { console.log('Kishan is Ready') }, 5000);

}

kishanBath();
balajiBath();
// setTimeout(balajiBath, 7000);

//Why Callback Function
/*-> Javascript is an event driven language.
-> Instead of waiting for a response from a pending event, before moving on, JS will keep executing other events.
-> In the meantime js will keep a watch on previous pending events, and will execute the same at an appropriate time.

-> That is why: Callback function are a way to make sure certain code doesn't execute until other has already finished execution.
-> In Asyncronous Programing Language like Javascript: Callback function are absolute necessity.*/

