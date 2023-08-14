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
import angular from './assets/angular.png'
import react from './assets/reactjs.png'
import nodejs from './assets/nodejs.png'
import typescript from './assets/typescript.png'
import javascript from './assets/javascript.png'
import mongodb from './assets/mongodb.png'
import mysql from './assets/sql.png'
import php from './assets/php.png'
import css from './assets/css.png'
import html from './assets/html.png'
import java from './assets/java.png'
import basic from './assets/default.png'
import sqlserver from './assets/sqlserver.png'
import aws from './assets/aws.png'
import swift from './assets/swift.png'
import swiftui from './assets/swiftui.png'
import emailjs from './assets/emailjs.png'
import restapi from './assets/restapi.png'
import sqlite from './assets/sqlite.png'


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
    imagesize: '100%',
    tags: [
      {
        name: "react",
        icon: react,
      },
      {
        name: "typescript",
        icon: typescript,
      },
      {
        name: "nodejs",
        icon: nodejs,
      },
      {
        name: "re-charts",
        icon: basic,
      },
    ],
  },
  {
    title: "D2 Raid Tool",
    description: "D2 Raid Tool is a react-native app that allows users to login via Bungie OAuth2.0 and move items around their inventories quickly during a Raid when time is valuable.",
    githublink: "https://github.com/askkew/d2-raid-tool",
    // link: "https://github.com/askkew/d2-raid-tool",
    image: d2raidtoolpicture,
    imagesize: '100%',
    tags: [
      {
        name: "react-native",
        icon: react,
      },
      {
        name: "typescript",
        icon: typescript,
      },
      {
        name: "nodejs",
        icon: nodejs,
      },
      {
        name: "RESTful API",
        icon: restapi,
      },
    ],
  },
  {
    title: "D2items - WIP",
    description: "D2items is an item search app for the game Destiny 2 that allows users to search for items, weapons, and armor in the game. Built with ReactJS and Typescript for the front end and NodeJS and Javascript for the backend.",
    githublink: "https://github.com/askkew/destiny-search-engine",
    // link: "https://github.com/askkew/destiny-search-engine",
    image: d2itemsmobile,
    imagesize: '60%',
    tags: [
      {
        name: "ReactJS",
        icon: react,
      },
      {
        name: "typescript",
        icon: typescript,
      },
      {
        name: "nodejs",
        icon: nodejs,
      },
      {
        name: "javascript",
        icon: javascript,
      },
    ],
  },
  {
    title: "Swift Weather app",
    description: "This is a basic Swift and SwiftUI application that allows users to get the current weather details using their current location data.",
    githublink: "https://github.com/askkew/swift-weather-app",
    // link: "https://github.com/askkew/WeatherApp",
    image: weathertestswift,
    imagesize: '60%',
    tags: [
      {
        name: "Swift",
        icon: swift,
      },
      {
        name: "SwiftUI",
        icon: swiftui,
      },
    ],
  },
  {
    title: "ReactJS Weather app",
    description: "This is a basic ReactJS application that allows users to get the current weather details as well as the following 6 day forecast for any city.",
    githublink: "https://github.com/askkew/WeatherApp",
    // link: "https://github.com/askkew/WeatherApp",
    image: weathertestreact,
    imagesize: '60%',
    tags: [
      {
        name: "react",
        icon: react,
      },
      {
        name: "typescript",
        icon: typescript,
      },
      {
        name: "nodejs",
        icon: nodejs,
      },
      {
        name: "mongodb",
        icon: mongodb,
      },
    ],
  },
  {
    title: "Techlite",
    description: "Techlite is an E-commerce website built on the LAMP stack and designed by a team of students as a term project.",
    githublink: "https://github.com/Scrub-Sauce/Scared2Compile",
    // link: "https://github.com/Scrub-Sauce/Scared2Compile",
    image: techlitepicture,
    imagesize: '100%',
    tags: [
      {
        name: "javascript",
        icon: javascript,
      },
      {
        name: "php",
        icon: php,
      },
      {
        name: "css",
        icon: css,
      },
      {
        name: "mysql",
        icon: mysql,
      },
    ],
  },
]

export const workData = [
  {
    title: "TDSC",
    description: "TDSC is a shooting club operated out of Houston Texas that brings together gun enthusiasts for self defense classes and range days. The scope of this project included a complete rework and redesign of their website as well as the implementation of an emailing service. Furthermore, I built a database and admin dashboard to store subscribers and donations for alerts.",
    // githublink: "https://github.com/snyperifle/TDSC",
    link: "https://tdscbeta.netlify.app/",
    image: tdscpicture,
    imagesize: '100%',
    tags: [
      {
        name: "react",
        icon: react,
      },
      {
        name: "typescript",
        icon: typescript,
      },
      {
        name: "SQLite",
        icon: sqlite,
      },
      {
        name: "AWS",
        icon: aws,
      },
    ],
  },
  {
    title: "Crit Art Consulting",
    description: "Art website for Monica Medellin and her business in art consulting to help students compete at the Houston Rodeo Art Auction, this website is meant to attract more clients and customers for this service.",
    // githublink: "https://github.com/askkew/monica-site",
    link: "https://critartconsulting.com/",
    image: critart,
    imagesize: '100%',
    tags: [
      {
        name: "react",
        icon: react,
      },
      {
        name: "typescript",
        icon: typescript,
      },
      {
        name: "emailjs",
        icon: emailjs,
      },
      {
        name: "react-parallax",
        icon: basic,
      },
    ],
  },
  {
    title: "MedPLUS - WIP",
    description: "MedPLUS specializes in providing innovative and comprehensive medical professional liability insurance products through financially secure, A.M. Best Rated insurance carriers.",
    // githublink: "https://github.com/snyperifle/medPlus",
    link: "https://snyperifle.github.io/medPlus/",
    image: medpluspicture,
    imagesize: '100%',
    tags: [
      {
        name: "react",
        icon: react,
      },
      {
        name: "typescript",
        icon: typescript,
      },
      {
        name: "emailjs",
        icon: emailjs,
      },
    ],
  },
]