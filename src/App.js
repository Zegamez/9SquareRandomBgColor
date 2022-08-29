import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './component/Square';
import Header from './component/Header';


function App() {

  
  function randomColor(){
    let math_color_code  = Math.floor(Math.random() *16777215).toString(16);
    let letter = "#"
    letter += math_color_code
  
    return letter
  }
  
  function changeColor (){
    const rgbElem = document.getElementsByClassName('squre_color');
    for(var i=0;i< rgbElem.length;i++){
      let color_code = randomColor();
      rgbElem[i].style.backgroundColor = color_code;
      rgbElem[i].innerHTML = "code:"+ color_code  +""
    }
  }
  
  
  
  //useEffect
  useEffect(() =>{
    
    changeColor();
    
  },[]);
  
  return (
    <div className="App">
    <Header />
    
     <Square />
    
     
     <button className="buttonChangeColor" onClick={changeColor}>Random Color</button>
    </div>
  );
}




export default App;
