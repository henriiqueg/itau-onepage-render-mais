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

const Q15 = ({ nextPage = () => {} }) => {
  const [wrongModal, setWrongModal] = useState(false);
  const [rightModal, setRightModal] = useState(false);
  const { pipwerks } = usePipwerksContext();

  const handleRightAnswer = () => {
    pipwerks.SCORM.set('cmi.core.score.raw', '90');
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
          Ainda não! Esse foi um dos benefícios que ambos cartões possuem. O que
          é exclusivo do Visa Infinite é a letra B, 3 pontos para compras
          Internacionais e 2 pontos para compras Nacionais.
        </ModalWrong>
      )}
      {rightModal && (
        <ModalRight onClick={() => nextPage()}>
          Parabéns! Esse é o único benefício que é somente do Visa Infinite e
          não do Mastercard Black!
        </ModalRight>
      )}
      <div className="flex flex-col gap-8 items-center md:pt-32 xl:pt-0">
        <Icon src={icon} />
        <Title>Pílulas rápidas para aprofundar o conhecimento</Title>
        <Description>
          Qual a única diferença entre os principais benefícios do Visa Infinite
          e do Mastercard Black?
        </Description>
        <div className="flex flex-col items-center gap-4">
          <Button onClick={handleWrongAnswer} type="button">
            3 anos de isenção Conectar
          </Button>
          <Button onClick={handleRightAnswer} type="button">
            3 pontos para compras Internacionais e 2 pontos para compras
            Nacionais
          </Button>
          <Button onClick={handleWrongAnswer} type="button">
            6 adicionais gratuitos
          </Button>
          <Button onClick={handleWrongAnswer} type="button">
            Isenção anuidade por gastos e investimentos
          </Button>
        </div>
      </div>
    </Page>
  );
};

export default Q15;
