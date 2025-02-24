import { Box, Text, VStack, HStack, ScrollView, Progress } from '@gluestack-ui/themed';

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
    grade: 7.8,
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
  return (
    <ScrollView bg="$backgroundLight0">
      <VStack space="md" p="$4">
        <Box bg="$primary100" p="$4" borderRadius="$lg">
          <Text size="xl" fontWeight="$bold" color="$primary900">
            1º Bimestre - 2024
          </Text>
        </Box>

        <VStack space="md">
          {subjects.map((subject, index) => (
            <Box
              key={index}
              bg="$white"
              p="$4"
              borderRadius="$lg"
              shadowColor="$shadowLight200"
              shadowOffset={{ width: 0, height: 2 }}
              shadowOpacity={0.25}
              shadowRadius={3.84}
              elevation={5}
            >
              <Text size="lg" fontWeight="$bold" color="$textDark900">
                {subject.name}
              </Text>
              
              <VStack space="sm" mt="$2">
                <HStack justifyContent="space-between" alignItems="center">
                  <Text size="sm" color="$textDark700">Nota:</Text>
                  <Text size="sm" fontWeight="$bold" color={subject.grade >= subject.average ? '$success700' : '$error700'}>
                    {subject.grade.toFixed(1)}
                  </Text>
                </HStack>

                <Progress value={subject.grade * 10} w="100%">
                  <Progress.FilledTrack 
                    bg={subject.grade >= subject.average ? '$success500' : '$error500'} 
                  />
                </Progress>

                <HStack justifyContent="space-between" alignItems="center">
                  <Text size="sm" color="$textDark700">Frequência:</Text>
                  <Text size="sm" fontWeight="$bold" color="$textDark900">
                    {subject.attendance}%
                  </Text>
                </HStack>
              </VStack>
            </Box>
          ))}
        </VStack>
      </VStack>
    </ScrollView>
  );
}