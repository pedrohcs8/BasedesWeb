import { TopBrandContainer, BottomBrandContainer, HostText, HostImage } from "./TopBrandStyles.ts"
import hostIcon from '../../../../public/assets/basedesBG.png'

interface propsI {
  callback: any
}

export function TopBrand(props: propsI) {
  return (
      <TopBrandContainer onClick={props.callback}>
        <div style={{ width: '280px', display: 'flex' }}>
          <HostImage src={hostIcon.src} style={{ opacity: '0.8' }} />
          <HostText>Basedes</HostText>
        </div>
        </TopBrandContainer>
  )
}

export function BottomBrand(props: propsI) {
  return (
      <BottomBrandContainer onClick={props.callback}>
        <HostImage src={hostIcon.src} />
        <HostText>Basedes</HostText>
      </BottomBrandContainer>
  )
}
