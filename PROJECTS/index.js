// for loops

// for (let i = 0; i < 5; i++) {
//     console.log('in loop:', i);
// }
// console.log('loop finished');

// const name = ['shaun', 'mario', 'luigi'];

// for (let i = 0; i < name.length; i++) {
//     // console.log(name[i]);
//     let html = `<div>${name[i]}</div>`;
//     console.log(html);
// }


// while loop
// const names = ['shaun', 'mario', 'luigi'];
// let i = 0;

// while (i < names.length) {
//     console.log(names[i]);
//     // console.log('in loop:', i);
//     i++;
// }

// do while loop
// let i = 5;

// do {
//     // console.log(names[i]);
//     console.log('value of i is:', i);
//     i++;
// } while (i < 5);

// if statement
const age = 25;
if (age > 20) {
    console.log('you are over 20 years old');
}

const ninjas = ['shawn', 'burna', 'eja', 'naza']

if (ninjas.length > 3) {
    console.log("that's a lot of ninjas");
}

const password = 'password1234';

if (password.length >= 12 && password.includes('@')) {
    console.log('that password might be strong!');
} else if (password.length >= 8 || password.includes('@') && password.length > 5) {
    console.log('that password is strong enough!');
} else {
    console.log('password is not strong enough');
}