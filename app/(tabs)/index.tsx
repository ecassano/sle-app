import { Box, Text, VStack, Image, ScrollView } from '@gluestack-ui/themed';

export default function HomePage() {
  return (
    <ScrollView bg="$backgroundLight0">
      <VStack space="md" p="$4">
        <Box>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80' }}
            alt="Escola Logosófica"
            width="$full"
            height={200}
            borderRadius="$lg"
          />
        </Box>
        
        <VStack space="sm">
          <Text size="2xl" fontWeight="$bold" color="$textDark900">
            Bem-vindo ao SLE
          </Text>
          <Text size="md" color="$textDark700">
            Sistema Logosófico de Educação - Formando cidadãos conscientes e preparados para o futuro.
          </Text>
        </VStack>

        <Box bg="$primary100" p="$4" borderRadius="$lg">
          <Text size="lg" fontWeight="$bold" color="$primary900">
            Avisos Importantes
          </Text>
          <VStack space="xs" mt="$2">
            <Text color="$textDark700">• Reunião de pais: 15/03/2024</Text>
            <Text color="$textDark700">• Início das avaliações: 20/03/2024</Text>
            <Text color="$textDark700">• Feira de Ciências: 25/03/2024</Text>
          </VStack>
        </Box>

        <Box bg="$secondary100" p="$4" borderRadius="$lg">
          <Text size="lg" fontWeight="$bold" color="$secondary900">
            Atividades Extracurriculares
          </Text>
          <VStack space="xs" mt="$2">
            <Text color="$textDark700">• Teatro - Segundas e Quartas</Text>
            <Text color="$textDark700">• Música - Terças e Quintas</Text>
            <Text color="$textDark700">• Esportes - Sextas</Text>
          </VStack>
        </Box>
      </VStack>
    </ScrollView>
  );
}