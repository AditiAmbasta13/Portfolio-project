import { useState, useEffect, useRef } from 'react';
import React from 'react'
import herobg from './herobg.json'
import { Container, Row, Col } from "react-bootstrap";
import Lottie from 'lottie-react'
import banner from './image/banner-bg.png'
import headerImg from "../assets/img/header-img.svg"
import pg from '../assets/img/project-img1.png'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Contact from "./Contact";

const Banner = () => {
  const [text] = useTypewriter({
    words: ['Quick-Learner', 'Innovator', 'Web-Developer'],
    loop: 0,
    typeSpeed: 300
  })

  const connectRef = useRef();

  const ContactMe = () => {
    
  }

  return (
    <div className="banner" id="home">
        {/* <Lottie className="banner-bg" animationData={herobg}/> */}
        <img className="main-img" src={banner} alt="" />
        <div className='banner-text'>
            <div>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                Hi! I am Aditi,&nbsp;
                <span>{text}</span> 
                <Cursor className="cursor"/>
              </h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <a className="banner-connect" href='#connect'>Let's Connect &nbsp;<ArrowRightCircle size={25} /></a>
            </div>
            <div className='head-img'>
              <img className="headimg" src={headerImg} alt="Header-Img"/>
            </div>
        </div>
    </div>
  )
}

export default Banner
