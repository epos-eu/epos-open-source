import { lazy } from "react";
import {
  Section,
  SectionHeader,
  Paragraph,
  List,
  ListItem,
  SubList,
  SubListItem,
  MainHeader
} from "./styles";
import Card from "../../components/ContributorCard";
const Container = lazy(() => import("../../common/Container"));


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
        { name: "Claudio", surname: "Goffi", image: "https://via.placeholder.com/80", role: "Frontend Developer" },
        { name: "Abdelkareem", surname: "Jebreel", image: "https://via.placeholder.com/80", role: "Frontend Developer" },
        { name: "Keith G.", surname: "Jeffery", image: "https://via.placeholder.com/80", role: "" },
        { name: "Janusz", surname: "Lavrnja-Czapski", image: "https://via.placeholder.com/80", role: "" },
        { name: "Mario", surname: "Malitesta", image: "https://via.placeholder.com/80", role: "Frontend Developer" },
        { name: "Jan", surname: "Michalek", image: "https://via.placeholder.com/80", role: "" },
        { name: "Jakob", surname: "Molander", image: "https://via.placeholder.com/80", role: "" },
        { name: "Harald", surname: "Nedrebø", image: "https://via.placeholder.com/80", role: "" },
        { name: "Andrea", surname: "Orfino", image: "https://via.placeholder.com/80", role: "" },
        { name: "Rossana", surname: "Paciello", image: "https://via.placeholder.com/80", role: "" },
        { name: "Viktor S.", surname: "Rasmussen", image: "https://via.placeholder.com/80", role: "" },
        { name: "Yann", surname: "Retout", image: "https://via.placeholder.com/80", role: "" },
        { name: "Christian", surname: "Rønnevik", image: "https://via.placeholder.com/80", role: "T" },
        { name: "Jean-Baptiste", surname: "Roquencourt", image: "https://via.placeholder.com/80", role: "" },
        { name: "Marco", surname: "Salvi", image: "https://via.placeholder.com/80", role: "Backend Developer" },
        { name: "Manuela", surname: "Sbarra", image: "https://via.placeholder.com/80", role: "" },
        { name: "Wayne", surname: "Shelley", image: "https://via.placeholder.com/80", role: "" },
        { name: "Alessandro", surname: "Spinuso", image: "https://via.placeholder.com/80", role: "" },
        { name: "Jon", surname: "Stuteley", image: "https://via.placeholder.com/80", role: "" },
        { name: "Luca", surname: "Trani", image: "https://via.placeholder.com/80", role: "" },
        { name: "Alessandro", surname: "Turco", image: "https://via.placeholder.com/80", role: "" },
        { name: "Damian", surname: "Ulbricht", image: "https://via.placeholder.com/80", role: "" },
        { name: "Valerio", surname: "Vinciarelli", image: "https://via.placeholder.com/80", role: "Backend Developer" },
        { name: "Xiaoliang", surname: "Wang", image: "https://via.placeholder.com/80", role: "" },
        { name: "Daniel", surname: "Warren", image: "https://via.placeholder.com/80", role: "Frontend Developer" },
      ];
      

  return (
    <Container>
      <Section>
        <MainHeader>EPOS OPEN SOURCE</MainHeader>
        <Paragraph>
        EPOS open source projects thrive on collaboration and the collective efforts of diverse individuals
         from around the world. Contributors bring their unique skills, perspectives, and expertise to create , build, improve, 
         and maintain software that benefits the broader community. These contributions can range from writing code, fixing bugs, 
         and improving documentation to designing user interfaces, testing features, and providing feedback. By participating 
         in EPOS open source, people not only help create accessible, innovative, and sustainable solutions but also gain valuable experience, 
         enhance their technical skills, and build a global network of like-minded professionals. Together, they foster a spirit of knowledge sharing and 
         innovation that drives the open source movement forward.
        </Paragraph>
      </Section>
      <Section>
        <MainHeader>Contributors Members</MainHeader>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {people.map((person, index) => (
            <Card
              key={index}
              name={person.name}
              surname={person.surname}
              image={person.image}
              role={person.role}
            />
          ))}
        </div>
      </Section>
    </Container>
  );
};

export default Contributors;
