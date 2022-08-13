import ReactDom from 'react-dom'
import './index.css'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'

function App(){
  return (
    <div className="container">
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("root"));