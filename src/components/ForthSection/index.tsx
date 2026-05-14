import { Props } from '../Banner-Principal'
import styles from './styles.module.scss'

export default function ForthSection({ openModal }: Props) {
    return (
        <section className={styles.container}>
            <div className={styles.textContainer}>
                <h1>Experiências que encantam a família inteira.</h1>
                <p>Da energia vibrante do litoral baiano ao aconchego das águas naturalmente quentes do cerrado goiano, seus dias serão inesquecíveis - sempre com novidades, novas atrações e experiências que se renovam ano após ano.</p>
            </div>
            <div className={styles.buttonContainer}>
                <button type='button' onClick={openModal}>Viva as férias que você merece</button>
            </div>
        </section>
    )
}