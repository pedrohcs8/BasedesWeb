import styled from 'styled-components'

interface spacerProps {
  height: string
}

interface sideTitleProps {
  color: string
}

interface pageContainerProps {
  image: string
}

interface sideTextContainerProps {
  left?: string;
  right?: string;
}

export const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  padding-bottom: 100px;

  @media (max-width: 800px) {
    height: 110vh;
  }

  @media (max-width: 500px) {
    height: 150vh;
  }
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
  width: 100%
`

export const HomepageTopContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 200px;
  align-items: center;

  @media (max-width: 950px) {
    margin-top: 90px;
    flex-direction: column;
  }
`

export const HomepageIntroContainer = styled(FlexContainer)`
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  width: 100%;

  @media (max-width: 950px) {
    flex-direction: column
  }
`

export const HomepageIntroText = styled.h1`
  color: white;
  font-size: 80px;
  width: auto;
  text-align: center;
  line-height: 1.8;

  @media (max-width: 950px) {
    font-size: 54px;
    line-height: 1.2;
    margin-top: 30px
  }
`

export const HomepageIntroImage = styled.img`
  height: 400px;
  width: 400px;
  border-radius: 20%;

  @media (max-width: 950px) {
    height: 300px;
    width: 300px;
  }
`

export const PlansButton = styled.button`
  border-radius: 20px 20px;
  height: 50px;
  width: 250px;
  background: linear-gradient(90deg,rgba(5, 252, 108, 1) 0%, rgba(87, 195, 199, 1) 88%, rgba(0, 242, 255, 1) 100%);
  color: black;
  font-size: 30px;
  font-weight: 80%;
  border: transparent;
  cursor: pointer;

  @media (max-width: 950px) {
    margin-top: 20px
  }
`

export const Spacer = styled.div<spacerProps>`
  height: ${(props) => props.height}
`

export const SideTextContainer = styled.div<sideTextContainerProps>`
  margin-left: ${(props) => `${props.left != undefined ? props.left : '0px'}`};
  margin-right: ${(props) => `${props.right != undefined ? props.right : '0px'}`};

  @media (max-width: 950px) {
    margin-left: 0px;
    margin-right: 0px
  }
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

  @media (max-width: 800px) {
    font-size: 20px;
    margin-top: 10px
  }
`

export const SideImage = styled.img`
  height: auto;
  width: 400px;
  border-radius: 15%;

  @media (max-width: 950px) {
    display: none
  }
`

export const SideTitle = styled.h1<sideTitleProps>`
  font-size: 50px;
  color: ${(props) => props.color};

  @media (max-width: 1200px) {
    text-align: center
  }

  @media (max-width: 800px) {
    font-size: 30px;
    margin-top: 10px
  }
`

export const IntroTitle = styled.p`
  font-size: 40px;
  color: white;
  text-align: center;
  width: auto;
  max-width: 1200px;
  line-height: 1.5;

  @media (max-width: 1200px) {
    font-size: 35px;
  }

  @media (max-width: 800px) {
    font-size: 24px;
  }
`

export const IntroSubtitle = styled.span<sideTitleProps>`
  color: ${(props) => props.color};
  margin-left: 8px;
  margin-right: 8px;
  font-weight: bold
`
