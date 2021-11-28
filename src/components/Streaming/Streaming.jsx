import Fade from "react-reveal/Fade"

//Components
import { Container } from '../../utility/Container/Container.style';
import { Title } from '../../utility/Title/Title.style';

//Style
import { ImageBox, Section } from './Streaming.style';
import { dynamic, logo, src, text, title } from './StreamingData';

//Data

const Streaming = () => {
  return (
    <Section id="streaming">
      <Title>
        <Fade top>
          <h2>{title}</h2>
        </Fade>
      </Title>
      <Container>
        <main>
          <Fade top>
            {text}
          </Fade>
          {dynamic}
          <ul>
            <Fade top>
              {logo.map((item, idx) => (
                <li key={idx}>{item.icon}</li>
              ))}
            </Fade>
          </ul>
          <ImageBox srcHtml={src}/>
        </main>
      </Container>
    </Section>
  );
};

export default Streaming;
