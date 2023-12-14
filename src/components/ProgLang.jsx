import { Box, Avatar, Typography } from '@mui/material';
import './ProgLang.css'

const ProgLang = ({ img, lang }) => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
			<img className='img' style={{ height: 60, width: 60, objectFit: 'contain', }} src={img} variant="square" />
			<Typography  fontSize={'14px'}>{lang}</Typography>
		</Box>
	);
};

export default ProgLang;
