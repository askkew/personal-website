import React from 'react'
import { Refreshcontainer, Navmenucontainer, Navmenuitem, Socialicon } from "./navmenustyles.jsx"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import RefreshIcon from '@mui/icons-material/Refresh';
import { darkText } from '../utils/index.jsx';
import styled from '@emotion/styled';

const Socialscontainer = styled('div')({
  '@media (max-width: 768px)': {
    display: 'none',
  },
})

export const Socials = () => {
  return (
    <>
      <Socialicon title="Github" href="https://github.com/askkew">
        <GitHubIcon
        style={{
          fontSize: '1.8rem',
          '@media (max-width: 768px)': {
            fontSize: '5rem',
          },
        }}
        />
      </Socialicon>
      <Socialicon title="Linkedin" href="https://www.linkedin.com/in/luke-overbey-37b342235/">
        <LinkedInIcon style={{fontSize: '1.8rem'}} />
      </Socialicon>
      <Socialicon title="Resume" href="https://docs.google.com/document/d/e/2PACX-1vQpwQ8amWNrQpnltl0WjlXrlbzYVa4AUuUDClur4gdqZpyD6g1nbTIvy_1ezU5wmdr-QPP_9yYF8WT-/pub">
        <AssignmentIndIcon style={{fontSize: '1.8rem'}} />
      </Socialicon>
    </>
  )
}

export const Refreshcomponent = () => {
  const refreshPage = () => {
    window.location.reload();
  }

  return (
    <>
      <RefreshIcon onClick={refreshPage} style={{fontSize: '1.8rem', color: 'white'}} />
    </>
  )
}

const Navmenu = () => {

  return (
    <Navmenucontainer>
      <li style={{listStyle: 'none'}} data-menuanchor="firstPage" class="active"><Navmenuitem href="#firstPage">about</Navmenuitem></li>
      <li style={{listStyle: 'none'}} data-menuanchor="secondPage"><Navmenuitem href="#secondPage">work</Navmenuitem></li>
      <li style={{listStyle: 'none'}} data-menuanchor="fourthPage"><Navmenuitem href="#fourthPage">contact</Navmenuitem></li>
      <Socialscontainer>
        <Socials />
      </Socialscontainer>
    </Navmenucontainer>
  )
}

export default Navmenu