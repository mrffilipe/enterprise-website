import styles from './styles.module.css'

import Link from 'next/link'
import { Icon } from '@mui/material'

type Props = {
    href: string,
    value: string,
    icon?: any
}

const LinkButton = (props: Props) => {
    return (
        <Link href={props.href} className={styles.btn}>
            {
                props.icon && <Icon
                    component={props.icon}
                />
            }
            <span>{props.value}</span>
        </Link>
    )
}

export default LinkButton