import Page from 'components/Page';
import Title from 'components/Patterns/Title';
import Icon from 'components/Patterns/Icon';
import Description from 'components/Patterns/Description';
import Button from 'components/Patterns/Button';
import ButtonSecondary from 'components/Patterns/ButtonSecondary';

import icon from 'assets/icons/ic-02.png';

const Q6 = ({ nextPage = () => {} }) => (
  <Page>
    <Icon src={icon} />
    <Title>
      E nada melhor do que começarmos a entender melhor as soluções que
      entregamos por aqui, não é mesmo?
    </Title>
    <Description>
      Vamos conhecer mais do Mastercard Black e os seus benefícios!
    </Description>
    <div className="flex flex-wrap justify-center mx-auto items-center gap-8">
      <Button onClick={nextPage} type="button">
        VAMOS LÁ
      </Button>
      <ButtonSecondary onClick={nextPage} type="button">
        QUERO CONHECER!
      </ButtonSecondary>
    </div>
  </Page>
);

export default Q6;
