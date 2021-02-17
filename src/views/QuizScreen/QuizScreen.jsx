import useQuiz from 'hooks/use-quiz';

import Title from 'components/Patterns/Title';
import Button from 'components/Patterns/Button';
import ButtonSecondary from 'components/Patterns/ButtonSecondary';

import Q1 from 'components/Quizes/Q1';
import Q2 from 'components/Quizes/Q2';
import Q3 from 'components/Quizes/Q3';
import Q4 from 'components/Quizes/Q4';

const QuizScreen = () => {
  const { index, setIndex, nextPage, previousPage } = useQuiz();

  switch (index) {
    case 0:
      return <Q1 nextPage={nextPage} />;
    case 1:
      return <Q2 nextPage={nextPage} />;
    case 2:
      return <Q3 nextPage={nextPage} />;
    case 3:
      return <Q4 nextPage={nextPage} />;
    default:
      return (
        <div>
          <Title style={{ marginBottom: 50 }}>A jornada chegou ao fim.</Title>
          <div className="flex flex-wrap justify-center mx-auto items-center gap-8">
            <Button onClick={() => previousPage()} type="button">
              VOLTAR
            </Button>
            <ButtonSecondary onClick={() => setIndex(0)} type="button">
              RECOMEÇAR
            </ButtonSecondary>
          </div>
        </div>
      );
  }
};

export default QuizScreen;
