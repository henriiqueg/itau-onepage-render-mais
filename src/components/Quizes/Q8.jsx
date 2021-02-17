import { useState } from 'react';
import { usePipwerksContext } from 'contexts/PipwerksProvider';

import Page from 'components/Page';
import Icon from 'components/Patterns/Icon';
import Title from 'components/Patterns/Title';
import Button from 'components/Patterns/Button';

import ModalRight from 'components/Patterns/Modals/ModalRight';
import ModalWrong from 'components/Patterns/Modals/ModalWrong';

import icon from 'assets/icons/ic-02.png';

const Q8 = ({ nextPage = () => {} }) => {
  const [wrongModal, setWrongModal] = useState(false);
  const [rightModal, setRightModal] = useState(false);
  const { pipwerks } = usePipwerksContext();

  const handleRightAnswer = () => {
    pipwerks.SCORM.set('cmi.core.score.raw', '40');
    pipwerks.SCORM.set('cmi.core.lesson_status', 'incomplete');
    pipwerks.SCORM.set('cmi.core.lesson_location', '2');
    setRightModal(true);
  };

  const handleWrongAnswer = () => {
    setWrongModal(true);
  };

  return (
    <Page>
      {wrongModal && (
        <ModalWrong onClick={() => setWrongModal(false)}>
          Bem, esse é realmente um dos benefícios! No entanto, todas as outras
          respostas também eram benefícios do Mastercard Black, e digo mais,
          ainda ficou faltando o limite de crédito flexível e compatível com o
          perfil de gastos do cliente e os benefícios exclusivos com o melhor da
          gastronomia, viagens e cultura (Experiência Personnalité) que são
          super importantes para os nossos clientes!
        </ModalWrong>
      )}
      {rightModal && (
        <ModalRight onClick={() => nextPage()}>
          Isso mesmo! E os benefícios não param por aí… Ainda tem também o
          limite de crédito flexível e compatível com o perfil de gastos do
          cliente e os benefícios exclusivos com o melhor da gastronomia,
          viagens e cultura (Experiência Personnalité) que são super importantes
          para os nossos clientes!
        </ModalRight>
      )}
      <div className="flex flex-col gap-8 items-center md:pt-32 xl:pt-0">
        <Icon src={icon} />
        <Title>
          Agora diz pra gente, qual benefício do Mastercard Black você sentiu
          falta no vídeo?
        </Title>
        <div className="flex flex-col items-center gap-4">
          <Button onClick={handleWrongAnswer} type="button">
            Seguro Bagagem
          </Button>
          <Button onClick={handleWrongAnswer} type="button">
            Garantia Estendida
          </Button>
          <Button onClick={handleWrongAnswer} type="button">
            Serviço de Concierge, com recomendações e reservas de restaurantes,
            shows e eventos, no Brasil e no exterior
          </Button>
          <Button onClick={handleRightAnswer} type="button">
            Todas as alternativas anteriores
          </Button>
        </div>
      </div>
    </Page>
  );
};

export default Q8;
