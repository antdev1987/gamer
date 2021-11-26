import Fade from "react-reveal/Fade"

//Component

import { useState } from 'react';
import { Container } from '../../utility/Container/Container.style';
import { Title } from '../../utility/Title/Title.style';

//style
import { Acordion, BoxAcordion } from './Faq.style';
import { Data } from './FaqData';

const Faq = () => {
  const [VoF, setVoF] = useState(null);

  const toggle = (i) => {
    if (VoF === i) {
      return setVoF(null);
    }

    setVoF(i);
  };
  return (
    <Container>
      <Acordion id="faq">
        <Title>
          <Fade top>
            <h2>Faq's</h2>
          </Fade>
        </Title>
        <section>
          {Data.map((item, i) => (
            <Fade top>
              <BoxAcordion VoF={VoF}>
                <div className="title" onClick={() => toggle(i)}>
                  <h2>{item.question}</h2>
                  <span>{VoF === i ? '-' : '+'}</span>
                </div>
                <div className={VoF === i ? 'content show' : 'content'}>
                  <p>{item.answer}</p>
                </div>
              </BoxAcordion>
            </Fade>
          ))}
        </section>
      </Acordion>
    </Container>
  );
};

export default Faq;
