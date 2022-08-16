import React from "react";
import ReactDom from "react-dom";
import Jokes from "./component/Jokes"

const App = () =>{
  return(
    <>
    <Jokes 
      quotes = "If you want to achieve greatness stop asking for permission. ~Anonymous"
      punchline = ""
    />
    <Jokes 
      quotes = "To live a creative life, we must lose our fear of being wrong. ~Anonymous"
      punchline = ""
    />
    <Jokes 
      quotes = "If you are not willing to risk the usual you will have to settle for the ordinary. ~Jim Rohn"
      punchline = ""
    />
    <Jokes 
      quotes = "Trust because you are willing to accept the risk, not because it's safe or certain. ~Anonymous"
      punchline = ""
    />
    <Jokes 
    quotes = "Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success. ~Swami Vivekananda"
      punchline = ""
    />
    </>
  )
}

ReactDom.render(<App />, document.getElementById('root'))
