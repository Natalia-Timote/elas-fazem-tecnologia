import Fieldset from "../Fieldset";
import "./EventForm.css";

interface EventFormProps {
    children: React.ReactNode
}

export default function EventForm({ children }: EventFormProps) {
    return (
        <form>
            <h2>{children}</h2>
            <section>
                <Fieldset 
                    fieldsetName="name" 
                    inputType="text" 
                    inputId="event-name" 
                    inputPlaceholder="Nome do evento"
                >
                    Qual o nome do evento?
                </Fieldset>

                <Fieldset 
                    fieldsetName="date" 
                    inputType="date" 
                    inputId="event-date" 
                    inputPlaceholder="xx/xx/xxxx"
                >
                    Data do evento
                </Fieldset>

                <Fieldset 
                    fieldsetName="theme" 
                    inputType="text" 
                    inputId="event-theme" 
                    inputPlaceholder="Selecione uma opção"
                >
                    Tema do evento
                </Fieldset>
            </section>
            <button className="form-btn">Criar evento</button>
        </form>
    )
}