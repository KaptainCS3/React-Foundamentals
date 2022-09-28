const func1 = (callBack) => {
  console.log("function one called");
  console.log("please wait 3 seconds");
  setTimeout(() => {
    callBack();
  }, 3000);
};
const func2 = () => {
  console.log("function two called");
};
func1(func2);
