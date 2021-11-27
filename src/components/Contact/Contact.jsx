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
        <h2>{titleSection}</h2>
        <p>{subtitleSection}</p>
      </Title>
      <form>
        <div>
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
        <NeonButton ty="submit">{textButton}</NeonButton>
      </form>
    </Section>
  );
};

export default Contact;
