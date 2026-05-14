import { benefitCards } from '@/common/variables/benefitCard'
import styles from './styles.module.scss'
import { FaPlus } from 'react-icons/fa'
import { IoIosClose } from 'react-icons/io'
import { useState } from 'react'
import Image from 'next/image'
import { Props } from '../Banner-Principal'



export default function SixSection({ openModal }: Props) {
    const [active, setActive] = useState<number | null>(0)

    return (
        <section className={styles.container}>
            <div className={styles.contentContainer}>
                <div className={styles.content}>
                    <div className={styles.textContainer}>
                        <h1>
                            Férias como você merece: simples, organizadas e inesquecíveis.
                        </h1>
                        <p>
                            Com o Clube de Férias Aviva você garante datas, destinos e tranquilidade para sua família. Sem estresse, sem surpresas e com muito mais liberdade.
                        </p>
                        <div>
                            <button type='button' onClick={openModal}>Quero viajar com mais tranquilidade</button>
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/hotel-luppi.jpg"
                            alt='Hotel Luppi'
                            fill
                        />
                    </div>
                </div>
                <div className={styles.flags}>
                    {
                        benefitCards.map((item, i) =>
                            <div key={i} className={styles.list}>
                                <div
                                    className={styles.itemContainer}
                                    onClick={() => setActive(active === i ? null : i)}
                                >
                                    <h3>{item.title}</h3>
                                    {
                                        active === i
                                            ? <IoIosClose size={35} />
                                            : <FaPlus size={18} />
                                    }
                                </div>
                                {
                                    active === i &&
                                    <div className={styles.comparativo}>
                                        <div className={styles.comum}>
                                            <h4>Férias Comuns</h4>
                                            <p>{item.leftCard.text}</p>
                                        </div>
                                        <div className={styles.clube}>
                                            <h4>Clube de Férias</h4>
                                            <p>{item.rightCard.text}</p>
                                        </div>
                                    </div>
                                }

                            </div>
                        )
                    }

                </div>
            </div>
        </section>
    )
}