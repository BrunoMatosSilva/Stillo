import { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import { Container, Content, ScheduleBody, ScheduleContent, ScheduleHeader, ScheduleWrapper } from './styles'
import pt from 'date-fns/locale/pt';
import { MenuUser } from '../../../components/Menu/user';

function ScheduleUser() {
  const [date, setDate] = useState(new Date());

  function getWeekDay(){
  const weekday = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

  return weekday[date.getDay()];
  }

  function handleDateChange(date:Date) {
    setDate(date);
  }

  return (
    <>
      <MenuUser />
      <Container>
        <Content>
          <ScheduleWrapper>
            <ScheduleContent>
              <ScheduleHeader>
                <h2>Horários agendados</h2>
                <p>Dia {date.getUTCDate()}  |  {getWeekDay()}</p>
              </ScheduleHeader>

                <ScheduleBody>
                <span>
                  <h3>Atendimento a seguir</h3>
                </span>

                  <div>Horarios aqui</div>
                </ScheduleBody>
            </ScheduleContent>
          <ReactDatePicker className="calendar"
            selected={date}
            onChange={handleDateChange}
            locale={pt}
            inline
          />
          </ScheduleWrapper>
        </Content>
      </Container>
    </>
  )
}

export default ScheduleUser
