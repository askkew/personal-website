import React from 'react'
import { Contactcardcontainer, Contacttitle, Customtextfield, StyledFormControl, StyledButton } from "./contactcardstyles.jsx"
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';
import emailjs from "@emailjs/browser";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useRef } from "react";
import { useState } from 'react';
import { RevealComponent } from '../reveal/index.jsx';
import { ContactReveal } from '../contactreveal/index.jsx';

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
  const service = process.env.REACT_APP_SERVICE_ID;
  const template = process.env.REACT_APP_TEMPLATE_ID;
  const user = process.env.REACT_APP_USER_ID;
  const form = useRef();
  let lastExecutionTime = 0;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const isFormValid = name && email && message;

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const currentTime = Date.now();
    const timeElapsed = currentTime - lastExecutionTime;
    if (timeElapsed < 30000) {
      const remainingTime = Math.ceil((30000 - timeElapsed) / 1000);
      toast.error(`Please wait ${remainingTime} seconds before sending another email.`, {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    console.log({ service, template, user });

    if (form.current) {
      emailjs
        .sendForm(service || "", template || "", form.current, user)
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
            toast.success("Message Sent Successfully!", {
              position: "top-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          },
          (error) => {
            console.log(error.text);
            toast.error("Error!", {
              position: "top-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        );
      lastExecutionTime = currentTime;
      } else {
        console.log("Form is not defined");
        toast.error("Error!", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    };

  return (
    <Contactcardcontainer>
      <StyledFormControl ref={form}>
        <RevealComponent>
          <Contacttitle>Contact me!</Contacttitle>
        </RevealComponent>
        <ThemeProvider theme={customTheme(outerTheme)}>
          <ContactReveal>
            <Customtextfield
            variant="filled"
            id="mui-theme-provider-filled-input"
            label="Name"
            value={name}
            onChange={handleNameChange}
            />
          </ContactReveal>
          <ContactReveal>
            <Customtextfield
            variant="filled"
            id="mui-theme-provider-filled-input"
            label="Email"
            value={email}
            onChange={handleEmailChange}
            />
          </ContactReveal>
          <ContactReveal>
            <Customtextfield
            variant="filled"
            id="filled-multiline-static"
            label="Message"
            multiline
            rows={7}
            style={{width: '70%', backgroundColor: 'gainsboro'}}
            value={message}
            onChange={handleMessageChange}
            />
          </ContactReveal>
          <ContactReveal style={{}}>
            <StyledButton onClick={sendEmail} disabled={!isFormValid}>Send</StyledButton>
          </ContactReveal>
        </ThemeProvider>
      </StyledFormControl>
    </Contactcardcontainer>
  )
}

export default Contactcard