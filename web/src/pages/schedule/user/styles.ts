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

export const ScheduleBody = styled.form`
display: flex;
justify-content: center;
flex-direction: column;
gap: 1rem;

span {

    h3 {
    font-size: 20px;
    font-weight: 400;
    color: #999591;
  }

  hr {
    margin-top: 0.5rem;
    border: 1px solid ${({theme}) => theme.colors.primary.text};
  }

}

  .schedule-hours {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 16px;
    margin: 1rem 0 1rem 0;
    flex-flow: row wrap;
    flex-shrink: 0;
    flex-basis: auto;

      button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        border: none;
        margin: 0.5rem 1rem 0 1rem;
        background: ${({theme}) => theme.colors.gray[500]};
        color: ${({theme}) => theme.colors.primary.main};
        padding: 0.5rem 1rem;
        border-radius: 10px;
        transition: 0.3s;

          svg {
            color: ${({theme}) => theme.colors.primary.secondary};
          }

          &:hover {
            background: ${({theme}) => theme.colors.primary.secondary};
            color: ${({theme}) => theme.colors.background};

            svg {
              color: ${({theme}) => theme.colors.background};
            }
          }
      }
  }

  .service-content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 16px;
    margin: 1rem 0 1rem 0;
    flex-flow: row wrap;
    flex-shrink: 0;
    flex-basis: auto;
    gap: 1rem;

      button {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 140px;
        gap: 0.8rem;
        border: none;
        margin: 0.5rem 1rem 0 1rem;
        background: ${({theme}) => theme.colors.gray[500]};
        color: ${({theme}) => theme.colors.primary.main};
        padding: 0.5rem 1rem;
        border-radius: 10px;
        transition: 0.3s;

          > img {
            height: 25px;
            width: 25px;
            color: ${({theme}) => theme.colors.primary.secondary};
          }

          &:hover {
            background: ${({theme}) => theme.colors.primary.secondary};

            img {
              color: ${({theme}) => theme.colors.background};
            }
          }
      }
  }

  .nav-step {
    display: flex;
    align-items: flex-end;
    justify-content: end;
    padding-top: 1.5rem;
    gap: 2rem;

    button {
      width: 150px;
      height: 45px;
    }
  }
`;
