import { Box, Typography, Link, Divider } from '@mui/material';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Project from '../components/Project';

import flag from "../assets/flagappimage.png"
import spotify from "../assets/spot.png"
import klarna from "../assets/klarna.png"
import store from "../assets/webshop1.png"
import todo from "../assets/todolisten.png"
import js from '../assets/48ad4561f3b9c1370c90e844f0389a24.png'
import react from '../assets/0d1fa5d47f8fdc85fc2c47093802d670.png'
import css from "../assets/e601da9bb6aed09b0383a3bacffeaf8a.png"
import html from "../assets/a2c393ed4f7032dfe048fd03ebcf022b.png"
import node from "../assets/27bd317f3e7569cac6a692d42e7a4758.png"



const Projects = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start('visible');
		}
	}, [isInView]);

	return (
		<Box sx={{ height: {md: '100vh',} }}>
			<Box>
				<Typography
					ref={ref}
					component={motion.div}
					variants={{
						hidden: { opacity: 0, y: 80, filter: 'blur(8px)' },
						visible: { opacity: 1, y: 0, filter: 'blur(0)' }
					}}
					initial="hidden"
					animate={mainControls}
					transition={{ duration: 0.25, delay: 0.1 }}
					color="text.primary"
					fontSize={{ md: '48px', xs: '30px' }}
					fontWeight={600}
					p={{ md: 10, xs: 3 }}
					
				>
					Projects<span style={{ color: '#4D7EA8' }}>.</span>
				</Typography>
				<Divider />
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: {md: 'flex-start', xs: 'center'},
					
					flexWrap: 'wrap',
					flexDirection: {md: 'row', xs: 'column'},
					p: {md: '0 200px', xs: '0 40px 160px 40px', xxl: '0 400px'},
					gap: { md: 6, xs: 4 },
					marginBottom: '100px',
					
				}}
			>
					<Box
						ref={ref}
						component={motion.div}
						variants={{
							hidden: { opacity: 0, y: 80, filter: 'blur(8px)' },
							visible: { opacity: 1, y: 0, filter: 'blur(0)' }
						}}
						initial="hidden"
						animate={mainControls}
						transition={{ duration: 0.25, delay: 0.4 }}
					>
						<Project
							repo={'https://github.com/sesar2/rest-countries-flag-app'}
							link={'https://beautiful-heliotrope-9cba88.netlify.app/'}
							name={'Flag App'}
							img={flag}
							desc={'A Flag App where you can browse and search all of the countries in the world'}
							color={'rgba(77, 126, 168, 0.71) '}
							lang1={react}
							lang2={js}
							lang3={html}
							lang4={css}
						/>
					</Box>
					<Box
						ref={ref}
						component={motion.div}
						variants={{
							hidden: { opacity: 0, y: 80, filter: 'blur(8px)' },
							visible: { opacity: 1, y: 0, filter: 'blur(0)' }
						}}
						initial="hidden"
						animate={mainControls}
						transition={{ duration: 0.25, delay: 0.45 }}
					>
						<Project
							repo={'https://github.com/sesar2/spotify-clone'}
							link={'https://spiffy-pixie-59a57e.netlify.app/'}
							name={'Spotify Clone'}
							img={spotify}
							desc={
								'A Spotify Clone that allows you to browse and play your own music via Spotify Playback'
							}
							color={'rgba(8, 108, 48, 0.61) '}
							lang1={react}
							lang2={js}
							lang3={html}
							lang4={css}
						/>
					</Box>
					<Box
						ref={ref}
						component={motion.div}
						variants={{
							hidden: { opacity: 0, y: 80, filter: 'blur(8px)' },
							visible: { opacity: 1, y: 0, filter: 'blur(0)' }
						}}
						initial="hidden"
						animate={mainControls}
						transition={{ duration: 0.25, delay: 0.5 }}
					>
						<Project
							repo={'https://github.com/sesar2/Klarnachekout'}
							link={'https://myklarnacheckout-2300b124b2d8.herokuapp.com/'}
							name={'Klarna Checkout'}
							img={klarna}
							desc={'A simple webiste integrated with the Klarna checkout API'}
							color={'rgba(179, 77, 195, 0.65)'}
							lang1={node}
							lang2={html}
							lang3={css}
							lang4={null}
						/>
					</Box>
				
					<Box
						ref={ref}
						component={motion.div}
						variants={{
							hidden: { opacity: 0, y: 80, filter: 'blur(8px)' },
							visible: { opacity: 1, y: 0, filter: 'blur(0)' }
						}}
						initial="hidden"
						animate={mainControls}
						transition={{ duration: 0.25, delay: 0.55 }}
					>
						<Project
							repo={null}
							link={'https://remarkable-lebkuchen-756823.netlify.app/'}
							name={'Todo List'}
							img={todo}
							desc={'A simple "Todo App" where you can add and delete your own "Todos"'}
							color={'rgba(233, 52, 52, 0.63)'}
							lang1={react}
							lang2={js}
							lang3={html}
							lang4={css}

						/>
					</Box>
					<Box
						ref={ref}
						component={motion.div}
						variants={{
							hidden: { opacity: 0, y: 80, filter: 'blur(8px)' },
							visible: { opacity: 1, y: 0, filter: 'blur(0)' }
						}}
						initial="hidden"
						animate={mainControls}
						transition={{ duration: 0.25, delay: 0.60 }}
					>
						<Project
							repo={'https://github.com/sesar2/Webstore'}
							link={'https://symphonious-sorbet-5ea25e.netlify.app/'}
							name={'Webstore'}
							img={store}
							desc={
								'A Webstore with a "CRUD" shopping cart that allows you add products to your cart'
							}
							color={'rgba(255, 211, 53, 0.64)'}
							lang1={react}
							lang2={js}
							lang3={html}
							lang4={css}
						/>
					</Box>
			</Box>
		</Box>
	);
};

export default Projects;
