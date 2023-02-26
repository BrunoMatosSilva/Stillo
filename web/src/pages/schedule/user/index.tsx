import { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import { Container, Content, ScheduleBody, ScheduleContent, ScheduleHeader, ScheduleWrapper } from './styles'
import pt from 'date-fns/locale/pt';
import { MenuUser } from '../../../components/Menu/user';
import { Button } from '../../../components/Button';
import { useMultistepForm } from '../../../hook/useMultistepForm';
import { ServiceForm } from '../../../components/Forms/ServiceForm';
import { HoursForm } from '../../../components/Forms/HoursForm';

function ScheduleUser() {
  const [date, setDate] = useState(new Date());
  const {backStep, nextStep, isFirstStep, isLastStep, step} = useMultistepForm([
    <HoursForm />,
    <ServiceForm />
  ]);
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
                  {step}
                  <div className="nav-step">
                   {!isFirstStep && <Button type="button" title="Voltar" onClick={backStep}/> }
                    {isLastStep
                    ?
                    <Button type="button" title="Solicitar" success />
                    :
                    <Button type="button" title="Prosseguir" success onClick={nextStep} />}
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

export default ScheduleUser
