import { Box, Typography, Button, IconButton, duration } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import { Scale } from '@mui/icons-material';
import Lottie from 'lottie-react';
import animationData from '../assets/Animation - 1696881101874.json'

const HomePage = () => {
	const [text] = useTypewriter({
		words: ['Frnot-edn Dvelepor', 'Front-end Developer'],
		typeSpeed: 100,
		deleteSpeed: 50,
		loop: 1	
	});	
	const phoneRef = useRef()

	return (
		<Box sx={{ bgcolor: '#272932', height: '100vh', m: ' 0 60px'  }}>
			<Box sx={{display: 'flex', alignItems: 'center', flexDirection: {md: 'row', xs: 'column'}, justifyContent: 'space-between'}}>

			
			<Box sx={{ padding: { xs: '40px 10px 0 10px', md: '170px 0 240px 10%', }, width: 'fit-content' }}>
				
				<Typography
					component={motion.div}
					variants={{
						hidden: { opacity: 0, y: 75, filter: 'blur(4px)' },
						visible: { opacity: 1, y: 0, filter: 'blur(0)' }
					}}
					initial="hidden"
					animate="visible"
					transition={{ duration: 0.3, delay: 0.25 }}
					sx={{
						
						position: 'relative',
						zIndex: '1000',
						color: 'text.primary',
						fontSize: { xs: 35, md: 65 },
						fontWeight: 'bold',
						lineHeight: '1.2'
					}}
				>
					Hi,
					<br />
					I'm <span style={{ color: '#4D7EA8' }}>Isac Danielsson</span>, <br />
					{text}
					<span>
						<Cursor style={{ color: '#4D7EA8' }} cursorStyle="|" />
					</span>
				</Typography>
						
				<Box sx={{ display: 'flex', alignItems: 'center', gap: 3, color: 'white', zIndex: 10000, position: 'relative' }}>
					<Box
						component={motion.div}
						variants={{
							hidden: { opacity: 0, x: 100, filter: 'blur(10px)' },
							visible: { opacity: 1, x: 0, filter: 'blur(0)' }
						}}
						initial="hidden"
						transition={{ duration: 0.3, delay: 0.6 }}
						animate="visible"
					>
						<HtmlIcon sx={{'&:hover':{transform: 'scale(1.1)'}, color: '#ffa90a'}} fontSize={'large'} />
					</Box>
					<Box
						component={motion.div}
						variants={{
							hidden: { opacity: 0, x: 100, filter: 'blur(10px)' },
							visible: { opacity: 1, x: 0, filter: 'blur(0)' }
						}}
						initial="hidden"
						transition={{ duration: 0.3, delay: 0.7 }}
						animate="visible"
					>
						<CssIcon sx={{'&:hover':{transform: 'scale(1.1)'}, color: '#5d99e3'}} fontSize={'large'} />
					</Box>
					<Box
						component={motion.div}
						variants={{
							hidden: { opacity: 0, x: 100, filter: 'blur(10px)' },
							visible: { opacity: 1, x: 0, filter: 'blur(0)' }
						}}
						initial="hidden"
						transition={{ duration: 0.3, delay: 0.8 }}
						animate="visible"
					>
						<JavascriptIcon sx={{'&:hover':{transform: 'scale(1.1)'}, color: '#ffff0a'}} fontSize={'large'} />
					</Box>
				</Box>
				<a href="mailto:isac.danielsson03@gmail.com">

				<Button
					component={motion.div}
					variants={{
						hidden: { opacity: 0, x: 100, filter: 'blur(10px)' },
						visible: { opacity: 1, x: 0, filter: 'blur(0)' }
					}}
					initial="hidden"
					transition={{ duration: 0.3, delay: 0.5 }}
					animate="visible"
					variant="outlined"
					sx={{
						zIndex: '1000',
						border: '2px solid',
						height: { md: 65, xs: 40 },
						width: { md: 200, xs: 130 },
						fontSize: { md: 20, xs: 12 },
						borderRadius: '11px',
						mt: 6
					}}
					>
					Contact me
				</Button>
				</a>
				
			</Box>
				<Box sx={{padding: { xs: '10px 10px', md: '140px 10% 240px 0', }}} width={{md: '33%', xs: 270,}}>
							<Lottie onComplete={()=>{
								phoneRef.current.goToAndPlay(45, true)
							}} lottieRef={phoneRef} loop={false} animationData={animationData}/>
						</Box>

			</Box>
		</Box>
	);
};

export default HomePage;
