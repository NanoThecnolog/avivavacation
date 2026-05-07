import { GoClock } from 'react-icons/go'
import styles from './styles.module.scss'
import MiniCards from '../ui/MiniCards'
import { miniCardsContent } from '@/common/variables/MiniCardsContent'

export default function SecondSection() {
    return (
        <section className={styles.container}>
            <div className={styles.textoPrincipal}>
                <h1>Cansado de transformar descanso em mais uma tarefa?</h1>
                <p>Viajar deveria ser simples, mas virou pesquisa, burocracia e preços que mudam o tempo todo. Com o Clube de Férias Aviva, você troca complicação por tranquilidade.</p>
            </div>
            <div className={styles.mediaContainer}>
                <div className={styles.imageContainer}>
                    <img src="/secondSectionImage.jpeg" alt="Imagem de sessão" />
                </div>
                <div className={styles.cardsContainer}>
                    {
                        miniCardsContent.map((card, i) =>
                            <MiniCards
                                key={i}
                                icon={card.icon}
                                title={card.title}
                                text={card.text}
                            />
                        )
                    }
                </div>
            </div>
            <div className={styles.textSecundario}>
                <h2>Garanta férias incríveis para sua família sem deixar o sonho para depois.</h2>
            </div>
        </section>
    )
}