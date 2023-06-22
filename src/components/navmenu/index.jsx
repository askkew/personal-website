import React from 'react'
import { Navmenucontainer } from "./navmenustyles.jsx"

const Navmenu = ({ scrollToSection }) => {

  return (
    <Navmenucontainer>
      <button onClick={() => scrollToSection(0)}>Section 1</button>
      <button onClick={() => scrollToSection(1)}>Section 2</button>
      <button onClick={() => scrollToSection(2)}>Section 3</button>
    </Navmenucontainer>
  )
}

export default Navmenu