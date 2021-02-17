// import { useState } from 'react';
// import { usePipwerksContext } from 'contexts/PipwerksProvider';

import vendaMaisLogo from 'assets/img/logo-venda-mais.png';

const InitialScreen = ({ setQuizInit }) => {
  // const { pipwerks } = usePipwerksContext();
  // const [status, setStatus] = useState('Não Iniciado');
  // const [score, setScore] = useState('0');
  // const [location, setLocation] = useState('1');

  // const update = () => {
  //   setStatus(pipwerks.SCORM.get('cmi.core.lesson_status'));
  //   setScore(pipwerks.SCORM.get('cmi.core.score.raw'));
  //   setLocation(pipwerks.SCORM.get('cmi.core.lesson_location'));
  // };

  // const handleButton10 = () => {
  //   pipwerks.SCORM.set('cmi.core.lesson_status', 'incomplete');
  //   pipwerks.SCORM.set('cmi.core.score.raw', '10');
  //   pipwerks.SCORM.set('cmi.core.lesson_location', '1');
  //   update();
  // };
  // const handleButton40 = () => {
  //   pipwerks.SCORM.set('cmi.core.lesson_status', 'incomplete');
  //   pipwerks.SCORM.set('cmi.core.score.raw', '40');
  //   pipwerks.SCORM.set('cmi.core.lesson_location', '2');
  //   update();
  // };
  // const handleButton80 = () => {
  //   pipwerks.SCORM.set('cmi.core.lesson_status', 'incomplete');
  //   pipwerks.SCORM.set('cmi.core.score.raw', '80');
  //   pipwerks.SCORM.set('cmi.core.lesson_location', '3');
  //   update();
  // };
  // const handleButton100 = () => {
  //   pipwerks.SCORM.set('cmi.core.lesson_status', 'incomplete');
  //   pipwerks.SCORM.set('cmi.core.score.raw', '100');
  //   pipwerks.SCORM.set('cmi.core.lesson_location', '4');
  //   update();
  // };
  // const handleButtonFinalizar = () => {
  //   pipwerks.SCORM.set('cmi.core.lesson_status', 'completed');
  //   update();
  // };
  console.log('oi');

  return (
    <div className="flex flex-col items-center justify-center gap-14 px-12">
      <img
        className="max-w-xs w-4/5"
        src={vendaMaisLogo}
        alt="Venda Mais Logo"
      />
      <button
        className="transition duration-200 bg-primary hover:bg-white text-white hover:text-primary text-3xl font-extrabold py-3 px-20 rounded-2xl shadow-xl"
        type="button"
        onClick={() => setQuizInit(true)}
      >
        QUERO APRENDER!
      </button>
    </div>
  );
};

export default InitialScreen;
