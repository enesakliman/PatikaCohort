import React, { useState } from "react";
import Buttons from "./Buttons";
import ClassesInfo from "./ClassesInfo";

function Content() {
  const [activeClass, setActiveClass] = useState("yoga");

  return (
    <>
      <Buttons activeClass={activeClass} setActiveClass={setActiveClass} />
      <ClassesInfo activeClass={activeClass} />
    </>
  );
}

export default Content;
