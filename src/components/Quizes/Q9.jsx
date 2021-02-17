import Page from 'components/Page';
import Title from 'components/Patterns/Title';
import Icon from 'components/Patterns/Icon';
import Description from 'components/Patterns/Description';
import Button from 'components/Patterns/Button';
import ButtonSecondary from 'components/Patterns/ButtonSecondary';

import icon from 'assets/icons/ic-09.png';

const Q6 = ({ nextPage = () => {} }) => (
  <Page>
    <Icon src={icon} />
    <Title>
      A experiência que queremos provar é super importante para um atendimento
      de sucesso.
    </Title>
    <Description>
      Pensando nos pilares de venda e nos procedimentos que seguimos, queremos
      relembrar alguns conceitos importantes...
    </Description>
    <div className="flex flex-wrap justify-center mx-auto items-center gap-8">
      <Button onClick={nextPage} type="button">
        VAMOS RELEMEBRAR!
      </Button>
      <ButtonSecondary onClick={nextPage} type="button">
        EXPERIÊNCIA É TUDO!
      </ButtonSecondary>
    </div>
  </Page>
);

export default Q6;
