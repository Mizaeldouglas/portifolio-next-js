import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function Portifolio() {
  return (
		<Container maxWidth="sm" sx={{ marginLeft: 10}} >
			<ImageList sx={{ width: 800, height: 550,overflowY: 'initial' }}>
			{itemData.map((item) => (
				<ImageListItem sx={{margin:1}} key={item.img}>
				<img
					src={`${item.img}?w=248&fit=crop&auto=format`}
					srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
					alt={item.title}
					loading="lazy"
				/>
				<a href={item.link} >
					<ImageListItemBar
						title={item.title}
						// subtitle={<span>by: {item.author}</span>}
						position="bottom"
					/>
				</a>
				</ImageListItem>
			))}
			</ImageList>
		</Container>	
  );
}

const itemData = [
  {
    img: '/01.gif',
    title: 'ToDo List',
	link: 'https://github.com/Mizaeldouglas/To-do-List-Em-ReactJS',
  },
  {
    img: '/02.gif',
    title: 'Galeria de Fotos',
	link: 'https://github.com/Mizaeldouglas/GalleryPhotos_reactJS',
  },
  {
    img: '/03.png',
    title: 'Chat-Online',
	link: 'https://github.com/Mizaeldouglas/Chat-react-Js',
  },
  {
    img: '/04.png',
    title: 'Site-Contabilidade',
	link: 'https://github.com/Mizaeldouglas/DevContabil--treino',
  },
  {
    img: '/05.png',
    title: 'Page-Tribute',
	link: 'https://github.com/Mizaeldouglas/Tribute-Page_JJR-Tolkien',
  },
  {
    img: '/06.png',
    title: 'Urna-Eletronica',
	link: 'https://github.com/Mizaeldouglas/UrnaEletronica',
  },
  {
    img: '/07.png',
    title: 'Sistema de Login',
	link: 'https://github.com/Mizaeldouglas/FormularioB7Web',
  },
  {
    img: '/09.png',
    title: 'Site-Pizzaria',
	link: 'https://github.com/Mizaeldouglas/EXERCICIO-Compra-de-Pizzas',
  },
  {
    img: '/08.png',
    title: 'App Lista de series Mobile',
	link: 'https://github.com/Mizaeldouglas/ListaFilmes-React-Native',
  },
];