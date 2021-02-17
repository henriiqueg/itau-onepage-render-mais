import { useState } from 'react';
import { usePipwerksContext } from 'contexts/PipwerksProvider';

import Page from 'components/Page';
import Title from 'components/Patterns/Title';
import Icon from 'components/Patterns/Icon';
import Description from 'components/Patterns/Description';
import Button from 'components/Patterns/Button';
import ButtonSecondary from 'components/Patterns/ButtonSecondary';
import ModalDescription from 'components/Patterns/Modals/ModalDescription';

import icon from 'assets/icons/ic-03.png';

const Q20 = ({ setIndex }) => {
  const { pipwerks } = usePipwerksContext();
  const [modalFinish, setModalFinish] = useState(false);

  const getStudentName = () => {
    pipwerks.SCORM.get('cmi.core.student_name');
  };

  const handleRecomecar = () => {
    setIndex(0);
    pipwerks.SCORM.set('cmi.core.lesson_status', 'incomplete');
    pipwerks.SCORM.set('cmi.core.score.raw', '0');
  };

  const handleEncerrar = () => {
    setModalFinish(true);
  };

  return (
    <Page>
      {modalFinish && (
        <ModalDescription onClick={() => setModalFinish(false)}>
          Feche a janela para encerrar o curso!
        </ModalDescription>
      )}
      <Icon src={icon} />
      <Title>Que jornada, hein?</Title>
      <Description>
        {getStudentName()}, espero que você tenha navegado com a gente e
        aproveitado o processo de aprendizagem ao máximo! Tenha sempre em mente
        os nossos pilares: personalização, humanização e resolutividade. Com
        isso sempre em mente, aliado aos processos que nós já possuímos, os
        resultados virão com muito mais facilidade! Nos vemos em breve!
      </Description>
      <div className="flex flex-wrap justify-center mx-auto items-center gap-8">
        <Button onClick={handleRecomecar} type="button">
          RECOMEÇAR
        </Button>
        <ButtonSecondary onClick={handleEncerrar} type="button">
          ENCERRAR O CURSO
        </ButtonSecondary>
      </div>
    </Page>
  );
};

export default Q20;
