import { Box, Typography, Avatar, IconButton } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { Translate } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { color } from 'framer-motion';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const Footer = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_f44a51g', 'template_hrzyu4n', form.current, 'W2ZKy091gsMlfyse9').then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
	};

	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start('visible');
		}
	}, [isInView]);

	return (
		<Box>
			<Box
				sx={{
					padding: '0 250px',
					height: 500,
					bgcolor: '#323646',
					position: 'relative',
					display: { md: 'flex', xs: 'none' },
					justifyContent: 'space-evenly',
					alignItems: 'center',
					marginTop: '150px'
				}}
			>
				<Box
					ref={ref}
					component={motion.div}
					variants={{
						hidden: { opacity: 0, y: -100, filter: 'blur(4px)' },
						visible: { opacity: 1, y: 0, filter: 'blur(0)' }
					}}
					initial="hidden"
					animate={mainControls}
					transition={{ duration: 0.25, delay: 0.2 }}
					sx={{
						height: 400,
						bgcolor: '#f2f2f2',
						padding: '20px 50px',
						borderRadius: '20px 20px 0 0',
						bottom: '0',
						width: '280px',
						display: 'flex',
						flexDirection: 'column',
						marginTop: '60px'
					}}
				>
					<Typography sx={{ fontSize: 35, fontWeight: 600, color: 'primary.main', paddingBottom: 3 }}>
						Send a message
					</Typography>

					<form style={{ display: 'flex', flexDirection: 'column' }} ref={form} onSubmit={sendEmail}>
						<Typography>Name</Typography>
						<input style={{ height: 30, marginBottom: 25 }} type="text" name="user_name" />
						<Typography>Email</Typography>
						<input style={{ height: 30, marginBottom: 25 }} type="email" name="user_email" />
						<Typography>Message</Typography>
						<textarea
							style={{
								height: 45,
								marginBottom: 25,
								maxWidth: '278.91px',
								minWidth: '278.91px',
								maxHeight: 85
							}}
							name="message"
						/>

						<a href="mailto:isac.danielsson03@gmail.com">
							<button
								style={{
									cursor: 'pointer',
									backgroundColor: '#4D7EA8',
									color: 'white',
									border: 'none',
									padding: '10px',
									textDecoration: 'none',
									margin: 'auto',
									width: '100%'
								}}
							>
								Send
							</button>
						</a>
					</form>
				</Box>
				<Box
					ref={ref}
					component={motion.div}
					variants={{
						hidden: { opacity: 0, filter: 'blur(4px)' },
						visible: { opacity: 1, filter: 'blur(0)' }
					}}
					initial="hidden"
					animate={mainControls}
					transition={{ duration: 0.5, delay: 0.3 }}
					sx={{ width: 600 }}
				>
					<Typography sx={{ textAlign: 'center', fontSize: 25, color: 'text.secondary' }}>
						"Web development is difficult, only then it is fun to do. You just have to set your standards.
						If it were to be easy, would anyone do it?" ― Olawale Daniel
					</Typography>
					<Box sx={{ display: 'flex', paddingTop: 3, gap: 3, justifyContent: 'center' }}>
						<IconButton href="https://github.com/sesar2">
							<GitHubIcon fontSize={'large'} sx={{ color: 'white' }} />
						</IconButton>
						<IconButton href="https://www.instagram.com/issaaacd/">
							<InstagramIcon fontSize={'large'} sx={{ color: 'white' }} />
						</IconButton>
						<IconButton href="https://www.linkedin.com/in/isac-danielsson-9327a1289/">
							<LinkedInIcon fontSize={'large'} sx={{ color: 'white' }} />
						</IconButton>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Footer;
