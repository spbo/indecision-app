// import './utils.js';

// import ('./utils');

// import subtrack, { add, square } from './utils.js';

// console.log('app.js is running');
// console.log(square(10));
// console.log(add(1, 2));
// console.log(subtrack(1, 2));


// // install => import => use
// import validator from 'validator';

// console.log(validator.isEmail('test@gmail.com'));

///////////////////////
// class OldSyntax {
//   constructor() {
//     this.name = 'Mike';
//     this.getGreeting = this.getGreeting.bind(this);
//   }
//   getGreeting() {
//     return `Hi my name is ${this.name}`;
//   }
// }
// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// class NewSyntax {
//   name = 'Jan';
//   getGreeting = () => {
//     return `Hi my name is ${this.name}`;
//   }
// }
// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());
///////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.querySelector('#app'));