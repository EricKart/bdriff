//boilerplate react code
import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from "../NavBar";
import Explores from './Explores';

export default function Blogs() {
  return (
    <div className=" w-full h-full relative z-0 bg-black min-h-auto overflow-y-auto">
        <NavBar/>
        <Explores/>

    </div>
  );
}

