import React from 'react'
import { useState } from 'react';
import { TagItemContainer, LinkIconCustom, GithubIconCustom, HoverTextContainer, ProjectText, ProjectDesc, ProjectTag, TagsContainer, HoverContent, Textcontainer, DropdownContent, Projectcardcontainer, Projectimagewrapper, Bannertitlecontainer, Socialbuttoncontainer, Projectcardbanner, Projectcardimageconatiner, Projectcardbannertitle } from "./projectcardstyles.jsx"
import { BiLinkExternal } from 'react-icons/bi';
import { LuGithub } from 'react-icons/lu';
import styled from 'styled-components';
import { RevealComponent } from '../reveal/index.jsx';

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
  backdrop-filter: blur(5px);
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
        {project.link ? ( <a href={project.link} target="_blank"><LinkIconCustom name="launch"/></a> ) : <span>test</span>}
        {project.githublink ? ( <a href={project.githublink} target="_blank"><GithubIconCustom name="github"/></a> ) : null}
        </Socialbuttoncontainer>
        <Bannertitlecontainer>
          <Projectcardbannertitle>{project.title}</Projectcardbannertitle>
        </Bannertitlecontainer>
      </Projectcardbanner>
      <CardContainer style={{ backgroundColor: 'black' }}>
        <CardImage src={project.image} alt="Card Background" />
          <CardText>
            <HoverTextContainer>
              <RevealComponent>
              <div>
                <ProjectText>{project.title}</ProjectText>
                <ProjectDesc>{project.description}</ProjectDesc>
                <TagsContainer>
                {tempTags.map(tag => {
                  return (
                    <TagItemContainer>
                      <img src={tag.icon} style={{width: '1.75rem',}}/>
                      <ProjectTag style={{color: 'gainsboro'}}>{tag.name}</ProjectTag>
                    </TagItemContainer>
                  )
                })}
                </TagsContainer>
              </div>
              </RevealComponent>
            </HoverTextContainer>
          </CardText>
      </CardContainer>
    </Projectcardcontainer>
  )
}

export default Projectcard