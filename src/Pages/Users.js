import { Flex, Grid, Heading } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import Loading from '../Components/Loading';
import UsersDetails from '../Components/UsersDetails';
import Layout from '../Layout/Layout';

const Users = () => {
	const { isLoading, error, data } = useQuery('getUsers', () =>
		fetch(' https://api.github.com/users').then((res) => res.json())
	);

	return (
		<Layout>
			{isLoading && <Loading />}
			{error && <Heading color="tomato">{error.message}</Heading>}
			<Grid templateColumns="repeat(4, 1fr)" gap="12">
				{typeof data !== 'undefined' &&
					data.map((item) => (
						<UsersDetails
							key={item.node_id}
							imageUrl={item.avatar_url}
							imageAlt={item.html_url}
							title={item.login}
							tags={item.type}
						/>
					))}
			</Grid>

			{console.log(data)}
		</Layout>
	);
};

export default Users;
