import { formApiData } from "@/store/api";
import ContactForm from "./ContactForm/ContactForm";
import "./ContactFormSection.scss";

const ContactFormSection = async () => {
  const formDataForm = await formApiData();
  return (
    <>
      {formDataForm.data !== null && (
        <section className="contact-form" id="contact">
          <div className="container">
            <h2 className="m-title">Kontakt</h2>
            <h3>{formDataForm.title}</h3>
            <p
              dangerouslySetInnerHTML={{ __html: formDataForm.description }}
            ></p>
            <ContactForm />
          </div>
        </section>
      )}
    </>
  );
};
export default ContactFormSection;
