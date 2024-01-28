import styles from './styles.module.css'

import Link from 'next/link'
import Image from 'next/image'

import { LinkButton } from '../Buttons'

import LogoSvg from '@/assets/svg/logo.svg'
import { MenuOutlined } from '@mui/icons-material'

const Header = () => {
    return (
        <header className={styles.header}>
            <Link href='/' className={styles.logo}>
                <Image src={LogoSvg} alt='Logo da Enterprise' />
            </Link>
            <nav className={styles.navigation}>
                <ul>
                    <li>
                        <Link href='/'>Início</Link>
                    </li>
                    <li>
                        <Link href='/'>Soluções</Link>
                    </li>
                    <li>
                        <Link href='/'>Serviços</Link>
                    </li>
                    <li>
                        <Link href='/'>Contato</Link>
                    </li>
                </ul>
                <LinkButton href='/' value='Whatsapp' />
            </nav>
            <button className={styles.open_menu}>
                <MenuOutlined />
            </button>
        </header>
    )
}

export default Header