import React from "react";
// import Radium from "radium";
import stili from "./Person.module.css";

const person = props => {
  // const style = {
  //   "@media (min-widt: 500px)": {
  //     width: "450px"
  //   }
  // };

  return (
    <div className={stili.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} person!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
