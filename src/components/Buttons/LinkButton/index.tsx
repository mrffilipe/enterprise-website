import styles from '../styles.module.css'

import Link from 'next/link'

type Props = {
    className?: string | undefined,
    href: string,
    value: string
}

const LinkButton = (props: Props) => {
    return (
        <div className={`${styles.button_container} ${props.className}`}>
            <Link
                href={props.href}
                className={styles.button}
            >
                {props.value}
            </Link>
        </div>
    )
}

export default LinkButton