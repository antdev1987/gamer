import Fade from 'react-reveal/Fade';

//Components
import { Container } from '../../utility/Container/Container.style';
import { Title } from '../../utility/Title/Title.style';

//Style
import { ImageBox, Section } from './Streaming.style';
import { dynamic, logo, src, text,  titleText } from './StreamingData';

//Data

const Streaming = () => {
  return (
    <Section id="streaming">
      <Title>
        <Fade top>
          <h2>{titleText}</h2>
        </Fade>
      </Title>
      <Container>
        <main>
          <Fade top>{text}</Fade>
          <ul>
            <Fade top>
              {logo.map((item, idx) => (
                <li key={idx}>{item.icon}</li>
              ))}
            </Fade>
          </ul>
          <ImageBox srcHtml={src} />

          <section id="dynamic">{dynamic}</section>
        </main>
      </Container>
    </Section>
  );
};

export default Streaming;
