import { useState } from 'react';
import { usePipwerksContext } from 'contexts/PipwerksProvider';

import Page from 'components/Page';
import Icon from 'components/Patterns/Icon';
import Title from 'components/Patterns/Title';
import Button from 'components/Patterns/Button';

import ModalRight from 'components/Patterns/Modals/ModalRight';
import ModalWrong from 'components/Patterns/Modals/ModalWrong';

import icon from 'assets/icons/ic-06.png';

const Q3 = ({ nextPage = () => {} }) => {
  const [wrongModal, setWrongModal] = useState(false);
  const [rightModal, setRightModal] = useState(false);
  const { pipwerks } = usePipwerksContext();

  const handleRightAnswer = () => {
    pipwerks.SCORM.set('cmi.core.score.raw', '20');
    setRightModal(true);
  };

  const handleWrongAnswer = () => {
    setWrongModal(true);
  };

  return (
    <Page>
      {wrongModal && (
        <ModalWrong onClick={() => setWrongModal(false)}>
          Ooooops… Acho que precisamos voltar! Que tal tentar mais uma vez?
          Lembre da sua abordagem com o cliente, sempre pensando nele, sendo
          assertivo… (Sem muitas dicas!!)
        </ModalWrong>
      )}
      {rightModal && (
        <ModalRight onClick={() => nextPage()}>
          Uau! Estamos na mesma sintonia!! Aqui nós somos facilitadores e
          colocamos o cliente no centro para satisfazer suas necessidades e
          resolver os seus problemas!
        </ModalRight>
      )}
      <div className="flex flex-col gap-8 items-center md:pt-32 xl:pt-0">
        <Icon src={icon} />
        <Title>
          Quando você pensa sobre si mesmo, qual o tipo de atendimento que você
          mais se identifica?
        </Title>
        <div className="flex flex-col items-center gap-4">
          <Button onClick={handleWrongAnswer} type="button">
            Um atendente pensativo, que precisa refletir bastante antes de dar
            uma resposta para um cliente.
          </Button>
          <Button onClick={handleWrongAnswer} type="button">
            Um atendente que tangencia temas com o cliente e nunca entra
            propriamente nas suas dores e em como você pode resolver os
            problemas que ele possui;
          </Button>
          <Button onClick={handleRightAnswer} type="button">
            Um atendente que tem em suas mãos diversas ferramentas para
            facilitar a jornada do cliente, resolvendo os problemas no caminho.
          </Button>
          <Button onClick={handleWrongAnswer} type="button">
            Um atendente que não está contextualizado com o contexto do cliente
            e faz ofertas baseado nos produtos e não nas necessidades que o
            cliente possui.
          </Button>
        </div>
      </div>
    </Page>
  );
};

export default Q3;
