import styles from './About.module.css';
import booksImage from '../../assets_src/books.jpg'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className={styles.about}>
        <h2>Sobre o <span>Estante do 207</span></h2>
        <p>Este blog é um espaço para compartilhar o amor pela literatura, trazendo resenhas completas ou apenas fotos.</p>
        <p>Um lugar para troca de curiosidades e conhecimentos sobre qualquer gênero da literatura.</p>
        <img src={booksImage} alt="" />
        <Link to='/posts/create' className="btn">Criar post</Link>
    </div>
  )
}

export default About