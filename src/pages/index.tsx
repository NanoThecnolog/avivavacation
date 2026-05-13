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

export default function Home() {
  return (
    <>
      <Head>
        <title>Clube férias</title>
        <meta name="description" content="Clube de Férias" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner />
        <SecondSection />
        <ThirdSection />
        <ForthSection />
        <FifthSection />
        <SixSection />
        <SevenSection />
        <EightSection />
      </main>
    </>
  );
}
