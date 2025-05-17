import { BrandContainer, HostText, HostImage } from "./TopBrandStyles.ts"
import hostIcon from '../../../../public/assets/basedesBG.png'

interface propsI {
  callback: any
}

export function TopBrand(props: propsI) {
  return (
      <BrandContainer onClick={props.callback}>
        <HostImage src={hostIcon.src} />
        <HostText>Basedes</HostText>
      </BrandContainer>
  )
}
