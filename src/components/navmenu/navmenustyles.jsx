import styled from "@emotion/styled";

export const Navmenucontainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'fixed',
  top: 20,
  right: 0,
  zIndex: 100,
  gap: '2em',
  marginRight: '2em',
  marginLeft: '2em',
})

export const Navmenuitem = styled('a')({
  textDecoration: 'none',
  color: '#ffffff',
  fontFamily: 'sans-serif',
  fontWeight: 'bold',
  fontSize: '1.2rem',
  cursor: 'pointer',
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '40px',
  position: 'relative',
  display: 'inline-block',
  textDecoration: 'none',
  color: '#fff',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    width: '100%',
    height: '3px',
    backgroundColor: '#eaeaea',
    transform: 'scaleX(0)',
    transition: 'transform 0.25s',
  },
  '&::before': {
    top: '-3px',
    transformOrigin: 'left',
  },
  '&::after': {
    bottom: '-3px',
    transformOrigin: 'right',
  },
  '&:hover::before, &:hover::after, &.active::before, &.active::after': {
    transform: 'scaleX(1)',
  },
})