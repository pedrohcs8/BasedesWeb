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
  HomepageContainer,
  HomepageIntroContainer,
  HomepageIntroImage,
  IntroSubtitle
} from "../styles/HomepageStyles.ts"

import { TopBrand } from '../styles/components/TopBrand/TopBrand.tsx'
import { Contacts } from '../styles/components/Contacts/Contacts.tsx'

const youtubeLink = "https://www.youtube.com/@omecadelux"

export default function Home() {
  const { push } = useRouter()

  return (
    <div>
      <PageContainer style={{ flexDirection: 'column' }}>
        <HomepageContainer>
          <TopBrand callback={() => push('/')} />
          <PlansButton onClick={() => push('/planos')}>Ver Planos</PlansButton>
        </HomepageContainer>
        <HomepageIntroContainer>
          <h1 style={{ color: 'white', fontSize: '80px', width: '500px', textAlign: 'center' }}>Host Em Ascenção</h1>
          <HomepageIntroImage src={'/assets/homepage-sideimage.png'} />
        </HomepageIntroContainer>
      </PageContainer>

      <PageContainer>
        <FlexContainer style={{ alignItems: 'center', flexDirection: 'column' }}>
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
        </FlexContainer>
      </PageContainer>

      <PageContainer>
        <div style={{ marginLeft: '40px' }}>
          <SideTitle color="#9340ff">Como Funciona?</SideTitle>

          <SideText>A Basedes funciona de forma prática: você cria seu servidor direto pelo Discord, e ele fica disponível 24h por dia, sem complicação.</SideText>

          <SideText>Assim que o pagamento é confirmado, seu servidor é ativado automaticamente em instantes, com acompanhamento de um atendente da Basedes para garantir que tudo ocorra bem. </SideText>
        </div>
        <SideImage src={'/assets/bot-sideimage.png'} />
      </PageContainer>

      <PageContainer>
        <FlexContainer>
            <SideImage src={'/assets/trust-sideimage.png'} />
            <div style={{ marginLeft: '40px' }}>
              <SideTitle color="#a5cacd">Confiança</SideTitle>

              <SideText>Confiamos em nossos clientes assim como eles confiam na Basedes. Acreditamos no uso responsável dos servidores, priorizando sempre a segurança e o bem-estar da comunidade.</SideText>

              <SideText>No fim das contas, o mais importante é: que todo mundo se divirta, construa, explore e viva grandes aventuras. O resto a gente cuida só não esqueça de aproveitar cada bloco!</SideText>
            </div>
        </FlexContainer>
      </PageContainer>

      <PageContainer>
        <div>
          <FlexContainer>
            <SideTitle color="#9340ff">Companheiros de Aventura</SideTitle>
          </FlexContainer>
          <FlexContainer>
            <Image
              src={'/assets/channel.png'}
              alt="canal do youtube" width={220}
              height={200}
              style={{ marginTop: '280px', cursor: 'pointer' }}
              onClick={() => push(youtubeLink)}
            />
          </FlexContainer>
        </div>
      </PageContainer>

      <PageContainer>
        <div style={{ width: '100vw' }}>
          <TopBrand callback={() => push('/')} />
          <Contacts />
        </div>
      </PageContainer>
    </div>
  );
}
