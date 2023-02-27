import { ArrowLeft, Camera, Envelope, Lock, Person, Phone } from "phosphor-react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { AvatarInput, Container, Content, FormPerfil, MenuContent, MenuWrapper, PhotoWrapper } from "./styles"

function Profile() {
  const navigate = useNavigate()

  return (
    <>
      <MenuWrapper>
        <MenuContent>
        <button onClick={() => navigate(-1)}>
          <ArrowLeft />
        </button>
        </MenuContent>
      </MenuWrapper>
      <Container>
        <Content>
          <PhotoWrapper>
            <AvatarInput>
              <img src="https://avatars.githubusercontent.com/u/69808542?v=4" alt="Bruno Matos" />
              <label htmlFor="avatar">
                <Camera />
                <input type="file" id="avatar" />
              </label>
            </AvatarInput>
          </PhotoWrapper>
          <FormPerfil>
            <Input type="text" icon={<Person />} value="Bruno Matos" />
            <Input type="email" icon={<Envelope />} value="bmsfrontend@gmail.com" />
            <Input type="tel" icon={<Phone />} value="11 95533-7755" />
            <span>
              <Input type="password" icon={<Lock />} placeholder="Senha atual" />
              <Input type="password" icon={<Lock />} placeholder="Nova senha" />
              <Input type="password" icon={<Lock />} placeholder="Confirma senha" />
            </span>
            <Button title="Confirmar mudanças" />
          </FormPerfil>
        </Content>
      </Container>
    </>
  )
}

export default Profile
