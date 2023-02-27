import { Link } from 'react-router-dom'
import { Container, Content, MenuWrapper, ProfileWrapper } from './styles'

import logo from '../../../assets/images/logo.svg';
import {LinkMenu } from '../../NavLink';
import { BugBeetle, CalendarCheck, Checks, ClipboardText, Power } from 'phosphor-react';

export function MenuUser() {
  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={logo} alt="Logo tipo Stillo" width={200} />
        </Link>
        <MenuWrapper>
          <LinkMenu  path="/schedule/user" icon={<CalendarCheck />} title="Agendar" />
          <LinkMenu  path="/order/user" icon={<Checks />} title="Pedidos" />
          <LinkMenu  path="/report/user" icon={<BugBeetle />} title="Reporta Problemas" />
        </MenuWrapper>
        <section>
          <ProfileWrapper>
            <Link to="/profile/id">
            <img src="https://avatars.githubusercontent.com/u/69808542?v=4" alt="Sua foto" />
            <span>
              <p>Bem-vindo,</p>
              <strong>Bruno Matos</strong>
            </span>
            </Link>
            <Link to="/"><Power size={25} /></Link>
          </ProfileWrapper>
        </section>
      </Content>
    </Container>
  )
}
