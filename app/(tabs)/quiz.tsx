import React from 'react';
import { useState } from 'react';
import { Box, Text, VStack, Button, ScrollView, Progress, HStack, Pressable } from '@gluestack-ui/themed';
import { Ionicons } from '@expo/vector-icons';

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
    <ScrollView bg="$backgroundLight50">
      <VStack space="lg" p="$4">
        {!showResult ? (
          <>
            {/* Progress Header */}
            <Box
              bg="$white"
              p="$4"
              borderRadius="$xl"
              shadowColor="$shadowLight200"
              shadowOffset={{ width: 0, height: 2 }}
              shadowOpacity={0.1}
              shadowRadius={3}
              elevation={2}
            >
              <HStack justifyContent="space-between" alignItems="center" mb="$4">
                <VStack>
                  <Text size="sm" color="$textDark600">
                    Quiz Logosófico
                  </Text>
                  <Text size="xl" fontWeight="$bold" color="$textDark900">
                    Questão {currentQuestion + 1} de {questions.length}
                  </Text>
                </VStack>
                <Box
                  bg="$primary100"
                  p="$2"
                  borderRadius="$lg"
                >
                  <Ionicons name="school-outline" size={24} color="#006ADC" />
                </Box>
              </HStack>

              <Progress
                value={(currentQuestion + 1) * (100 / questions.length)}
                w="100%"
                h={4}
                borderRadius="$full"
                bg="$primary100"
              >
                <Progress.FilledTrack
                  bg="$primary500"
                  borderRadius="$full"
                />
              </Progress>
            </Box>

            {/* Question Card */}
            <Box
              bg="$white"
              p="$4"
              borderRadius="$xl"
              shadowColor="$shadowLight200"
              shadowOffset={{ width: 0, height: 2 }}
              shadowOpacity={0.1}
              shadowRadius={3}
              elevation={2}
            >
              <Text size="lg" fontWeight="$bold" color="$textDark900">
                {questions[currentQuestion].text}
              </Text>

              <VStack space="sm" mt="$4">
                {questions[currentQuestion].options.map((option, index) => (
                  <Pressable
                    key={index}
                    onPress={() => !selectedAnswer && handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                  >
                    <Box
                      bg={
                        selectedAnswer === null
                          ? '$white'
                          : index === questions[currentQuestion].correctAnswer
                            ? '$success100'
                            : selectedAnswer === index
                              ? '$error100'
                              : '$white'
                      }
                      borderWidth={1}
                      borderColor={
                        selectedAnswer === null
                          ? '$primary200'
                          : index === questions[currentQuestion].correctAnswer
                            ? '$success500'
                            : selectedAnswer === index
                              ? '$error500'
                              : '$primary200'
                      }
                      p="$4"
                      borderRadius="$lg"
                      opacity={selectedAnswer !== null && selectedAnswer !== index && index !== questions[currentQuestion].correctAnswer ? 0.5 : 1}
                    >
                      <HStack space="md" alignItems="center">
                        <Box
                          w={24}
                          h={24}
                          borderRadius="$full"
                          bg={
                            selectedAnswer === null
                              ? '$primary50'
                              : index === questions[currentQuestion].correctAnswer
                                ? '$success500'
                                : selectedAnswer === index
                                  ? '$error500'
                                  : '$primary50'
                          }
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Text
                            color={
                              selectedAnswer === null
                                ? '$primary900'
                                : index === questions[currentQuestion].correctAnswer
                                  ? '$white'
                                  : selectedAnswer === index
                                    ? '$white'
                                    : '$primary900'
                            }
                          >
                            {String.fromCharCode(65 + index)}
                          </Text>
                        </Box>
                        <Text
                          flex={1}
                          color={
                            selectedAnswer === null
                              ? '$textDark900'
                              : index === questions[currentQuestion].correctAnswer
                                ? '$success700'
                                : selectedAnswer === index
                                  ? '$error700'
                                  : '$textDark900'
                          }
                        >
                          {option}
                        </Text>
                        {selectedAnswer !== null && (
                          <Ionicons
                            name={
                              index === questions[currentQuestion].correctAnswer
                                ? 'checkmark-circle'
                                : selectedAnswer === index
                                  ? 'close-circle'
                                  : 'radio-button-off'
                            }
                            size={24}
                            color={
                              index === questions[currentQuestion].correctAnswer
                                ? '#16A34A'
                                : selectedAnswer === index
                                  ? '#DC2626'
                                  : '#94A3B8'
                            }
                          />
                        )}
                      </HStack>
                    </Box>
                  </Pressable>
                ))}
              </VStack>
            </Box>
          </>
        ) : (
          <Box
            bg="$white"
            p="$6"
            borderRadius="$xl"
            shadowColor="$shadowLight200"
            shadowOffset={{ width: 0, height: 2 }}
            shadowOpacity={0.1}
            shadowRadius={3}
            elevation={2}
          >
            <VStack space="lg" alignItems="center">
              <Box
                bg={score > questions.length / 2 ? '$success100' : '$error100'}
                p="$4"
                borderRadius="$full"
              >
                <Ionicons
                  name={score > questions.length / 2 ? 'trophy' : 'refresh'}
                  size={40}
                  color={score > questions.length / 2 ? '#16A34A' : '#DC2626'}
                />
              </Box>

              <Text size="3xl" fontWeight="$bold" color="$textDark900">
                Resultado Final
              </Text>

              <Box
                bg="$primary50"
                p="$4"
                borderRadius="$xl"
                width="100%"
                alignItems="center"
              >
                <Text size="md" color="$textDark600">
                  Você acertou
                </Text>
                <Text size="4xl" fontWeight="$bold" color="$primary900">
                  {score}/{questions.length}
                </Text>
                <Text size="sm" color="$textDark600">
                  questões
                </Text>
              </Box>

              <Progress
                value={(score / questions.length) * 100}
                w="100%"
                h={8}
                borderRadius="$full"
                bg="$primary100"
              >
                <Progress.FilledTrack
                  bg={score > questions.length / 2 ? '$success500' : '$error500'}
                  borderRadius="$full"
                />
              </Progress>

              <Button
                onPress={resetQuiz}
                size="lg"
                variant="solid"
                action="primary"
                borderRadius="$full"
                w="100%"
                mt="$4"
              >
                <HStack space="sm" alignItems="center">
                  <Ionicons name="refresh" size={20} color="white" />
                  <Text color="$white" fontWeight="$bold">
                    Tentar Novamente
                  </Text>
                </HStack>
              </Button>
            </VStack>
          </Box>
        )}
      </VStack>
    </ScrollView>
  );
}