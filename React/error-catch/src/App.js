import React, {useEffect, useState} from 'react';
import './App.css';
import User from "./User";
import ErrorBoundary from "./ErrorBoundary";

const a = 1;

function App() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log(value);
  }, [])
  return (
      //<ErrorBoundary>
          <User />
      //</ErrorBoundary>
  );
}

export default App;
