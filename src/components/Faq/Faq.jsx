//Component

import { useState } from 'react';
import { Container } from '../../utility/Container/Container.style';

//style
import { Acordion, BoxAcordion } from './Faq.style';

const Faq = () => {
  const data = [{ d: 'd' }, { d: 'p' }];
  const [VoF, setVoF] = useState(null);

  const toggle = (i) => {
    if (VoF === i) {
      return setVoF(null);
    }

    setVoF(i);
  };
  return (
    <Container>
      <Acordion>
        <section>
          {data.map((item, i) => (
            <BoxAcordion VoF={VoF}>
              <div className="title" onClick={() => toggle(i)}>
                <h2>Test</h2>
                <span>{VoF === i ? '-' : '+'}</span>
              </div>
              <div className={VoF === i ? 'content show' : 'content'}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ad esse aliquid voluptates illum officia, unde ut officiis, inventore, suscipit facilis! Accusamus incidunt inventore eum, molestiae deserunt et? Quos labore, optio quia nemo nostrum ut a nulla porro repellat placeat temporibus corporis obcaecati officiis praesentium laboriosam tenetur magnam dolorum ea? Neque quam tempora corporis incidunt quisquam reprehenderit voluptatibus necessitatibus alias dicta officia excepturi perferendis, ratione aspernatur odio, laudantium at. Perferendis nostrum eveniet omnis natus eos obcaecati, aliquam voluptate ex voluptas quisquam aspernatur officia consectetur dignissimos veniam voluptatibus laborum nobis doloremque iure. Quod corrupti mollitia labore nobis dolores ad ratione aut?</p>
              </div>
            </BoxAcordion>
          ))}
        </section>
      </Acordion>
    </Container>
  );
};

export default Faq;
