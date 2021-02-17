import Button from 'components/Patterns/Button';

import vendaMaisLogo from 'assets/img/logo-venda-mais.png';

const InitialScreen = ({ setQuizInit }) => (
  <div className="flex flex-col items-center justify-center gap-14 px-12 max-w-screen-md py-8 px-6 w-screen md:pt-0">
    <img className="max-w-xs w-4/5" src={vendaMaisLogo} alt="Venda Mais Logo" />
    <Button type="button" onClick={() => setQuizInit(true)}>
      QUERO APRENDER!
    </Button>
  </div>
);

export default InitialScreen;
