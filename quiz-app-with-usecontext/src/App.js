import React, { useReducer, useContext } from 'react';
import './App.css';
import Progress from "./components/Progress";
import Question from "./components/Question";
import Answers from "./components/Answers";

import QuizContext from "./context/QuizContext";

import { SET_CURRENT_ANSWER, SET_CURRENT_QUESTION, SET_ERROR, SET_SHOW_RESULTS, SET_ANSWERS, RESET_QUIZ } from "./reducers/Types.js";
import quizReducer from "./reducers/QuizReducer"


function App() {

  const questions = [
    {
      id: 1,
      question: 'Which statement about Hooks is not true?',
      answer_a:
        'Hooks are 100% backwards-compatible and can be used side by side with classes',
      answer_b: 'Hooks are still in beta and not available yet',
      answer_c:
        "Hooks are completely opt-in, there's no need to rewrite existing code",
      answer_d: 'All of the above',
      correct_answer: 'b',
    },
    {
      id: 2,
      question: 'Which one is not a Hook?',
      answer_a: 'useState()',
      answer_b: 'useConst()',
      answer_c: 'useReducer()',
      answer_d: 'All of the above',
      correct_answer: 'b',
    },
    {
      id: 3,
      question: 'What Hook should be used for data fetching?',
      answer_a: 'useDataFetching()',
      answer_b: 'useApi()',
      answer_c: 'useEffect()',
      answer_d: 'useRequest()',
      correct_answer: 'c',
    },
  ];

  const initialState = {
    questions,
    currentQuestion: 0,
    currentAnswer: '',
    answers: [],
    error: '',
    showResults: false
  }

  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { currentQuestion, currentAnswer, answers, showResults, error } = state;

  const question = questions[currentQuestion];

  const renderError = () => {
    if (!error) {
      return;
    }

    return <div className="error">{error}</div>;
  }

  const next = e => {

    if (!currentAnswer) {
      dispatch({ type: SET_ERROR, error: "Select an answer" })
      return;
    }

    const answer = { questionId: question.id, answer: currentAnswer }
    answers.push(answer);
    dispatch({ type: SET_ANSWERS, answers: answers })
    dispatch({ type: SET_CURRENT_ANSWER, currentAnswer: '' })

    if (currentQuestion + 1 < questions.length) {
      dispatch({ type: SET_CURRENT_QUESTION, currentQuestion: currentQuestion + 1 })
      return;
    }

    dispatch({ type: SET_SHOW_RESULTS, showResults: true })
  }

  const restart = () => {
    dispatch({ type: RESET_QUIZ })
  }

  const renderResultMark = (question, answer) => {
    console.log(question.correct_answer + " | " + answer)
    if (question.correct_answer === answer) {
      return <span className="correct">Correct</span>
    }

    return <span className="failed">Incorrect Answer</span>

  }

  const renderResultsData = () => {
    console.log(answers)
    return answers.map(answer => {
      const question = questions.find(question => question.id === answer.questionId)

      return (
        <div key={question.id}>
          {question.question} - {renderResultMark(question, answer.answer)}
        </div>
      )
    });
  }

  if (showResults) {
    return (
      <div className="container results">
        <h2>Results</h2>
        <ul>{renderResultsData()}</ul>
        <button className="btn btn-primary" onClick={restart}>Restart</button>
      </div>
    );
  } else {
    return (
      <QuizContext.Provider value={{ state, dispatch }}>
        <div className="container">
          <Progress total={questions.length} current={currentQuestion + 1} />
          <Question />
          {renderError()}
          <Answers
          />
          <button className="btn btn-primary" onClick={next}>Confirm and Continue</button>
        </div>
      </QuizContext.Provider>
    );
  }


}

export default App;
