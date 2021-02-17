// import { usePipwerksContext } from 'contexts/PipwerksProvider';

import Page from 'components/Page';
import Title from 'components/Patterns/Title';
import Description from 'components/Patterns/Description';
import Button from 'components/Patterns/Button';
import ButtonSecondary from 'components/Patterns/ButtonSecondary';

const Q2 = ({ nextPage = () => {} }) => (
  // const { pipwerks } = usePipwerksContext();

  // const getStudentName = () => {
  // pipwerks.SCORM.get('cmi.core.student_name');
  // };

  <Page>
    <Title>Olá</Title>
    <Title>Bem vindo ao Programa Venda Mais!</Title>
    <Description>
      Que tal começar uma jornada de aprendizagem que vai te ajudar nos seus
      próximos passos na área de Atendimento?
    </Description>
    <Description>
      Aqui iremos falar sobre diversos temas que serão super interessantes para
      o seu dia a dia!
    </Description>
    <div className="flex flex-wrap justify-center mx-auto items-center gap-8">
      <Button onClick={nextPage} type="button">
        AGORA!
      </Button>
      <ButtonSecondary onClick={nextPage} type="button">
        ESTAVA PRECISANDO DISSO!
      </ButtonSecondary>
    </div>
  </Page>
);
export default Q2;
