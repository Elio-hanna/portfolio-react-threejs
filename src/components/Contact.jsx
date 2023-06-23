import { useState } from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components'
import MapChart from './Map'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
const Input = styled.input`
  padding: 20px;
  background-color: #e8e7e7;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  background-color: #e8e7e7;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;

`;

const Right = styled.div`
  flex: 1;
`;



const Contact = () => {
  const ref = useRef();
const [success,setSuccess] = useState(null);

const handleSubmit = e => {
  e.preventDefault();

  emailjs.sendForm('service_olvih4w', 'template_imbuocn', ref.current, 'S6u33uiHr8GLG2GiS')
      .then((result) => {
          console.log(result.text);
          setSuccess(true);
      }, (error) => {
          console.log(error.text);
          setSuccess(false);
      });
}
  return (
    <Section>
      <Container>
        <Left>
        <Form ref={ref} onSubmit={handleSubmit}>
          <Title>Contact Us</Title>
          <Input placeholder='Name' name="name"/>
          <Input placeholder='Email' name="email"/>
          <TextArea placeholder='Write your message' rows={10} name="message"/>
          <Button type="submit">Send</Button>
          {success && <p>Message Sent Successfully</p>}
        </Form>
        </Left>
        <Right>
          <MapChart/>
        </Right>
      </Container>
    </Section>
  )
}

export default Contact