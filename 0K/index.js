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
