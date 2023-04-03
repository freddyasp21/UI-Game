import React from "react";
import Sidebar from "./components/Sidebar";
import Header from './components/Header'

function App() {
  return (
    <div className="bg-[#141414] min-h-screen">
      <Sidebar />
      <Header/>
    </div>
  );
}

export default App;
