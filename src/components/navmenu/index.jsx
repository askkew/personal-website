import React from 'react'
import { Navmenucontainer, Navmenuitem } from "./navmenustyles.jsx"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Navmenu = () => {

  return (
    <Navmenucontainer>
      <li style={{listStyle: 'none'}} data-menuanchor="firstPage" class="active"><Navmenuitem href="#firstPage">First section</Navmenuitem></li>
      <li style={{listStyle: 'none'}} data-menuanchor="secondPage"><Navmenuitem href="#secondPage">Second section</Navmenuitem></li>
      <li style={{listStyle: 'none'}} data-menuanchor="thirdPage"><Navmenuitem href="#thirdPage">Third section</Navmenuitem></li>
      <a style={{color: '#fff'}} href="https://github.com/askkew">
        <GitHubIcon />
      </a>
      <a style={{color: '#fff'}} href="https://www.linkedin.com/in/luke-overbey-37b342235/">
        <LinkedInIcon />
      </a>
    </Navmenucontainer>
  )
}

export default Navmenu