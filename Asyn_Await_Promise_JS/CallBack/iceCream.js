const stocks = {
  Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
  liquid: ["Water", "Ice"],
  holder: ["Cone", "Cup", "Stick"],
  toppings: ["Chocolate", "Peanuts"],
};

const order = (index, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[index]} was selected`);
    call_production();
  }, 2000);
};
const production = () => {
  setTimeout(() => {
    console.log("production has started");
    setTimeout(() => {
      console.log("The Fruit has been chopped");
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was Added`);
        setTimeout(() => {
          console.log("The machine was started");
          setTimeout(() => {
            console.log(`${stocks.holder[0]} was selected`);
            setTimeout(() => {
              console.log(`${stocks.toppings[1]} was Added`);
              setTimeout(() => {
                console.log("Serve Ice Cream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
};
order(3, production);
