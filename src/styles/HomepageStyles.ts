import styled from 'styled-components'
import { StaticImageData } from 'next/image'

interface pageContainerProps {
  image: StaticImageData
}

export const PageContainer = styled.div<pageContainerProps>`
  display: flex;
  height: 100vh;
  width: auto;
  background-image: ${(props) => `url(${props.image.src})`};
  background-size: cover
`

export const PlansButton = styled.button`
  border-radius: 20px 20px;
  height: 60px;
  width: 250px;
  margin-top: 750px;
  margin-left: 120px;
  position: absolute;
  background: linear-gradient(90deg,rgba(5, 252, 108, 1) 0%, rgba(87, 195, 199, 1) 88%, rgba(0, 242, 255, 1) 100%);
  color: black;
  font-size: 30px;
  font-weight: 80%;
  border: transparent;
  cursor: pointer;
`
