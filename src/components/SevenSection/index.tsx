import { PubliCards } from '@/common/variables/PubliCards'
import styles from './styles.module.scss'
import Link from 'next/link'
import { contato } from '@/common/variables/contato'
import { Props } from '../Banner-Principal'

export default function SevenSection({ openModal }: Props) {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.textContainer}>
                    <h1>Um Clube para criar lembranças que acompanham sua família para sempre.</h1>
                    <p>Mais do que viajar: é construir tradições e viver momentos que se tornam histórias.</p>
                    <div className={styles.buttonContainer}>
                        <button type='button' onClick={openModal}>Garanta um futuro de férias inesquecíveis!</button>
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    {
                        PubliCards.map((card, i) =>
                            <div
                                key={i}
                                className={styles.card}
                            >
                                <card.icon size={30} />
                                <h2>{card.title}</h2>
                                <p>{card.text}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}