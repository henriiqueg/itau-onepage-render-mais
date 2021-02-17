import Page from 'components/Page';
import Title from 'components/Patterns/Title';
import Icon from 'components/Patterns/Icon';
import Description from 'components/Patterns/Description';
import Button from 'components/Patterns/Button';

import icon from 'assets/icons/ic-02.png';

const Q18 = ({ nextPage = () => {} }) => (
  <Page>
    <Icon src={icon} />
    <Title>
      Uma visualização sobre o Visa Infinite, o Mastercard Black e o Visa
      Signature
    </Title>
    <Title>MASTERCARD BLACK</Title>
    <Description>
      Será uma imagem feita por nós com uma foto sem fundo (.png) do cartão e a
      sua descrição de principais benefícios, sinalizando também o que é
      benefício exclusivo dele
    </Description>
    <div className="flex flex-wrap justify-end ml-auto items-center gap-8">
      <Button onClick={nextPage} type="button">
        PRÓXIMO
      </Button>
    </div>
  </Page>
);

export default Q18;
