import React from "react";
import Sidebar from "./components/Sidebar";
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <div className="bg-[#141414] min-h-screen">
      <Sidebar />
      <Header/>
      <Hero/>
    </div>
  );
}

export default App;
