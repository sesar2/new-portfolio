import { Box, Typography } from '@mui/material';
import ProgLang from '../components/ProgLang';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import js from '../assets/48ad4561f3b9c1370c90e844f0389a24.png'
import react from '../assets/0d1fa5d47f8fdc85fc2c47093802d670.png'
import css from "../assets/e601da9bb6aed09b0383a3bacffeaf8a.png"
import html from "../assets/a2c393ed4f7032dfe048fd03ebcf022b.png"
import node from "../assets/27bd317f3e7569cac6a692d42e7a4758.png"
import mongo from "../assets/mongodb 1.svg"
import mui from "../assets/f6d7136061937b59d6ec3639f775e61b.png"
import tailwind from "../assets/tailwind.svg"
import figma from "../assets/a39d6f7dc5186a772dab05cb1f3d0576.png"


const SkillsLang = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start('visible');
		}
	}, [isInView]);

	return (
		<Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
			<Box
				color="text.primary"
				sx={{
					gap: '20px',
					width: {md: '780px', xs: '350px'},
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center'
				}}
			>
				<Typography
					ref={ref}
					component={motion.div}
					variants={{
						hidden: { opacity: 0, x: 50, filter: 'blur(4px)', position: 'absolute' },
						visible: { opacity: 1, x: 0, filter: 'blur(0)', position: 'static' }
					}}
					initial="hidden"
					animate={mainControls}
					transition={{ duration: 0.25, delay: 0.1 }}
					width="450px"
					sx={{ display: { xs: 'block', md: 'block' } }}
					fontSize={{md: "22px", xs: 0}}
					color={'text.secondary'}
				>
					"It's not a bug; it's an undocumented feature."
				</Typography>
				<Typography
					ref={ref}
					component={motion.div}
					variants={{
						hidden: { opacity: 0, x: '50px', filter: 'blur(4px)' },
						visible: { opacity: 1, x: 0, filter: 'blur(0)' }
					}}
					initial="hidden"
					animate={mainControls}
					transition={{ duration: 0.25, delay: 0.3 }}
					marginBottom={4}
					fontSize={{ md: '41px', xs: '27px' }}
				>
					My Skills & Tech Stack
				</Typography>
				<Box
					sx={{
						display: 'flex',
						gap: '40px',
						width: { md: '650px', xs: '300px' },
						flexWrap: 'wrap',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<Box
						ref={ref}
						component={motion.div}
						variants={{
							hidden: { opacity: 0, x: '50px', filter: 'blur(4px)' },
							visible: { opacity: 1, x: 0, filter: 'blur(0)' }
						}}
						initial="hidden"
						animate={mainControls}
						transition={{ duration: 0.25, delay: 0.5 }}

					>
						<ProgLang img={js} lang={'JavaScript'} />
					</Box>
					<Box
						ref={ref}
						component={motion.div}
						variants={{
							hidden: { opacity: 0, x: '50px', filter: 'blur(4px)' },
							visible: { opacity: 1, x: 0, filter: 'blur(0)' }
						}}
						initial="hidden"
						animate={mainControls}
						transition={{ duration: 0.25, delay: 0.55 }}

					>
						<ProgLang img={react} lang={'React'} />
					</Box>
					<Box
						ref={ref}
						component={motion.div}
						variants={{
							hidden: { opacity: 0, x: '50px', filter: 'blur(4px)' },
							visible: { opacity: 1, x: 0, filter: 'blur(0)' }
						}}
						initial="hidden"
						animate={mainControls}
						transition={{ duration: 0.25, delay: 0.60 }}

					>
						<ProgLang img={css} lang={'CSS'} />
					</Box>
					<Box
						ref={ref}
						component={motion.div}
						variants={{
							hidden: { opacity: 0, x: '50px', filter: 'blur(4px)' },
							visible: { opacity: 1, x: 0, filter: 'blur(0)' }
						}}
						initial="hidden"
						animate={mainControls}
						transition={{ duration: 0.25, delay: 0.65 }}

					>
						<ProgLang img={html} lang={'HTML'} />
					</Box>
					<Box
						ref={ref}
						component={motion.div}
						variants={{
							hidden: { opacity: 0, x: '50px', filter: 'blur(4px)' },
							visible: { opacity: 1, x: 0, filter: 'blur(0)' }
						}}
						initial="hidden"
						animate={mainControls}
						transition={{ duration: 0.25, delay: 0.70 }}

					>
						<ProgLang img={node} lang={'NodeJS'} />
					</Box>
					<Box
						ref={ref}
						component={motion.div}
						variants={{
							hidden: { opacity: 0, x: '50px', filter: 'blur(4px)' },
							visible: { opacity: 1, x: 0, filter: 'blur(0)' }
						}}
						initial="hidden"
						animate={mainControls}
						transition={{ duration: 0.25, delay: 0.75 }}

					>
						<ProgLang img={mongo} lang={'MongoDB'} />
					</Box>
					<Box
						ref={ref}
						component={motion.div}
						variants={{
							hidden: { opacity: 0, x: '50px', filter: 'blur(4px)' },
							visible: { opacity: 1, x: 0, filter: 'blur(0)' }
						}}
						initial="hidden"
						animate={mainControls}
						transition={{ duration: 0.25, delay: 0.80 }}

					>
						<ProgLang img={mui} lang={'MaterialUI'} />
					</Box>
					<Box
						ref={ref}
						component={motion.div}
						variants={{
							hidden: { opacity: 0, x: '50px', filter: 'blur(4px)' },
							visible: { opacity: 1, x: 0, filter: 'blur(0)' }
						}}
						initial="hidden"
						animate={mainControls}
						transition={{ duration: 0.25, delay: 0.85 }}

					>
						<ProgLang img={tailwind} lang={'Tailwind'} />
					</Box>
					<Box
						ref={ref}
						component={motion.div}
						variants={{
							hidden: { opacity: 0, x: '50px', filter: 'blur(4px)' },
							visible: { opacity: 1, x: 0, filter: 'blur(0)' }
						}}
						initial="hidden"
						animate={mainControls}
						transition={{ duration: 0.25, delay: 0.9 }}

					>
						<ProgLang img={figma} lang={'Figma'} />
					</Box>
				</Box>
				<Typography ref={ref}
						component={motion.div}
						variants={{
							hidden: { opacity: 0, x: '50px', filter: 'blur(4px)' },
							visible: { opacity: 1, x: 0, filter: 'blur(0)' }
						}}
						initial="hidden"
						animate={mainControls}
						transition={{ duration: 0.25, delay: 0.95 }} sx={{ display: { xs: 'block', md: 'block' } }} fontSize={{md: "28px", xs: 0}} color={'text.secondary'}>
					I use these languages to make creative and interactive things on the web
				</Typography>
			</Box>
		</Box>
	);
};

export default SkillsLang;
