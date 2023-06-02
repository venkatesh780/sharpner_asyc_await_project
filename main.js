console.log("person 1: Shows Tickets");
console.log("person 2: Shows Tickets");

const preMovie = async () => {
  const promiseWifeBringTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ticket");
    }, 3000);
  });

  const getPopCorn = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("popcorn");
    }, 2000);
  });

  const getButter = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("buttor");
    }, 1000);
  });

  let ticket = await promiseWifeBringTicks;

  console.log(`wife: i have the ${ticket}`);
  console.log("husband: we should go in");
  console.log("wife: no i am hungry");

  let popcorn = await getPopCorn;

  console.log(`husband: i got some ${popcorn}`);
  console.log("husband: w should go in ");
  console.log("wife: I need butter on my popcorn");

  let butter = await getButter;

  console.log(`husband: i got some ${butter} on popcorn`);
  console.log("husband: anything else");
  console.log("wife: lets got we are getting late");
  console.log("husband: thank you for the remainder");
  return ticket;
};

preMovie().then((msg) => {
  console.log(msg);
});
console.log("person 4: Shows Tickets");
console.log("person 5: Shows Tickets");
