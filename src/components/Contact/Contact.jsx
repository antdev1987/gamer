import Fade from "react-reveal/Fade"

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
  return (
    <Section id="contactUs">
      <Title>
        <Fade top>
          <h2>{titleSection}</h2>
        </Fade>
        <p>{subtitleSection}</p>
      </Title>
      <form>
        <div className="flex">
          <input
            type="text"
            name="name"
            placeholder={placeholderName}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder={placeholderLast}
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder={placeholderGmail}
          required
        />
        <textarea name="message" placeholder={placeholderMessage} />
        <Fade bottom>
          <NeonButton ty="submit">{textButton}</NeonButton>
        </Fade>
      </form>
    </Section>
  );
};

export default Contact;
