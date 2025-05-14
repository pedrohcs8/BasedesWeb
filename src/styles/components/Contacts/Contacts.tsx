import { Spacer } from "../../../styles/HomepageStyles.ts"
import { ContactsContainer, IconsContainer, Title } from './ContactsStyles.ts'
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { useRouter } from 'next/navigation'

const discordLink = "https://discord.gg/3KQr32kcYc"
const instagramLink = "https://www.instagram.com/basedeshost?igsh=YjVoaXExMGo3djU5"

export function Contacts() {
  const { push } = useRouter()

  return (
    <div style={{ width: '100%' }}>
      <ContactsContainer>
        <Title>Entre Em Contato</Title>
        <Spacer height="30px" />

        <IconsContainer>
          <FaDiscord color="#fff" size={70} onClick={() => push(discordLink)} style={{ cursor: 'pointer' }} />
          <FaInstagram color="#fff" size={70} onClick={() => push(instagramLink)} style={{ cursor: 'pointer' }} />
        </IconsContainer>
      </ContactsContainer>
    </div>
  )
}
