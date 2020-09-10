import React from 'react';
import './App.css';
import User from "./User";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  const user = {
    id : 1,
    username: 'velopert',
  }
  return (
      <ErrorBoundary>
          <User />
      </ErrorBoundary>
  );
}

export default App;
