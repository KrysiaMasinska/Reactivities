import { Box, Container, CssBaseline } from '@mui/material'
import NavBar from './NavBar'
import { Outlet, useLocation } from 'react-router'
import HomePage from '../../features/home/HomePage'

function App() {
	const location = useLocation()

	return (
		<Box sx={{ backgroundColor: '#E0E0E0', minHeight: '100vh' }}>
			<CssBaseline />
			{location.pathname === '/' ? (
				<HomePage />
			) : (
				<>
					<NavBar />
					<Container maxWidth='xl' sx={{ mt: 3 }}>
						<Outlet />
					</Container>
				</>
			)}
		</Box>
	)
}

export default App
