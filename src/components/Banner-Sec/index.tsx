import Image from 'next/image'
import styles from './styles.module.scss'

interface Props {
    openModal: () => void
}
export default function BannerSec({ openModal }: Props) {
    return (
        <section className={styles.container}>
            <div className={styles.banner}>
                <Image src="/banner-sec.jpg" alt="Banner Principal" fill sizes='100vw' priority quality={50} />
            </div>
            <div className={styles.svgContainer}>
                <img src="/logo-clube_ferias.svg" alt="Logo Clube de Férias" />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.title}>
                    <h1>Compra e venda de cotas pelo whatsapp!</h1>
                </div>
                <div className={styles.paragraph}>
                    <p>
                        Transforme sua cota em oportunidade ou encontre a opção ideal para suas próximas férias. Receba atendimento personalizado pelo WhatsApp e tenha suporte em cada etapa da negociação.
                    </p>
                </div>
                <div className={styles.buttonContainer}>
                    <button type='button' onClick={openModal}>Quero Saber Sobre as Cotas!</button>
                </div>
            </div>
        </section>
    )
}