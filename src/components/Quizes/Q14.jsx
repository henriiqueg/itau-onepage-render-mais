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

const Q14 = ({ nextPage = () => {} }) => {
  const [wrongModal, setWrongModal] = useState(false);
  const [rightModal, setRightModal] = useState(false);
  const { pipwerks } = usePipwerksContext();

  const handleRightAnswer = () => {
    pipwerks.SCORM.set('cmi.core.score.raw', '80');
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
          Não foi dessa vez! Importante você voltar e ver a resposta B, que é a
          resposta completa e tem todos os passos para você entregar a melhor
          experiência para o cliente!
        </ModalWrong>
      )}
      {rightModal && (
        <ModalRight onClick={() => nextPage()}>
          É isso! Temos que percorrer todo o processo de abordagem para entregar
          a melhor experiência para os nossos clientes!
        </ModalRight>
      )}
      <div className="flex flex-col gap-8 items-center md:pt-32 xl:pt-0">
        <Icon src={icon} />
        <Title>Pílulas rápidas para aprofundar o conhecimento</Title>
        <Description>Qual é o processo ideal de abordagem?</Description>
        <div className="flex flex-col items-center gap-4">
          <Button onClick={handleWrongAnswer} type="button">
            Abordagem, oferta de produto, argumentação de benefícios e venda.
          </Button>
          <Button onClick={handleRightAnswer} type="button">
            Sondagem, abordagem, oferta de produto, argumentação de benefícios,
            decisão e acolhimento.
          </Button>
          <Button onClick={handleWrongAnswer} type="button">
            Sondagem, oferta, acolhimento, argumentação de benefícios, decisão e
            abordagem.
          </Button>
          <Button onClick={handleWrongAnswer} type="button">
            Sondagem, oferta de produto, argumentação de benefícios, decisão e
            acolhimento.
          </Button>
        </div>
      </div>
    </Page>
  );
};

export default Q14;
