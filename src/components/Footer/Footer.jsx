//Style
import { SectionFooter } from './Footer.style';
import { Data } from './FooterData';

const Footer = () => {
  return (
    <SectionFooter>
      <div>
        <p>&copy; {Data}</p>
      </div>
    </SectionFooter>
  );
};

export default Footer;
