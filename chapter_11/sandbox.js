// Dates and times

// Date constructor
const now = new Date();

// console.log(now);
// console.log(typeof now);

// // year, months, day, times
// console.log('getfullyear: ', now.getFullYear());
// console.log('getMonth: ', now.getMonth());
// console.log('getDate: ', now.getDate());
// console.log('getDay: ', now.getDay());
// console.log('getHours: ', now.getHours());
// console.log('getMinutes: ', now.getMinutes());
// console.log('getSeconds: ', now.getSeconds());

// // timesptamps - gives the number of milliseconds from 12 AM, Jan 1st,1970
// console.log('timestamp: ', now.getTime());

// // date strings
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());

// DATE FNS
// console.log(dateFns.isToday(now));

// formating options
console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMMM'));
console.log(dateFns.format(now, 'MMM'));
console.log(dateFns.format(now, 'dddd'));
console.log(dateFns.format(now, 'Do'));
console.log(dateFns.format(now, 'dddd, Do, MMMM, YYYY'));
console.log(dateFns.format(now, 'dddd Do MMMM YYYY'));

// comparing dates

const before = new Date('February 1 2019 12:00:00');
console.log(dateFns.distanceInWords(now, before, { addSuffix: true }));
