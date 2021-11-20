//Animation
import Zoom from 'react-reveal/Zoom';

import valor from './img/valor.jpg';
import back from './img/f.jpg';

//Components
import { Container } from '../../utility/Container/Container.style';
import { Title } from '../../utility/Title/Title.style';

//Style
import { ImgBox, VisionFlex, VisionStyled } from './Vision.style';
import { services } from './VisionData';

const Vision = () => {
  return (
    <Container>
      <VisionStyled>
        <Title>
          <Zoom left cascade>
            <h2 className="title">Our Vision</h2>
          </Zoom>
        </Title>
        <VisionFlex src={back}>
          <ImgBox back={back}>
            <img src={valor} alt="" />
          </ImgBox>
          <div className="flex">
            {services.map((item, idx) => (
              <div>
                <section>
                  <h2 key={idx}>{item.title}</h2>
                </section>
                <p style={{textAlign: `${item.place}`}}>{item.text}</p>
                {item.icons && item.icons.map((item) => <>{item.icon}</>)}
                {item.iconTitle}
              </div>
            ))}
          </div>
        </VisionFlex>
      </VisionStyled>
    </Container>
  );
};

export default Vision;
