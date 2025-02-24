import { useState } from 'react';
import { Box, Text, VStack, Button, ScrollView, Progress } from '@gluestack-ui/themed';

type Question = {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
};

const questions: Question[] = [
  {
    id: 1,
    text: 'Qual é o principal objetivo da Pedagogia Logosófica?',
    options: [
      'Apenas ensinar conteúdos acadêmicos',
      'Formar o ser humano integralmente',
      'Focar apenas no desenvolvimento físico',
      'Ignorar aspectos emocionais'
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    text: 'O que significa "Logos" na palavra Logosofia?',
    options: [
      'Verbo divino',
      'Palavra escrita',
      'Conhecimento universal',
      'Sabedoria criadora'
    ],
    correctAnswer: 3
  },
  {
    id: 3,
    text: 'Qual é um dos princípios fundamentais da educação logosófica?',
    options: [
      'Competição entre alunos',
      'Memorização mecânica',
      'Autoconhecimento',
      'Isolamento social'
    ],
    correctAnswer: 2
  }
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  return (
    <ScrollView bg="$backgroundLight0">
      <VStack space="md" p="$4">
        {!showResult ? (
          <>
            <Box bg="$primary100" p="$4" borderRadius="$lg">
              <Text size="sm" color="$textDark700">
                Questão {currentQuestion + 1} de {questions.length}
              </Text>
              <Progress value={(currentQuestion + 1) * (100 / questions.length)} mt="$2">
                <Progress.FilledTrack />
              </Progress>
            </Box>

            <Box bg="$white" p="$4" borderRadius="$lg" mt="$4">
              <Text size="lg" fontWeight="$bold" color="$textDark900">
                {questions[currentQuestion].text}
              </Text>

              <VStack space="sm" mt="$4">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant={selectedAnswer === index ? 
                      (index === questions[currentQuestion].correctAnswer ? 'solid' : 'outline') : 
                      'outline'
                    }
                    bg={
                      selectedAnswer === index ?
                        (index === questions[currentQuestion].correctAnswer ? '$success500' : '$error500') :
                        '$white'
                    }
                    onPress={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                  >
                    <Text
                      color={selectedAnswer === index ? '$white' : '$textDark900'}
                    >
                      {option}
                    </Text>
                  </Button>
                ))}
              </VStack>
            </Box>
          </>
        ) : (
          <Box bg="$white" p="$4" borderRadius="$lg">
            <VStack space="md" alignItems="center">
              <Text size="2xl" fontWeight="$bold" color="$textDark900">
                Resultado Final
              </Text>
              <Text size="lg" color="$textDark700">
                Você acertou {score} de {questions.length} questões!
              </Text>
              <Progress value={(score / questions.length) * 100} w="100%" h="$2">
                <Progress.FilledTrack />
              </Progress>
              <Button onPress={resetQuiz} mt="$4">
                <Text color="$white">Tentar Novamente</Text>
              </Button>
            </VStack>
          </Box>
        )}
      </VStack>
    </ScrollView>
  );
}