import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Content = styled.div`
  width: 1240px;
  align-items: center;
  justify-content: center;
`;

export const ScheduleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 250px;
  width: 100%;
  padding: 4rem;
  gap: 1rem;

  .react-datepicker {
      background: #312E38;
      margin-top: 1rem;
      border: none;
    }
    .react-datepicker__header {
      background: ${({theme}) => theme.colors.gray[500]};
      border: none;
    }
    .react-datepicker__current-month {
      color: ${({theme}) => theme.colors.primary.main};
      font-weight: 400;
    }
    .react-datepicker__navigation-icon::before {
      border-color: ${({theme}) => theme.colors.primary.main};
    }
    .react-datepicker__day {
      color: ${({theme}) => theme.colors.gray[200]};
    }
    .react-datepicker__day-name {
      color: ${({theme}) => theme.colors.primary.main};
    }
    .react-datepicker__day--selected {
      color: ${({theme}) => theme.colors.gray[900]};
      background: ${({theme}) => theme.colors.primary.secondary};
    }
`;

export const ScheduleContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ScheduleHeader = styled.div`
display: block;
padding-bottom: 4rem;
  h2 {
    font-size: 36px;
    padding-bottom: 1rem;
  }
  p {
    color: ${({theme}) => theme.colors.primary.secondary};
  }
`;

export const ScheduleBody = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
gap: 1rem;

h3 {
  font-size: 20px;
  font-weight: 400;
  color: #999591;
}
`;
