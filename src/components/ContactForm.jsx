import * as Yup from "yup";
import { Form, Input, SubmitButton, TextArea } from "./forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  phone: Yup.string().required().label("Phone"),
  message: Yup.string().required().label("Message"),
});

const ContactForm = ({ className = "input" }) => {
  const handleSubmit = (values, { resetForm }) => {
    localStorage.setItem("name", values.name);
    localStorage.setItem("phone", values.phone);
    localStorage.setItem("message", values.comment);

    alert("Message Sent Successfully!");

    resetForm();
  };

  return (
    <Form
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      initialValues={{ name: "", message: "", phone: "" }}
    >
      <Input name="name" className={className} placeholder="Your name" />
      <Input name="phone" className={className} placeholder="Your Tel" />
      <TextArea name="message" placeholder="Your message" />
      <SubmitButton title="Submit" />
    </Form>
  );
};

export default ContactForm;
