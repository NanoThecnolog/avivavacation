import { flagsEight } from '@/common/variables/FlagsEight'
import styles from './styles.module.scss'
import { useState } from 'react'
import { IoIosClose } from 'react-icons/io'
import { FaPlus } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { contato } from '@/common/variables/contato'

export default function EightSection() {
    const [active, setActive] = useState<number | null>(0)
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.textContainer}>
                    <div className={styles.text}>
                        <h1>Perguntas frequentes</h1>
                        <p>Encontre respostas rápidas para as dúvidas mais comuns.</p>
                        <div className={styles.buttonContainer}>
                            <button type='button'><Link href={contato.link}>Saiba mais</Link></button>
                        </div>
                    </div>
                    <div className={styles.cardsContainer}>
                        {
                            flagsEight.map((flag, i) =>
                                <div
                                    key={i}
                                    className={styles.card}
                                >
                                    <div
                                        className={styles.titleContainer}
                                        onClick={() => setActive(active === i ? null : i)}
                                    >
                                        <h3>{flag.title}</h3>
                                        {
                                            active === i
                                                ? <IoIosClose size={35} />
                                                : <FaPlus size={18} />
                                        }
                                    </div>
                                    {
                                        active === i &&
                                        <div className={styles.textCard}>
                                            <p>{flag.text}</p>
                                        </div>
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className={styles.contactContainer}>
                    <div className={styles.textContact}>
                        <h1>E se você já é sócio do Clube</h1>
                        <p>você tem a facilidade de consultar reservas, verificar sua pontuação, detalhes financeiros e muito mais.</p>
                    </div>
                    <div className={styles.imageContainer}>
                        <Image
                            src='/mockup.png'
                            alt='Clube de Férias'
                            fill
                        />
                    </div>
                    <div className={styles.buttonContainer}>
                        <button type='button'><Link href={contato.link}>Acesse agora</Link></button>
                    </div>
                </div>
            </div>
        </section>
    )
}