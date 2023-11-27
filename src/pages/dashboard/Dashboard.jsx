import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Box,
	TextField,
	Stack,
	Typography,
	Button,
	Grid,
	Menu,
	MenuItem,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import Layout from '../../components/layout/Layout';
import sendImg from '../../assets/icons/send.png';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Avatar from '@mui/material/Avatar';
import SendIcon from '@mui/icons-material/Send';
import chatbot from '../../assets/images/aibot.png';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SouthEastIcon from '@mui/icons-material/SouthEast';
function Dashboard() {
	return (
		<>
			<Layout>
				<Box>
					<TopBar />
					<Box
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							flexDirection: 'column',
						}}
					>
						<HelloUser />
						<Row />
						<Other />
					</Box>
				</Box>
			</Layout>
		</>
	);
}
const TopBar = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
	const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
	return (
		<AppBar
			position="static"
			sx={{
				backgroundColor: 'white',
				color: 'black',
				boxShadow: 'none',
				height: '72px',
			}}
		>
			<Toolbar>
				{isSmallScreen && <Box style={{ flexGrow: 1 }} />}

				<Box
					sx={{
						position: 'absolute',
						left: '50%',
						transform: 'translateX(-50%)',
						display: 'flex',
						alignItems: 'center',
						border: '1px solid #ccc',
						borderRadius: '99px',
						width: isSmallScreen ? '80%' : '300px',
						height: '40px',
					}}
				>
					<IconButton
						size="large"
						disableTouchRipple
						sx={{ '&:hover': { backgroundColor: 'transparent' } }}
					>
						<SearchIcon />
					</IconButton>
					<InputBase
						placeholder="Search a symptom"
						inputProps={{ 'aria-label': 'search' }}
						sx={{ flex: 1, borderRadius: '20px', marginLeft: '8px' }}
					/>
				</Box>

				{!isSmallScreen && (
					<>
						<Box sx={{ flexGrow: 1 }} />
						<IconButton size="large">
							<HelpOutlineIcon />
						</IconButton>
						<IconButton size="large">
							<NotificationsIcon />
						</IconButton>
						<Avatar alt="User Avatar" src="your_image_url.jpg" />
					</>
				)}
			</Toolbar>
		</AppBar>
	);
};
const HelloUser = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
	const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
	return (
		<Box
			sx={{
				background: 'linear-gradient(45deg, #199F8466, #08382EAB)',
				color: 'black',
				boxShadow: 'none',
				height: isSmallScreen ? '200px' : '200px',
				width: '100%',
				maxWidth: isMediumScreen ? '600px' : '1092px',
				borderRadius: '16px',
				padding: '20px',
				border: '1px solid #ccc',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				marginTop: isSmallScreen ? '15px' : '25px',
			}}
		>
			<Box>
				<Typography
					variant="h6"
					sx={{
						color: 'white',
						fontWeight: '600',
						fontFamily: 'Euclid Circular A',
					}}
				>
					Hello Daniel,
				</Typography>
				<Typography
					sx={{
						color: 'white',
						fontSize: isSmallScreen ? '12px' : isMediumScreen ? '14px' : '16px',
					}}
					variant="small"
				>
					Hope you're feeling well today?
				</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: isSmallScreen ? 'column' : 'row',
					justifyContent: 'space-between',
				}}
			>
				<Box sx={{ marginBottom: isSmallScreen ? '10px' : '0' }}>
					{' '}
					<Typography
						variant="small"
						sx={{
							color: 'white',
							fontStyle: 'italic',
							fontSize: isSmallScreen
								? '12px'
								: isMediumScreen
								? '14px'
								: '16px',
						}}
					>
						"It is health that is real wealth and not pieces of gold and
						silver."
					</Typography>
					<br></br>
					<Typography
						sx={{
							color: 'white',
							fontStyle: 'italic',
							fontSize: isSmallScreen
								? '12px'
								: isMediumScreen
								? '14px'
								: '16px',
						}}
						variant="small"
					>
						-Mahatma Gandhi
					</Typography>
				</Box>
				<Button
					sx={{
						color: 'black',
						background: '#D6FFDD',
						borderRadius: '8px',
						height: '29px',
						width: '127px',
						border: '1px',
						px: '6px',
						py: '10px',
						boxShadow: '0px 4px 4px rgba(214, 255, 221, 0.4)',
					}}
				>
					<Typography sx={{ fontSize: '10px' }}>Take a 5 min Survey</Typography>
				</Button>
			</Box>
		</Box>
	);
};

