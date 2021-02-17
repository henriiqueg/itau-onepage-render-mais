import Page from 'components/Page';
import Title from 'components/Patterns/Title';
import Icon from 'components/Patterns/Icon';
import Description from 'components/Patterns/Description';
import Button from 'components/Patterns/Button';
import ButtonSecondary from 'components/Patterns/ButtonSecondary';

import icon from 'assets/icons/ic-04.png';

const Q4 = ({ nextPage = () => {} }) => (
  <Page>
    <Icon src={icon} />
    <Title>
      E agora que tal termos uma visão do processo de interação com os nossos
      clientes?{' '}
    </Title>
    <Description>
      Falar um pouco de como a sondagem, abordagem, oferta, argumentação de
      benefícios, decisão e acolhimento funcionam na prática!
    </Description>
    <Description>
      Ser um agente facilitador é uma tarefa que exige estudo, prática e muita
      habilidade.
    </Description>
    <div className="flex flex-wrap justify-center mx-auto items-center gap-8">
      <Button onClick={nextPage} type="button">
        VAMOS LÁ
      </Button>
      <ButtonSecondary onClick={nextPage} type="button">
        QUERO SABER MAIS DO PROCESSO!
      </ButtonSecondary>
    </div>
  </Page>
);

export default Q4;
