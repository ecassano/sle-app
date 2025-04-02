import { Box, Text, VStack, HStack, ScrollView, Pressable } from '@gluestack-ui/themed';
import { Image, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomePage() {
  return (
    <ScrollView bg="$backgroundLight50">
      <VStack space="lg" p="$4">
        <Box
          bg="$white"
          borderRadius="$xl"
          overflow="hidden"
          shadowColor="$shadowLight200"
          shadowOffset={{ width: 0, height: 2 }}
          shadowOpacity={0.1}
          shadowRadius={3}
          elevation={2}
        >
          <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80' }}
            style={{
              width: '100%',
              height: 240,
            }}
          >
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.8)']}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                height: '100%',
              }}
            />
            <Box p="$4" position="absolute" bottom={0} width="100%">
              <Text size="3xl" fontWeight="$bold" color="$white">
                Bem-vindo ao SLE
              </Text>
              <Text size="md" color="$white" mt="$2" opacity={0.9}>
                Sistema Logosófico de Educação
              </Text>
            </Box>
          </ImageBackground>
          <Box p="$4" bg="$white">
            <HStack space="md" alignItems="center">
              <Box bg="$primary100" p="$3" borderRadius="$lg">
                <Ionicons name="school-outline" size={24} color="#006ADC" />
              </Box>
              <Text flex={1} size="md" color="$textDark700">
                Formando cidadãos conscientes e preparados para o futuro.
              </Text>
            </HStack>
          </Box>
        </Box>

        <Pressable>
          <Box
            bg="$white"
            p="$4"
            borderRadius="$xl"
            borderLeftWidth={4}
            borderLeftColor="$primary500"
            shadowColor="$shadowLight200"
            shadowOffset={{ width: 0, height: 2 }}
            shadowOpacity={0.1}
            shadowRadius={3}
            elevation={2}
          >
            <HStack space="md" alignItems="flex-start">
              <Box
                bg="$primary100"
                p="$3"
                borderRadius="$lg"
              >
                <Ionicons name="notifications-outline" size={24} color="#006ADC" />
              </Box>
              <VStack flex={1}>
                <Text size="lg" fontWeight="$bold" color="$primary900">
                  Avisos Importantes
                </Text>
                <VStack space="sm" mt="$2">
                  <HStack space="sm" alignItems="center">
                    <Ionicons name="calendar-outline" size={16} color="#666666" />
                    <Text color="$textDark700">Reunião de pais: 15/03/2024</Text>
                  </HStack>
                  <HStack space="sm" alignItems="center">
                    <Ionicons name="calendar-outline" size={16} color="#666666" />
                    <Text color="$textDark700">Início das avaliações: 20/03/2024</Text>
                  </HStack>
                  <HStack space="sm" alignItems="center">
                    <Ionicons name="calendar-outline" size={16} color="#666666" />
                    <Text color="$textDark700">Feira de Ciências: 25/03/2024</Text>
                  </HStack>
                </VStack>
              </VStack>
            </HStack>
          </Box>
        </Pressable>

        <Pressable>
          <Box
            bg="$white"
            p="$4"
            borderRadius="$xl"
            borderLeftWidth={4}
            borderLeftColor="$secondary500"
            shadowColor="$shadowLight200"
            shadowOffset={{ width: 0, height: 2 }}
            shadowOpacity={0.1}
            shadowRadius={3}
            elevation={2}
          >
            <HStack space="md" alignItems="flex-start">
              <Box
                bg="$secondary100"
                p="$3"
                borderRadius="$lg"
              >
                <Ionicons name="star-outline" size={24} color="#7C3AED" />
              </Box>
              <VStack flex={1}>
                <Text size="lg" fontWeight="$bold" color="$secondary900">
                  Atividades Extracurriculares
                </Text>
                <VStack space="sm" mt="$2">
                  <HStack space="sm" alignItems="center">
                    <Ionicons name="time-outline" size={16} color="#666666" />
                    <Text color="$textDark700">Teatro - Segundas e Quartas</Text>
                  </HStack>
                  <HStack space="sm" alignItems="center">
                    <Ionicons name="time-outline" size={16} color="#666666" />
                    <Text color="$textDark700">Música - Terças e Quintas</Text>
                  </HStack>
                  <HStack space="sm" alignItems="center">
                    <Ionicons name="time-outline" size={16} color="#666666" />
                    <Text color="$textDark700">Esportes - Sextas</Text>
                  </HStack>
                </VStack>
              </VStack>
            </HStack>
          </Box>
        </Pressable>
      </VStack>
    </ScrollView>
  );
}