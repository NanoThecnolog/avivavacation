import Link from 'next/link'
import styles from './styles.module.scss'
import { contato } from '@/common/variables/contato'

export default function ForthSection() {
    return (
        <section className={styles.container}>
            <div className={styles.textContainer}>
                <h1>Experiências que encantam a família inteira.</h1>
                <p>Da energia vibrante do litoral baiano ao aconchego das águas naturalmente quentes do cerrado goiano, seus dias serão inesquecíveis - sempre com novidades, novas atrações e experiências que se renovam ano após ano.</p>
            </div>
            <div className={styles.buttonContainer}>
                <button type='button'><Link href={contato.link}>Viva as férias que você merece</Link></button>
            </div>
        </section>
    )
}