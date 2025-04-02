import { Box, Text, VStack, HStack, ScrollView, Progress, Pressable } from '@gluestack-ui/themed';
import { Ionicons } from '@expo/vector-icons';

type Subject = {
  name: string;
  grade: number;
  average: number;
  attendance: number;
};

const subjects: Subject[] = [
  {
    name: 'Matemática',
    grade: 8.5,
    average: 7.0,
    attendance: 95
  },
  {
    name: 'Português',
    grade: 9.0,
    average: 7.0,
    attendance: 98
  },
  {
    name: 'Ciências',
    grade: 5.8,
    average: 7.0,
    attendance: 92
  },
  {
    name: 'História',
    grade: 8.2,
    average: 7.0,
    attendance: 94
  },
  {
    name: 'Geografia',
    grade: 8.7,
    average: 7.0,
    attendance: 96
  }
];

export default function GradesPage() {
  const averageGrade = subjects.reduce((acc, subject) => acc + subject.grade, 0) / subjects.length;
  const averageAttendance = subjects.reduce((acc, subject) => acc + subject.attendance, 0) / subjects.length;

  return (
    <ScrollView bg="$backgroundLight50">
      <VStack space="lg" p="$4">
        {/* Header Card */}
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
            <Text size="xl" fontWeight="$bold" color="$textDark900">
              1º Bimestre - 2024
            </Text>
            <Box
              bg="$primary100"
              p="$2"
              borderRadius="$lg"
            >
              <Ionicons name="school-outline" size={24} color="#006ADC" />
            </Box>
          </HStack>

          <HStack space="md">
            <Box flex={1} bg="$primary50" p="$3" borderRadius="$lg">
              <Text size="sm" color="$textDark600">Média Geral</Text>
              <Text size="xl" fontWeight="$bold" color="$primary900">
                {averageGrade.toFixed(1)}
              </Text>
            </Box>
            <Box flex={1} bg="$secondary50" p="$3" borderRadius="$lg">
              <Text size="sm" color="$textDark600">Frequência</Text>
              <Text size="xl" fontWeight="$bold" color="$secondary900">
                {averageAttendance.toFixed(0)}%
              </Text>
            </Box>
          </HStack>
        </Box>

        {/* Subjects List */}
        <VStack space="md">
          {subjects.map((subject, index) => (
            <Pressable key={index}>
              <Box
                bg="$white"
                p="$4"
                borderRadius="$xl"
                borderLeftWidth={4}
                borderLeftColor={subject.grade >= subject.average ? '$success500' : '$error500'}
                shadowColor="$shadowLight200"
                shadowOffset={{ width: 0, height: 2 }}
                shadowOpacity={0.1}
                shadowRadius={3}
                elevation={2}
              >
                <HStack justifyContent="space-between" alignItems="center" mb="$2">
                  <Text size="lg" fontWeight="$bold" color="$textDark900">
                    {subject.name}
                  </Text>
                  <Box
                    bg={subject.grade >= subject.average ? '$success100' : '$error100'}
                    px="$3"
                    py="$1"
                    borderRadius="$full"
                  >
                    <Text
                      size="md"
                      fontWeight="$bold"
                      color={subject.grade >= subject.average ? '$success700' : '$error700'}
                    >
                      {subject.grade.toFixed(1)}
                    </Text>
                  </Box>
                </HStack>

                <VStack space="sm" mt="$3">
                  <HStack justifyContent="space-between" alignItems="center" mb="$1">
                    <Text size="sm" color="$textDark600">Progresso</Text>
                    <Text size="sm" color="$textDark600">
                      Média: {subject.average.toFixed(1)}
                    </Text>
                  </HStack>

                  <Progress
                    value={subject.grade * 10}
                    w="100%"
                    h={8}
                    borderRadius="$full"
                    bg={subject.grade >= subject.average ? '$success100' : '$error100'}
                  >
                    <Progress.FilledTrack
                      bg={subject.grade >= subject.average ? '$success500' : '$error500'}
                      borderRadius="$full"
                    />
                  </Progress>

                  <HStack space="sm" alignItems="center" mt="$1">
                    <Ionicons
                      name="time-outline"
                      size={16}
                      color="#666666"
                    />
                    <Text size="sm" color="$textDark600">
                      Frequência: {subject.attendance}%
                    </Text>
                  </HStack>
                </VStack>
              </Box>
            </Pressable>
          ))}
        </VStack>
      </VStack>
    </ScrollView>
  );
}