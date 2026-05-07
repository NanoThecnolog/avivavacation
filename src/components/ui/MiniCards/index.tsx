import { IconType } from 'react-icons'
import styles from './styles.module.scss'
import { MiniCardsProps } from '@/common/variables/MiniCardsContent'

export default function MiniCards({ icon: Icon, title, text }: MiniCardsProps) {
    return (
        <div className={styles.container}>
            <div className={styles.iconContainer}>
                <Icon size={30} />
            </div>
            <div className={styles.titleContainer}>
                <h4>{title}</h4>
            </div>
            <div className={styles.textContainer}>
                <p>{text}</p>
            </div>
        </div>
    )
}