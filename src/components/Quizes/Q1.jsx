import Page from 'components/Page';
import Icon from 'components/Patterns/Icon';
import Title from 'components/Patterns/Title';
import Description from 'components/Patterns/Description';
import Button from 'components/Patterns/Button';

import icon from 'assets/icons/ic-04.png';

const Q1 = ({ nextPage = () => {} }) => {
  const handleNext = () => {
    nextPage();
  };

  return (
    <Page>
      <Icon src={icon} />
      <Title>
        O processo será interativo e você precisará tomar ações ao longo da
        jornada
      </Title>
      <div
        className="w-2/5 flex flex-col items-center mx-auto"
        style={{ minWidth: '280px' }}
      >
        <Description className="mb-2">Vamos começar?</Description>
      </div>
      <Button onClick={handleNext} type="button">
        VAMOS!!
      </Button>
    </Page>
  );
};

export default Q1;
