import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Banner from "@/components/Banner-Principal";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";
import ForthSection from "@/components/ForthSection";
import FifthSection from "@/components/FifthSection";
import SixSection from "@/components/SixSection";
import SevenSection from "@/components/SevenSection";
import EightSection from "@/components/EightSection";
import { useState } from "react";
import Modal from "@/components/ui/modal";
import { contato } from "@/common/variables/contato";
import WhatsappButton from "@/components/ui/WhatsappButton";
import Header from "@/components/ui/Header";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import BannerSec from "@/components/Banner-Sec";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Head>
        <title>Clube de Férias Aviva Vacation Clube</title>
        <meta name="description" content="Clube de Férias Aviva Vacation Clube" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="clube de férias, clube, férias, vacation, aviva, viagem, planejar férias"
        />

        <meta property="og:title" content="Clube de Férias Aviva Vacation Clube" />
        <meta
          property="og:description"
          content="Clube de Férias Aviva Vacation Clube."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content={`${contato.website}/banner-principal.jpg`}
        />

        <meta
          property="og:url"
          content={contato.website}
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href={contato.website}
        />
        <link rel="icon" href="/favico.svg" />
      </Head>
      <main className={styles.main}>
        <Header />
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
        <Swiper
          className={styles.swiper}
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          loop
          pagination={{ clickable: true }}
          //navigation
          autoplay={{
            delay: 6000,
            disableOnInteraction: false
          }}
        >
          <SwiperSlide className={styles.slide} data-swiper-autoplay="8000">
            <BannerSec openModal={() => setIsOpen(true)} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide} data-swiper-autoplay="4000">
            <Banner openModal={() => setIsOpen(true)} />
          </SwiperSlide>
        </Swiper>
        <SecondSection />
        <ThirdSection openModal={() => setIsOpen(true)} />
        <ForthSection openModal={() => setIsOpen(true)} />
        <FifthSection />
        <SixSection openModal={() => setIsOpen(true)} />
        <SevenSection openModal={() => setIsOpen(true)} />
        <EightSection openModal={() => setIsOpen(true)} />
        <WhatsappButton />
      </main>
    </>
  );
}
