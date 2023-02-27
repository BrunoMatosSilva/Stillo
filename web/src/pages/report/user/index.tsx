import { MenuUser } from "../../../components/Menu/user"
import { ReportForm } from "../../../components/ReportForm"
import { Container } from "./styles"

function ReportUser() {
  return (
    <>
      <MenuUser />
      <Container>

        <h2>Encontrou um problema?</h2>
        <p>Por gentileza, reporta preenchendo o formulário abaixo, para que nossa equipe resolva o mais breve possível.</p>

        <ReportForm />
      </Container>
    </>

  )
}

export default ReportUser
