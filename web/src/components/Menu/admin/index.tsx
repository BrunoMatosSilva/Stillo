import { Link } from 'react-router-dom'
import { Container, Content, MenuWrapper, ProfileWrapper } from './styles'

import logo from '../../../assets/images/logo.svg';
import { NavLink } from '../../NavLink';
import { BugBeetle, CalendarCheck, Checks, ClipboardText, Power } from 'phosphor-react';

export function MenuAdmin() {
  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={logo} alt="Logo tipo Stillo" width={200} />
        </Link>
        <MenuWrapper>
          <NavLink path="/hours" icon={<ClipboardText />} title="Cadastra Horários"/>
          <NavLink path="/schedule" icon={<CalendarCheck />} title="Agenda" />
          <NavLink path="/orders" icon={<Checks />} title="Pedidos" />
          <NavLink path="/contact" icon={<BugBeetle />} title="Reporta Problemas" />
        </MenuWrapper>
        <section>
          <ProfileWrapper>
            <button>
            <img src="https://avatars.githubusercontent.com/u/69808542?v=4" alt="Sua foto" />
            <span>
              <p>Bem-vindo,</p>
              <strong>Bruno Matos</strong>
            </span>
            </button>
            <Link to="/"><Power size={25} /></Link>
          </ProfileWrapper>
        </section>
      </Content>
    </Container>
  )
}
