import { MenuAdmin } from '../../components/Menu/admin'
import DatePicker from "react-datepicker";
import { ChangeEvent, useState } from 'react';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import {
  ButtonWrapper,
  Container,
  Content,
  Header,
  HoursWrapper,
  ListCheckBox
} from './styles'

import "react-datepicker/dist/react-datepicker.css";
import { Input } from '../../components/Input';
import { Calendar } from 'phosphor-react';
import { Button } from '../../components/Button';

function Hours() {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState<string[]>([]);

  function handleDateChange(date:Date) {
    setDate(date);
  }

  function getHours(event:ChangeEvent<HTMLInputElement>) {
    const {value, checked} = event.target

    if(checked) {
      setHours(prev => [...prev, value]);
    }
  }
  console.log(hours)

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
              <Input
              label="Dia:"
              id="day"
              name="day"
              icon={<Calendar />}
              placeholder="Data"
              onChange={()=> handleDateChange(date)}
              value={format(date, 'dd/MM/yyyy')}
              />
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
              <ListCheckBox>
                <ul><input type="checkbox" title={`08:00`} id="hours" value={`08:00`} onChange={getHours} /> 08:00</ul>
                <ul><input type="checkbox" title={`08:30`} id="hours" value={`08:30`} onChange={getHours} /> 08:30</ul>
                <ul><input type="checkbox" title={`09:00`} id="hours" value={`09:00`} onChange={getHours} /> 09:00</ul>
                <ul><input type="checkbox" title={`09:30`} id="hours" value={`09:30`} onChange={getHours} /> 09:30</ul>
                <ul><input type="checkbox" title={`10:00`} id="hours" value={`10:00`} onChange={getHours} /> 10:00</ul>
                <ul><input type="checkbox" title={`10:30`} id="hours" value={`10:30`} onChange={getHours} /> 10:30</ul>
                <ul><input type="checkbox" title={`11:00`} id="hours" value={`11:00`} onChange={getHours} /> 11:00</ul>
                <ul><input type="checkbox" title={`11:30`} id="hours" value={`11:30`} onChange={getHours} /> 11:30</ul>
                <ul><input type="checkbox" title={`12:00`} id="hours" value={`12:00`} onChange={getHours} /> 12:00</ul>
              </ListCheckBox>
              <p>Tarde</p>
              <hr />
              <ListCheckBox>
                <ul><input type="checkbox" title={`12:30`} id="hours" value={`12:30`} onChange={getHours} /> 12:30</ul>
                <ul><input type="checkbox" title={`13:00`} id="hours" value={`13:00`} onChange={getHours} /> 13:00</ul>
                <ul><input type="checkbox" title={`13:30`} id="hours" value={`13:30`} onChange={getHours} /> 13:30</ul>
                <ul><input type="checkbox" title={`14:00`} id="hours" value={`14:00`} onChange={getHours} /> 14:00</ul>
                <ul><input type="checkbox" title={`14:30`} id="hours" value={`14:30`} onChange={getHours} /> 14:30</ul>
                <ul><input type="checkbox" title={`15:00`} id="hours" value={`15:00`} onChange={getHours} /> 15:00</ul>
                <ul><input type="checkbox" title={`15:30`} id="hours" value={`15:30`} onChange={getHours} /> 15:30</ul>
                <ul><input type="checkbox" title={`16:00`} id="hours" value={`16:00`} onChange={getHours} /> 16:00</ul>
                <ul><input type="checkbox" title={`16:30`} id="hours" value={`16:30`} onChange={getHours} /> 16:30</ul>
                <ul><input type="checkbox" title={`17:00`} id="hours" value={`17:00`} onChange={getHours} /> 17:00</ul>
                <ul><input type="checkbox" title={`17:30`} id="hours" value={`17:30`} onChange={getHours} /> 17:30</ul>
                <ul><input type="checkbox" title={`18:00`} id="hours" value={`18:00`} onChange={getHours} /> 18:00</ul>
              </ListCheckBox>

              <ButtonWrapper>
                <Button type="submit" success title="Cadastra" />
                <Button type="reset" title="Cancelar"  />
              </ButtonWrapper>
            </div>
          </form>
        </HoursWrapper>
      </Content>
   </Container>
   </>
  )
}

export default Hours
