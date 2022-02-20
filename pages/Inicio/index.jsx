import { Container } from './styles';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { DiCss3,DiHtml5,DiReact } from "react-icons/di";
import { SiJavascript } from 'react-icons/si'

const Img = styled('img')({
	margin: 'auto',
	display: 'block',
	maxWidth: '100%',
	maxHeight: '100%',
  });


function Inicio() {
  return (
	  <Container >
		<Grid container spacing={2}>
			<Grid item>
			<ButtonBase sx={{ width: 300, height: 400 }}>
				<Img alt="complex" src="/mizael.jpg" />
			</ButtonBase>
			</Grid>
			<Grid className='Texto' item xs={8} sm container>
			<Grid  spacing={2}>
				<Grid item xs sx={{textAlign:"center"}}>
				<Typography gutterBottom variant="h4" component="h6">
					Olá, Eu Me chamo <br/> Mizael Douglas
				</Typography>
				<Typography gutterBottom variant="h5" component="div">
					Sou <br/> Developer Front-End
				</Typography>
				<Typography gutterBottom variant="h5" component="div">
					<SiJavascript color='#FAC05E' /> <DiCss3 color='#3ABEFF'/> <DiHtml5 color='orange' /> <DiReact color='#3ABEFF' />
				</Typography>
				</Grid>
			</Grid>
			</Grid>
		</Grid>
	  </Container>

	);
};

export default Inicio;
