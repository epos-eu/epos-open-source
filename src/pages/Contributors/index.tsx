import React from 'react';
import { lazy } from "react";
import {
  Section,
  SectionHeader,
  Paragraph,
  List,
  ListItem,
  SubList,
  SubListItem,
  Header,
  MainHeader
} from "./styles";
import Card from "../../components/ContributorCard";
const Container = lazy(() => import("../../common/Container"));
interface Person {
    name: string;
    surname: string;
    image?: string; // Optional image property
    role: string;
  }
// Utility function to chunk the array
const chunkArray = <T,>(array: T[], chunkSize: number): T[][] => {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };
  
  // Props type for the CardGrid component
  interface CardGridProps {
    people: Person[];
  }

const Contributors = () => {
    const people = [
        { name: "Kuvvet", surname: "Atakan", image: "https://via.placeholder.com/80", role: "" },
        { name: "Philip", surname: "Atkinson", image: "https://via.placeholder.com/80", role: "" },
        { name: "Daniele", surname: "Bailo", image: "https://via.placeholder.com/80", role: "" },
        { name: "Patrick", surname: "Bell", image: "https://via.placeholder.com/80", role: "" },
        { name: "Sara", surname: "Capotosti", image: "https://via.placeholder.com/80", role: "" },
        { name: "Chris", surname: "Card", image: "https://via.placeholder.com/80", role: "" },
        { name: "Martin", surname: "Carrere", image: "https://via.placeholder.com/80", role: "" },
        { name: "Massimo", surname: "Fares", image: "https://via.placeholder.com/80", role: "" },
        { name: "Lorenzo", surname: "Fenoglio", image: "https://via.placeholder.com/80", role: "" },
        { name: "Kety", surname: "Giuliacci", image: "https://via.placeholder.com/80", role: "" },
        { name: "Helen", surname: "Glaves", image: "https://via.placeholder.com/80", role: "" },
        { name: "Claudio", surname: "Goffi", image: "https://via.placeholder.com/80", role: "" },
        { name: "Abdelkareem", surname: "Jebreel", image: "https://via.placeholder.com/80", role: "Frontend Developer"  , LinkldnHref:"https://www.google.com",
            GithubHref:"https://www.facebook.com", intro:'As a Frontend Developer, I specialize in creating intuitive and visually engaging user interfaces for web applications. I translate design concepts into responsive, interactive, and accessible code using modern technologies like HTML, CSS, JavaScript, and frameworks like React or Angular.'},
        { name: "Keith G.", surname: "Jeffery", image: "https://via.placeholder.com/80", role: "" },
        { name: "Janusz", surname: "Lavrnja-Czapski", image: "https://via.placeholder.com/80", role: "" },
        { name: "Mario", surname: "Malitesta", image: "https://via.placeholder.com/80", role: "" },
        { name: "Jan", surname: "Michalek", image: "https://via.placeholder.com/80", role: "" },
        { name: "Jakob", surname: "Molander", image: "https://via.placeholder.com/80", role: "" },
        { name: "Harald", surname: "Nedrebø", image: "https://via.placeholder.com/80", role: "" },
        { name: "Andrea", surname: "Orfino", image: "https://via.placeholder.com/80", role: "" },
        { name: "Rossana", surname: "Paciello", image: "https://via.placeholder.com/80", role: "" },
        { name: "Viktor S.", surname: "Rasmussen", image: "https://via.placeholder.com/80", role: "" },
        { name: "Yann", surname: "Retout", image: "https://via.placeholder.com/80", role: "" },
        { name: "Christian", surname: "Rønnevik", image: "https://via.placeholder.com/80", role: "" },
        { name: "Jean-Baptiste", surname: "Roquencourt", image: "https://via.placeholder.com/80", role: "" },
        { name: "Marco", surname: "Salvi", image: "https://via.placeholder.com/80", role: "" },
        { name: "Manuela", surname: "Sbarra", image: "https://via.placeholder.com/80", role: "" },
        { name: "Daniel", surname: "Warren", image: "https://via.placeholder.com/80", role: "" },
        { name: "Wayne", surname: "Shelley", image: "https://via.placeholder.com/80", role: "" },
        { name: "Alessandro", surname: "Spinuso", image: "https://via.placeholder.com/80", role: "" },
        { name: "Jon", surname: "Stuteley", image: "https://via.placeholder.com/80", role: "" },
        { name: "Luca", surname: "Trani", image: "https://via.placeholder.com/80", role: "" },
        { name: "Alessandro", surname: "Turco", image: "https://via.placeholder.com/80", role: "" },
        { name: "Damian", surname: "Ulbricht", image: "https://via.placeholder.com/80", role: "" },
        { name: "Valerio", surname: "Vinciarelli", image: "https://via.placeholder.com/80", role: "" },
        { name: "Xiaoliang", surname: "Wang", image: "https://via.placeholder.com/80", role: "" },

      ];
      const chunkedPeople = chunkArray(people, 4); // Group people into chunks of 4

  return (
    <Container>
      <Section>
        <MainHeader>EPOS Open Source Contribution</MainHeader>
        <Paragraph>
        EPOS open source projects thrive on collaboration and the collective efforts of diverse individuals
         from around the world. Contributors bring their unique skills, perspectives, and expertise to create , build, improve, 
         and maintain software that benefits the broader community. These contributions can range from writing code, fixing bugs, 
         and improving documentation to designing user interfaces, testing features, and providing feedback. By participating 
         in EPOS open source, people not only help create accessible, innovative, and sustainable solutions but also gain valuable experience, 
         enhance their technical skills, and build a global network of like-minded professionals. Together, they foster a spirit of knowledge sharing and 
         innovation that drives the EPOS open source movement forward.
        </Paragraph>
      </Section>
      <Section>
        <Header>Meet The Team</Header>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {chunkedPeople.map((chunk, chunkIndex) => (
        <React.Fragment key={chunkIndex}>
          {/* Row Container */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            {chunk.map((person, personIndex) => (
              <Card
                key={`${chunkIndex}-${personIndex}`}
                name={person.name}
                surname={person.surname}
                image={person.image || "https://upload.wikimedia.org/wikipedia/commons/6/6b/UserAvatar.png"} // Default icon if no image
                role={person.role}
                GithubHref={person.GithubHref}
                LinkldnHref={person.LinkldnHref}
                intro={person.intro}
              />
            ))}
          </div>
          {/* Horizontal line after each row except the last one */}
          {chunkIndex < chunkedPeople.length - 1 && (
            <hr style={{ border: "1px solid #ddd", width: "100%" }} />
          )}
        </React.Fragment>
      ))}
    </div>

      </Section>
    </Container>
  );
};

export default Contributors;
