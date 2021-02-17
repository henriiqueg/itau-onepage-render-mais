import Page from 'components/Page';
import Title from 'components/Patterns/Title';
import Icon from 'components/Patterns/Icon';
import Description from 'components/Patterns/Description';
import Button from 'components/Patterns/Button';

import icon from 'assets/icons/ic-09.png';

const Q11 = ({ nextPage = () => {} }) => (
  <Page>
    <Icon src={icon} />
    <Title>Os 3 Procedimentos para o sucesso do seu Atendimento!</Title>
    <Title>INFORME</Title>
    <Description>
      Precisamos transparecer todos os pontos importantes dos nossos produtos
      para os nossos clientes! Além de sanar as suas dúvidas das melhores
      maneiras possíveis. Para que você informe os clientes da melhor maneira, é
      sempre importante dar uma lida nas Dicas de Prestatividade!
    </Description>
    <div className="flex flex-wrap justify-end ml-auto items-center gap-8">
      <Button onClick={nextPage} type="button">
        PRÓXIMO
      </Button>
    </div>
  </Page>
);

export default Q11;
