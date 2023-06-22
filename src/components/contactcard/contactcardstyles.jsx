import styled from '@emotion/styled'
import { Button, FormControl, TextField } from '@mui/material'

export const Contactcardcontainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'clamp(250px, 75vw, 1000px)',
  height: 'clamp(175px, 65vh, 700px)',
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