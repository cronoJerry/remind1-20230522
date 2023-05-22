import { Box, Grid, GridItem, Text, VStack } from '@chakra-ui/react';
import Layout from './Layout';

const GridBackground = [
  {
    text: '6월 신상 할인',
    image:
      'https://images.unsplash.com/photo-1508107222753-0c236c337911?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    text: '7월 신상 할인',
    image:
      'https://images.unsplash.com/photo-1682687982204-f1a77dcc3067?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw3NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  ,
  {
    text: '8월 신상 할인',
    image:
      'https://images.unsplash.com/photo-1682687982298-c7514a167088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw4MHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    text: '9월 신상 할인',
    image:
      'https://images.unsplash.com/photo-1684511826202-b2cb83fc9836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  },
];
export default function Home() {
  return (
    <Layout>
      <VStack w={'full'} py={'120px'} px={4} justifyContent={'center'}>
        <Box w={'full'}>
          <Text
            fontSize={'24px'}
            fontWeight={600}
            textAlign={'center'}
            paddingBottom={4}
          >
            New Arrival
          </Text>
          <Grid gridTemplateColumns={'repeat(2,1fr)'} gap={2}>
            {GridBackground.map((item, i) => (
              <GridItem
                key={i}
                border={'1px'}
                h={'200px'}
                rounded={'12px'}
                bgImage={`url(${item.image})`}
                bgSize={'cover'}
                bgPosition={'center'}
                position={'relative'}
                overflow={'hidden'}
                _hover={{ boxShadow: '0 0 10px black' }}
              >
                <Box
                  position={'absolute'}
                  top={0}
                  left={0}
                  w={'full'}
                  h={'full'}
                  bgGradient={'linear(to-b,rgba(0,0,0,0.0),rgba(0,0,0,0.9))'}
                >
                  <Text
                    position={'absolute'}
                    bottom={4}
                    w={'full'}
                    color={'white'}
                    textAlign={'center'}
                  >
                    {item.text}
                  </Text>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box>
        <VStack w={'full'}>
          <Text fontSize={'24px'} fontWeight={600} textAlign={'center'} py={4}>
            6월 신상
          </Text>
          <Grid w={'full'}>
            {Array(4)
              .fill('')
              .map((_, i) => (
                <GridItem
                  gridTemplateColumns={'1fr'}
                  w={'full'}
                  h={'200px'}
                  marginBottom={4}
                  position={'relative'}
                  bgImage={
                    'url("https://images.unsplash.com/photo-1684457718740-190e844d5cb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60")'
                  }
                  bgSize={'cover'}
                  bgPosition={'center'}
                  rounded={'12px'}
                  border={'1px'}
                  overflow={'hidden'}
                  _hover={{ boxShadow: '0 0 10px black' }}
                >
                  <Box
                    h={'full'}
                    w={'full'}
                    bgGradient={
                      'linear(to-b,rgba(255,255,255,0.1),rgba(255,255,255,0.9))'
                    }
                    position={'absolute'}
                  >
                    <Text
                      position={'absolute'}
                      w={'full'}
                      bottom={'4px'}
                      textAlign={'center'}
                      fontWeight={600}
                      fontSize={20}
                    >
                      원피스
                    </Text>
                  </Box>
                </GridItem>
              ))}
          </Grid>
        </VStack>
      </VStack>
    </Layout>
  );
}
