import { useState } from 'react';
import { usePipwerksContext } from 'contexts/PipwerksProvider';

const InitialScreen = () => {
  const { pipwerks } = usePipwerksContext();
  const [status, setStatus] = useState('Não Iniciado');
  const [score, setScore] = useState('0');
  const [location, setLocation] = useState('1');

  const update = () => {
    setStatus(pipwerks.SCORM.get('cmi.core.lesson_status'));
    setScore(pipwerks.SCORM.get('cmi.core.score.raw'));
    setLocation(pipwerks.SCORM.get('cmi.core.lesson_location'));
  };

  const handleButton10 = () => {
    pipwerks.SCORM.set('cmi.core.lesson_status', 'incomplete');
    pipwerks.SCORM.set('cmi.core.score.raw', '10');
    pipwerks.SCORM.set('cmi.core.lesson_location', '1');
    update();
  };
  const handleButton40 = () => {
    pipwerks.SCORM.set('cmi.core.lesson_status', 'incomplete');
    pipwerks.SCORM.set('cmi.core.score.raw', '40');
    pipwerks.SCORM.set('cmi.core.lesson_location', '2');
    update();
  };
  const handleButton80 = () => {
    pipwerks.SCORM.set('cmi.core.lesson_status', 'incomplete');
    pipwerks.SCORM.set('cmi.core.score.raw', '80');
    pipwerks.SCORM.set('cmi.core.lesson_location', '3');
    update();
  };
  const handleButton100 = () => {
    pipwerks.SCORM.set('cmi.core.lesson_status', 'incomplete');
    pipwerks.SCORM.set('cmi.core.score.raw', '100');
    pipwerks.SCORM.set('cmi.core.lesson_location', '4');
    update();
  };
  const handleButtonFinalizar = () => {
    pipwerks.SCORM.set('cmi.core.lesson_status', 'completed');
    update();
  };

  return (
    <div>
      <div className="row-buttons">
        <button type="button" className="button1" onClick={handleButton10}>
          10
        </button>
        <button type="button" className="button2" onClick={handleButton40}>
          40
        </button>
        <button type="button" className="button3" onClick={handleButton80}>
          80
        </button>
        <button type="button" className="button4" onClick={handleButton100}>
          100
        </button>
        <button
          type="button"
          className="finalizar"
          onClick={handleButtonFinalizar}
        >
          Finalizar
        </button>
      </div>
      <div className="row-score">
        <p className="lessonStatus">Status - {status}</p>
        <p className="score">Score - {score}</p>
        <p className="lessonLocation">Location - {location}</p>
      </div>
    </div>
  );
};

export default InitialScreen;
