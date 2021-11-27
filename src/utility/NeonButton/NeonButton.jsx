import { Button } from "./NeonButton.style";

const NeonButton = (props) => {
  return (
    <Button type={props.ty}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {props.children}
    </Button>
  );
};

export default NeonButton;
