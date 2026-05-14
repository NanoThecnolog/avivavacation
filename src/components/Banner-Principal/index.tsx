import Link from 'next/link'
import styles from './styles.module.scss'
import { contato } from '@/common/variables/contato'
import Image from 'next/image'

export interface Props {
    openModal: () => void
}

export default function Banner({ openModal }: Props) {
    return (
        <section className={styles.container}>
            <div className={styles.banner}>
                <Image src="/banner-principal.jpg" alt="Banner Principal" fill sizes='100vw' priority quality={50} />
            </div>
            <div className={styles.svgContainer}>
                <img src="/logo-clube_ferias.svg" alt="Logo Clube de Férias" />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.title}>
                    <h1>Clube de Férias Aviva: suas melhores memórias começam aqui!</h1>
                </div>
                <div className={styles.paragraph}>
                    <p>Férias do jeito que você sempre sonhou: planejadas, tranquilas e cheias de momentos especiais com quem você ama. Descubra uma forma inteligente e leve de garantir viagens todos os anos.</p>
                </div>
                <div className={styles.buttonContainer}>
                    <button type='button' onClick={openModal}>Quero Receber Novidades e Benefícios</button>
                </div>
            </div>
        </section>
    )
}