import { Link } from "react-router-dom"
import { EnvelopeSimple, User, Phone, Lock } from 'phosphor-react';
import logo from '../../assets/images/logo.svg';
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container, Content } from "./styles"

function Register() {
  return (
    <Container>
      <Content>
        <div className='cardLogin'>
        <Link to="/"><img src={logo} alt="Stillo Logotipo" /></Link>

        <form>
          <Input type="name" id="name" icon={<User />} placeholder="Nome" required />
          <Input type="email" id="email" icon={<EnvelopeSimple />} placeholder="E-mail" required />
          <Input type="phone" id="phone" icon={<Phone />} placeholder="Telefone" required />
          <Input type="password" id="password" icon={<Lock />} placeholder="Senha" required />

          <Button type="submit" title="Cadastra" />
        </form>
        <Link to="/">Já tenho login</Link>
        </div>
      </Content>
    </Container>
  )
}

export default Register
