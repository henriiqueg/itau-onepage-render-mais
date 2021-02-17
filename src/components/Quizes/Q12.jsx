import Page from 'components/Page';
import Title from 'components/Patterns/Title';
import Icon from 'components/Patterns/Icon';
import Description from 'components/Patterns/Description';
import Button from 'components/Patterns/Button';

import icon from 'assets/icons/ic-09.png';

const Q12 = ({ nextPage = () => {} }) => (
  <Page>
    <Icon src={icon} />
    <Title>Os 3 Procedimentos para o sucesso do seu Atendimento!</Title>
    <Title>EXECUTE</Title>
    <Description>
      Entregue o que foi informado! Executar é o último pilar e o que conecta
      diretamente o produto com o cliente. Sempre siga as Dicas de
      Prestatividade e a execução será ímpar!
    </Description>
    <div className="flex flex-wrap justify-end ml-auto items-center gap-8">
      <Button onClick={nextPage} type="button">
        PRÓXIMO
      </Button>
    </div>
  </Page>
);

export default Q12;
