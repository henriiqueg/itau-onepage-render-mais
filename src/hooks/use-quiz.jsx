import { useState, useEffect } from 'react';

const useQuiz = (pagesArray = []) => {
  const [index, setIndex] = useState(0);
  const [QuizPage, setQuizPage] = useState(<p>Carregando</p>);

  useEffect(() => {
    console.log(pagesArray);
    setQuizPage(pagesArray[index]);
  }, []);

  const nextPage = () => {
    const newIndex =
      index >= pagesArray.lenght - 1 ? pagesArray.lenght : index + 1;
    setIndex(newIndex);
    setQuizPage(pagesArray[newIndex]);
  };

  const previousPage = () => {
    const newIndex = index > 0 ? index - 1 : 0;
    setIndex(newIndex);
    setQuizPage(pagesArray[newIndex]);
  };

  return { index, QuizPage, nextPage, previousPage };
};

export default useQuiz;
