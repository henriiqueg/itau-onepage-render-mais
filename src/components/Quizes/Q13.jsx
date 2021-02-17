import { useState } from 'react';
import { usePipwerksContext } from 'contexts/PipwerksProvider';

import Page from 'components/Page';
import Icon from 'components/Patterns/Icon';
import Title from 'components/Patterns/Title';
import Description from 'components/Patterns/Description';
import Button from 'components/Patterns/Button';

import ModalRight from 'components/Patterns/Modals/ModalRight';
import ModalWrong from 'components/Patterns/Modals/ModalWrong';

import icon from 'assets/icons/ic-03.png';

const Q13 = ({ nextPage = () => {} }) => {
  const [wrongModal, setWrongModal] = useState(false);
  const [rightModal, setRightModal] = useState(false);
  const { pipwerks } = usePipwerksContext();

  const handleRightAnswer = () => {
    pipwerks.SCORM.set('cmi.core.score.raw', '60');
    pipwerks.SCORM.set('cmi.core.lesson_status', 'incomplete');
    pipwerks.SCORM.set('cmi.core.lesson_location', '3');
    setRightModal(true);
  };

  const handleWrongAnswer = () => {
    setWrongModal(true);
  };

  return (
    <Page>
      {wrongModal && (
        <ModalWrong onClick={() => setWrongModal(false)}>
          Não foi dessa vez! Importante você voltar e ver a resposta C, que é a
          resposta completa e tem os pilares de Cultura do nosso Atendimento.
        </ModalWrong>
      )}
      {rightModal && (
        <ModalRight onClick={() => nextPage()}>
          Perfeito! A nossa Cultura de Atendimento guia as nossas ações do macro
          ao micro!
        </ModalRight>
      )}
      <div className="flex flex-col gap-8 items-center md:pt-32 xl:pt-0">
        <Icon src={icon} />
        <Title>Pílulas rápidas para aprofundar o conhecimento</Title>
        <Description>
          Quais são os pilares da Cultura de Atendimento Itaú?
        </Description>
        <div className="flex flex-col items-center gap-4">
          <Button onClick={handleWrongAnswer} type="button">
            Pensamento analógico, Personalização e Resolutividade
          </Button>
          <Button onClick={handleWrongAnswer} type="button">
            Personalização, Personificação, Resolução, Humanização e Entrega de
            Valor
          </Button>
          <Button onClick={handleRightAnswer} type="button">
            Humanização, Pessoalidade e Resolução
          </Button>
          <Button onClick={handleWrongAnswer} type="button">
            Personalização, Humanização e Resolutividade
          </Button>
        </div>
      </div>
    </Page>
  );
};

export default Q13;
