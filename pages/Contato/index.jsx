import { Container } from './styles';
import  Avatar  from '@mui/material/Avatar';

function Contato() {
  return (
    <Container>
      <Avatar 
			alt="MizaelDouglas" 
			src="/1.jpg"
			sx={{ width: 300, height: 300,marginLeft:5, marginBottom:2}}
		/>
    </Container>
  );
};

export default Contato;
