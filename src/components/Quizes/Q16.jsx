import Page from 'components/Page';
import Title from 'components/Patterns/Title';
import Icon from 'components/Patterns/Icon';
import Description from 'components/Patterns/Description';
import Button from 'components/Patterns/Button';
import ButtonSecondary from 'components/Patterns/ButtonSecondary';

import icon from 'assets/icons/ic-02.png';

const Q16 = ({ nextPage = () => {} }) => (
  <Page>
    <Icon src={icon} />
    <Title>
      Uma visualização sobre o Visa Infinite, o Mastercard Black e o Visa
      Signature
    </Title>
    <Description>
      Vamos revisar agora uma navegação com os nossos três produtos principais,
      o Visa Infinite, o Mastercard Black e o Visa Signature!
    </Description>
    <div className="flex flex-wrap justify-center mx-auto items-center gap-8">
      <Button onClick={nextPage} type="button">
        VAMOS LÁ!
      </Button>
      <ButtonSecondary onClick={nextPage} type="button">
        OBA, ESTAVA SENTINDO FALTA DISSO!
      </ButtonSecondary>
    </div>
  </Page>
);

export default Q16;
