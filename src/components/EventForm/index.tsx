import Button from "../Button";
import DropdownList from "../DropdownList";
import Input from "../Input";
import Label from "../Label";
import "./EventForm.css";

interface EventFormProps {
    children: React.ReactNode
}

export default function EventForm({ children }: EventFormProps) {
    return (
        <form>
            <h2>{children}</h2>
            <section>
                <fieldset>
                    <Label fieldsetName="name">Qual o nome do evento?</Label>
                    <Input
                        fieldsetName="name"
                        inputType="text"
                        inputId="event-name"
                        inputPlaceholder="Nome do evento"
                    ></Input>
                </fieldset>

                <fieldset>
                    <Label fieldsetName="date">Data do evento</Label>
                    <Input
                        fieldsetName="date"
                        inputType="date"
                        inputId="event-date"
                        inputPlaceholder="xx/xx/xxxx"
                    ></Input>
                </fieldset>

                <fieldset>
                    <Label fieldsetName="theme">Tema do evento</Label>
                    <DropdownList>
                        <option value="" disabled selected>Selecione uma opção</option>
                        <option value="Backend">Backend</option>
                        <option value="Cloud">Cloud</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Devops">Devops</option>
                        <option value="Front-end">Front-end</option>
                        <option value="IA">IA</option>
                    </DropdownList>
                </fieldset>
                <Button>Criar evento</Button>
            </section>
        </form>
    )
}