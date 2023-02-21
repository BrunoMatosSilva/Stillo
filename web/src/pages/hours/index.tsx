import { MenuAdmin } from '../../components/Menu/admin'
import { ButtonWrapper, Container, Content, Header, HoursWrapper, ListCheckBox } from './styles'
import DatePicker from "react-datepicker";
import { useState } from 'react';
import pt from 'date-fns/locale/pt';

import "react-datepicker/dist/react-datepicker.css";
import { Input } from '../../components/Input';
import { Calendar, Clock } from 'phosphor-react';
import { Checkbox } from '../../components/Checkbox';
import { Button } from '../../components/Button';

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
              <ListCheckBox>
                <Checkbox icon={<Clock />} title={`08:00`} id="hours" value={`08:00`} />
                <Checkbox icon={<Clock />} title={`08:30`} id="hours" value={`08:30`} />
                <Checkbox icon={<Clock />} title={`09:00`} id="hours" value={`09:00`} />
                <Checkbox icon={<Clock />} title={`09:30`} id="hours" value={`09:30`} />
                <Checkbox icon={<Clock />} title={`10:00`} id="hours" value={`10:00`} />
                <Checkbox icon={<Clock />} title={`10:30`} id="hours" value={`10:30`} />
                <Checkbox icon={<Clock />} title={`11:00`} id="hours" value={`11:00`} />
                <Checkbox icon={<Clock />} title={`11:30`} id="hours" value={`11:30`} />
                <Checkbox icon={<Clock />} title={`12:00`} id="hours" value={`12:00`} />
              </ListCheckBox>
              <p>Tarde</p>
              <hr />
              <ListCheckBox>
                <Checkbox icon={<Clock />} title={`12:30`} id="hours" value={`12:30`} />
                <Checkbox icon={<Clock />} title={`13:00`} id="hours" value={`13:00`} />
                <Checkbox icon={<Clock />} title={`13:30`} id="hours" value={`13:30`} />
                <Checkbox icon={<Clock />} title={`14:00`} id="hours" value={`14:00`} />
                <Checkbox icon={<Clock />} title={`14:30`} id="hours" value={`14:30`} />
                <Checkbox icon={<Clock />} title={`15:00`} id="hours" value={`15:00`} />
                <Checkbox icon={<Clock />} title={`15:30`} id="hours" value={`15:30`} />
                <Checkbox icon={<Clock />} title={`16:00`} id="hours" value={`16:00`} />
                <Checkbox icon={<Clock />} title={`16:30`} id="hours" value={`16:30`} />
                <Checkbox icon={<Clock />} title={`17:00`} id="hours" value={`17:00`} />
                <Checkbox icon={<Clock />} title={`17:30`} id="hours" value={`17:30`} />
                <Checkbox icon={<Clock />} title={`18:00`} id="hours" value={`18:00`} />
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
