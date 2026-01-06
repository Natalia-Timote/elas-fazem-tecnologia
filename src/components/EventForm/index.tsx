import Button from "../Button";
import DropdownList from "../DropdownList";
import Input from "../Input";
import Label from "../Label";
import "./EventForm.css";

interface Themes {
    id: number,
    title: string
}

export interface EventFormProps {
    themes: Themes[]
}

export default function EventForm({ themes }: EventFormProps) {
    function formSubmission(formData: FormData) {
        const event = {
            title: formData.get("name"),
            image: formData.get("image"),
            theme: themes.find((theme) => {
                return theme.id === theme.id
            }),
            date: new Date(formData.get("date") as string)
        }
        return console.log(event)
    }

    return (
        <form action={formSubmission}>
            <h2>Preencha para criar um evento:</h2>
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
                    <Label fieldsetName="image">Qual será a imagem de capa do evento?</Label>
                    <Input
                        fieldsetName="image"
                        inputType="text"
                        inputId="event-image"
                        inputPlaceholder="Insira a URL da imagem"
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
                    <DropdownList themes={themes} />
                </fieldset>
                <Button>Criar evento</Button>
            </section>
        </form>
    )
}