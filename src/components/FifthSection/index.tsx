import { useState } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'

export default function FifthSection() {
    const [content, setContent] = useState<'rio' | 'costa'>('rio')
    return (
        <section className={styles.container}>
            <div className={`${styles.nav} ${content === 'rio' && styles.active}`}>
                <button
                    type='button'
                    onClick={() => setContent('rio')}
                    className={`${content === 'rio' && styles.active}`}
                >
                    Rio Quente
                </button>
                <button
                    type='button'
                    onClick={() => setContent('costa')}
                    className={`${content === 'costa' && styles.active}`}
                >
                    Costa do Sauípe
                </button>
            </div>
            <div className={styles.content}>
                {
                    content === 'rio' &&
                    <>
                        <div className={styles.textContainer}>
                            <h2>Mergulhe em águas termais</h2>
                            <p>
                                O lugar perfeito para relaxar e aproveitar momentos especiais em meio à natureza.
                            </p>
                            <p>
                                Um destino que combina bem-estar, diversão e a facilidade de quem é sócio e planeja suas férias com tranquilidade.
                            </p>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image
                                src='/rio-option.webp'
                                fill
                                alt='Rio Quente'
                            />
                        </div>
                    </>
                }
                {
                    content === 'costa' &&
                    <>
                        <div className={styles.textContainer}>
                            <h2>Renove suas energias à beira-mar</h2>
                            <p>
                                Sempre em movimento, a Costa do Sauípe se reinventa a cada temporada.
                            </p>
                            <p>
                                Com novos ambientes, sabores e experiências que surpreendem quem visita pela primeira vez e despertam o desejo de voltar em quem já conhece.
                            </p>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image
                                src='/costa-option.jpg'
                                fill
                                alt='Costa do Sauípe'
                            />
                        </div>
                    </>
                }
            </div>
        </section>
    )
}