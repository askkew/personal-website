import React from 'react'
import { Navmenucontainer, Navmenuitem, Socialicon } from "./navmenustyles.jsx"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { darkText } from '../utils/index.jsx';

const Navmenu = () => {

  return (
    <Navmenucontainer>
      <li style={{listStyle: 'none'}} data-menuanchor="firstPage" class="active"><Navmenuitem href="#firstPage">about</Navmenuitem></li>
      <li style={{listStyle: 'none'}} data-menuanchor="secondPage"><Navmenuitem href="#secondPage">work</Navmenuitem></li>
      <li style={{listStyle: 'none'}} data-menuanchor="thirdPage"><Navmenuitem href="#thirdPage">contact</Navmenuitem></li>
      <Socialicon href="https://github.com/askkew">
        <GitHubIcon style={{fontSize: '1.8rem'}} />
      </Socialicon>
      <Socialicon href="https://www.linkedin.com/in/luke-overbey-37b342235/">
        <LinkedInIcon style={{fontSize: '1.8rem'}} />
      </Socialicon>
    </Navmenucontainer>
  )
}

export default Navmenu