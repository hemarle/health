import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import logo from '../../assets/images/logo.png';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
function Layout({ children }) {
	return (
		<Box sx={{ minHeight: '100vh' }}>
			<Stack direction={{ xs: 'column', md: 'row' }}>
				{/*Logo Mobile  */}
				<Box
					p={1}
					sx={{
						'@media (min-width:900px)': { display: 'none' },
					}}
				>
					{/* logo */}
					<Box component={'img'} src={logo} />
				</Box>
				{/* sidebar */}
				<Box
					sx={{
						backgroundColor: 'white',
						flexBasis: '200px',
						'@media (max-width:899px)': { display: 'none' },
					}}
				>
					<SideBar />
				</Box>

				{/* Container */}
				<Box sx={{ flex: '1', bgcolor: '#DFE8DE' }}>{children}</Box>
			</Stack>
		</Box>
	);
}

export default Layout;

const SideBar = () => {
	return (
		<>
			<Box sx={{ width: '100%', maxWidth: '280px' }} px={4} py={2}>
				<Box>
					{/* logo */}
					<Box component={'img'} src={logo} />
				</Box>
				<Box mt={5}>
					<Stack
						direction="row"
						spacing={3}
						padding={1}
						borderRadius={1}
						bgcolor="rgba(25, 159, 132, 0.2)"
						sx={{ color: '#199F84' }}
					>
						<ForumIcon />
						<Typography fontWeight={500}>Chatbot</Typography>
					</Stack>
				</Box>
			</Box>
			<Box sx={{ width: '100%', maxWidth: '280px' }} px={4} py={2}>
				<Box>
					{/* News */}
					<Box component={'newsimg'} src={logo} alt={'news'} />
				</Box>
				<Box mt={5}>
					<Stack
						direction="row"
						spacing={3}
						padding={1}
						borderRadius={1}
						bgcolor="rgba(25, 159, 132, 0.2)"
						sx={{ color: '#199F84' }}
					>
						<ArticleOutlinedIcon />
						<Typography fontWeight={500}>News</Typography>
					</Stack>
				</Box>
			</Box>
		</>
	);
};
