import { ListIcon, ListItem, Text } from '@chakra-ui/react';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';

const TodoDetails = ({ completed, title }) => {
	return (
		<ListItem>
			<ListIcon
				as={completed ? AiFillCheckCircle : AiFillCloseCircle}
				color={completed ? 'green.500' : 'red.500'}
			/>
			<Text fontSize="lg" as={completed ? 's' : 'u'}>
				{title}
			</Text>
		</ListItem>
	);
};

export default TodoDetails;
