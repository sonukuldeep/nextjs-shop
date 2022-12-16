import React, { useState } from "react";
import ScrollContext from "../Components/ScrollContext";

const ScrollState = props => {
  const [scrollY, setScrollY] = useState(0);

  return (
    <ScrollContext.Provider value={{ scrollY, setScrollY }}>
      {props.children}
    </ScrollContext.Provider>
  );
};

export default ScrollState;