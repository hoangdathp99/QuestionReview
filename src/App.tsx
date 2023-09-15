import './App.css';
import QuestTionPreview from './components/preview-question';
import TrueFalseQuestionPreview from './components/preview-question/true-false-question';

function App() {
  const fakeData = {
    assignment_type: "TEXT",
    level: "FUNDAMENTAL",
    display_type: "HORIZONTAL",
    question_content: "<p>test [1] test2 [2]</p>",
    solution: "",
    hint: "",
    tags: [],
    question_filter: {
        "course_id": "basic-english",
        "part_id": "part-1-introduction",
        "chapter_id": "chapter-1-phonetics-and-intonation",
        "unit_id": "unit-1.1-how-to-pronounce-vowels-and-consonants-in-english",
        "activity_id": "activity-1.1.1-listen-and-repeat-words-with-vowels-i-and-ɪ"
    },
    "question_category_id": "afb00e41-c270-408b-8335-7a8cad98ac39",
    "question_topic_id": "61e22c92-8cb0-4f28-a651-1204f5f8aa57",
    qType: "SELECT_WORD",
    answers: [
        {
            is_correct: true,
            answer: "a",
            answer_position: 1
        },
        {
            is_correct: false,
            answer: "b",
            answer_position: 1
        },
        {
            is_correct: false,
            answer: "c",
            answer_position: 1
        },
        {
            is_correct: false,
            answer: "a1",
            answer_position: 2
        },
        {
            is_correct: true,
            answer: "b2",
            answer_position: 2
        },
        {
            is_correct: false,
            answer: "c3",
            answer_position: 2
        }
    ]
  }
  return (
    <QuestTionPreview data={fakeData} type={fakeData.qType}/>
  );
}

export default App;
