import Menu from './Menu'
import styles from '../styles/Home.module.css'
import { Container } from '@mui/material'

export default function Home() {
  return (
    <Container className={styles.container}>

      <Menu />
    </Container>
  )
}
