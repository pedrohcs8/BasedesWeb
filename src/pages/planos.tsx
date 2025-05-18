import Head from "next/head";
import Image from "next/image";
import { useRouter } from 'next/navigation'

import styles from "@/styles/Home.module.css";
import { PageContainerImage } from "../styles/HomepageStyles.ts"
import { TopBrand } from '../styles/components/TopBrand/TopBrand.tsx'

import plansBg from "../assets/plans.png"
import paymentBg from "../assets/payment.png"

export default function Teste() {
  const { push } = useRouter()

  function teste() {
    push('/')
  }

  return (
    <div>
      <PageContainerImage image={"/assets/plans.png"}>
        <TopBrand callback={() => teste()} />
      </PageContainerImage>

      <PageContainerImage image={"/assets/payment.png"}>
      </PageContainerImage>
    </div>
  );
}
