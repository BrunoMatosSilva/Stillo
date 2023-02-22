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
margin-top: 4rem;
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
    padding: 2rem 0 2rem 0;
    gap: 1rem;

    > div {
      hr {
        border-color: ${({theme}) => theme.colors.primary.secondary};
        margin-top: 0.5rem;
      }
    }

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

export const ListCheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 16px;
  margin: 1rem 0 1rem 0;
  flex-flow: row wrap;
  flex-shrink: 0;
  flex-basis: auto;

  ul {
    margin: 0.5rem 1rem 0 1rem;
    background: ${({theme}) => theme.colors.background};
    padding: 0.5rem 1rem;
    border-radius: 10px;

    input[type=checkbox] {
         position: relative;
	       cursor: pointer;
    }
    input[type=checkbox]:before {
         content: "";
         display: block;
         width: 10px;
         height: 10px;
         top: 0;
         left: 0;
         border: 2px solid ${({theme}) => theme.colors.primary.secondary};;
         border-radius: 3px;
         background-color: white;
}
    input[type=checkbox]:checked:after {
         content: "";
         display: block;
         width: 5px;
         height: 12px;
         border: solid ${({theme}) => theme.colors.success.dark};
         border-width: 0 2px 2px 0;
         -webkit-transform: rotate(45deg);
         -ms-transform: rotate(45deg);
         transform: rotate(45deg);
         position: absolute;
         top: -2px;
         left: 5px;
}
}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: end;
  padding-top: 1.5rem;
  gap: 2rem;

  button {
    width: 150px;
    height: 45px;
  }
`;
