import { usePipwerksContext } from 'contexts/PipwerksProvider';

import Page from 'components/Page';
import Title from 'components/Patterns/Title';
import CreditCard from 'components/Patterns/CreditCard';
import Button from 'components/Patterns/Button';

import card from 'assets/img/visa-signature.webp';

const Q19 = ({ nextPage = () => {} }) => {
  const { pipwerks } = usePipwerksContext();

  const handleEncerrar = () => {
    pipwerks.SCORM.set('cmi.core.lesson_status', 'completed');
    pipwerks.SCORM.set('cmi.core.score.raw', '100');
    nextPage();
  };
  return (
    <Page>
      <CreditCard src={card} />
      <Title>VISA SIGNATURE</Title>
      <CreditCard.Description>
        - Tecnologia Aproxime e pague – basta aproximar o cartão na maquininha
        no momento do pagamento de suas compras <br />
        - 70% de isenção no Plano Anual do Rappi Prime <br />- 18 mensalidades
        gratuitas no Plano completo da ConectCar para pedidos de adesivos
        efetuados em agosto com ativação até 7 de setembro de 2020 <br />- Novas
        coberturas de viagens -{' '}
        <a
          href="www.visa.com.br/portaldebeneficios"
          className="text-blue underline"
          target="_blank"
        >
          www.visa.com.br/portaldebeneficios
        </a>{' '}
        <br />- Até 3 adicionais gratuitos.
      </CreditCard.Description>
      <div className="flex flex-wrap justify-end ml-auto items-center gap-8">
        <Button onClick={handleEncerrar} type="button">
          PRÓXIMO
        </Button>
      </div>
    </Page>
  );
};

export default Q19;
