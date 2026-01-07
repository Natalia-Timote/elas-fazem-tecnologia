import Button from "../Button";
import DropdownList from "../DropdownList";
import Input from "../Input";
import Label from "../Label";
import "./EventForm.css";

export interface Event {
    title: string,
    image: string,
    theme: string,
    date: Date,
    description: string,
}

interface Themes {
    id: number,
    title: string
}
export interface DropdownListProps {
    themes: Themes[]
}

export interface EventFormProps {
    themes: Themes[],

    whenSubmit: (event: Event) => void
}

export default function EventForm({ themes, whenSubmit }: EventFormProps) {
    function formSubmission(formData: FormData) {
        const themeId = Number(formData.get("theme"))
        const foundTheme = themes.find(theme => theme.id === themeId)
        const themeTitle = foundTheme ? foundTheme.title : ""

        const event: Event = {
            title: formData.get("name") as string,
            image: formData.get("image") as string,
            theme: themeTitle,
            date: new Date(formData.get("date") as string),
            description: formData.get("description") as string
        }
        whenSubmit(event)
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
                    <Label fieldsetName="description">Qual será a descrição do evento?</Label>
                    <Input
                        fieldsetName="description"
                        inputType="text"
                        inputId="event-description"
                        inputPlaceholder="Insira a descrição do evento"
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