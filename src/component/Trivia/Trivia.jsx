import "./Trivia.css";
import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import play from "./../../assets/play.mp3";
import correct from "./../../assets/correct.mp3";
import wrong from "./../../assets/wrong.mp3";

export default function Trivia({
        questions,
        setStop,
        setQuestionNumber,
        questionNumber
    }) {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");
    const [letsPlay] = useSound(play);
    const [correctAnswer] = useSound(correct);
    const [wrongAnswer] = useSound(wrong);

    useEffect(() => {
        letsPlay();
    }, [letsPlay]);

    useEffect(() => {
        setQuestion(questions[questionNumber - 1]);
    }, [questions, questionNumber]);

    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration);
    }

    const isLastQuestion = () => {
        const lastQuestion = questions[questions.length - 1];
        return question === lastQuestion;
    }

    const handleClickHandler = (ans) => {
        setSelectedAnswer(ans);
        setClassName("answer active");

        delay(3000, () => {
            setClassName(ans.correct ? 'answer correct' : 'answer wrong');
        });

        delay(5000, () => {
            if(ans.correct){
                correctAnswer();
                delay(1000, () => {
                    setQuestionNumber((prev) => prev + 1);
                    setSelectedAnswer(null);
                    if(isLastQuestion()) {
                        setStop(true);
                    }
                });
            } else {
                wrongAnswer();
                delay(1000, () => {
                    setStop(true);
                });
            }
        });
    }

    return (
        <div className="trivia">
            <div className="question">
                {question?.question}
            </div>
            <div className="answers">
            {
                question?.answers.map((a) => (
                    <div className={selectedAnswer === a ? className : 'answer'}
                        key={a.text}
                        onClick={() => handleClickHandler(a)}
                        >
                        {a.text}
                    </div>
                ))
            }
            </div>
        </div>
    );
}
