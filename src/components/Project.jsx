import { Flare } from '@mui/icons-material';
import { Box, Typography, Button, Link, Divider, Avatar, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import './Project.css';

const Project = ({ img, name, desc, color, link, repo, lang1, lang2, lang3, lang4 }) => {
	return (
		<Box
			id="project"
			sx={{
				width: { md: '530px', xl: '630px', xs: '250px', },
				flexDirection: {md: 'row', xs: 'column'},
				height: {md:'190px', xs: '380px'},
				display: 'flex',
				gap: {md: '40px', xs: '20px'},
				bgcolor: '#363843',
				padding: 3,
				alignItems: 'center'
				
			}}
		>
			<Box sx={{}}>
				<Avatar sx={{ height: '170px', width: '250px', objectFit: 'fill', }} variant="square" src={img} />
				{/* <Box sx={{ height: '170px', width: '250px', bgcolor: color, position: 'absolute', top: '24px'}}></Box> */}
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '10px',
					justifyContent: 'space-between',
					padding: '5px 0'
				}}
			>
				<Link sx={{ textDecoration: 'none' }} href={link}>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							gap: '10px',
							color: 'white',
							'&:hover':{color: '#4D7EA8', textDecoration: 'underline'}
						}}
					>
						<Typography  fontSize={24}>{name}</Typography>
						<OpenInNewIcon/>
					</Box>
				</Link>
				<Divider sx={{ bgcolor: 'white', height: '1px' }} />
				<Typography color={'#B9B9B9'} fontSize={16}>{desc}</Typography>
				<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
						<Avatar
							variant="square"
							sx={{
								height: '26px',
								width: '28px',
								'&:hover': { transform: 'scale(1.1)' },
								transition: '200ms'
							}}
							src={lang1}
						/>
						<Avatar
							variant="square"
							sx={{
								height: '26px',
								width: '26px',
								'&:hover': { transform: 'scale(1.1)' },
								transition: '200ms'
							}}
							src={lang2}
						/>
						<Avatar
							variant="square"
							sx={{
								height: '26px',
								width: '26px',
								'&:hover': { transform: 'scale(1.1)' },
								transition: '200ms'
							}}
							src={lang3}
						/>
						{!lang4 ? (
							<></>
						) : (
							<Avatar
								variant="square"
								sx={{
									height: '26px',
									width: '26px',
									'&:hover': { transform: 'scale(1.1)' },
									transition: '200ms'
								}}
								src={lang4}
							/>
						)}
					</Box>
					<IconButton href={repo}>
						<GitHubIcon
							sx={{
								zIndex: 10000,
								height: 26,
								width: 26,
								color: 'white',
								'&:hover': { transform: 'scale(1.1)' },
								transition: 'all 200ms'
							}}
						/>
					</IconButton>
				</Box>
			</Box>
		</Box>
	);
};

export default Project;
