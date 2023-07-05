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
  '@media (max-width: 768px)': {
    right: '50%',
    transform: 'translateX(50%)',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    margin: 0,
  },
  '@media (max-width: 368px)': {
    gap: '0.75em',
  },
})

export const Navmenuitem = styled('a')({
  textDecoration: 'none',
  color: '#ffffff',
  fontFamily: 'sans-serif',
  fontWeight: 'bold',
  fontSize: '1.8rem',
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
    height: '4px',
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

export const Socialicon = styled('a')({
  color: '#fff',
})

export const Refreshcontainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  position: 'fixed',
  top: 20,
  left: 0,
  zIndex: 100,
  marginRight: '2em',
  marginLeft: '2em',
})