const Row = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
	const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
	return (
		<Box
			sx={{
				maxWidth: isSmallScreen ? '100%' : isMediumScreen ? '80%' : '1092px',
				margin: '0 auto',
			}}
		>
			<Box sx={{ marginTop: isSmallScreen ? '15px' : '25px' }}>
				<Grid container spacing={isSmallScreen ? 1 : 2}>
					<Grid item xs={12} sm={6}>
						<Box
							sx={{
								width: isSmallScreen
									? 'auto'
									: isMediumScreen
									? '100%'
									: '528px',
								height: isSmallScreen ? '280px' : '257px',
								backgroundColor: 'white',
								borderRadius: '16px',
								padding: '16px',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								marginBottom: isSmallScreen ? '16px' : '0',
							}}
						>
							<Box>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<Typography
										sx={{
											color: 'rgba(0, 0, 0, 0.8)',
											fontWeight: isMediumScreen ? '500' : '600',
											fontWeight: isSmallScreen ? '400' : '600',
											fontSize: isMediumScreen ? '18px' : '28px',
										}}
									>
										Symptom Checker ChatBot
									</Typography>{' '}
									<IconButton
										aria-label="more"
										aria-controls="menu"
										aria-haspopup="true"
									>
										<MoreVertIcon />
									</IconButton>
								</Box>
								<Typography
									sx={{
										color: 'rgba(0, 0, 0, 0.8)',
										fontWeight: isMediumScreen ? '300' : '400',
										fontSize: isMediumScreen ? '14px' : '16px',
										marginTop: isSmallScreen ? '10px' : '0',
									}}
								>
									Talk to our AI Powered Chatbot, to help diagnose your
									symptoms, and recommends solutions.
								</Typography>
							</Box>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
								}}
							>
								<Box>
									<img src={chatbot} alt="chatbot image" />
								</Box>
								<Box
									sx={{
										display: 'flex',
										alignItems: 'center',
										backgroundColor: 'rgba(242, 245, 249, 1)',
										padding: isSmallScreen ? '5px' : '5px 5px 5px 10px',
										borderRadius: '50px',
										width: '100%',
										height: isSmallScreen ? 'auto' : '48px',
										maxWidth: '800px',
										justifyContent: 'center',
										'@media (max-width:768px)': {
											padding: '5px',
										},
									}}
								>
									<input
										type="text"
										placeholder="Reply to Ai Chatbot..."
										style={{
											height: '40px',
											width: '100%',
											outline: 'none',
											border: 'none',
											borderRadius: '50px',
											padding: '0 10px',
											fontSize: '16px',
											backgroundColor: 'rgba(242, 245, 249, 1)',
										}}
									/>
									<IconButton
										type="submit"
										sx={{
											bgcolor: 'primary.main',
										}}
									>
										<SendIcon sx={{ color: 'white', fontSize: '18px' }} />
									</IconButton>
								</Box>
							</Box>
						</Box>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Box
							sx={{
								width: isSmallScreen
									? 'auto'
									: isMediumScreen
									? '90%'
									: '499px',
								height: isSmallScreen ? '200px' : '257px',
								backgroundColor: '#5E7998',
								borderRadius: '16px',
								padding: '16px',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								marginBottom: isSmallScreen ? '16px' : '0',
								marginLeft: isMediumScreen ? '0' : '35px',
								marginLeft: isSmallScreen ? '0' : '35px',
							}}
						>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
								}}
							>
								<Box>
									<Typography
										sx={{
											color: 'white',
											fontWeight: isMediumScreen ? '500' : '700',
											fontSize: isMediumScreen ? '28px' : '36px',
										}}
									>
										120
										<span
											style={{
												fontSize: '14px',
												fontWeight: '600',
											}}
										>
											mmHg
										</span>
									</Typography>
									<Typography
										sx={{
											color: 'white',
											fontSize: '14px',
											fontWeight: '500',
										}}
									>
										Blood Pressure
									</Typography>
								</Box>
								<Box>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M12.5333 4H7C5.34314 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V11.4667"
											stroke="#FFFFFF"
											stroke-width="2"
										/>
										<path
											d="M16 5L17.9393 3.06066C18.5251 2.47487 19.4749 2.47487 20.0607 3.06066L20.9393 3.93934C21.5251 4.52513 21.5251 5.47487 20.9393 6.06066L19 8"
											stroke="#FFFFFF"
											stroke-width="2"
										/>
										<path
											d="M10.4393 10.5607L16 5L19 8L13.4393 13.5607C13.158 13.842 12.7765 14 12.3787 14H10V11.6213C10 11.2235 10.158 10.842 10.4393 10.5607Z"
											stroke="#FFFFFF"
											stroke-width="2"
										/>
									</svg>
								</Box>
							</Box>
							<Box>
								<svg
									width="49"
									height="40"
									viewBox="0 0 49 40"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M39.9569 10.7428H37.1558V7.94061H34.7532V10.7428H31.9526V13.1443H34.7532V15.9443H37.1558V13.1443H39.9569V10.7428Z"
										fill="white"
									/>
									<path
										d="M36.0165 0C30.7832 0 26.3304 3.37199 24.6929 8.05369H23.33C21.6904 3.37089 17.2392 0 12.0064 0C5.38541 0 0 5.38596 0 12.0053C0 15.4635 1.47878 18.578 3.82868 20.771H3.81331L23.0413 40H24.9372L43.8484 21.0855C46.3998 18.8805 48.0224 15.6326 48.0224 12.0053C48.0229 5.3876 42.637 0 36.0165 0ZM36.0165 20.0102C31.6027 20.0102 28.0122 16.4192 28.0122 12.0059C28.0122 7.59315 31.6027 4.00269 36.0165 4.00269C40.4303 4.00269 44.0208 7.59315 44.0208 12.0059C44.0208 16.4192 40.4303 20.0102 36.0165 20.0102Z"
										fill="white"
									/>
								</svg>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Box>
			<Box sx={{ marginTop: isSmallScreen ? '15px' : '25px' }}>
				<Grid container spacing={isSmallScreen ? 1 : 2}>
					<Grid item xs={12} sm={6}>
						<Box
							sx={{
								width: isSmallScreen
									? 'auto'
									: isMediumScreen
									? '100%'
									: '528px',
								height: isSmallScreen ? '200px' : '200px',
								backgroundColor: 'white',
								borderRadius: '16px',
								padding: '16px',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								marginBottom: isSmallScreen ? '16px' : '0',
							}}
						>
							<Box>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<Typography
										sx={{
											color: 'rgba(0, 0, 0, 0.8)',
											fontWeight: isMediumScreen ? '500' : '600',
											fontWeight: isSmallScreen ? '400' : '600',
											fontSize: isMediumScreen ? '18px' : '24px',
										}}
									>
										History
									</Typography>{' '}
									<Box>
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M12.5333 4H7C5.34314 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V11.4667"
												stroke="#000000"
												stroke-width="2"
											/>
											<path
												d="M16 5L17.9393 3.06066C18.5251 2.47487 19.4749 2.47487 20.0607 3.06066L20.9393 3.93934C21.5251 4.52513 21.5251 5.47487 20.9393 6.06066L19 8"
												stroke="#000000"
												stroke-width="2"
											/>
											<path
												d="M10.4393 10.5607L16 5L19 8L13.4393 13.5607C13.158 13.842 12.7765 14 12.3787 14H10V11.6213C10 11.2235 10.158 10.842 10.4393 10.5607Z"
												stroke="#000000"
												stroke-width="2"
											/>
										</svg>
									</Box>
								</Box>
							</Box>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
								}}
							></Box>
						</Box>
					</Grid>
					<Grid item xs={12} md={6} sm={6}>
						<Grid container spacing={1}>
							{/* First Column */}
							<Grid item xs={12} sm={6}>
								<Box
									sx={{
										width: isSmallScreen ? '40%' : '241px',
										width: isMediumScreen ? '90%' : '241px',
										height: isSmallScreen ? '200px' : '200px',
										backgroundColor: '#0089FF',
										borderRadius: '16px',
										padding: '16px',
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'space-between',
										marginBottom: isSmallScreen ? '16px' : '0',
										marginLeft: isMediumScreen ? '0' : '25px',
										marginLeft: isSmallScreen ? '10px' : '25px',
									}}
								>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'space-between',
										}}
									>
										<Box>
											<Typography
												sx={{
													color: 'white',
													fontWeight: isMediumScreen ? '500' : '700',
													fontSize: isMediumScreen ? '28px' : '36px',
												}}
											>
												65
												<span
													style={{
														fontSize: '14px',
														fontWeight: '600',
														color: '#A6CBFF',
													}}
												>
													BPM
												</span>
											</Typography>
											<Typography
												sx={{
													color: 'white',
													fontSize: '14px',
													fontWeight: '500',
												}}
											>
												Heart Rate
											</Typography>
										</Box>
										<Box>
											<svg
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M12.5333 4H7C5.34314 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V11.4667"
													stroke="#FFFFFF"
													stroke-width="2"
												/>
												<path
													d="M16 5L17.9393 3.06066C18.5251 2.47487 19.4749 2.47487 20.0607 3.06066L20.9393 3.93934C21.5251 4.52513 21.5251 5.47487 20.9393 6.06066L19 8"
													stroke="#FFFFFF"
													stroke-width="2"
												/>
												<path
													d="M10.4393 10.5607L16 5L19 8L13.4393 13.5607C13.158 13.842 12.7765 14 12.3787 14H10V11.6213C10 11.2235 10.158 10.842 10.4393 10.5607Z"
													stroke="#FFFFFF"
													stroke-width="2"
												/>
											</svg>
										</Box>
									</Box>
									<Box>
										<svg
											width="68"
											height="54"
											viewBox="0 0 68 54"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M0 33.4677H13.8837C15.0343 33.4677 15.9671 32.535 15.9671 31.3844V20.9565C15.9671 19.8059 16.8998 18.8731 18.0504 18.8731H20.8762C22.0268 18.8731 22.9595 19.8059 22.9595 20.9565V49.9167C22.9595 51.0673 23.8922 52 25.0428 52H28.1418C29.2924 52 30.2252 51.0673 30.2252 49.9167V4.08333C30.2252 2.93274 31.1579 2 32.3085 2H35.9887C37.1393 2 38.0721 2.93274 38.0721 4.08333V49.9167C38.0721 51.0673 39.0048 52 40.1554 52H42.6731C43.8237 52 44.7565 51.0673 44.7565 49.9167V20.9565C44.7565 19.8059 45.6892 18.8731 46.8398 18.8731H49.3576C50.5082 18.8731 51.4409 19.8059 51.4409 20.9565V31.3844C51.4409 32.535 52.3736 33.4677 53.5242 33.4677H67.3611"
												stroke="#78AEFF"
												stroke-width="2.77778"
											/>
											<path
												d="M0 33.4677H13.8837C15.0343 33.4677 15.9671 32.535 15.9671 31.3844V20.9565C15.9671 19.8059 16.8998 18.8731 18.0504 18.8731H20.8762C22.0268 18.8731 22.9595 19.8059 22.9595 20.9565V49.9167C22.9595 51.0673 23.8922 52 25.0428 52H28.1418C29.2924 52 30.2252 51.0673 30.2252 49.9167V4.08333C30.2252 2.93274 31.1579 2 32.3085 2H35.9887C37.1393 2 38.0721 2.93274 38.0721 4.08333V33.4677"
												stroke="#D0E4FF"
												stroke-width="2.77778"
											/>
										</svg>
									</Box>
								</Box>
							</Grid>

							{/* Second Column */}
							<Grid item xs={12} sm={6}>
								<Box
									sx={{
										width: isSmallScreen ? '40%' : '241px',
										width: isMediumScreen ? '90%' : '241px',
										height: isSmallScreen ? '200px' : '200px',
										backgroundColor: '#519578',
										borderRadius: '16px',
										padding: '16px',
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'space-between',
										marginBottom: isSmallScreen ? '16px' : '0',
										marginLeft: isMediumScreen ? '10px' : '13px',
										marginLeft: isSmallScreen ? '10px' : '13px',
									}}
								>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'space-between',
										}}
									>
										<Box>
											<Typography
												sx={{
													color: 'white',
													fontWeight: isMediumScreen ? '500' : '700',
													fontSize: isMediumScreen ? '28px' : '36px',
												}}
											>
												87
												<span
													style={{
														fontSize: '14px',
														fontWeight: '600',
														color: '#D9FBFB',
													}}
												>
													h
												</span>
											</Typography>
											<Typography
												sx={{
													color: 'white',
													fontSize: '14px',
													fontWeight: '500',
												}}
											>
												Sleep
											</Typography>
										</Box>
										<Box>
											<svg
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M12.5333 4H7C5.34314 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V11.4667"
													stroke="#FFFFFF"
													stroke-width="2"
												/>
												<path
													d="M16 5L17.9393 3.06066C18.5251 2.47487 19.4749 2.47487 20.0607 3.06066L20.9393 3.93934C21.5251 4.52513 21.5251 5.47487 20.9393 6.06066L19 8"
													stroke="#FFFFFF"
													stroke-width="2"
												/>
												<path
													d="M10.4393 10.5607L16 5L19 8L13.4393 13.5607C13.158 13.842 12.7765 14 12.3787 14H10V11.6213C10 11.2235 10.158 10.842 10.4393 10.5607Z"
													stroke="#FFFFFF"
													stroke-width="2"
												/>
											</svg>
										</Box>
									</Box>
									<Box>
										<svg
											width="62"
											height="50"
											viewBox="0 0 62 50"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<rect
												x="0.5"
												y="15.2778"
												width="2.77778"
												height="34.7222"
												rx="1.38889"
												fill="#9EEFF0"
											/>
											<rect
												x="0.5"
												y="21.5278"
												width="2.77778"
												height="28.4722"
												rx="1.38889"
												fill="white"
											/>
											<rect
												x="10.2222"
												y="22.9167"
												width="2.77778"
												height="27.0833"
												rx="1.38889"
												fill="#9EEFF0"
											/>
											<rect
												x="10.2222"
												y="38.1944"
												width="2.77778"
												height="11.8056"
												rx="1.38889"
												fill="white"
											/>
											<rect
												x="19.9443"
												width="2.77778"
												height="50"
												rx="1.38889"
												fill="#9EEFF0"
											/>
											<rect
												x="19.9443"
												y="13.8889"
												width="2.77778"
												height="36.1111"
												rx="1.38889"
												fill="white"
											/>
											<rect
												x="29.667"
												y="9.72223"
												width="2.77778"
												height="40.2778"
												rx="1.38889"
												fill="#9EEFF0"
											/>
											<rect
												x="29.667"
												y="23.6111"
												width="2.77778"
												height="26.3889"
												rx="1.38889"
												fill="white"
											/>
											<rect
												x="39.3892"
												y="17.3611"
												width="2.77778"
												height="32.6389"
												rx="1.38889"
												fill="#9EEFF0"
											/>
											<rect
												x="39.3892"
												y="38.1945"
												width="2.77778"
												height="11.8056"
												rx="1.38889"
												fill="white"
											/>
											<rect
												x="49.1113"
												y="11.1111"
												width="2.77778"
												height="38.8889"
												rx="1.38889"
												fill="#9EEFF0"
											/>
											<rect
												x="49.1113"
												y="42.3611"
												width="2.77778"
												height="7.63889"
												rx="1.38889"
												fill="white"
											/>
											<rect
												x="58.8335"
												y="22.9167"
												width="2.77778"
												height="27.0833"
												rx="1.38889"
												fill="#9EEFF0"
											/>
											<rect
												x="58.8335"
												y="29.8611"
												width="2.77778"
												height="20.1389"
												rx="1.38889"
												fill="white"
											/>
										</svg>
									</Box>
								</Box>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};
