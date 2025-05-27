import Head from "next/head";
import Image from "next/image";
import { useRouter } from 'next/navigation'

import {
  PageContainer,
  PlansButton,
  FlexContainer,
  SideText,
  SideImage,
  SideTitle,
  IntroTitle,
  Spacer,
  HomepageTopContainer,
  HomepageIntroContainer,
  HomepageIntroImage,
  IntroSubtitle,
  CenteringContainer,
  HomepageIntroText,
  SideTextContainer,
  PartnerImage
} from "../styles/HomepageStyles.ts"

import { TopBrand } from '../styles/components/TopBrand/TopBrand.tsx'
import { Contacts } from '../styles/components/Contacts/Contacts.tsx'

const youtubeLink = "https://www.youtube.com/@omecadelux"

export default function Home() {
  const { push } = useRouter()

  return (
    <div>

      <TopBrand callback={() => push('/')} />
      <Spacer height="100px"/>
      <PageContainer style={{ background: 'linear-gradient(to bottom, #121a2e, #1e293b);'}}>
        <CenteringContainer style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
          <HomepageIntroContainer>
            <HomepageIntroText>Host Em Ascenção</HomepageIntroText>
            <HomepageIntroImage src={'/assets/homepage-sideimage.png'} />
          </HomepageIntroContainer>
        </CenteringContainer>
      </PageContainer>

      <PageContainer style={{ background: '#0f172a' }}>
        <CenteringContainer style={{ alignItems: 'center', flexDirection: 'column' }}>
          <IntroTitle>
            A
            <IntroSubtitle color="#9340ff">Basedes</IntroSubtitle>
            é uma pequena
            <IntroSubtitle color="#a5cacd">host de Minecraft</IntroSubtitle>
            que busca tornar a criação de servidores simples e acessível.
          </IntroTitle>
          <Spacer height="40px" />
          <IntroTitle>Nosso Discord oferece uma forma fácil, rápida e segura de criar servidores.
Seja você iniciante ou já experiente, a Basedes está aqui para oferecer suporte a todos.</IntroTitle>
        </CenteringContainer>
      </PageContainer>

      <PageContainer style={{ background: '#0f172a' }}>
        <CenteringContainer style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <SideTextContainer right="30px">
            <SideTitle color="#9340ff">Como Funciona?</SideTitle>

            <SideText>A Basedes funciona de forma prática: você cria seu servidor direto pelo Discord, e ele fica disponível 24h por dia, sem complicação.</SideText>

            <SideText>Assim que o pagamento é confirmado, seu servidor é ativado automaticamente em instantes, com acompanhamento de um atendente da Basedes para garantir que tudo ocorra bem. </SideText>
          </SideTextContainer>
          <SideImage src={'/assets/bot-sideimage.png'} />
        </CenteringContainer>
      </PageContainer>

      <PageContainer style={{ background: 'linear-gradient(to bottom, #121a2e, #1e293b);'}}>
        <CenteringContainer style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <SideImage src={'/assets/trust-sideimage.png'} />
          <SideTextContainer left="30px">
            <SideTitle color="#a5cacd">Confiança</SideTitle>

            <SideText>Confiamos em nossos clientes assim como eles confiam na Basedes. Acreditamos no uso responsável dos servidores, priorizando sempre a segurança e o bem-estar da comunidade.</SideText>

            <SideText>No fim das contas, o mais importante é: que todo mundo se divirta, construa, explore e viva grandes aventuras. O resto a gente cuida só não esqueça de aproveitar cada bloco!</SideText>
          </SideTextContainer>
        </CenteringContainer>
      </PageContainer>

      <PageContainer style={{ background: 'linear-gradient(to bottom, #121a2e, #1e293b);'}}>
        <CenteringContainer style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
              <SideTitle color="#9340ff">Companheiros de Aventura</SideTitle>
              <PartnerImage src={'/assets/channel.png'} onClick={() => push(youtubeLink)}/>
        </CenteringContainer>
      </PageContainer>

      <PageContainer style={{ background: '#0f172a' }}>
        <CenteringContainer>
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Contacts />
          </div>
        </CenteringContainer>
      </PageContainer>
    </div>
  );
}
