import silverpicture from "./assets/silvernew.png"
import d2itemspicture from "./assets/d2itemsfinal.png"
import d2itemsmobile from "./assets/d2itemsmobile.png"
import weathertestreact from "./assets/weathertest.png"
import weathertestswift from "./assets/weatherappswift.png"
import tdscpicture from "./assets/tdscnew.png"
import medpluspicture from "./assets/medplusnew.png"
import techlitepicture from "./assets/techlitenew.png"
import critart from './assets/critart.png'
import d2raidtoolpicture from './assets/d2raidtoolfinal.png'

export const darkText = '#22223B'
export const lightText = '#4A4E69'
export const darkBackground = '#9A8C98'
export const middleBackground = '#C9ADA7'
export const lightBackground = '#F2E9E4'
export const firstTag = 'rgb(116, 78, 87)';
export const secondTag = 'rgb(48,68,82)';
export const thirdTag = 'rgb(108,55,90)';
export const fourthTag = 'rgb(78, 116, 87)';
export const fifthTag = 'rgb(87, 78, 116)';

export const projectData = [
  {
    title: "Silver Armory",
    description: "Silver Armory is a website built to allow Destiny 2 users to view the inventories of other users' Guardians from a database used by over a million players daily.",
    githublink: "https://github.com/askkew/Silver-Armory",
    link: "https://silver-armory.netlify.app/",
    image: silverpicture,
    imagesize: 200,
    tags: [
      {
        name: "react",
        color: firstTag,
      },
      {
        name: "typescript",
        color: secondTag,
      },
      {
        name: "nodejs",
        color: thirdTag,
      },
      {
        name: "re-charts",
        color: thirdTag,
      },
    ],
  },
  {
    title: "D2 Raid Tool",
    description: "D2 Raid Tool is a react-native app that allows users to login via Bungie OAuth2.0 and move items around their inventories quickly during a Raid when time is valuable.",
    githublink: "https://github.com/askkew/d2-raid-tool",
    link: "https://github.com/askkew/d2-raid-tool",
    image: d2raidtoolpicture,
    imagesize: 200,
    tags: [
      {
        name: "react-native",
        color: firstTag,
      },
      {
        name: "typescript",
        color: secondTag,
      },
      {
        name: "nodejs",
        color: thirdTag,
      },
      {
        name: "RESTful API",
        color: thirdTag,
      },
    ],
  },
  {
    title: "Crit Art Consulting",
    description: "Art website for Monica Medellin and her business in art consulting to help students compete at the Houston Rodeo Art Auction, this website is meant to attract more clients and customers for this service.",
    githublink: "https://github.com/askkew/monica-site",
    link: "https://critartconsulting.com/",
    image: critart,
    imagesize: 200,
    tags: [
      {
        name: "react",
        color: firstTag,
      },
      {
        name: "typescript",
        color: secondTag,
      },
      {
        name: "emailjs",
        color: thirdTag,
      },
      {
        name: "react-parallax",
        color: thirdTag,
      },
    ],
  },
  {
    title: "D2items - WIP",
    description: "D2items is an item search app for the game Destiny 2 that allows users to search for items, weapons, and armor in the game. Built with Swift and SwiftUI for the front end and NodeJS and Javascript for the backend.",
    githublink: "https://github.com/askkew/destiny-search-engine",
    link: "https://github.com/askkew/destiny-search-engine",
    image: d2itemsmobile,
    imagesize: 200,
    tags: [
      {
        name: "Swift",
        color: firstTag,
      },
      {
        name: "SwiftUI",
        color: secondTag,
      },
      {
        name: "nodejs",
        color: thirdTag,
      },
      {
        name: "javascript",
        color: fourthTag,
      },
    ],
  },
  {
    title: "TDSC",
    description: "TDSC is a shooting club operated out of Houston Texas that brings together gun enthusiasts for self defense classes and range days.",
    githublink: "https://github.com/snyperifle/TDSC",
    link: "https://tdscbeta.netlify.app/",
    image: tdscpicture,
    tags: [
      {
        name: "react",
        color: firstTag,
      },
      {
        name: "typescript",
        color: secondTag,
      },
      {
        name: "emailjs",
        color: thirdTag,
      },
    ],
  },
  {
    title: "MedPLUS - WIP",
    description: "MedPLUS specializes in providing innovative and comprehensive medical professional liability insurance products through financially secure, A.M. Best Rated insurance carriers.",
    githublink: "https://github.com/snyperifle/medPlus",
    link: "https://snyperifle.github.io/medPlus/",
    image: medpluspicture,
    imageSize: 50,
    tags: [
      {
        name: "react",
        color: firstTag,
      },
      {
        name: "typescript",
        color: secondTag,
      },
      {
        name: "emailjs",
        color: thirdTag,
      },
    ],
  },
  {
    title: "Techlite",
    description: "Techlite is an E-commerce website built on the LAMP stack and designed by a team of students as a term project.",
    githublink: "https://github.com/Scrub-Sauce/Scared2Compile",
    link: "https://github.com/Scrub-Sauce/Scared2Compile",
    image: techlitepicture,
    tags: [
      {
        name: "javascript",
        color: firstTag,
      },
      {
        name: "php",
        color: secondTag,
      },
      {
        name: "css",
        color: thirdTag,
      },
      {
        name: "mysql",
        color: fourthTag,
      },
    ],
  },
  {
    title: "Swift Weather app",
    description: "This is a basic Swift and SwiftUI application that allows users to get the current weather details using their current location data.",
    githublink: "https://github.com/askkew/WeatherApp",
    link: "https://github.com/askkew/WeatherApp",
    image: weathertestswift,
    imagesize: 200,
    tags: [
      {
        name: "Swift",
        color: firstTag,
      },
      {
        name: "SwiftUI",
        color: secondTag,
      },
    ],
  },
  {
    title: "ReactJS Weather app",
    description: "This is a basic ReactJS application that allows users to get the current weather details as well as the following 6 day forecast for any city.",
    githublink: "https://github.com/askkew/WeatherApp",
    link: "https://github.com/askkew/WeatherApp",
    image: weathertestreact,
    imagesize: 200,
    tags: [
      {
        name: "react",
        color: firstTag,
      },
      {
        name: "typescript",
        color: secondTag,
      },
      {
        name: "nodejs",
        color: thirdTag,
      },
      {
        name: "mongodb",
        color: fourthTag,
      },
    ],
  },
]