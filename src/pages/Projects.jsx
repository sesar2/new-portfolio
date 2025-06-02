import { Box, Typography, Link, Divider } from '@mui/material';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Project from '../components/Project';

import flag from "../assets/flagappimage.png"
import spotify from "../assets/spot.png"
import bookducks from "../assets/browse.png"
import store from "../assets/hakim.png"
import quiz from "../assets/quiz.png"

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
			<Box sx={{
				display:'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}>

			<Box
				sx={{
					display: 'flex',
					justifyContent: {md: 'flex-start', xs: 'center'},
					flexWrap: 'wrap',
					flexDirection: {md: 'row'},
					
					gap: { md: 6, xs: 4 },
					width: { md: '1205px', xl: '1405px'},
					
					
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
							repo={'https://github.com/Isac-d/bookducks'}
							link={'https://github.com/Isac-d/bookducks'}
							name={'BookDucks'}
							img={bookducks}
							desc={'A where you can browse, rate and review books!'}
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
							repo={'https://github.com/sesar2/quiz-inl-mning'}
							link={'https://quiz-inl-mning.vercel.app/'}
							name={'Quiz'}
							img={quiz}
							desc={'A Quiz app created with vanilla JS'}
							color={'rgba(233, 52, 52, 0.63)'}
							lang1={js}
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
						transition={{ duration: 0.25, delay: 0.60 }}
						>
						<Project
							repo={'https://github.com/sesar2/Webstore'}
							link={'https://be-webshop-2025-fe-cyan.vercel.app/pages/index.html'}
							name={'Webstore'}
							img={store}
							desc={
								'A webstore with an admin panel where you can sign in and purchase products'
							}
							color={'rgba(255, 211, 53, 0.64)'}
							lang1={html}
							lang2={css}
							lang3={js}
							lang4={null}
							/>
					</Box>
			</Box>
							</Box>
		</Box>
	);
};

export default Projects;
