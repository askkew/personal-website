import React from 'react'
import { Contactcardcontainer, Customtextfield, StyledFormControl, StyledButton } from "./contactcardstyles.jsx"
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';
import { lightText } from '../utils/index.jsx';

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': 'rgba(51, 51, 51, 0.85)',
            '--TextField-brandBorderHoverColor': '#B2BAC2',
            '--TextField-brandBorderFocusedColor': '#6F7E8C',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            '&:before, &:after': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    },
  });

const Contactcard = () => {
  const outerTheme = useTheme();
  return (
    <Contactcardcontainer>
      <StyledFormControl>
        <h3 style={{fontSize: '3em', margin: 0, color: lightText}}>Contact me!</h3>
        <ThemeProvider theme={customTheme(outerTheme)}>
          <Customtextfield variant="filled" id="mui-theme-provider-filled-input" label="Name" />
          <Customtextfield variant="filled" id="mui-theme-provider-filled-input" label="Email" />
          <Customtextfield
            variant="filled"
            id="filled-multiline-static"
            label="Message"
            multiline
            rows={7}
            style={{width: '70%', backgroundColor: 'gainsboro'}}
          />
          <StyledButton>Send</StyledButton>
        </ThemeProvider>
      </StyledFormControl>
    </Contactcardcontainer>
  )
}

export default Contactcard