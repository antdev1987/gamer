import { useRef } from 'react';
import emailjs from 'emailjs-com';

import Fade from 'react-reveal/Fade';

//Component
import NeonButton from '../../utility/NeonButton/NeonButton';
import { Title } from '../../utility/Title/Title.style';

//Style
import { Section } from './Contact.style';

///Data
import {
  placeholderGmail,
  placeholderLast,
  placeholderMessage,
  placeholderName,
  subtitleSection,
  textButton,
  titleSection,
} from './ContactData';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_5mzt04n',
        'template_ozhn1r7',
        form.current,
        'user_tNLjcS1hySppg1WN8702E'
      )
      .then(
        () => {
          alert("It wast sent");
        },
        () => {
          alert("Something went wrong")
        }
      );
    e.target.reset();
  };
  return (
    <Section id="contactUs">
      <Title>
        <Fade top>
          <h2>{titleSection}</h2>
        </Fade>
        <p>{subtitleSection}</p>
      </Title>
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex">
          <input
            type="text"
            name="name"
            placeholder={placeholderName}
            minLength="3"
            maxLength="50"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder={placeholderLast}
            minLength="3"
            maxLength="50"
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder={placeholderGmail}
          required
        />
        <textarea
          name="message"
          placeholder={placeholderMessage}
          maxLength="500"
          required
        />
        <Fade bottom>
          <NeonButton ty="submit">{textButton}</NeonButton>
        </Fade>
      </form>
    </Section>
  );
};

export default Contact;
