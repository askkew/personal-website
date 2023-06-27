import styled from '@emotion/styled'
import { Button, FormControl, TextField } from '@mui/material'
import { lightText } from '../utils/index.jsx';

export const Contactcardcontainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'clamp(250px, 75vw, 1000px)',
  height: 'clamp(250px, 65vh, 700px)',
  border: '8px solid #eaeaea',
  backgroundColor: '#eaeaea',
})

export const Customtextfield = styled(TextField)({
  width: '70%',
  backgroundColor: 'gainsboro',
})

export const StyledFormControl = styled('form')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1em',
  gap: '0.4em',
})

export const StyledButton = styled(Button)({
  width: '70%',
  borderBottom: '2px solid rgba(51, 51, 51, 0.85)',
  borderRadius: 0,
  backgroundColor: 'gainsboro',
  color: 'rgba(51, 51, 51, 0.85)',
  '&:hover': {
    borderBottom: '2px solid #B2BAC2',
  },
  '&:active': {
    borderBottom: '2px solid rgba(51, 51, 51, 0.85)',
  }
})

export const Contacttitle = styled('h1')({
  fontSize: '3em',
  margin: 0,
  color: lightText,
  '@media (max-width: 600px)': {
    fontSize: '2em',
  },
  '@media (max-width: 300px)': {
    fontSize: '1.5em',
  },
  textAlign: 'center',
  fontWeight: 700,
})