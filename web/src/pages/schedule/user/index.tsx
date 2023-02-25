import { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import { Container, Content, ScheduleBody, ScheduleContent, ScheduleHeader, ScheduleWrapper } from './styles'
import pt from 'date-fns/locale/pt';
import { MenuUser } from '../../../components/Menu/user';
import { Clock } from 'phosphor-react';

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
                <h2>Vagas</h2>
                <p>Dia {date.getUTCDate()}  |  {getWeekDay()}</p>
              </ScheduleHeader>

                <ScheduleBody>
                <span>
                  <h3>Manhã</h3>
                  <hr />
                  <div className="schedule-hours">
                    <button type="button">
                      <Clock /> <p>08:00</p>
                    </button>
                    <button type="button">
                      <Clock /> <p>08:30</p>
                    </button>
                    <button type="button">
                      <Clock /> <p>09:00</p>
                    </button>
                    <button type="button">
                      <Clock /> <p>09:30</p>
                    </button>
                    <button type="button">
                      <Clock /> <p>10:00</p>
                    </button>
                    <button type="button">
                      <Clock /> <p>10:30</p>
                    </button>
                    <button type="button">
                      <Clock /> <p>11:00</p>
                    </button>
                    <button type="button">
                      <Clock /> <p>11:30</p>
                    </button>
                    <button type="button">
                      <Clock /> <p>12:00</p>
                    </button>
                  </div>
                </span>

                  <span>
                  <h3>Tarde</h3>
                  <hr />

                  <div className="schedule-hours">
                    <button type="button">
                      <Clock /> <p>08:00</p>
                    </button>
                    <button type="button">
                      <Clock /> <p>08:30</p>
                    </button>
                    <button type="button">
                      <Clock /> <p>09:00</p>
                    </button>
                    <button type="button">
                      <Clock /> <p>09:30</p>
                    </button>
                    <button type="button">
                      <Clock /> <p>10:00</p>
                    </button>
                    <button type="button">
                      <Clock /> <p>10:30</p>
                    </button>
                    <button type="button">
                      <Clock /> <p>11:00</p>
                    </button>
                    <button type="button">
                      <Clock /> <p>11:30</p>
                    </button>
                    <button type="button">
                      <Clock /> <p>12:00</p>
                    </button>
                  </div>
                </span>

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
