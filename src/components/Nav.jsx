import { Box, Typography, Icon, IconButton } from '@mui/material';
import { NavLink, useParams } from 'react-router-dom';
import './Nav.css';
import HomeIcon from '@mui/icons-material/Home';
import ConstructionIcon from '@mui/icons-material/Construction';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MailIcon from '@mui/icons-material/Mail';
import { NavHashLink } from 'react-router-hash-link';


const Nav = () => {

	const navLinks = [
		{
			name: 'Home',
			link: '#0',
			icon: <HomeIcon fontSize="large" />
		},
		{
			name: 'Skills',
			link: '#Skills',
			icon: <ConstructionIcon fontSize="large" />
		},
		{
			name: 'Projects',
			link: '#Projects',
			icon: <LibraryBooksIcon fontSize="large" />
		},
		{
			name: 'Contact',
			link: '#Contact',
			icon: <MailIcon 	  fontSize="large" />
		}
	];
	return (
		
		<Box
			sx={{
				zIndex: 10000,
				right: {md: 0, xs: 'none'},
				display: 'flex',
				top: {md: '30%', xs: 'none'},
				flexDirection: { md: 'column', sx: 'row' },
				bgcolor: '#323646',
				height: {md: 300, xs: 80},
				margin: {md: 4, xs: 0},
                padding: {md: 2, xs: '10px 0'},
                borderRadius: {md: '10px', xs: 0},
                justifyContent: {md: 'space-between', xs: 'space-around'},
                alignItems: 'center',
				width: {md: 'auto', xs: '100vw'},
				bottom: 0,
				position: 'fixed',
			}}
		>
			{navLinks.map((link, i) => (
                <Box id='icon' sx={{position: 'relative', display: 'flex', alignItems: 'center'}}>
                    <NavHashLink to={link.link}>
				        <IconButton  key={i} sx={{color: '#f2f2f2', '&:hover':{color: '#4D7EA8', cursor: 'pointer'}}}  fontSize="large">{link.icon}</IconButton>
                    </NavHashLink>
                <Typography  id='text' sx={{position: 'absolute', left: '-100px', display: 'none', fontSize: '18px', color: '#4D7EA8'}}>{link.name}</Typography>
                </Box>
			))} 
		</Box>
	);
};

export default Nav;
