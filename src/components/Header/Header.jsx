//Animation
import Zoom from 'react-reveal/Zoom';

//Components
import { Container } from '../../utility/Container/Container.style';
import { Title } from '../../utility/Title/Title.style';

//style
import { GridContainer, HeaderStyled } from './Header.style';
import { subTagline, tagline } from './HeaderData';

const Header = () => {
  return (
    <Container>
      <HeaderStyled>
        <GridContainer>
          <section>
            <Title>
              <Zoom left cascade>
                <h2>comming soon</h2>
              </Zoom>
            </Title>
            <h3>{tagline.title}</h3>
            <h4>{tagline.text}</h4>
            <p>{subTagline}</p>
          </section>
        </GridContainer>
      </HeaderStyled>
    </Container>
  );
};

export default Header;
