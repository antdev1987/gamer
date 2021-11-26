//Animation
import Fade from 'react-reveal/Fade';

//Components
import { Container } from '../../utility/Container/Container.style';
import { Title } from '../../utility/Title/Title.style';

//Style
import { ImgBox, VisionFlex, VisionStyled } from './Vision.style';
import { back, services } from './VisionData';

const Vision = () => {
  return (
    <Container>
      <VisionStyled>
        <Title>
          <Fade top>
            <h2 className="title">Our Vision</h2>
          </Fade>
        </Title>
        <VisionFlex>
          <ImgBox>
            <img src={back} alt="" />
          </ImgBox>
          <div className="flex">
            {services.map((item, idx) => (
              <div>
                <Fade top>
                  <section>
                    <h2 key={idx}>{item.title}</h2>
                  </section>
                </Fade>
                <Fade bottom>
                  <p style={{ textAlign: `${item.place}` }}>{item.text}</p>
                </Fade>

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
