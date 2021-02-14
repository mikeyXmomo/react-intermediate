import { Button, Heading, HStack, Spacer } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const routing = [
	{
		id: '815d0934-168d-4ea7-96fa-90fc8092310e',
		display: 'Users',
		path: '/users'
	},
	{
		id: '4aa62aa2-5edd-4306-8590-9aeeef85aa63',
		display: 'News',
		path: '/news'
	},
	{
		id: '93b66fbc-f429-4ebb-89fa-7bb25c40a68b',
		display: 'Todo',
		path: '/todo'
	}
];

const Navbar = () => {
	return (
		<HStack maxW="100vw" spacing={8} as="nav" px="6" py="4">
			<Heading as="h2" size="xl" color="teal">React Intermediate</Heading>
			<Spacer />
			{routing.map(({ display, path, id }) => (
				<RouterLink to={path} key={id}>
					<Button variant="ghost" colorScheme="teal">
						{display}
					</Button>
				</RouterLink>
			))}
		</HStack>
	);
};

export default Navbar;
