import Swiper from 'swiper'
import styles from './styles.module.scss'
import BenefitsSwiper from '../ui/BenefitsSwiper'
import Link from 'next/link'
import { contato } from '@/common/variables/contato'

export default function ThirdSection() {
    return (
        <section className={styles.sectionContainer}>
            <svg
                className={styles.topWave}
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                <path
                    d="M0,192L80,208C160,224,320,256,480,229.3C640,203,800,117,960,96C1120,75,1280,117,1360,138.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                    fill="#eb741c"
                />
            </svg>

            <div className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.textContainer}>
                        <h1>Férias planejadas por quem entende de férias há mais de 26 anos.</h1>
                        <div className={styles.buttonContainer}>
                            <button type='button'><Link href={contato.link}>Quero minhas férias com economia e liberdade</Link></button>
                        </div>
                    </div>
                    <div className={styles.swiperContainer}>
                        <BenefitsSwiper />
                    </div>
                </div>
            </div>



            <svg
                className={styles.bottomWave}
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                <path
                    d="M0,192L80,208C160,224,320,256,480,229.3C640,203,800,117,960,96C1120,75,1280,117,1360,138.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                    fill="#eb741c"
                />
            </svg>

        </section>
    )
}