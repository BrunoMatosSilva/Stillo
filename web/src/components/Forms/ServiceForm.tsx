import { Scissors } from "phosphor-react";
import Mustache from '../../assets/images/mustache.svg'
import Cut from '../../assets/images/cut.svg'
import Ink from '../../assets/images/ink.svg'
import Eyes from '../../assets/images/eyes.svg'
import Bx from '../../assets/images/bx.svg'
import Nail from '../../assets/images/nail.svg'
import Shaver from '../../assets/images/shaver.svg'

export function ServiceForm(){
  return(
    <>
    <span>
      <h3>Serviços</h3>
      <hr />

      <div className="service-content">
        <button type="button">
        <img src={Cut} />
          <p>Corte de Cabelo</p>
          <span>R$ 35,00</span>
        </button>

        <button type="button">
          <img src={Mustache} />
          <p>Corte de Barba</p>
          <span>R$ 15,00</span>
        </button>

        <button type="button">
          <img src={Ink} />
          <p>Luzes no Cabelo</p>
          <span>R$ 10,00</span>
        </button>

        <button type="button">
          <img src={Bx} />
          <p>Pintar o Cabelo</p>
          <span>R$ 25,00</span>
        </button>

        <button type="button">
          <img src={Nail} />
          <p>Corte de Unhas</p>
          <span>R$ 35,00</span>
        </button>

        <button type="button">
          <img src={Eyes} />
          <p>Sobrancelhas</p>
          <span>R$ 20,00</span>
        </button>

        <button type="button">
          <img src={Shaver} />
          <p>Depilação</p>
          <span>R$ 80,00</span>
        </button>
      </div>
    </span>
    </>
  );
}
