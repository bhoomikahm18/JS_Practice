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

const profiles = {
    'balaji': {
        fullname: 'Balaji KR',
        age: 35,
        married: true,
        hobbies: ['Defence', 'Finance', 'Foreign Affairs']
    },
    'seema': {
        fullname: 'Seema H',
        age: 30,
        married: true,
        hobbies: ['Cooking', 'Painting', 'Art & Craft']
    },
    'kishan': {
        fullname: 'Kishan KB',
        age: 3,
        married: false,
        hobbies: ['football', 'video games']
    },
    'rajeev': {
        fullname: 'Rajeevalochana KV',
        age: 70,
        married: true,
        hobbies: ['Watching TV']
    }
}

/*Requirements:
-> Display keys of all profiles after 2 seconds.
-> Display profile of 'kishan' after 3 sec(from one).
-> Display kishan's age after 2 sec (from two).
-> Display Kishan's Hobbies after 4sec (from three).
*/

function goToHell(pros) {
    setTimeout((objs) => {
        let keys = Object.keys(objs);
        console.log(keys);

        setTimeout((keys, objs) => {
            console.log(objs[keys]);

            setTimeout((sub) => {
                console.log(`Age of Kishan is: ${sub.age}`);

                setTimeout((sub) => {
                    console.log(`Hobbies of kishan are: ${sub.hobbies}`);
                }, 4000, sub);
            }, 2000, objs[`kishan`]);
        }, 3000, 'kishan', objs);
    }, 2000, pros);
}

goToHell(profiles);

//Promises in JS
/*-> Promises in JS are used to handle Asynchronous Operations.
-> A Promises is an object that keep track about whether a certain event has happened already or not. 
It also determines what will happen afetr the event.
-> Promises has three stages: Pending, Completed & Rejected.
*/

const bringChocolates = function () {
    let didIBringTheChocolates = false; //stage-1

    // console.log("Getting ready to go market");
    // console.log("Booking a cab to the store");
    // console.log("Selecting the chocolate");
    // console.log("Making the payment");

    didIBringTheChocolates == false; //stage-2

    if (didIBringTheChocolates == true) {
        console.log(`Kishan says: Thank you appa!!`);
    }
    else {
        console.log(`Kishan is Crying: I hate you!!`);
    }
}

bringChocolates();

//True & false
const bringChocolates1 = function () {
    let didIBringTheChocolates = false; //stage-1

    setTimeout(() => { console.log("Getting ready to go market") }, 2000);
    setTimeout(() => { console.log("Booking a cab to the store") }, 4000);
    setTimeout(() => { console.log("Selecting the chocolate") }, 6000);
    setTimeout(() => { console.log("Making the payment") }, 8000);

    setTimeout(() => { didIBringTheChocolates = true; }, 12000);

    didIBringTheChocolates == true; //stage-2

    if (didIBringTheChocolates == true) {
        console.log(`Kishan says: Thank you appa!!`);
    }
    else {
        console.log(`Kishan is Crying: I hate you!!`);
    }
}

bringChocolates1();

//Handling Promises
/*-> Promises have a structured way to handle different conditions.
-> Plain if/else conditions does not give us the ability to handle things in a structured way.
-> If pomises carefully executed: resolve() method is executed.
-> if promises have failed in executing: reject() method will be executed.

-> To create a promises we write:
let anypromise = new Promise(resolve, reject);

-> To execute a promises we write;
anypromise.then(resolve-fun).catch(reject-fun);
*/

const tryToBringChocolates = function (resolve, reject) {

    let didIBringTheChocolates = false; //stage-1

    setTimeout(() => { console.log("Getting ready to go market") }, 2000);
    setTimeout(() => { console.log("Booking a cab to the store") }, 4000);
    setTimeout(() => { console.log("Selecting the chocolate") }, 6000);
    setTimeout(() => { console.log("Making the payment") }, 8000);

    setTimeout(() => {
        didIBringTheChocolates = true;

        if (didIBringTheChocolates == true) {
            resolve();
        } else {
            reject();
        }
    }, 12000);

    didIBringTheChocolates == true; //stage-2

    if (didIBringTheChocolates == true) {
        console.log(`Kishan says: Thank you appa!!`);
    }
    else {
        console.log(`Kishan is Crying: I hate you!!`);
    }
}

function eatTheChocolates() {
    console.log(`Kishan says: Thank you appa!!`);
}
function cryInACorner() {
    console.log(`Kishan is crying: I hate you!!`);
}

let iPromisesToBringChocolates = new Promise(tryToBringChocolates);

iPromisesToBringChocolates.then(eatTheChocolates).catch(cryInACorner);