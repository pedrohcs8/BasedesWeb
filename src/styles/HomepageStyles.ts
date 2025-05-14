import styled from 'styled-components'
import { StaticImageData } from 'next/image'

interface pageContainerProps {
  image: string
}

interface spacerProps {
  height: string
}

export const PageContainer = styled.div<pageContainerProps>`
  display: flex;
  height: 100vh;
  width: auto;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover
`

export const PromoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw
`

export const PlansButton = styled.button`
  border-radius: 20px 20px;
  height: 60px;
  width: 250px;
  margin-top: 50px;
  margin-right: 40px;
  background: linear-gradient(90deg,rgba(5, 252, 108, 1) 0%, rgba(87, 195, 199, 1) 88%, rgba(0, 242, 255, 1) 100%);
  color: black;
  font-size: 30px;
  font-weight: 80%;
  border: transparent;
  cursor: pointer;
`

export const Spacer = styled.div<spacerProps>`
  height: ${(props) => props.height}
`
