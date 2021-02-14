import React, { Suspense, lazy } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Loading from './Components/Loading';
const UsersPage = lazy(() => import('./Pages/Users'));
const NewsPage = lazy(() => import('./Pages/News'));
const TodoPage = lazy(() => import('./Pages/Todo'));

const queryClient = new QueryClient();

function App() {
	return (
		<ChakraProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<Router>
					<Suspense fallback={<Loading />}>
						<Switch>
							<Route path="/users" component={UsersPage} />
							<Route path="/news" component={NewsPage} />
              <Route path="/todo" component={TodoPage} />
						</Switch>
					</Suspense>
				</Router>
			</QueryClientProvider>
		</ChakraProvider>
	);
}

export default App;
