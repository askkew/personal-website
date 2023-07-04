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
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  '&:hover': {
    '& ~ ${DropdownContent}': {
      display: 'block',
    },
  },
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

export const DropdownContent = styled('div')({
  position: 'absolute',
  top: '100%',
  left: 0,
  width: '100%',
  backgroundColor: '#fff',
  padding: '10px',
  display: 'none',
  animation: 'slide-down 0.3s ease',
  // Animation keyframes
  '@keyframes slide-down': {
    '0%': {
      opacity: 0,
      transform: 'translateY(-10px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
});