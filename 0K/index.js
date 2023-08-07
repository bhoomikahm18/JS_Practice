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

    setTimeout(signalHim, 7000);
}

kishanBath(balajiBath);