import Button from 'components/Patterns/Button';
import Description from 'components/Patterns/Description';

const ModalDescription = ({ children, onClick }) => (
  <div className="absolute z-50 w-screen min-w-max min-h-screen h-full bg-secondary bg-opacity-50 flex items-center justify-center">
    <div
      className="w-11/12 bg-modal flex flex-col items-center justify-center"
      style={{ maxWidth: 450 }}
    >
      <div className="w-full flex flex-col items-center justify-center p-8 gap-4">
        <Description style={{ color: 'black' }}>{children}</Description>
        <Button onClick={onClick}>TUDO BEM!</Button>
      </div>
    </div>
  </div>
);

export default ModalDescription;
