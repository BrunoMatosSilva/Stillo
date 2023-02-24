import { darken } from "polished";
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

  .card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 800px;

    .card-hour {
        display: flex;
        align-items: center ;
        justify-content: center;

          svg {
            height: 20px;
            width: 20px;
            color: ${({theme}) => theme.colors.primary.secondary};
            margin-right: 0.5rem;
          }

          p {
            color: #999591;
            font-size: 18px;
          }
      }
    }

    .card-body {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      background: ${({theme}) => theme.colors.gray[500]};
      border-radius: 10px;
      width: 700px;
      height: 100px;

      .card-body-client {
        display: flex;
        align-items: center;
        gap: 1rem;

        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }

        p {
          font-size: 14px;
          font-weight: bold;
        }
      }

      .card-body-service {
        display: flex;
        align-items: center;
        flex-direction: column;
        color: ${({theme}) => theme.colors.primary.secondary};

        svg {
          height: 30px;
          width: 30px;
        }
      }

      .card-body-button {
        display: flex;
        align-items: center;
        gap: 1.5rem;

        .accept {
          border: none;
          background: transparent;

          svg {
            color: ${({theme}) => theme.colors.success.light};
            width: 40px;
            height: 40px;
            transition: 0.3s;

            &:hover {
              color: ${({theme}) => theme.colors.success.dark};
            }
          }
        }

        .reject {
          border: none;
          background: transparent;

          svg {
            color: ${({theme}) => theme.colors.primary.secondary};
            width: 40px;
            height: 40px;
            transition: 0.3s;

            &:hover {
              color: ${({theme}) => darken(0.08, theme.colors.primary.secondary)};
            }
          }
        }
      }
    }
`;
