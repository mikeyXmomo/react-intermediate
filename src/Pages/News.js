import { Flex, Grid, Heading } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import Loading from '../Components/Loading';
import NewsDetails from '../Components/NewsDetails';
import Layout from '../Layout/Layout';

const News = () => {
	const { isLoading, error, data } = useQuery('getNews', () =>
		fetch(' https://newsapi.org/v2/everything?q=bitcoin&apiKey=ce286d928b5e44fb8d3ec9566c246e1f').then((res) => res.json())
	);

	return (
		<Layout>
			{isLoading && <Loading />}
			{error && <Heading color="tomato">{error.message}</Heading>}
			<Grid templateColumns="repeat(4, 1fr)" gap="12">
				{typeof data !== 'undefined' &&
					data.articles.map((item) => (
						<NewsDetails
							key={item.publishedAt}
							imageUrl={item.urlToImage}
							imageAlt={item.title}
							title={item.title}
							tags={item.author}
                            description={item.description}
						/>
					))}
                    {console.log(data)}
			</Grid>
		</Layout>
	);
};

export default News;
