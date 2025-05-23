import styled from 'styled-components'
import { StaticImageData } from 'next/image'

interface spacerProps {
  height: string
}

interface sideTitleProps {
  color: string
}

interface pageContainerProps {
  image: string
}

export const PageContainer = styled.div`
  display: flex;
  height: 115vh;
  width: 100vw;
  justify-content: center;
  background-color: #101728
`

export const PageContainerImage = styled.div<pageContainerProps>`
  display: flex;
  height: 100vh;
  width: auto;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
`

export const CenteringContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 83vw;
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw
`

export const HomepageTopContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 950px) {
    flex-direction: column
  }
`

export const HomepageIntroContainer = styled(FlexContainer)`
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  margin-top: 20px;
  width: 100%;

  @media (max-width: 950px) {
    flex-direction: column
  }
`

export const HomepageIntroImage = styled.img`
  height: 400px;
  width: 400px;
  border-radius: 20%;
`

export const PlansButton = styled.button`
  border-radius: 20px 20px;
  height: 50px;
  width: 250px;
  margin-top: 50px;
  margin-right: 40px;
  background: linear-gradient(90deg,rgba(5, 252, 108, 1) 0%, rgba(87, 195, 199, 1) 88%, rgba(0, 242, 255, 1) 100%);
  color: black;
  font-size: 30px;
  font-weight: 80%;
  border: transparent;
  cursor: pointer;

  @media (max-width: 950px) {
    margin-left: 50px;
  }
`

export const Spacer = styled.div<spacerProps>`
  height: ${(props) => props.height}
`

export const SideText = styled.p`
  color: white;
  margin-top: 40px;
  font-size: 24px;
  text-align: justify;
  max-width: 1000px;
  line-height: 1.8;

  @media (max-width: 1400px) {
    font-size: 20px;
  }
`

export const SideImage = styled.img`
  height: 400px;
  width: 400px;
  margin-top: 120px;
  border-radius: 20%;

  @media (max-width: 950px) {
    display: none
  }
`

export const SideTitle = styled.h1<sideTitleProps>`
  margin-top: 120px;
  font-size: 50px;
  color: ${(props) => props.color};

@media (max-width: 1200px) {
    text-align: center
  }
`

export const IntroTitle = styled.p`
  font-size: 40px;
  color: white;
  text-align: center;
  width: auto;
  max-width: 1200px;
  line-height: 1.5;
  margin-top: 100px;

  @media (max-width: 1200px) {
    font-size: 35px;
  }
`

export const IntroSubtitle = styled.span<sideTitleProps>`
  color: ${(props) => props.color};
  margin-left: 8px;
  margin-right: 8px;
  font-weight: bold
`
