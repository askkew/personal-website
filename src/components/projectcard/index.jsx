import React from 'react'
import { useState } from 'react';
import { HoverTextContainer, ProjectText, ProjectDesc, ProjectTag, TagsContainer, HoverContent, Textcontainer, DropdownContent, Projectcardcontainer, Projectimagewrapper, Bannertitlecontainer, Socialbuttoncontainer, Projectcardbanner, Projectcardimageconatiner, Projectcardbannertitle } from "./projectcardstyles.jsx"
import { BiLinkExternal } from 'react-icons/bi';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';
import { FaInfo } from 'react-icons/fa';
import { LuGithub } from 'react-icons/lu';
import styled from 'styled-components';

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s;
`;

const CardText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-weight: bold;

  ${CardContainer}:hover & {
    opacity: 1;
  };
  ${CardContainer}:active & {
    opacity: 1;
  };
`;

const Projectcard = ({project}) => {

  const tempTags = project.tags
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
      <CardContainer>
        <CardImage src={project.image} alt="Card Background" />
        <CardText>
          <HoverTextContainer>
            <ProjectText>{project.title}</ProjectText>
            <ProjectDesc>{project.description}</ProjectDesc>
            <TagsContainer>
            {tempTags.map(tag => {
              return (
                <ProjectTag style={{color: `${tag.color}`}}>{tag.name}</ProjectTag>
              )
            })}
            </TagsContainer>
          </HoverTextContainer>
        </CardText>
      </CardContainer>
    </Projectcardcontainer>
  )
}

export default Projectcard