import { useState } from 'react';
import { usePipwerksContext } from 'contexts/PipwerksProvider';

import Page from 'components/Page';
import Icon from 'components/Patterns/Icon';
import Title from 'components/Patterns/Title';
import Description from 'components/Patterns/Description';
import Button from 'components/Patterns/Button';

import icon from 'assets/icons/ic-04.png';

const Q1 = ({ nextPage = () => {} }) => {
  const { pipwerks } = usePipwerksContext();
  const [inputValue, setInputValue] = useState('');

  const handleNext = () => {
    pipwerks.SCORM.set('cmi.core.student_name', inputValue);
    nextPage();
  };

  return (
    <Page>
      <Icon src={icon} />
      <Title>Primeiro, vamos nos conhecer melhor!</Title>
      <div
        className="w-2/5 flex flex-col items-center mx-auto"
        style={{ minWidth: '280px' }}
      >
        <Description className="mb-2">Qual é o seu nome?</Description>
        <input
          placeholder="Digite seu nome aqui"
          className="bg-white border-primary border-2 rounded-xl py-2 px-4 w-full text-black outline-none"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <Button onClick={handleNext} type="button">
        PRÓXIMO
      </Button>
    </Page>
  );
};

export default Q1;
