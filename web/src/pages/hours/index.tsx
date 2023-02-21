import { MenuAdmin } from '../../components/Menu/admin'
import { Container, Content, Header, HoursWrapper } from './styles'
import DatePicker from "react-datepicker";
import { useState } from 'react';
import pt from 'date-fns/locale/pt';

import "react-datepicker/dist/react-datepicker.css";
import { Input } from '../../components/Input';
import { Calendar } from 'phosphor-react';

function Hours() {
  const [date, setDate] = useState(new Date());

  function handleDateChange(date:any) {
    setDate(date);
  }

  return (
   <>
   <MenuAdmin />
   <Container>
    <Content>
      <Header>
        <h1>Cadastro Horários de Atendimento</h1>
      </Header>
        <HoursWrapper>
          <form>
            <span>
              <Input label="Dia:" id="day" icon={<Calendar />} placeholder="Data" />
              <DatePicker className="calendar"
                  selected={date}
                  onChange={handleDateChange}
                  locale={pt}
                  inline
                />
            </span>
            <div>
              <p>Manhã</p>
              <hr />
              <p>Tarde</p>
              <hr />
            </div>
          </form>
        </HoursWrapper>
      </Content>
   </Container>
   </>
  )
}

export default Hours
