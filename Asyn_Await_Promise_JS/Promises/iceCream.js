const stocks = {
  Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
  liquid: ["Water", "Ice"],
  holder: ["Cone", "Cup", "Stick"],
  toppings: ["Chocolate", "Peanuts"],
};
const shop_is_open = true;

const order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (shop_is_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Sorry our shop is Closed"));
    }
  });
};

order(2000, () => console.log(`${stocks.Fruits[3]} was selected`))
  .then(() => {
    return order(0, () => console.log("production has started"));
  })
  .then(() => {
    return order(2000, () => console.log("The Fruit has been chopped"));
  })
  .then(() => {
    return order(1000, () =>
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was Added`)
    );
  })
  .then(() => {
    return order(1000, () => console.log("The machine was started"));
  })
  .then(() => {
    return order(2000, () => console.log(`${stocks.holder[0]} was selected`));
  })
  .then(() => {
    return order(3000, () => console.log(`${stocks.toppings[1]} was Added`));
  })
  .then(() => {
    return order(2000, () => console.log("Serve Ice Cream"));
  })

  .catch(() => console.log("Customer left"))

  .finally(() => {
    console.log("Day ended, shop is Closed");
  });
