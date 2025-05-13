import Head from "next/head";
import Image from "next/image";
import { useRouter } from 'next/navigation'

import styles from "@/styles/Home.module.css";
import { PageContainer, PlansButton } from "../styles/HomepageStyles.ts"
import { TopBrand } from '../styles/components/TopBrand/TopBrand.tsx'
import { FaDiscord } from "react-icons/fa";

import homepageBg from "../assets/homepage.png"
import introBg from "../assets/intro.png"
import botBg from "../assets/bot.png"
import trustBg from "../assets/trust.png"
import promoBg from '../assets/promo.png'
import contactBg from '../assets/contact.png'

export default function Home() {
  const { push } = useRouter()

  return (
    <div>
      <PageContainer image={homepageBg}>
        <TopBrand callback={() => push('/')} />
        <PlansButton onClick={() => push('/planos')}>Ver Planos</PlansButton>
      </PageContainer>

      <PageContainer image={introBg}></PageContainer>

      <PageContainer image={botBg}></PageContainer>

      <PageContainer image={trustBg}></PageContainer>

      <PageContainer image={promoBg}></PageContainer>

      <PageContainer image={contactBg}>
        <FaDiscord size={70} color="#fff" onClick={() => push("https://discord.gg/fSSDmTWaJB")} style={{ marginTop: "628px", marginLeft: "1070px", cursor: 'pointer' }} />
      </PageContainer>
    </div>
  );
}
