import React, { useState } from 'react';
import { QuizQuestion } from '../../types';
import { CheckCircle2, XCircle, Award, RotateCcw, X } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuizModalProps {
  lessonId: string;
  lessonTitle: string;
  questions: QuizQuestion[];
  isOpen: boolean;
  onClose: () => void;
  onRecordScore: (score: number, total: number) => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  lessonId,
  lessonTitle,
  questions,
  isOpen,
  onClose,
  onRecordScore,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSelect = (qIdx: number, optIdx: number) => {
    if (submitted) return;
    setSelectedAnswers({ ...selectedAnswers, [qIdx]: optIdx });
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const score = calculateScore();
    onRecordScore(score, questions.length);

    if (score === questions.length) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const score = calculateScore();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl border border-slate-700 bg-dark-900 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-dark-850">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-brand-500/10 text-brand-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Knowledge Check</h3>
              <p className="text-xs text-slate-400 truncate max-w-sm">{lessonTitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Question Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {questions.map((q, qIdx) => {
            const userChoice = selectedAnswers[qIdx];
            const isCorrect = userChoice === q.correctIndex;

            return (
              <div key={q.id || qIdx} className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold flex items-center justify-center mt-0.5">
                    {qIdx + 1}
                  </span>
                  <p className="text-slate-100 font-medium">{q.question}</p>
                </div>

                <div className="space-y-2 pl-8">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = userChoice === optIdx;
                    let optStyle = "border-slate-800 bg-dark-850 text-slate-300 hover:border-slate-700 hover:bg-dark-800";

                    if (isSelected) {
                      optStyle = "border-brand-500 bg-brand-500/10 text-white";
                    }

                    if (submitted) {
                      if (optIdx === q.correctIndex) {
                        optStyle = "border-emerald-500/80 bg-emerald-500/10 text-emerald-300 font-medium";
                      } else if (isSelected && !isCorrect) {
                        optStyle = "border-red-500/80 bg-red-500/10 text-red-300";
                      } else {
                        optStyle = "border-slate-800/60 bg-dark-900/60 text-slate-500 opacity-60";
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={submitted}
                        onClick={() => handleSelect(qIdx, optIdx)}
                        className={`w-full text-left p-3.5 rounded-xl border text-sm transition-all flex items-center justify-between ${optStyle}`}
                      >
                        <span>{opt}</span>
                        {submitted && optIdx === q.correctIndex && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 ml-2" />
                        )}
                        {submitted && isSelected && !isCorrect && (
                          <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 ml-2" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {submitted && (
                  <div className="pl-8 text-xs p-3 rounded-lg bg-dark-950 border border-slate-800 text-slate-400">
                    <span className="font-semibold text-slate-300">Explanation: </span>
                    {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-dark-850 flex items-center justify-between">
          {submitted ? (
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-white">
                Score: <span className="text-brand-400 font-bold">{score}</span> / {questions.length}
              </span>
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retry</span>
              </button>
            </div>
          ) : (
            <div className="text-xs text-slate-400">
              {Object.keys(selectedAnswers).length} of {questions.length} answered
            </div>
          )}

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm rounded-xl text-slate-400 hover:text-white transition-colors"
            >
              Close
            </button>
            {!submitted ? (
              <button
                onClick={handleSubmit}
                disabled={Object.keys(selectedAnswers).length === 0}
                className="px-5 py-2 text-sm font-medium rounded-xl bg-brand-600 hover:bg-brand-500 disabled:opacity-50 disabled:pointer-events-none text-white transition-colors shadow-lg shadow-brand-600/30"
              >
                Submit Answers
              </button>
            ) : (
              <button
                onClick={onClose}
                className="px-5 py-2 text-sm font-medium rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
              >
                Complete Lesson
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
