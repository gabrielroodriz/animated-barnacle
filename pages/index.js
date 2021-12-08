import { Container, Box, Heading } from '@chakra-ui/react';
const Page = () => {
	return (
		<Container>
			<Box borderRadius='lg' bg='red' p={3} align='center'>
				Hello, I&apos;m a Front-End Developer based in São Paulo!
			</Box>
			<Box display={{ md: 'flex' }}>
				<Box flexGrow={1}>
					<Heading as='h2' variant='page-title'>
						Gabriel Rodrigues
					</Heading>
				</Box>
			</Box>
		</Container>
	);
};

export default Page;
