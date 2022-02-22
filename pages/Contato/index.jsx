import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';




function Contato() {
  return (
    <Container maxWidth="sm" sx={{ display:'flex',justifyContent:'space-between',flexDirection:'column',margin:10 }}>
				<Box >
					<TextField sx={{ marginRight:2 }} id="outlined-basic" label="Nome" variant="outlined" />
					<TextField  id="outlined-basic" label="SobreNome" variant="outlined" />
				</Box>
				<Box sx={{ marginTop:3 }}>
					<TextField id="outlined-basic" label="Email" variant="outlined" />
				</Box>
				<Box sx={{ marginRight:3 }}>
					<TextField sx={{ marginRight:5,width:300,height:500 }}
						id="standard-textarea"
						label="Digite aqui!"
						placeholder="Digite aqui"
						multiline
						variant="standard"
					/>
					<Button variant="contained" endIcon={<SendIcon />}>Enviar</Button>
				</Box>
      </Container>
  );
};

export default Contato;
