import React from 'react';
import ReactDom from 'react-dom';

function Greeting(){
  return <div className='form'>
    <form>
      <input type='email' placeholder='email' /> <br />
      <input type='text' placeholder='user name' /> <br />
      <input type='password' placeholder='password' />
      <input type='checkbox' /><br />
      <button class='submit'>Submit Form</button>
    </form>
  </div>;
}

ReactDom.render(<Greeting />, document.getElementById('root'));