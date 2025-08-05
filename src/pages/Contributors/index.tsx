import React, { useEffect, useState, lazy } from 'react';
import {
  Section,
  Paragraph,
  Header,
  MainHeader
} from "./styles";

import Card from "../../components/ContributorCard";
const Container = lazy(() => import("../../common/Container"));


// Define the props interface
interface TeamMember {
  name: string;
  surname: string;
  image: string;
  role?: string;
  LinkldnHref?: string;
  GithubHref?: string;
  GitLabHref?: string;
  intro?: string;
}


// Utility function to chunk the array
const chunkArray = <T,>(array: T[], chunkSize: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

const Contributors = () => {
  const [people, setPeople] = useState<TeamMember[]>([]);

  useEffect(() => {
    async function fetchPeopleData() {
      try {
        const response = await fetch("https://epos-ci.brgm.fr/api/v4/projects/epos-public%2Fissuetracker/issues/19500");
        if (!response.ok) throw new Error("Failed to fetch people data");
  
        const data = await response.json();
  
        let finalData: TeamMember[] = [];
        try {
          const parsed = JSON.parse(data.description);
          if (Array.isArray(parsed)) {
            finalData = parsed;
          } else {
            console.error("Parsed data is not an array:", parsed);
          }
        } catch (e) {
          console.error("Failed to parse people data from description:", e);
        }
  
        setPeople(finalData);
        console.log('final data' , finalData);
        
      } catch (error) {
        console.error("Error fetching people data:", error);
      }
    }
  
    fetchPeopleData();
  }, []);
  

  const chunkedPeople = chunkArray(people, 4); // Group people into chunks of 4

  console.log('people ' , people);
  
  

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
                image={person.image}
                role={person.role}
                GithubHref={person.GithubHref}
                GitLabHref={person.GitLabHref}
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