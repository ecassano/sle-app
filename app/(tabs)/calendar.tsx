import { Box, Text, VStack, HStack, ScrollView, Button, Pressable } from '@gluestack-ui/themed';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

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

const eventTypeColors = {
  academic: {
    bg: '$blue100',
    border: '$blue500',
    icon: 'school-outline' as const,
  },
  cultural: {
    bg: '$purple100',
    border: '$purple500',
    icon: 'color-palette-outline' as const,
  },
  sports: {
    bg: '$green100',
    border: '$green500',
    icon: 'basketball-outline' as const,
  },
};

export default function CalendarPage() {
  const [selectedMonth, setSelectedMonth] = useState('Março 2024');
  const [selectedType, setSelectedType] = useState<'all' | Event['type']>('all');

  const filteredEvents = events.filter(
    event => selectedType === 'all' || event.type === selectedType
  );

  const handlePrevMonth = () => {
    setSelectedMonth('Fevereiro 2024');
  };

  const handleNextMonth = () => {
    setSelectedMonth('Abril 2024');
  };

  return (
    <ScrollView bg="$backgroundLight50">
      <VStack space="lg" p="$4">
        {/* Month Navigation */}
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
          <HStack justifyContent="space-between" alignItems="center">
            <Pressable onPress={handlePrevMonth}>
              <Ionicons name="chevron-back" size={24} color="#006ADC" />
            </Pressable>
            <Text size="xl" fontWeight="$bold" color="$primary900">
              {selectedMonth}
            </Text>
            <Pressable onPress={handleNextMonth}>
              <Ionicons name="chevron-forward" size={24} color="#006ADC" />
            </Pressable>
          </HStack>
        </Box>

        {/* Event Type Filters */}
        <HStack space="sm">
          <Button
            variant={selectedType === 'all' ? 'solid' : 'outline'}
            onPress={() => setSelectedType('all')}
            size="sm"
          >
            <Text color={selectedType === 'all' ? '$white' : '$primary900'}>Todos</Text>
          </Button>
          <Button
            variant={selectedType === 'academic' ? 'solid' : 'outline'}
            onPress={() => setSelectedType('academic')}
            size="sm"
          >
            <Text color={selectedType === 'academic' ? '$white' : '$primary900'}>Acadêmico</Text>
          </Button>
          <Button
            variant={selectedType === 'cultural' ? 'solid' : 'outline'}
            onPress={() => setSelectedType('cultural')}
            size="sm"
          >
            <Text color={selectedType === 'cultural' ? '$white' : '$primary900'}>Cultural</Text>
          </Button>
          <Button
            variant={selectedType === 'sports' ? 'solid' : 'outline'}
            onPress={() => setSelectedType('sports')}
            size="sm"
          >
            <Text color={selectedType === 'sports' ? '$white' : '$primary900'}>Esportes</Text>
          </Button>
        </HStack>

        {/* Events List */}
        <VStack space="md">
          {filteredEvents.map((event, index) => (
            <Pressable key={index}>
              <Box
                bg="$white"
                p="$4"
                borderRadius="$xl"
                borderLeftWidth={4}
                borderLeftColor={eventTypeColors[event.type].border}
                shadowColor="$shadowLight200"
                shadowOffset={{ width: 0, height: 2 }}
                shadowOpacity={0.1}
                shadowRadius={3}
                elevation={2}
              >
                <HStack space="md" alignItems="flex-start">
                  <Box
                    bg={eventTypeColors[event.type].bg}
                    p="$3"
                    borderRadius="$lg"
                  >
                    <Ionicons
                      name={eventTypeColors[event.type].icon}
                      size={24}
                      color="#006ADC"
                    />
                  </Box>
                  <VStack flex={1} space="xs">
                    <Text size="lg" fontWeight="$bold" color="$textDark900">
                      {event.title}
                    </Text>
                    <Text size="sm" color="$textDark600">
                      {event.description}
                    </Text>
                    <HStack space="sm" alignItems="center" mt="$1">
                      <Ionicons
                        name="calendar-outline"
                        size={20}
                        color="#666666"
                      />
                      <Text size="sm" color="$textDark400">
                        {event.date}
                      </Text>
                    </HStack>
                  </VStack>
                </HStack>
              </Box>
            </Pressable>
          ))}
        </VStack>
      </VStack>
    </ScrollView>
  );
}