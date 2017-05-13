import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NotFound from './pages/NotFound'
import About from './pages/About'

function MenuComponent({activeMenuItem, changer}){
    const title = "MyApp";
    const items = ["Home","About","Login"]
    // var classname = ""//"active-menu-item"
    var f = (name) => <li onClick = { () => changer(name)} className={(name === activeMenuItem) ? "active-menu-item" : ""}> {name} </li>;

    return (

        <ul className="MenuContainer">
          <li>{ title.toUpperCase() }</li>
          { items.map(f) }
        </ul>

      )
}

function Digit({d}){
    if(d===0){
      return <div className="digit red">{d}</div>
    }
    else {
      return <div className="digit">{d}</div>
    }
}

function Counter({digits}){
  return(
    <div>
      {digits.map(x => <Digit d={x}/>)}
    </div>
  )
}

function Paragraph({parameters}){
  return (<div>
            <h1> {parameters.title} </h1>
            <p> {parameters.text} </p>
            <span><a href={parameters.link}> Read more... </a></span>
        </div>)
}

// function ParagraghCounter({paragraphs}){
//   return(
//     <div>
//       {paragraphs.map(x => <Paragraph title={x.title} text={x.text} link={x.link}/>)}
//     </div>
//   )
// }

function ParagraghCounter({paragraphs}){
  return(
    <div>
      {paragraphs.map(x => <Paragraph parameters = {x}/>)}
    </div>
  )
}


function App({counterNumber, paragraphs, doIncrement, activeMenuItem, changeActiveMenuItem}) {
  var counterDigits = Number(counterNumber).toString().split("");
    return (
      <div className="App">
      <MenuComponent activeMenuItem={activeMenuItem} changer = {changeActiveMenuItem}/>
      <div onClick={doIncrement} className="App-header">
        <Counter digits={counterDigits} />
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        { (activeMenuItem === 'Home')
          ? <ParagraghCounter paragraphs={paragraphs}/>
          : (activeMenuItem === 'About')
          ?<About />
          :<NotFound />

        }
        </div>
      </div>
    )
}

export default App;
