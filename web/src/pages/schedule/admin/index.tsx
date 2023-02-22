import { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import { MenuAdmin } from '../../../components/Menu/admin'
import { Container, Content } from './styles'
import pt from 'date-fns/locale/pt';

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
          <div>
            <h2>Horários agendados</h2>
            <p>Dia {date.getUTCDate()}  |  {getWeekDay()}</p>
          </div>
          <ReactDatePicker className="calendar"
            selected={date}
            onChange={handleDateChange}
            locale={pt}
            inline
          />
        </Content>
      </Container>
    </>
  )
}

export default Schedule
