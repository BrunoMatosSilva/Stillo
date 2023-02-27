import { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import { Container, Content, ScheduleBody, ScheduleContent, ScheduleHeader, ScheduleWrapper } from './styles'
import pt from 'date-fns/locale/pt';
import { Clock, Eye } from 'phosphor-react';
import { MenuUser } from '../../../components/Menu/user';

function OrderUser() {
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
                <h2>Meus pedidos feitos</h2>
                <p>Dia {date.getUTCDate()}  |  {getWeekDay()}</p>
              </ScheduleHeader>

                <ScheduleBody>

                  <div className="card">
                    <div className="card-body">
                      <div className="card-body-client">
                        <img src="https://avatars.githubusercontent.com/u/69808542?v=4" />
                        <p>Bruno Matos</p>
                        <div className="card-body-hour">
                        <Clock /> 08:00
                        </div>
                      </div>

                      <div className="card-body-service">
                        <Eye />
                        <p>Sobrancelha</p>
                      </div>
                      <div className="card-status">
                        <p>Aprovado</p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-body">
                      <div className="card-body-client">
                        <img src="https://avatars.githubusercontent.com/u/69808542?v=4" />
                        <p>Bruno Matos</p>
                        <div className="card-body-hour">
                        <Clock /> 10:00
                        </div>
                      </div>

                      <div className="card-body-service">
                        <Eye />
                        <p>Sobrancelha</p>
                      </div>
                      <div className="card-status cancel">
                        <p>Cancelado</p>
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

export default OrderUser
