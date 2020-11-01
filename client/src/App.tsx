import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import GlobalStyle from './styles/global'

import Chat from './pages/Chat'
import Join from './pages/Join'

const App: React.FC = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Join} />
				<Route path="/chat" component={Chat} />
			</Switch>

			<GlobalStyle />
		</Router>
	)
}

export default App
