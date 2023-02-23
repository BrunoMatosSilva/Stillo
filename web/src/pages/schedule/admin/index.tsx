import { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import { MenuAdmin } from '../../../components/Menu/admin'
import { Container, Content, ScheduleBody, ScheduleContent, ScheduleHeader, ScheduleWrapper } from './styles'
import pt from 'date-fns/locale/pt';
import { Clock, Eye, Scissors } from 'phosphor-react';

function Schedule() {
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
      <MenuAdmin />
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

                  <div className="fist-card">
                    <div className="fist-card-client">
                      <img src="https://avatars.githubusercontent.com/u/69808542?v=4" />
                      <p>Bruno Matos</p>
                    </div>
                    <div className="fist-card-service">
                      <Scissors />
                      <p>Corte de cabelo</p>
                    </div>
                    <div className="fist-card-hour">
                      <Clock />
                      <p>08:00</p>
                    </div>

                  </div>

                  <div className="card">
                    <div className="card-hour">
                      <Clock /> 08:00
                    </div>
                    <div className="card-body">
                      <div className="card-body-client">
                        <img src="https://avatars.githubusercontent.com/u/69808542?v=4" />
                        <p>Bruno Matos</p>
                      </div>

                      <div className="card-body-service">
                        <Eye />
                        <p>Sobrancelha</p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-hour">
                      <Clock /> 08:00
                    </div>
                    <div className="card-body">
                      <div className="card-body-client">
                        <img src="https://avatars.githubusercontent.com/u/69808542?v=4" />
                        <p>Bruno Matos</p>
                      </div>

                      <div className="card-body-service">
                        <Eye />
                        <p>Sobrancelha</p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-hour">
                      <Clock /> 08:00
                    </div>
                    <div className="card-body">
                      <div className="card-body-client">
                        <img src="https://avatars.githubusercontent.com/u/69808542?v=4" />
                        <p>Bruno Matos</p>
                      </div>

                      <div className="card-body-service">
                        <Eye />
                        <p>Sobrancelha</p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-hour">
                      <Clock /> 08:00
                    </div>
                    <div className="card-body">
                      <div className="card-body-client">
                        <img src="https://avatars.githubusercontent.com/u/69808542?v=4" />
                        <p>Bruno Matos</p>
                      </div>

                      <div className="card-body-service">
                        <Eye />
                        <p>Sobrancelha</p>
                      </div>
                    </div>
                  </div>
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

export default Schedule
