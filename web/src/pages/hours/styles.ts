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

export const Header = styled.div`
display: flex;
background: ${({theme}) => theme.colors.gray[900]};
align-items: center;
justify-content: center;
padding: 2rem 0 2rem 0;
margin-top: 2rem;
border-radius: 10px 10px 0 0;
`;

export const HoursWrapper = styled.div`
background: ${({theme}) => theme.colors.gray[500]};
padding: 2rem;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
border-radius: 0px 0px 10px 10px;

  form {
    display: grid;
    grid-template-columns: 350px 1fr;
    width: 100%;
    gap: 1rem;

    span {
      display: flex;
      flex-direction: column;
      align-items: center;

        label {
        color: ${({theme}) => theme.colors.primary.main};
      }
      input {
        height: 40px;
        font-size: 16px;
      }
    }
    .react-datepicker {
      background: ${({theme}) => theme.colors.background};
      margin-top: 1rem;
      border: none;
    }
    .react-datepicker__header {
      background: ${({theme}) => theme.colors.gray[900]};
      border: none;
    }
    .react-datepicker__current-month {
      color: ${({theme}) => theme.colors.primary.secondary};
      font-weight: 400;
    }
    .react-datepicker__navigation-icon::before {
      border-color: ${({theme}) => theme.colors.primary.secondary};
    }
    .react-datepicker__day {
      color: ${({theme}) => theme.colors.gray[200]};
    }
    .react-datepicker__day-name {
      color: ${({theme}) => theme.colors.gray[200]};
    }
    .react-datepicker__day--selected {
      color: ${({theme}) => theme.colors.gray[900]};
      background: ${({theme}) => theme.colors.primary.secondary};
    }
  }
`;
