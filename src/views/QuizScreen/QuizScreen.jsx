import useQuiz from 'hooks/use-quiz';

import Title from 'components/Patterns/Title';

import Q1 from 'components/Quizes/Q1';
import Q2 from 'components/Quizes/Q2';
import Q3 from 'components/Quizes/Q3';
import Q4 from 'components/Quizes/Q4';
import Q5 from 'components/Quizes/Q5';
import Q6 from 'components/Quizes/Q6';
import Q7 from 'components/Quizes/Q7';
import Q8 from 'components/Quizes/Q8';
import Q9 from 'components/Quizes/Q9';
import Q10 from 'components/Quizes/Q10';
import Q11 from 'components/Quizes/Q11';
import Q12 from 'components/Quizes/Q12';
import Q13 from 'components/Quizes/Q13';
import Q14 from 'components/Quizes/Q14';
import Q15 from 'components/Quizes/Q15';
import Q16 from 'components/Quizes/Q16';
import Q17 from 'components/Quizes/Q17';
import Q18 from 'components/Quizes/Q18';
import Q19 from 'components/Quizes/Q19';
import Q20 from 'components/Quizes/Q20';

const QuizScreen = () => {
  const { index, setIndex, nextPage } = useQuiz();

  switch (index) {
    case 0:
      return <Q1 nextPage={nextPage} />;
    case 1:
      return <Q2 nextPage={nextPage} />;
    case 2:
      return <Q3 nextPage={nextPage} />;
    case 3:
      return <Q4 nextPage={nextPage} />;
    case 4:
      return <Q5 nextPage={nextPage} />;
    case 5:
      return <Q6 nextPage={nextPage} />;
    case 6:
      return <Q7 nextPage={nextPage} />;
    case 7:
      return <Q8 nextPage={nextPage} />;
    case 8:
      return <Q9 nextPage={nextPage} />;
    case 9:
      return <Q10 nextPage={nextPage} />;
    case 10:
      return <Q11 nextPage={nextPage} />;
    case 11:
      return <Q12 nextPage={nextPage} />;
    case 12:
      return <Q13 nextPage={nextPage} />;
    case 13:
      return <Q14 nextPage={nextPage} />;
    case 14:
      return <Q15 nextPage={nextPage} />;
    case 15:
      return <Q16 nextPage={nextPage} />;
    case 16:
      return <Q17 nextPage={nextPage} />;
    case 17:
      return <Q18 nextPage={nextPage} />;
    case 18:
      return <Q19 nextPage={nextPage} />;
    case 19:
      return <Q20 setIndex={setIndex} />;
    default:
      return (
        <div>
          <Title style={{ marginBottom: 50 }}>
            Algo deu errado, por favor atualize a página
          </Title>
        </div>
      );
  }
};

export default QuizScreen;
