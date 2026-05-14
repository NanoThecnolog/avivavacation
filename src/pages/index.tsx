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

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Head>
        <title>Clube de Férias Aviva Vacation Clube</title>
        <meta name="description" content="Clube de Férias Aviva Vacation Clube" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favico.svg" />
      </Head>
      <main className={styles.main}>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
        <Banner openModal={() => setIsOpen(true)} />
        <SecondSection />
        <ThirdSection openModal={() => setIsOpen(true)} />
        <ForthSection openModal={() => setIsOpen(true)} />
        <FifthSection />
        <SixSection openModal={() => setIsOpen(true)} />
        <SevenSection openModal={() => setIsOpen(true)} />
        <EightSection openModal={() => setIsOpen(true)} />
      </main>
    </>
  );
}
