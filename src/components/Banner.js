import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import { useState,useEffect } from 'react';
// import TrackVisibility from 'react-on-screen';
const Banner = () => {

  const toRotate = ["Laravel Developer","BackEnd Developer"];  
  const [loopNum,setLoopNum] = useState(0);
  const [isDeleting,setIsDeleting] = useState(false);  
  const [text,setText] = useState('');
  const [delta,setDelta] = useState(300-Math.random()*100);
  const [index, setIndex] = useState(1);
  const period = 2000;

  useEffect(()=>{
    let ticker= setInterval(()=>{
        tick();
    },delta)
    return ()  => {clearInterval(ticker)}
  },[text]);

  const tick = () => {
    let i =loopNum % toRotate.length;
    let fullText = toRotate[i];
    let UpdatedText = isDeleting ? fullText.substring(0,text.length-1): fullText.substring(0,text.length+1);
    setText(UpdatedText);

    if(isDeleting){
        setDelta(prevDelta=>prevDelta/2);
    }

    if(!isDeleting && UpdatedText === fullText){
        setIsDeleting(true);
        setDelta(period);
    }else if (isDeleting && UpdatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
    }else {
        setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
   <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to my Portfolio</span>
                    <h1>{`Hi I'm Ishan `}<span className='wrap'> {text}</span></h1>
                    <p>I'm focusing on  Back-End Development and trying to polish my skills for Back-End Development Side and continue my career life as a Backend Developer. Also, I am interested in the Operating System Development domain and doing self-research on  OS  Development.
                       I am still new to Software Engineering Industry, As a developer, I try to create things that no one else has ever created before. I learn algorithms, design patterns, engineering principles and industry trends to apply for my products. That's why I need to create products that customers will love. At the same time, I'm efficient and work quickly. I have to be creative to put all these pieces together.
                       I'm a lifelong learner. I'm a back-end developer and I like to learn more and more about backend development and operating system development.
                    </p>
                    <button onClick={()=>console.log('connect')}>Let's Connect<ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt='Header Image'/>
                </Col>
            </Row>
        </Container>
   </section>
  )
}

export default Banner;