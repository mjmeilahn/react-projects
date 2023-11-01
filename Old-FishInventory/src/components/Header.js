import React from 'react';

const Header = ({tagline}) => (
  // a function expression ( or variable function ) 
  // allows an implicit return without 
  // the need for "class extends" or a "render" method
  // ...then we destructure tagline from props.tagline
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>  
      Day
    </h1>
    <h3 className="tagline">
      <span>{ tagline }</span>
    </h3>
  </header>
);

export default Header;