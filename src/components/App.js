
import React from "react";
import './../styles/App.css';

const App = () => {
  const [text, setText] = React.useState('');

  return (
    <div>
        {/* Do not remove the main div */}
       <label>Enter your name:</label>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        {text && <h1>Hello {text}!</h1>}
    </div>
  )
}

export default App
