import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import styles from './styles.module.scss'
import { swiperContent } from '@/common/variables/SwiperContent'


export default function BenefitsSwiper() {
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            /*autoplay={{
                delay: 4000,
                disableOnInteraction: false
            }}*/
            breakpoints={{
                640: {
                    slidesPerView: 2
                },
                1024: {
                    slidesPerView: 3
                }
            }}
            className={styles.swiper}
        >
            {swiperContent.map((item) => (
                <SwiperSlide key={item.title}>
                    <article className={styles.card}>
                        <div className={styles.imageContainer}>
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className={styles.image}
                            />
                        </div>

                        <div className={styles.content}>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    </article>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}