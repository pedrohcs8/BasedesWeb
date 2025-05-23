import styled from 'styled-components'

export const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  width: 280px;
  cursor: pointer;
  margin-top: 80px;

  @media (max-width: 950px) {
    height: 90px;
  }
`

export const HostImage = styled.img`
  height: 80px;
  width: 80px
`

export const HostText = styled.p`
  color: white;
  margin: auto;
  padding-left: 10px;
  font-size: 42px;
`
