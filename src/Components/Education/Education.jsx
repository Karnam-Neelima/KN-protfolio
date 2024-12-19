import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 60px 20px;
  background-color:black;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: white;
  padding: 0px 30px;
  font-size: 80px;
  font-weight: 600;
  text-decoration:none;
  margin-bottom: 30px;
`;

const Table = styled.table`
  margin: 0 auto;
  border-collapse: collapse;
  width: 70%
`;

const Th = styled.th`
  background:linear-gradient(270deg, orange 10%,#B415ff 100%);
  padding: 15px;
  font-weight: 600;
  font-size: 30px;
`;

const Td = styled.td`
  padding: 15px;
  border: 1px solid #ddd; 
  text-align: center;
  font-size: 20px;
  font-weight:600;
`;

const Education = () => {
  return (
    <Section id="education">
      <Title>Education</Title>
      <Table>
        <thead>
          <tr>
            <Th>Education</Th>
            <Th>Institute</Th>
            <Th>Year of Passing</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>Bachelor's Degree</Td>
            <Td>Audisankara College of Engineering & Technology</Td>
            <Td>2020-2024</Td>
          </tr>
          <tr>
            <Td>Intermediate</Td>
            <Td>Vignan Junior College</Td>
            <Td>2018-2020</Td>
          </tr>
          <tr>
            <Td>Secondary Education</Td>
            <Td>Sri Sainadh E.M High School</Td>
            <Td>2017-2018</Td>
          </tr>
        </tbody>
      </Table>
    </Section>
  );
};

export default Education;
