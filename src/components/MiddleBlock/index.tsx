import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button as CommonButton } from "../../common/Button"; 
import { useHistory } from "react-router-dom"; 
import { MiddleBlockSection, Content, ContentWrapper ,Title } from "./styles";

export interface ButtonProps {
  title: string;
  color?: string; // Optional color
  link?: string; // Optional link for navigation
}

interface MiddleBlockProps {
  title: string;
  content: string;
  button?: ButtonProps[]; // Accepting an array of button props
  t: TFunction;
}

const MiddleBlock = ({ title, content, button, t }: MiddleBlockProps) => {
  const history = useHistory();

  // Handle button click for individual button links
  const handleButtonClick = (link?: string) => {
    if (link) {
      history.push(link); // Navigate to the provided link
    }
  };

  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <Title  className="title">{t(title)}</Title>
              <Content>{t(content)}</Content>
              {button && button.length > 0 && (
                <div>
                  {button.map((btn, index) => (
                 <CommonButton
                 key={index}
                 onClick={() => window.open('https://www.epos-eu.org/about-epos', '_blank')}
                 color={btn.color}
                 style={{ backgroundColor: 'red' }} // Simple test style
               >
                 {t(btn.title)}
               </CommonButton>
               
                  ))}
                </div>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
