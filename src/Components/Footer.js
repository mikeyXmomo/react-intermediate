import { Flex, Heading } from '@chakra-ui/react';

const Footer = () => {
	return (
		<Flex justifyContent="center" alignItems="center" h="60px">
			<Heading as="h6" color="teal" size="xs">&copy; {new Date().getFullYear()}. All Right Reserved</Heading>
		</Flex>
	);
};

export default Footer;
