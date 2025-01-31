import React, { useRef , useState } from "react";
import emailjs from "@emailjs/browser";
import { Row, Col } from "antd";
import { useForm } from "../../common/utils/useForm";
import { FormGroup  , ContactContainer , SubmitInput , FormInput , Label} from './styles'; 
import Block from "../Block";
import { Slide } from "react-awesome-reveal";
import validate from "../../common/utils/validationRules";
import Popup from "../../common/pop-up";

export interface ContactProps {
  title: string;
  content: string;
  id: string;
}

const Contact:React.FC<ContactProps> = () => {
  const form = useRef<HTMLFormElement>(null);
  const { values, errors, handleChange, handleSubmit } = useForm(validate);
  const [popupVisible, setPopupVisible] = useState(false);

  const sendEmail = async () => {
    if (form.current) {
      try {
        await emailjs.sendForm(
          "service_rooidig",
          "template_h9q5ysi",
          form.current,{
            publicKey: '2SdTrWiRdpJxdw5uT',
          });
        console.log("SUCCESS!");
        // Reset form and state after successful submission
        form.current.reset();
        setPopupVisible(true); // Show the popup
      } catch (error: any) {
        console.error("FAILED...", error.text);
      }
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e, sendEmail);
  };

  return (
    <ContactContainer>
      <Row justify="space-between" align="middle">
      <Col lg={12} md={11} sm={24} xs={24}>
      <Slide direction="left" triggerOnce>
      <Block title="" content="" />
          </Slide>
        </Col>
    <FormGroup ref={form} onSubmit={onSubmit}>
      <div>
        <Label>Name</Label>
        <FormInput
          type="text"
          name="user_name"
          value={values.user_name || ""}
          onChange={handleChange}
        />
        {errors.user_name && <span>{errors.user_name}</span>}
      </div>
      <div>
        <Label>Email</Label>
        <FormInput
          type="email"
          name="user_email"
          value={values.user_email || ""}
          onChange={handleChange}
        />
        {errors.user_email && <span>{errors.user_email}</span>}
      </div>
      <div>
        <Label>Message</Label>
        <Col span={24}>
        <textarea
          name="message"
          value={values.message || ""}
          onChange={handleChange}
        />
        {errors.message && <span>{errors.message}</span>}
        </Col>
      </div>
      <div>
        <SubmitInput type="submit" value="Submit" />
      </div>
    </FormGroup>
    </Row>
    <Popup trigger={popupVisible} setTrigger={setPopupVisible}>
        <h3>Thank you!</h3>
        <p>Your message has been sent successfully.</p>
      </Popup>
    </ContactContainer>
  );
};
export default Contact;
