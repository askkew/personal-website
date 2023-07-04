import React from 'react'
import { useState } from 'react';
import { DropdownContent, Projectcardcontainer, Projectimagewrapper, Bannertitlecontainer, Socialbuttoncontainer, Projectcardbanner, Projectcardimageconatiner, Projectcardbannertitle } from "./projectcardstyles.jsx"
import { BiLinkExternal } from 'react-icons/bi';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';
import { FaInfo } from 'react-icons/fa';
import { LuGithub } from 'react-icons/lu';

const Projectcard = ({project}) => {
  return (
    <Projectcardcontainer>
      <Projectcardbanner>
        <Socialbuttoncontainer>
          <a href={project.link} target="_blank"><BiLinkExternal name="launch" style={{ fontSize: '1.2rem', color: '#eaeaea', borderRadius: '50%', backgroundColor: 'rgb(235,97,79)', padding: 3 }} /></a>
          <a><FaInfo name="info" style={{ fontSize: '1.2rem', color: '#eaeaea', borderRadius: '50%', backgroundColor: 'rgb(242,176,58)', padding: 3 }} /></a>
          <a href={project.githublink} target="_blank"><LuGithub name="github" style={{ fontSize: '1.2rem', color: '#eaeaea', borderRadius: '50%', backgroundColor: 'rgb(42,184,74)', padding: 3 }} /></a>
        </Socialbuttoncontainer>
        <Bannertitlecontainer>
          <Projectcardbannertitle>{project.title}</Projectcardbannertitle>
        </Bannertitlecontainer>
      </Projectcardbanner>
      <Projectcardimageconatiner>
        <Projectimagewrapper>
          <img src={project.image} alt={project.title} />
        </Projectimagewrapper>
      </Projectcardimageconatiner>
    </Projectcardcontainer>
  )
}

export default Projectcard
