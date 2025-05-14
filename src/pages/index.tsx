import Head from "next/head";
import Image from "next/image";
import { useRouter } from 'next/navigation'

import styles from "@/styles/Home.module.css";
import { PageContainer, PlansButton, PromoContainer } from "../styles/HomepageStyles.ts"
import { TopBrand } from '../styles/components/TopBrand/TopBrand.tsx'
import { Contacts } from '../styles/components/Contacts/Contacts.tsx'
import { FaDiscord, FaInstagram } from "react-icons/fa";

const youtubeLink = "https://www.youtube.com/@omecadelux"

export default function Home() {
  const { push } = useRouter()

  return (
    <div>
      <PageContainer image={'/assets/homepage.png'}>
        <div style={{ display: 'flex', width: '100vw', justifyContent: 'space-between' }}>
          <TopBrand callback={() => push('/')} />
          <PlansButton onClick={() => push('/planos')}>Ver Planos</PlansButton>
        </div>
      </PageContainer>

      <PageContainer image={"/assets/intro.png"}></PageContainer>

      <PageContainer image={"/assets/bot.png"}></PageContainer>

      <PageContainer image={"/assets/trust.png"}></PageContainer>

      <PageContainer image={"/assets/promo.png"}>
        <PromoContainer>
          <Image
            src={'/assets/channel.png'}
            alt="canal do youtube" width={220}
            height={200}
            style={{ marginTop: '450px', cursor: 'pointer' }}
            onClick={() => push(youtubeLink)}
          />
        </PromoContainer>
      </PageContainer>

      <PageContainer image={"/assets/contact.png"}>
        <div style={{ width: '100vw' }}>
          <TopBrand callback={() => push('/')} />
          <Contacts />
        </div>
      </PageContainer>
    </div>
  );
}
