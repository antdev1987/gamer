//Style
import { NeonButon } from './NeonButton.style';

const NeonButton = (props) => {
  return (
    <NeonButon>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {props.children}
    </NeonButon>
  );
};

export default NeonButton;
