import React, { useState } from "react";
import Counter from "./components/Count";

function App() {

  const [value, setValue] = useState("Input text")
  
  
    
  return (
    <div className="App">
      <Counter/>
      
    </div>
  );
}

export default App;
