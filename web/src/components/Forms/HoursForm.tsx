import { Clock } from "phosphor-react";

export function HoursForm(){
  return (
    <>
    <span>
                  <h3>Manhã</h3>
                  <hr />
                  <div className="schedule-hours">
                    <button type="button">
                      <Clock /> <p>08:00</p>
                    </button>
                    <button type="button">
                      <Clock /> <p>08:30</p>
                    </button>
                    <button type="button">
                      <Clock /> <p>09:00</p>
                    </button>
                    <button type="button">
                      <Clock /> <p>09:30</p>
                    </button>
                    <button type="button">
                      <Clock /> <p>10:00</p>
                    </button>
                    <button type="button">
                      <Clock /> <p>10:30</p>
                    </button>
                    <button type="button">
                      <Clock /> <p>11:00</p>
                    </button>
                    <button type="button">
                      <Clock /> <p>11:30</p>
                    </button>
                    <button type="button">
                      <Clock /> <p>12:00</p>
                    </button>
                  </div>
                </span>

                  <span>
                  <h3>Tarde</h3>
                  <hr />

                  <div className="schedule-hours">
                    <button type="button">
                      <Clock /> <p>12:30</p>
                    </button>
                    <button type="button">
                      <Clock /> <p>13:00</p>
                    </button>
                    <button type="button">
                      <Clock /> <p>13:30</p>
                    </button>
                    <button type="button">
                      <Clock /> <p>14:00</p>
                    </button>
                    <button type="button">
                      <Clock /> <p>14:30</p>
                    </button>
                    <button type="button">
                      <Clock /> <p>15:00</p>
                    </button>
                    <button type="button">
                      <Clock /> <p>15:30</p>
                    </button>
                    <button type="button">
                      <Clock /> <p>16:00</p>
                    </button>
                    <button type="button">
                      <Clock /> <p>16:30</p>
                    </button>
                  </div>
                </span>
    </>
  )
}
