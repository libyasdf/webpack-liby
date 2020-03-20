import React, { useState, useCallback } from 'react';
import ReactDOM from "react-dom";

function MeasureExample() {
  const [height, setHeight] = useState(0);

  const measuredRef = useCallback(node => {
     if (node !== null) {
       setHeight(node.getBoundingClientRect().height);
     }
   }, []);

  return (
    <React.Fragment>
      <h1 ref={measuredRef}>liby</h1>
      <p>height:{Math.round(height)}</p>
    </React.Fragment>
  );
}

export default MeasureExample;
