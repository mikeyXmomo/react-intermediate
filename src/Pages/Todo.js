import { List, Heading, Flex } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import Loading from '../Components/Loading';
import TodoDetails from '../Components/TodoDetails';
import Layout from '../Layout/Layout';

const Todo = () => {
	const { isLoading, error, data } = useQuery('getTodo', () =>
		fetch('https://jsonplaceholder.typicode.com/users/1/todos').then((res) => res.json())
	);

	return (
		<Layout>
			{isLoading && <Loading />}
			{error && <Heading color="tomato">{error.message}</Heading>}
			<Flex justify="center" align="center">
				<List spacing={4}>
					{typeof data !== 'undefined' &&
						data.map((item) => <TodoDetails key={item.id} completed={item.completed} title={item.title} />)}
					{console.log(data)}
				</List>
			</Flex>
		</Layout>
	);
};

export default Todo;
