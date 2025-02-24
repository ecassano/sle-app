import { Box, Text, VStack, HStack, ScrollView } from '@gluestack-ui/themed';
import { useState } from 'react';

type Event = {
  date: string;
  title: string;
  description: string;
  type: 'academic' | 'cultural' | 'sports';
};

const events: Event[] = [
  {
    date: '15/03/2024',
    title: 'Reunião de Pais',
    description: 'Reunião geral com professores e coordenação',
    type: 'academic'
  },
  {
    date: '20/03/2024',
    title: 'Início das Avaliações',
    description: 'Primeira rodada de avaliações do semestre',
    type: 'academic'
  },
  {
    date: '25/03/2024',
    title: 'Feira de Ciências',
    description: 'Apresentação dos projetos científicos',
    type: 'academic'
  },
  {
    date: '01/04/2024',
    title: 'Festival Cultural',
    description: 'Apresentações artísticas e culturais',
    type: 'cultural'
  }
];

export default function CalendarPage() {
  const [selectedMonth] = useState('Março 2024');

  return (
    <ScrollView bg="$backgroundLight0">
      <VStack space="md" p="$4">
        <Box bg="$primary100" p="$4" borderRadius="$lg">
          <Text size="xl" fontWeight="$bold" color="$primary900">
            {selectedMonth}
          </Text>
        </Box>

        <VStack space="md">
          {events.map((event, index) => (
            <Box
              key={index}
              bg="$white"
              p="$4"
              borderRadius="$lg"
              borderLeftWidth={4}
              borderLeftColor={
                event.type === 'academic'
                  ? '$blue500'
                  : event.type === 'cultural'
                  ? '$purple500'
                  : '$green500'
              }
              shadowColor="$shadowLight200"
              shadowOffset={{ width: 0, height: 2 }}
              shadowOpacity={0.25}
              shadowRadius={3.84}
              elevation={5}
            >
              <HStack justifyContent="space-between" alignItems="center">
                <Text size="lg" fontWeight="$bold" color="$textDark900">
                  {event.title}
                </Text>
                <Text size="sm" color="$textDark500">
                  {event.date}
                </Text>
              </HStack>
              <Text size="sm" color="$textDark700" mt="$2">
                {event.description}
              </Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </ScrollView>
  );
}