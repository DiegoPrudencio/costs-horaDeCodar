import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'
import Container from './Container'
import logo from '../../img/costs_logo.png'

function Navbar() {

    return (

        <nav className={styles.navbar}>
            <Container>
                <Link to="/"> <img src={logo} alt="Costs" /></Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link exatc to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/contact">Contato</Link></li>
                    <li className={styles.item}><Link to="/company">Empresa</Link></li>
                    {/* <li><Link to="/newProject">Novo Projeto</Link></li> */}
                </ul>
            </Container>
        </nav>

    )

}

export default Navbar