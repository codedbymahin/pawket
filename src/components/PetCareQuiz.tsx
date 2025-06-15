
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface PetCareQuizProps {
  title: string;
  className?: string;
}

const PetCareQuiz = ({ title, className = "" }: PetCareQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: "How often should you feed an adult dog?",
      options: ["Once a day", "Twice a day", "Three times a day", "Free feeding"],
      correctAnswer: 1,
      explanation: "Adult dogs should be fed twice a day - morning and evening - to maintain healthy digestion and prevent bloating."
    },
    {
      id: 2,
      question: "What should you do if your pet gets overheated in Bangladesh's hot weather?",
      options: ["Give ice water immediately", "Move to cool area and offer small amounts of water", "Pour cold water over them", "Wait it out"],
      correctAnswer: 1,
      explanation: "Move your pet to a cool, shaded area and offer small amounts of cool (not ice-cold) water. Avoid sudden temperature changes."
    },
    {
      id: 3,
      question: "Which human food is toxic to both cats and dogs?",
      options: ["Rice", "Chicken", "Chocolate", "Carrots"],
      correctAnswer: 2,
      explanation: "Chocolate contains theobromine, which is toxic to both cats and dogs and can cause serious health problems or death."
    },
    {
      id: 4,
      question: "How often should you take your pet for regular vet checkups?",
      options: ["Only when sick", "Once a year", "Every 6 months", "Every 2 years"],
      correctAnswer: 1,
      explanation: "Annual checkups for healthy adult pets help prevent diseases and catch health issues early. Senior pets may need more frequent visits."
    },
    {
      id: 5,
      question: "What's the first sign of dehydration in pets?",
      options: ["Vomiting", "Loss of appetite", "Sticky gums", "Excessive sleeping"],
      correctAnswer: 2,
      explanation: "Sticky or dry gums are often the first sign of dehydration. Healthy pets should have moist, pink gums."
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    
    setShowResult(true);
    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setQuizCompleted(true);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return { message: "Excellent! You're a pet care expert! 🏆", color: "text-green-600" };
    if (percentage >= 60) return { message: "Good job! You know your pet care basics! 👍", color: "text-blue-600" };
    if (percentage >= 40) return { message: "Not bad! Keep learning about pet care! 📚", color: "text-yellow-600" };
    return { message: "Keep studying! Your pets need you to know more! 💪", color: "text-red-600" };
  };

  if (quizCompleted) {
    const scoreMessage = getScoreMessage();
    return (
      <div className={`space-y-6 ${className}`}>
        <Card className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-[#00AEEF]">Quiz Complete!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-4xl font-bold text-gray-800">
              {score}/{questions.length}
            </div>
            <div className={`text-lg font-semibold ${scoreMessage.color}`}>
              {scoreMessage.message}
            </div>
            <Button onClick={resetQuiz} className="mt-4">
              <RotateCcw size={16} className="mr-2" />
              Take Quiz Again
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#00AEEF] mb-4">{title}</h2>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-600">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-sm text-gray-600">
            Score: {score}/{currentQuestion + (showResult ? 1 : 0)}
          </span>
        </div>
        <Progress value={((currentQuestion + 1) / questions.length) * 100} className="mb-6" />
      </div>

      <Card className="border-2 rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-[#333333]">
            {questions[currentQuestion].question}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showResult}
              className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-300 ${
                selectedAnswer === index
                  ? showResult
                    ? index === questions[currentQuestion].correctAnswer
                      ? "bg-green-100 border-green-500 text-green-800"
                      : "bg-red-100 border-red-500 text-red-800"
                    : "bg-blue-100 border-blue-500 text-blue-800"
                  : showResult && index === questions[currentQuestion].correctAnswer
                  ? "bg-green-100 border-green-500 text-green-800"
                  : "bg-gray-50 border-gray-300 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {showResult && (
                  <>
                    {index === questions[currentQuestion].correctAnswer && (
                      <CheckCircle size={20} className="text-green-600" />
                    )}
                    {selectedAnswer === index && index !== questions[currentQuestion].correctAnswer && (
                      <XCircle size={20} className="text-red-600" />
                    )}
                  </>
                )}
              </div>
            </button>
          ))}

          {showResult && (
            <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-blue-800">
                <strong>Explanation:</strong> {questions[currentQuestion].explanation}
              </p>
            </div>
          )}

          {selectedAnswer !== null && !showResult && (
            <Button onClick={handleNextQuestion} className="w-full mt-4">
              {currentQuestion + 1 === questions.length ? "Finish Quiz" : "Next Question"}
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PetCareQuiz;
