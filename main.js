console.log("person 1: Shows Tickets");
console.log("person 2: Shows Tickets");

const promiseWifeBringTicket = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("my-ticket");
  }, 3000);
});
promiseWifeBringTicket.then((ticket) => {
  console.log(`Person 3: Shows ${ticket}`);
});
console.log("person 4: Shows Tickets");
console.log("person 5: Shows Tickets");
