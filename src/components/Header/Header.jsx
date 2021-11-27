//Animation
import Fade from 'react-reveal/Fade';

//Components
import { Title } from '../../utility/Title/Title.style';

//style
import { GridContainer, HeaderStyled } from './Header.style';
import { subTagline, tagline, title } from './HeaderData';

const Header = () => {
  return (
    <HeaderStyled id="home">
      <GridContainer>
        <section>
          <Title>
            <Fade top>
              <h2>{title}</h2>
            </Fade>
          </Title>
          <Fade top>
            <h3>{tagline.title}</h3>
          </Fade>
          <Fade bottom>
            <h4>{tagline.text}</h4>
            <p>{subTagline}</p>
          </Fade>
        </section>
      </GridContainer>
    </HeaderStyled>
  );
};

export default Header;