const Other = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
	const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
	const [isEditing, setIsEditing] = useState(false);
	const [height, setHeight] = useState('');
	const [weight, setWeight] = useState('');
	const [bmi, setBMI] = useState(null);
	const handleButtonClick = () => {
		setIsEditing(true);
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		if (name === 'height') {
			setHeight(value);
		} else if (name === 'weight') {
			setWeight(value);
		}
	};

	const calculateBMI = () => {
		const heightInMeters = parseFloat(height) / 100; // Assuming height is entered in centimeters
		const weightInKg = parseFloat(weight);

		console.log('heightInMeters:', heightInMeters);
		console.log('weightInKg:', weightInKg);

		if (!isNaN(heightInMeters) && !isNaN(weightInKg) && heightInMeters > 0) {
			const bmiValue = weightInKg / (heightInMeters * heightInMeters);
			setBMI(bmiValue.toFixed(0));
		} else {
			// Handle invalid input
			setBMI(null);
		}
	};

	const handleSave = () => {
		calculateBMI();
		setIsEditing(false);
	};

	return (
		<Box
			sx={{
				maxWidth: isSmallScreen ? '100%' : isMediumScreen ? '80%' : '1092px',
				margin: '0 auto 20px',
			}}
		>
			<Box sx={{ marginTop: isSmallScreen ? '15px' : '25px' }}>
				<Grid container spacing={isSmallScreen ? 1 : 2}>
					<Grid item xs={12} sm={6} md={6}>
						<Box
							sx={{
								width: isSmallScreen
									? 'auto'
									: isMediumScreen
									? '100%'
									: '528px',
								height: isSmallScreen ? '200px' : '204px',
								background: 'linear-gradient(45deg, #FFFFFF, #00B2771A)',
								borderRadius: '16px',
								padding: '16px',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								marginBottom: isSmallScreen ? '16px' : '0',
								border: '1px solid #199F8499',
							}}
						>
							<Box>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<Typography
										sx={{
											color: 'rgba(0, 0, 0, 0.8)',
											fontWeight: isMediumScreen ? '500' : '600',
											fontWeight: isSmallScreen ? '400' : '600',
											fontSize: isMediumScreen ? '12px' : '16px',
										}}
									>
										Upgrade to Pro
									</Typography>
								</Box>
							</Box>
							<Box>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<Box
										sx={{
											display: 'flex',
											gap: '20px',
										}}
									>
										<Box>
											<Typography
												sx={{
													color: 'rgba(0, 0, 0, 0.8)',
													fontWeight: isMediumScreen ? '500' : '700',
													fontWeight: isSmallScreen ? '400' : '700',
													fontSize: isMediumScreen ? '12px' : '32px',
												}}
											>
												$10
											</Typography>
										</Box>
										<Box>
											<Box>
												<Typography
													sx={{
														color: 'rgba(0, 0, 0, 0.8)',
														fontWeight: isMediumScreen ? '500' : '500',
														fontWeight: isSmallScreen ? '400' : '500',
														fontSize: isMediumScreen ? '12px' : '14px',
													}}
												>
													Per User
												</Typography>
											</Box>
											<Box>
												<Typography
													sx={{
														color: 'rgba(0, 0, 0, 0.8)',
														fontWeight: isMediumScreen ? '500' : '500',
														fontWeight: isSmallScreen ? '400' : '500',
														fontSize: isMediumScreen ? '12px' : '14px',
													}}
												>
													Per Month
												</Typography>
											</Box>
										</Box>
									</Box>
									<Button
										sx={{
											color: 'white',
											background: '#00B277',
											borderRadius: '8px',
											height: '29px',
											width: '107px',
											border: '1px',
											px: '6px',
											py: '10px',
											textTransform: 'none',
											boxShadow: '0px 4px 4px rgba(0, 178, 119, 0.5)',
										}}
									>
										<Typography sx={{ fontSize: '12px' }}>
											Start free trial
										</Typography>
									</Button>
								</Box>
							</Box>
							<Box>
								<Typography
									sx={{
										fontSize: '14px',
										fontWeight: '500',
										color: '#332F2FCC',
									}}
								>
									- Access to unlimited doctors
								</Typography>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center',
									}}
								>
									<Typography
										sx={{
											fontSize: '14px',
											fontWeight: '500',
											color: '#332F2FCC',
										}}
									>
										- Download medical report
									</Typography>
									<Box>
										<IconButton>
											<SouthEastIcon />
										</IconButton>
									</Box>
								</Box>
							</Box>
						</Box>
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<Box
							sx={{
								width: isSmallScreen
									? 'auto'
									: isMediumScreen
									? '90%'
									: '499px',
								height: isSmallScreen ? '200px' : '204px',
								backgroundColor: '#00B277',
								borderRadius: '16px',
								padding: '16px',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								marginBottom: isSmallScreen ? '16px' : '0',
								marginLeft: isMediumScreen ? '0' : '35px',
								marginLeft: isSmallScreen ? '0' : '35px',
							}}
						>
							{isEditing ? (
								<Box
									sx={{
										display: 'flex',
										flexDirection: 'column',
									}}
								>
									<Typography sx={{ color: 'white' }}>Height</Typography>
									<TextField
										type="text"
										name="height"
										onChange={handleInputChange}
										variant="outlined"
										size="small"
										placeholder="Height (in cm)"
										margin="0"
									/>
									<Typography sx={{ color: 'white', margin: '0' }}>
										Weight
									</Typography>

									<TextField
										type="text"
										name="weight"
										onChange={handleInputChange}
										variant="outlined"
										size="small"
										placeholder="Weight (in kg)"
									/>
									<Button
										onClick={() => {
											handleSave();
											setIsEditing(false);
										}}
										sx={{
											color: 'white',
											marginTop: '16px',
											backgroundColor: 'white',
											border: '8px',
											color: 'black',
											fontWeight: isMediumScreen ? '500' : '600',
											fontSize: isMediumScreen ? '12px' : '16px',
										}}
									>
										Save
									</Button>
								</Box>
							) : (
								<>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'space-between',
										}}
									>
										<Box>
											<Typography
												sx={{
													color: 'white',
													fontWeight: isMediumScreen ? '500' : '600',
													fontSize: isMediumScreen ? '12px' : '16px',
												}}
											>
												Body Mass Index (BMI)
											</Typography>
										</Box>
										<Box>
											<Box>
												<select
													id="dateFilter"
													style={{
														borderRadius: '8px',
														backgroundColor: 'white',
														width: isMediumScreen ? '100px' : '110px',
														height: '30px',
														px: '5px',
														py: '4px',
													}}
												>
													<option value="lastWeek">Last Week</option>
													<option value="thisMonth">This Month</option>
													<option value="today">Today</option>
												</select>
											</Box>
										</Box>
									</Box>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'space-between',
										}}
									>
										<Box>
											<Typography
												sx={{
													color: 'white',
													fontWeight: isMediumScreen ? '500' : '600',
													fontSize: isMediumScreen ? '12px' : '16px',
												}}
											>
												{bmi !== null ? bmi : '24'}
											</Typography>
										</Box>
										<Box>
											<Box>
												<Button
													onClick={handleButtonClick}
													style={{
														borderRadius: '8px',
														backgroundColor: 'white',
														width: isMediumScreen ? '100px' : '110px',
														height: '30px',
														px: '5px',
														py: '4px',
														background: '#D6FFDD80',
														border: '1px solid #D6FFDD80',
													}}
												>
													<Typography
														variant="body2"
														sx={{
															fontSize: isMediumScreen ? '8px' : '12px',
															color: 'white',
															textTransform: 'none',
														}}
													>
														You're Healthy
													</Typography>
												</Button>
											</Box>
										</Box>
									</Box>
									<Box
										sx={{
											width: '100%',
										}}
									>
										<svg
											width="100%"
											height="auto"
											viewBox="0 0 467 53"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<rect
												x="230"
												y="1"
												width="7"
												height="7"
												rx="3.5"
												fill="#D16564"
												stroke="white"
											/>
											<rect
												y="14.5"
												width="467"
												height="14"
												rx="7"
												fill="url(#paint0_linear_85_876)"
											/>
											<path
												d="M1.848 48.5V41.768H0L1.296 39.98H3.66V48.5H1.848ZM7.76259 48.632C6.95459 48.632 6.24659 48.384 5.63859 47.888C5.03059 47.384 4.71059 46.748 4.67859 45.98H6.55059C6.61459 46.236 6.75859 46.444 6.98259 46.604C7.20659 46.764 7.46659 46.844 7.76259 46.844C8.13859 46.844 8.43059 46.736 8.63859 46.52C8.84659 46.304 8.95059 46.02 8.95059 45.668C8.95059 45.332 8.83859 45.052 8.61459 44.828C8.39059 44.604 8.11059 44.492 7.77459 44.492C7.46259 44.492 7.19859 44.576 6.98259 44.744C6.76659 44.904 6.61059 45.116 6.51459 45.38L4.94259 44.888L5.92659 39.98H10.1146V41.732H7.31859L7.03059 43.088C7.31059 42.936 7.67459 42.86 8.12259 42.86C8.92259 42.86 9.56259 43.132 10.0426 43.676C10.5226 44.22 10.7626 44.928 10.7626 45.8C10.7626 46.68 10.4906 47.372 9.94659 47.876C9.41059 48.38 8.68259 48.632 7.76259 48.632Z"
												fill="white"
											/>
											<path
												d="M55.848 48.5V41.768H54L55.296 39.98H57.66V48.5H55.848ZM61.8706 48.632C60.9906 48.632 60.2586 48.372 59.6746 47.852C59.0906 47.332 58.7986 46.672 58.7986 45.872C58.7986 44.968 59.1386 44.3 59.8186 43.868C59.3626 43.436 59.1346 42.872 59.1346 42.176C59.1346 41.496 59.3826 40.936 59.8786 40.496C60.3826 40.056 61.0466 39.836 61.8706 39.836C62.6946 39.836 63.3546 40.056 63.8506 40.496C64.3546 40.936 64.6066 41.496 64.6066 42.176C64.6066 42.864 64.3746 43.428 63.9106 43.868C64.5986 44.308 64.9426 44.976 64.9426 45.872C64.9426 46.672 64.6466 47.332 64.0546 47.852C63.4706 48.372 62.7426 48.632 61.8706 48.632ZM61.8706 46.964C62.2306 46.964 62.5186 46.852 62.7346 46.628C62.9586 46.396 63.0706 46.128 63.0706 45.824C63.0706 45.52 62.9586 45.256 62.7346 45.032C62.5186 44.8 62.2306 44.684 61.8706 44.684C61.5026 44.684 61.2106 44.8 60.9946 45.032C60.7786 45.256 60.6706 45.52 60.6706 45.824C60.6706 46.128 60.7786 46.396 60.9946 46.628C61.2106 46.852 61.5026 46.964 61.8706 46.964ZM61.1626 43.004C61.3546 43.172 61.5906 43.256 61.8706 43.256C62.1506 43.256 62.3826 43.172 62.5666 43.004C62.7586 42.828 62.8546 42.608 62.8546 42.344C62.8546 42.08 62.7586 41.864 62.5666 41.696C62.3826 41.52 62.1506 41.432 61.8706 41.432C61.5906 41.432 61.3546 41.52 61.1626 41.696C60.9786 41.864 60.8866 42.08 60.8866 42.344C60.8866 42.608 60.9786 42.828 61.1626 43.004ZM67.7962 48.224C67.5482 48.472 67.2482 48.596 66.8962 48.596C66.5442 48.596 66.2402 48.472 65.9842 48.224C65.7362 47.968 65.6122 47.664 65.6122 47.312C65.6122 46.96 65.7362 46.66 65.9842 46.412C66.2402 46.156 66.5442 46.028 66.8962 46.028C67.2482 46.028 67.5482 46.156 67.7962 46.412C68.0522 46.66 68.1802 46.96 68.1802 47.312C68.1802 47.664 68.0522 47.968 67.7962 48.224ZM71.8177 48.632C71.0097 48.632 70.3017 48.384 69.6937 47.888C69.0857 47.384 68.7657 46.748 68.7337 45.98H70.6057C70.6697 46.236 70.8137 46.444 71.0377 46.604C71.2617 46.764 71.5217 46.844 71.8177 46.844C72.1937 46.844 72.4857 46.736 72.6937 46.52C72.9017 46.304 73.0057 46.02 73.0057 45.668C73.0057 45.332 72.8937 45.052 72.6697 44.828C72.4457 44.604 72.1657 44.492 71.8297 44.492C71.5177 44.492 71.2537 44.576 71.0377 44.744C70.8217 44.904 70.6657 45.116 70.5697 45.38L68.9977 44.888L69.9817 39.98H74.1697V41.732H71.3737L71.0857 43.088C71.3657 42.936 71.7297 42.86 72.1777 42.86C72.9777 42.86 73.6178 43.132 74.0978 43.676C74.5777 44.22 74.8177 44.928 74.8177 45.8C74.8177 46.68 74.5457 47.372 74.0017 47.876C73.4657 48.38 72.7377 48.632 71.8177 48.632Z"
												fill="white"
											/>
											<path
												d="M124.348 46.712V48.5H118.468V47.888C118.468 47.656 118.492 47.432 118.54 47.216C118.588 46.992 118.644 46.8 118.708 46.64C118.772 46.472 118.872 46.3 119.008 46.124C119.144 45.948 119.26 45.804 119.356 45.692C119.452 45.58 119.596 45.448 119.788 45.296C119.98 45.136 120.128 45.02 120.232 44.948C120.336 44.868 120.5 44.752 120.724 44.6C120.948 44.44 121.104 44.328 121.192 44.264C122.048 43.656 122.476 43.112 122.476 42.632C122.476 42.336 122.388 42.096 122.212 41.912C122.044 41.72 121.796 41.624 121.468 41.624C121.124 41.624 120.844 41.728 120.628 41.936C120.42 42.144 120.316 42.396 120.316 42.692H118.504C118.504 41.86 118.788 41.176 119.356 40.64C119.932 40.104 120.656 39.836 121.528 39.836C122.296 39.836 122.948 40.072 123.484 40.544C124.02 41.008 124.288 41.66 124.288 42.5C124.288 42.988 124.204 43.424 124.036 43.808C123.868 44.192 123.672 44.5 123.448 44.732C123.224 44.964 122.92 45.224 122.536 45.512C122.52 45.52 122.36 45.624 122.056 45.824C121.76 46.016 121.532 46.18 121.372 46.316C121.212 46.452 121.096 46.584 121.024 46.712H124.348ZM128.13 48.632C127.322 48.632 126.614 48.384 126.006 47.888C125.398 47.384 125.078 46.748 125.046 45.98H126.918C126.982 46.236 127.126 46.444 127.35 46.604C127.574 46.764 127.834 46.844 128.13 46.844C128.506 46.844 128.798 46.736 129.006 46.52C129.214 46.304 129.318 46.02 129.318 45.668C129.318 45.332 129.206 45.052 128.982 44.828C128.758 44.604 128.478 44.492 128.142 44.492C127.83 44.492 127.566 44.576 127.35 44.744C127.134 44.904 126.978 45.116 126.882 45.38L125.31 44.888L126.294 39.98H130.482V41.732H127.686L127.398 43.088C127.678 42.936 128.042 42.86 128.49 42.86C129.29 42.86 129.93 43.132 130.41 43.676C130.89 44.22 131.13 44.928 131.13 45.8C131.13 46.68 130.858 47.372 130.314 47.876C129.778 48.38 129.05 48.632 128.13 48.632Z"
												fill="white"
											/>
											<path
												d="M177.588 48.632C176.732 48.632 175.992 48.376 175.368 47.864C174.744 47.344 174.416 46.62 174.384 45.692H176.184C176.224 46.076 176.368 46.364 176.616 46.556C176.864 46.748 177.188 46.844 177.588 46.844C177.94 46.844 178.22 46.76 178.428 46.592C178.644 46.416 178.756 46.188 178.764 45.908C178.772 45.604 178.66 45.356 178.428 45.164C178.196 44.972 177.888 44.876 177.504 44.876H176.76V43.424H177.408C178.136 43.424 178.508 43.116 178.524 42.5C178.532 42.244 178.444 42.036 178.26 41.876C178.076 41.708 177.84 41.624 177.552 41.624C177.2 41.624 176.912 41.728 176.688 41.936C176.464 42.144 176.356 42.396 176.364 42.692H174.552C174.552 41.828 174.852 41.136 175.452 40.616C176.06 40.096 176.76 39.836 177.552 39.836C178.424 39.836 179.108 40.08 179.604 40.568C180.1 41.048 180.348 41.64 180.348 42.344C180.348 42.728 180.26 43.084 180.084 43.412C179.916 43.732 179.708 43.988 179.46 44.18C179.78 44.34 180.048 44.58 180.264 44.9C180.48 45.22 180.588 45.608 180.588 46.064C180.588 46.816 180.308 47.432 179.748 47.912C179.196 48.392 178.476 48.632 177.588 48.632ZM184.642 48.632C183.69 48.632 182.914 48.312 182.314 47.672C181.714 47.032 181.414 46.216 181.414 45.224V43.244C181.414 42.252 181.714 41.436 182.314 40.796C182.914 40.156 183.69 39.836 184.642 39.836C185.586 39.836 186.358 40.156 186.958 40.796C187.558 41.436 187.858 42.252 187.858 43.244V45.224C187.858 46.216 187.558 47.032 186.958 47.672C186.358 48.312 185.586 48.632 184.642 48.632ZM184.642 46.844C185.066 46.844 185.406 46.7 185.662 46.412C185.918 46.124 186.046 45.728 186.046 45.224V43.244C186.046 42.74 185.918 42.344 185.662 42.056C185.406 41.768 185.066 41.624 184.642 41.624C184.21 41.624 183.866 41.768 183.61 42.056C183.354 42.344 183.226 42.74 183.226 43.244V45.224C183.226 45.728 183.354 46.124 183.61 46.412C183.866 46.7 184.21 46.844 184.642 46.844Z"
												fill="white"
											/>
											<path
												d="M235.38 48.5V46.652H231.216V45.188L235.56 39.98H237.192V44.996H238.284V46.652H237.192V48.5H235.38ZM233.424 44.996H235.38V42.656L233.424 44.996ZM242.275 48.632C241.323 48.632 240.547 48.312 239.947 47.672C239.347 47.032 239.047 46.216 239.047 45.224V43.244C239.047 42.252 239.347 41.436 239.947 40.796C240.547 40.156 241.323 39.836 242.275 39.836C243.219 39.836 243.991 40.156 244.591 40.796C245.191 41.436 245.491 42.252 245.491 43.244V45.224C245.491 46.216 245.191 47.032 244.591 47.672C243.991 48.312 243.219 48.632 242.275 48.632ZM242.275 46.844C242.699 46.844 243.039 46.7 243.295 46.412C243.551 46.124 243.679 45.728 243.679 45.224V43.244C243.679 42.74 243.551 42.344 243.295 42.056C243.039 41.768 242.699 41.624 242.275 41.624C241.843 41.624 241.499 41.768 241.243 42.056C240.987 42.344 240.859 42.74 240.859 43.244V45.224C240.859 45.728 240.987 46.124 241.243 46.412C241.499 46.7 241.843 46.844 242.275 46.844Z"
												fill="white"
											/>
											<defs>
												<linearGradient
													id="paint0_linear_85_876"
													x1="3.09885e-06"
													y1="21.5"
													x2="467"
													y2="21.5001"
													gradientUnits="userSpaceOnUse"
												>
													<stop stop-color="#B5D4F1" />
													<stop offset="0.377705" stop-color="#81E6DB" />
													<stop offset="0.704019" stop-color="#E8D284" />
													<stop offset="1" stop-color="#E2798E" />
												</linearGradient>
											</defs>
										</svg>
									</Box>
								</>
							)}
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default Dashboard;
