import { Badge, Box, Image, Text } from '@chakra-ui/react';

const NewsDetails = ({ imageUrl, imageAlt, title, tags, description }) => {
	return (
		<Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
			<Image w="100%" src={imageUrl} alt={imageAlt} />

			<Box p="6">
				<Box d="flex" alignItems="baseline">
					<Badge borderRadius="full" px="2" colorScheme="teal">
						{tags}
					</Badge>
				</Box>

				<Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
					{title}
				</Box>
				<Box mt="1" fontWeight="semibold" as="h6" lineHeight="tight">
					<Text noOfLines={5} fontSize="xs">{description}</Text>
				</Box>
			</Box>
		</Box>
	);
};

export default NewsDetails;
