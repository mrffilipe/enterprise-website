import styles from './styles.module.css'

import Link from 'next/link'
import { Phone } from '@mui/icons-material'

import LinkButton from '../LinkButton'

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navigation}>
                    <li>
                        <Link href='/'>
                            Início
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            Soluções
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            Serviços
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            Contato
                        </Link>
                    </li>
                </ul>
            </nav>
            <LinkButton
                href='/'
                value='Whatsapp'
                icon={Phone}
            />
        </header>
    )
}

export default Header