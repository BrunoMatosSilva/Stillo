import { Link } from 'react-router-dom';
import { Container, Content } from './styles';
import logo from '../../assets/images/logo.svg';
import { Input } from '../../components/Input';
import { EnvelopeSimple, Lock } from 'phosphor-react';
import { Button } from '../../components/Button';

function Login() {
  return (
    <Container>
      <Content>
        <div className='cardLogin'>
        <Link to="/"><img src={logo} alt="Stillo Logotipo" /></Link>

        <span>
          <p>Não possui conta? <Link to="/register">Criar conta</Link></p>
        </span>


        <h2>Faça seu Login</h2>

        <form>
          <Input type="email" id="email" icon={<EnvelopeSimple />} placeholder="E-mail" required />
          <Input type="password" id="password" icon={<Lock />} placeholder="Senha" required />
          <Link to="/">Esqueceu a senha?</Link>

          <Button type="submit" title="Entrar" />
        </form>
        </div>
      </Content>
    </Container>
  )
}

export default Login
