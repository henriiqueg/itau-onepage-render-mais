import useQuiz from 'hooks/use-quiz';

import Q1 from 'components/Quizes/Q1';
import Q2 from 'components/Quizes/Q2';

const QuizScreen = () => {
  const { index, nextPage } = useQuiz();

  switch (index) {
    case 0:
      return <Q1 nextPage={nextPage} />;
    case 1:
      return <Q2 nextPage={nextPage} />;
    default:
      return <p>Carregando</p>;
  }
};

export default QuizScreen;
