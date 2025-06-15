import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, XCircle, RotateCcw, Heart, Brain } from "lucide-react";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer?: number;
  explanation?: string;
  personalityType?: string;
}

interface PersonalityResult {
  type: string;
  title: string;
  description: string;
  traits: string[];
  compatibility: string[];
  icon: string;
}

interface PetCareQuizProps {
  title: string;
  className?: string;
}

const PetCareQuiz = ({ title, className = "" }: PetCareQuizProps) => {
  const [quizType, setQuizType] = useState<"knowledge" | "personality" | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [personalityScores, setPersonalityScores] = useState<Record<string, number>>({});

  const knowledgeQuestions: QuizQuestion[] = [
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

  const personalityQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: "How does your pet react when meeting new people?",
      options: [
        "Immediately runs up to greet them with enthusiasm",
        "Approaches cautiously but friendly after a moment",
        "Observes from a distance before deciding",
        "Hides or stays close to you for protection"
      ],
      personalityType: "social"
    },
    {
      id: 2,
      question: "What's your pet's energy level like?",
      options: [
        "Always ready to play and very active",
        "Enjoys playtime but also loves to relax",
        "Moderate energy, prefers calm activities",
        "Low energy, loves sleeping and lounging"
      ],
      personalityType: "energy"
    },
    {
      id: 3,
      question: "How does your pet respond to training?",
      options: [
        "Learns quickly and loves showing off tricks",
        "Learns well with consistent practice",
        "Takes time but eventually gets it",
        "Prefers to do things their own way"
      ],
      personalityType: "intelligence"
    },
    {
      id: 4,
      question: "What's your pet's favorite activity?",
      options: [
        "Playing with toys or other pets",
        "Going for walks and exploring",
        "Cuddling and being petted",
        "Watching the world from a cozy spot"
      ],
      personalityType: "activity"
    },
    {
      id: 5,
      question: "How does your pet handle being alone?",
      options: [
        "Gets anxious and needs constant companionship",
        "Okay for short periods but prefers company",
        "Independent but enjoys your return",
        "Perfectly content being alone for hours"
      ],
      personalityType: "independence"
    },
    {
      id: 6,
      question: "What's your pet's reaction to loud noises?",
      options: [
        "Gets excited and investigates the source",
        "Startled but quickly recovers",
        "Becomes alert but stays calm",
        "Gets scared and seeks comfort"
      ],
      personalityType: "confidence"
    }
  ];

  const personalityResults: PersonalityResult[] = [
    {
      type: "social-butterfly",
      title: "The Social Butterfly",
      description: "Your pet is outgoing, friendly, and loves meeting new friends! They thrive in social situations and are great with children and other pets.",
      traits: ["Friendly", "Outgoing", "Playful", "Energetic"],
      compatibility: ["The Gentle Giant", "The Loyal Companion"],
      icon: "🦋"
    },
    {
      type: "gentle-giant",
      title: "The Gentle Giant",
      description: "Your pet has a calm, nurturing personality. They're patient, loving, and make excellent therapy animals or family pets.",
      traits: ["Calm", "Patient", "Loving", "Protective"],
      compatibility: ["The Social Butterfly", "The Independent Explorer"],
      icon: "🐻"
    },
    {
      type: "independent-explorer",
      title: "The Independent Explorer",
      description: "Your pet is confident and self-reliant. They enjoy adventures and can handle being alone, but still appreciate quality time with you.",
      traits: ["Independent", "Confident", "Curious", "Adventurous"],
      compatibility: ["The Gentle Giant", "The Wise Observer"],
      icon: "🏔️"
    },
    {
      type: "loyal-companion",
      title: "The Loyal Companion",
      description: "Your pet is devoted and forms strong bonds. They're protective of their family and prefer familiar environments and routines.",
      traits: ["Loyal", "Protective", "Devoted", "Routine-loving"],
      compatibility: ["The Social Butterfly", "The Gentle Giant"],
      icon: "❤️"
    },
    {
      type: "wise-observer",
      title: "The Wise Observer",
      description: "Your pet is thoughtful and observant. They prefer to watch and analyze before acting, showing intelligence and caution.",
      traits: ["Observant", "Intelligent", "Cautious", "Thoughtful"],
      compatibility: ["The Independent Explorer", "The Gentle Giant"],
      icon: "🦉"
    }
  ];

  const questions = quizType === "knowledge" ? knowledgeQuestions : personalityQuestions;

  const calculatePersonalityResult = () => {
    const scores: Record<string, number> = {};
    
    // Initialize scores
    personalityResults.forEach(result => {
      scores[result.type] = 0;
    });

    // Add points based on answers
    personalityQuestions.forEach((question, index) => {
      const answerIndex = personalityScores[index] || 0;
      
      switch (question.personalityType) {
        case "social":
          if (answerIndex === 0) scores["social-butterfly"] += 3;
          if (answerIndex === 1) scores["loyal-companion"] += 2;
          if (answerIndex === 2) scores["wise-observer"] += 2;
          if (answerIndex === 3) scores["gentle-giant"] += 1;
          break;
        case "energy":
          if (answerIndex === 0) scores["social-butterfly"] += 3;
          if (answerIndex === 1) scores["loyal-companion"] += 2;
          if (answerIndex === 2) scores["gentle-giant"] += 2;
          if (answerIndex === 3) scores["wise-observer"] += 3;
          break;
        case "intelligence":
          if (answerIndex === 0) scores["social-butterfly"] += 2;
          if (answerIndex === 1) scores["loyal-companion"] += 3;
          if (answerIndex === 2) scores["gentle-giant"] += 2;
          if (answerIndex === 3) scores["independent-explorer"] += 3;
          break;
        case "activity":
          if (answerIndex === 0) scores["social-butterfly"] += 3;
          if (answerIndex === 1) scores["independent-explorer"] += 3;
          if (answerIndex === 2) scores["gentle-giant"] += 3;
          if (answerIndex === 3) scores["wise-observer"] += 2;
          break;
        case "independence":
          if (answerIndex === 0) scores["loyal-companion"] += 3;
          if (answerIndex === 1) scores["social-butterfly"] += 2;
          if (answerIndex === 2) scores["independent-explorer"] += 3;
          if (answerIndex === 3) scores["wise-observer"] += 3;
          break;
        case "confidence":
          if (answerIndex === 0) scores["social-butterfly"] += 3;
          if (answerIndex === 1) scores["loyal-companion"] += 2;
          if (answerIndex === 2) scores["independent-explorer"] += 3;
          if (answerIndex === 3) scores["gentle-giant"] += 3;
          break;
      }
    });

    // Find the highest scoring personality
    const topPersonality = Object.entries(scores).reduce((a, b) => 
      scores[a[0]] > scores[b[0]] ? a : b
    )[0];

    return personalityResults.find(result => result.type === topPersonality) || personalityResults[0];
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (quizType === "knowledge") {
      if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
    } else {
      // Store personality answer
      setPersonalityScores(prev => ({
        ...prev,
        [currentQuestion]: selectedAnswer || 0
      }));
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
    }, quizType === "knowledge" ? 2000 : 1000);
  };

  const resetQuiz = () => {
    setQuizType(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
    setPersonalityScores({});
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return { message: "Excellent! You're a pet care expert! 🏆", color: "text-green-600" };
    if (percentage >= 60) return { message: "Good job! You know your pet care basics! 👍", color: "text-blue-600" };
    if (percentage >= 40) return { message: "Not bad! Keep learning about pet care! 📚", color: "text-yellow-600" };
    return { message: "Keep studying! Your pets need you to know more! 💪", color: "text-red-600" };
  };

  // Quiz type selection screen
  if (!quizType) {
    return (
      <div className={`space-y-6 ${className}`}>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#00AEEF] mb-4">{title}</h2>
          <p className="text-lg text-gray-600 mb-8">
            Choose the type of quiz you'd like to take
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card 
            className="cursor-pointer hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 hover:border-[#00AEEF]"
            onClick={() => setQuizType("knowledge")}
          >
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg">
                  <Brain size={40} className="text-white" />
                </div>
              </div>
              <CardTitle className="text-xl font-bold text-[#333333]">
                Pet Care Knowledge Quiz
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">
                Test your knowledge about pet care, health, and safety. Perfect for learning essential pet care facts.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <p>• 5 Questions</p>
                <p>• Multiple Choice</p>
                <p>• Get explanations for each answer</p>
              </div>
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 hover:border-[#00AEEF]"
            onClick={() => setQuizType("personality")}
          >
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 shadow-lg">
                  <Heart size={40} className="text-white" />
                </div>
              </div>
              <CardTitle className="text-xl font-bold text-[#333333]">
                Pet Personality Quiz
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">
                Discover your pet's unique personality type and get insights about their behavior and compatibility.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <p>• 6 Questions</p>
                <p>• Behavioral Assessment</p>
                <p>• Get personality type results</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Quiz completion screen
  if (quizCompleted) {
    if (quizType === "knowledge") {
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
                Take Another Quiz
              </Button>
            </CardContent>
          </Card>
        </div>
      );
    } else {
      const personalityResult = calculatePersonalityResult();
      return (
        <div className={`space-y-6 ${className}`}>
          <Card className="text-center p-8 bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-200">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-[#00AEEF] mb-4">
                Your Pet's Personality Result!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-6xl mb-4">{personalityResult.icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {personalityResult.title}
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  {personalityResult.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Personality Traits:</h4>
                  <div className="space-y-2">
                    {personalityResult.traits.map((trait, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#00AEEF]"></div>
                        <span className="text-gray-600">{trait}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Compatible With:</h4>
                  <div className="space-y-2">
                    {personalityResult.compatibility.map((compat, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                        <span className="text-gray-600">{compat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <Button onClick={resetQuiz} className="mt-6">
                <RotateCcw size={16} className="mr-2" />
                Take Another Quiz
              </Button>
            </CardContent>
          </Card>
        </div>
      );
    }
  }

  // Quiz questions screen
  return (
    <div className={`space-y-6 ${className}`}>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#00AEEF] mb-4">
          {quizType === "knowledge" ? "Pet Care Knowledge Quiz" : "Pet Personality Quiz"}
        </h2>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-600">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          {quizType === "knowledge" && (
            <span className="text-sm text-gray-600">
              Score: {score}/{currentQuestion + (showResult ? 1 : 0)}
            </span>
          )}
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
                  ? showResult && quizType === "knowledge"
                    ? index === questions[currentQuestion].correctAnswer
                      ? "bg-green-100 border-green-500 text-green-800"
                      : "bg-red-100 border-red-500 text-red-800"
                    : "bg-blue-100 border-blue-500 text-blue-800"
                  : showResult && quizType === "knowledge" && index === questions[currentQuestion].correctAnswer
                  ? "bg-green-100 border-green-500 text-green-800"
                  : "bg-gray-50 border-gray-300 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {showResult && quizType === "knowledge" && (
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

          {showResult && quizType === "knowledge" && questions[currentQuestion].explanation && (
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
