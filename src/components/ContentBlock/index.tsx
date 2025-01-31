import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { useHistory } from "react-router-dom";
import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  ContentWrapper,
  StyledRow,
  ButtonWrapper,
  Title,
  Content
} from "./styles";

const ContentBlock = ({
  icon,
  title,
  content,
  button,
  id,
  direction,
}: ContentBlockProps) => {
  const history = useHistory();

  const handleButtonClick = (link?: string) => {
    if (link) {
      history.push(link);
    }
  };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <Title>{title}</Title>
              <Content 
                dangerouslySetInnerHTML={{ __html: content }}
              ></Content>
              <ButtonWrapper>
                {Array.isArray(button) &&
                  button.map((item, index) => {
                    return (
                      <Button
                        key={index} // Use index as a key here
                        color={item.color}
                        onClick={() => {
                          if (item.link.startsWith("http")) {
                            // If item.link is a full URL (e.g., "http://www.example.com"), use window.location
                            window.open(item.link, '_blank')
                          } else {
                            // Otherwise, use your routing function for internal paths (e.g., '/')
                            handleButtonClick(item.link);
                          }
                        }}
                      >
                        {item.title}
                      </Button>
                    );
                  })}
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default ContentBlock;
