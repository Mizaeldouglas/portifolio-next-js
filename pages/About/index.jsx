import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function About() {
  return (
	<React.Fragment>
	<CssBaseline />
	<Container maxWidth="md" sx={{ textAlign:'center', marginTop:10}}>
		<Box>	
			<Typography variant="h3" component="div" gutterBottom >
				Sobre Mim
			</Typography>
			<Typography variant='subtitle1' component='div' gutterBottom >
			👨‍💼 Desenvolvedor Front-End:
				Em Front-End eu possuo experiência com JavaScript, TypeScript, HTML, CSS, ReactJs, Figma(construir site e aplicações baseadas em disigners do figma) e estudando mais para evoluir nas tecnologias.
				<br/><br/><br/>
				👨‍🎓 O que estou estudando: 
				Atualmente tenho feito projetos em ReactJS para adquerir conhecimento Material Ui , Styled-components e react-router-dom e também estudando NextJS com Integração com Tailwind CSS e Typescript.

				Estou sempre em busca de adquirir conhecimento, seja para evoluir na tecnologias que eu já sei, como também adquirindo conhecimento sobre novas tecnologias.
				Não tenho experiencia de trabalho na área de programação mais tenho experiencia de trabalhar em grupo que me permitiram desenvolver qualidades pessoais, como mentalidade colaborativa, bom relacionamentos com colegas de trabalhos e clientes,boa aceitação de feedback,análise critica e resolução de problemas
			</Typography>
		</Box>
	</Container>
  </React.Fragment>
  );
};

export default About;
