import Page from 'components/Page';
import Title from 'components/Patterns/Title';
import Icon from 'components/Patterns/Icon';
import Description from 'components/Patterns/Description';
import Button from 'components/Patterns/Button';

import icon from 'assets/icons/ic-09.png';

const Q10 = ({ nextPage = () => {} }) => (
  <Page>
    <Icon src={icon} />
    <Title>Os 3 Procedimentos para o sucesso do seu Atendimento!</Title>
    <Title>QUESTIONE</Title>
    <Description>
      É importante fazermos perguntas confirmatórias e entendermos melhor o
      contexto do cliente. Sondar as suas necessidades é fazê-lo se sentir
      acolhido por nós, para podermos o abordar da melhor maneira possível,
      reduzindo o atrito na nossa comunicação e passando ofertas claras e
      condizentes com suas necessidades!
    </Description>
    <div className="flex flex-wrap justify-end ml-auto items-center gap-8">
      <Button onClick={nextPage} type="button">
        PRÓXIMO
      </Button>
    </div>
  </Page>
);

export default Q10;
