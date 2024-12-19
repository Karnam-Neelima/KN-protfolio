import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
 display:flex;
    align-items: center;
    flex-direction: column;
    gap: 35px;
`;

const Title = styled.h2`
  color: white;
  font-size:80px;
`;

const ContactText = styled.p`
    font-size:30px;
    background: linear-gradient(270deg, orange 10%,#B415ff 100%);
    border-radius:15px; 
  
`;

const Contacts = () => (
  <Section id="contact">
    <Title>Contact Me</Title>
    <ContactText>Email: karnamneelima123@gmail.com</ContactText>
    <h3>Mobile No: +91 9347683182</h3>
  </Section>
);

export default Contacts;
