import { Box, Text, VStack } from '@chakra-ui/react';
import { AiFillApple, AiFillShopping, AiFillHome } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <>
      <Box w={'full'} display={'flex'} justifyContent={'center'}>
        <VStack w={'xl'}>
          {/* header */}
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            border={'1px'}
            w={'inherit'}
            h={'120px'}
            position={'fixed'}
            top={0}
            backgroundColor={'black'}
            zIndex={9}
          >
            <AiFillApple color={'white'} fontSize={'24px'} />
            <Text color={'white'} fontWeight={600}>
              달구점빵
            </Text>
          </Box>

          {/* main page */}
          {children}
          {/* main page */}
          {/* footer */}
          <Box
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'space-around'}
            w={'inherit'}
            h={'120px'}
            position={'fixed'}
            bottom={0}
            bgColor={'black'}
            color={'white'}
          >
            <Link to={'/'}>
              <Box
                w={'20%'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <AiFillHome />
                <Text>HOME</Text>
              </Box>
            </Link>

            <Link to={'/shopping'}>
              <Box
                w={'20%'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <AiFillShopping />
                <Text>SHOPPING</Text>
              </Box>
            </Link>
            <Link to={'/contact'}>
              <Box
                w={'20%'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <BsFillPeopleFill />
                <Text>CONTACTUS</Text>
              </Box>
            </Link>
          </Box>
        </VStack>
      </Box>
    </>
  );
}

export default Layout;
