import React from "react";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && props.bio !=="" && <p>{props.bio}</p> }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <a>{props.linka}</a>
      <a>{props.linkb}</a>
    </div>
  );
}

export default About;
