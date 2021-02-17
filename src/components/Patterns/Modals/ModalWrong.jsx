import Button from 'components/Patterns/Button';
import Description from 'components/Patterns/Description';

import icon from 'assets/icons/wrong.png';

const ModalWrong = ({ children, onClick }) => (
  <div className="absolute w-screen h-screen bg-secondary bg-opacity-50 flex items-center justify-center">
    <div
      className="w-11/12 bg-modal flex flex-col items-center justify-center"
      style={{ maxWidth: 450 }}
    >
      <div className="bg-modal w-full h-1/2 flex flex-col items-center justify-center p-8">
        <img src={icon} alt="" />
      </div>
      <div className="bg-secondary w-full h-1/2 flex flex-col items-center justify-center p-8 gap-4">
        <Description>{children}</Description>
        <Button onClick={onClick}>TENTAR NOVAMENTE</Button>
      </div>
    </div>
  </div>
);

export default ModalWrong;
