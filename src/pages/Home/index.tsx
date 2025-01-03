import { lazy, useState} from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import ContactContent from "../../content/ContactContent.json";
import Popup from "../../common/pop-up";



const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const Code = lazy(()=> import("../../components/Code-block"));




const Home = () => {
  return (
    <>
    <Code/>
    <Container>
      <ScrollToTop />
      <ContentBlock 
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.png"
        id="intro"
      />
      <ContentBlock 
      direction="left"
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
        icon="benefit.png"
        id="intro"
      />
      <ContentBlock
        direction="right"
        title={AboutContent.title}
        content={AboutContent.text}
        button={AboutContent.button}
        icon="contribute.png"
        id="contribute"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
    </>
  );
};

export default Home;
