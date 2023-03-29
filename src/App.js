import React from 'react';

function RoundedTextBox(props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <input
        type="text"
        style={{
          borderRadius: '10px',
          height: '10px',
          padding: '10px',
          border: '1px solid gray',
        }}
        {...props}
      />
    </div>
  );
}

function Header(){
  const mystyle = {
    color: "green"
  };
  return(
    <div>
      <h1 style={mystyle}>HELLO</h1>
    </div>
  );
}

function App(){
  return (
    <div>
      <p>AI Detector</p>
      <RoundedTextBox placeholder="Insert text"/>
    </div>
  );
}

export default App;
