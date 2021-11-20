//Animation
import { Parallax } from 'react-parallax';
import Zoom from 'react-reveal/Zoom';

import valor from './img/valor.jpg';

//Components
import { Container } from '../../utility/Container/Container.style';
import { Title } from '../../utility/Title/Title.style';

//Style
import { Img, VisionStyled } from './Vision.style';
import { services } from './VisionData';

const Vision = () => {
  return (
    <Container>
      <VisionStyled>
        <Title>
          <Zoom left cascade>
            <h2>Our Vision</h2>
          </Zoom>
        </Title>
        <Parallax
          renderLayer={(percentage) => (
            <div className="fix">
              <Img src={valor} perce={percentage} />
            </div>
          )}
        >
          {services.map((item, idx) => (
            <div style={{ height: '100%' }}>
              <h1 key={idx}>{item.title}</h1>
            </div>
          ))}
        </Parallax>
      </VisionStyled>
    </Container>
  );
};

export default Vision;
