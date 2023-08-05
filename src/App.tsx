import { Box, Flex, Spacer } from '@chakra-ui/react';

function App() {
  return (
    <Flex>
      <Box bgColor="orange.500" color="white" p="4">
        これはなに？
      </Box>
      <Spacer />
      <Box bgColor="green.500" color="white" p="4">
        はじめかた
      </Box>
      <Spacer />
      <Box bgColor="blue.500" color="white" p="4">
        つかいかた
      </Box>
      <Spacer />
      <Box bgColor="red.500" color="white" p="4">
        ヘルプ
      </Box>
    </Flex>
  );
}

export default App;
