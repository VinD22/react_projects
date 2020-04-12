import React, { useState } from 'react';
import FlashcardList from "./FlashcardList";
import "./app.css";

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "What is 2 + 2?",
    answer: "4",
    options: [
      '1', '2', '3', '4'
    ]
  },
  {
    id: 2,
    question: "What is 2 + 1?",
    answer: "3",
    options: [
      '1', '2', '3', '4'
    ]
  }
]

function App() {

  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);

  return (
    <div>
      <FlashcardList flashcards={flashcards} />
    </div>
  );
}

export default App;
