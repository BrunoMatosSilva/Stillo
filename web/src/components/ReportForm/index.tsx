import { Envelope, EnvelopeOpen, Pencil } from "phosphor-react";
import { Button } from "../Button";
import { Input } from "../Input";
import { TextArea } from "../TextaArea";
import { Container } from "./styles";

export function ReportForm() {
  return (
    <Container>
      <form>
        <Input name="title" type="text" icon={<Pencil />} placeholder="Titulo" />
        <Input name="email" type="email" icon={<Envelope />} placeholder="E-mail" />
        <TextArea name="message" icon={<EnvelopeOpen />} placeholder="Mensagem que deseja enviar." />
          <div className="button-wrapper">
          <Button name="submit" title="Enviar" success />
          </div>
      </form>
    </Container>
  );
}
