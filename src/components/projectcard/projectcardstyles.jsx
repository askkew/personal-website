import styled from "@emotion/styled";
import { darkText, lightText } from "../utils";

export const Projectcardcontainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'top',
  alignItems: 'center',
  width: 'clamp(250px, 75vw, 1000px)',
  height: 'clamp(175px, 65vh, 700px)',
  border: '8px solid #eaeaea',
  '@media (max-width: 768px)': {
    height: 'clamp(175px, 65vh, 300px)',
  },
})

export const Projectcardbanner = styled('div')({
  backgroundColor: '#eaeaea',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr auto 1fr',
  alignItems: 'center',
  '@media (max-width: 568px)': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export const Projectcardimageconatiner = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
})

export const Projectimagewrapper = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
});

export const Socialbuttoncontainer = styled('div')({
  justifySelf: 'start',
  display: 'flex',
  gap: '0.25em',
})

export const Projectcardbannertitle = styled('h1')({
  fontSize: '1.2rem',
  color: lightText,
  textAlign: 'center',
  margin: 0,
})

export const Bannertitlecontainer = styled('div')({
  textAlign: 'center',
})

export const HoverTextContainer = styled('div')({
  width: '60%',
})

export const ProjectText = styled('h1')({
  fontSize: '2rem',
})

export const ProjectDesc = styled('h1')({
  fontSize: '1.2rem',
})

export const ProjectTag = styled('h1')({
  fontSize: '1.2rem',
})

export const TagsContainer = styled('div')({
  // backgroundColor: 'rgba(92, 92, 92)',
  // display: 'inline-block',
  // padding: 10,
})