// import React from 'react';
// import styled from 'styled-components';

// const ProjectContainer = styled.div`
//   padding: 20px;
//   background-color:black;
// `;

// const ProjectHeader = styled.div`
//   margin-bottom: 20px;
// `;

// const ProjectTitle = styled.h1`
//   font-size: 2em;
//   background:linear-gradient(270deg, orange 10%,#B415ff 100%);
//   border-radius:50px;

//   ${props => props.isProjects && `
//     font-size: 2.5rem;
//     color: white;
//     padding: 0px 30px;
//     font-size: 80px;
//     font-weight: 600;
//     text-decoration:none;
//     margin-bottom: 30px;
//   `}
// `;

// const ProjectContent = styled.p`
//   font-size: 1em;
//   line-height: 1.5;
//   font-size:20px;
//   display: flex;
//     flex-direction: column;
//     gap: 20px;
//     font-size: 24px;
//     font-weight: 500;
// `;

// const ProjectSection = styled.div`
//   margin-bottom: 40px;
// `;

// const Project = () => {
//   return (
//     <ProjectContainer>
//       <ProjectHeader>
//         <ProjectTitle isProjects>Projects</ProjectTitle>
//       </ProjectHeader>
//       <ProjectSection className='firstprojects'>
//         <ProjectTitle>Social Media Followers Prediction</ProjectTitle>
//         <ProjectContent>
//           A model to predict insurance costs based on peoples’s data, including age, Body Mass Index, smoking or
//           not. A model to find five main predictiors of type 2 diabetes: glucose, pregnancy, Body mass index (BMI).
//           Social Media Followers Prediction using vetality of Human Behaviour. When we easily find out future
//           generation Followers, Likes, Posts, and Comments up to 10 to 20 years.
//         </ProjectContent>
//       </ProjectSection>
//       <ProjectSection className='secondprojects'>
//         <ProjectTitle>Sentiment Analysis</ProjectTitle>
//         <ProjectContent>
//           Sentiment analysis identifies the emotional tone of text as positive, negative, or neutral. This project
//           uses Python with libraries like Pandas and Numpy Tools like Pycharm for text preprocessing and feature
//           extraction, coupled with machine learning algorithms such as Logistic Regression and SVM for classification.
//           It analyzes datasets like IMDB reviews and evaluates performance, offering insights for applications like
//           social media monitoring and customer feedback analysis.
//         </ProjectContent>
//       </ProjectSection>
//       <ProjectSection className='thirdprojects'>
//         <ProjectTitle>Fake News Detection</ProjectTitle>
//         <ProjectContent>
//           Fake news detection aims to classify news articles as real or fake using machine learning techniques. This
//           project employs Python to preprocess text data, extract features using TF-IDF, and train classification
//           algorithms like Logistic Regression and Random Forest. The system provides an efficient solution to combat
//           misinformation by accurately identifying fake news.
//         </ProjectContent>
//       </ProjectSection>
//     </ProjectContainer>
//   );
// };

// export default Project;



import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
padding: 20px;
background-color:black;
`;

const SectionTitle = styled.h1`
  font-size: 70px;
  border-radius:50px;
  font
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background-color: #1e1e1e;
  border-radius: 15px;
  border: 1px solid #ddd;
  
  width: 300px;
  padding: 20px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.83);
  }
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 15px;
  background:linear-gradient(270deg, orange 10%,#B415ff 100%);
  border-radius:15px;
  max-width:50%;
  padding: 15px;


`;

const CardContent = styled.p`
  font-size: 20px;
  line-height: 1.5;
  color: #ddd;
`;

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <SectionTitle>Projects</SectionTitle>
      <CardsContainer>
        <Card>
          <CardTitle>Roll Dice</CardTitle>
          <CardContent>
          The "Roll Dice" project simulates the rolling of a dice using JavaScript, generating random numbers between 1 and 6. It can be enhanced with interactive buttons, animations, and logic for games like dice-based challenges.
            </CardContent>
        </Card>
        <Card>
          <CardTitle>Products Furniture</CardTitle>
          <CardContent>
          Our furniture collection offers stylish and functional pieces to enhance your living space. Discover modern designs crafted for comfort and durability.
          </CardContent>
        </Card>
        <Card>
          <CardTitle>English Dictionary</CardTitle>
          <CardContent>
          An English dictionary application built with JavaScript allows users to search for word meanings, synonyms, and antonyms. It provides an interactive and efficient way to explore the richness of the English language.
          </CardContent>
        </Card>
      </CardsContainer>
    </ProjectsContainer>
  );
};

export default Projects;
