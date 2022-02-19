import { Container,ImagemMizael } from './styles';
import * as React from 'react';
import imageMizael from '../../public/1.jpg'
import  Avatar  from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';



function Inicio() {
  return (
	  <Container >
		<Avatar 
			alt="Remy Sharp" 
			src='../../public/2.png' 
			sx={{ width: 300, height: 300 }}
		/>
	  </Container>

	);
};

export default Inicio;