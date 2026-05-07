import styles from './styles.module.scss'

export default function Banner() {
    return (
        <section className={styles.container}>
            <div className={styles.banner}>
                <img src="/banner-principal.jpg" alt="Banner Principal" />
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
                    <button>Quero Receber Novidades e Benefícios</button>
                </div>
            </div>

        </section>
    )
}