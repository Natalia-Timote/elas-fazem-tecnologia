import "./EventForm.css";

export default function EventForm() {
    return (
        <form>
            <h2>Preencha para criar um evento:</h2>
            <section>
                <fieldset>
                    <label htmlFor="name">Qual o nome do evento?</label>
                    <input type="text" name="name" id="event-name" placeholder="Nome do evento" />
                </fieldset>
                <fieldset>
                    <label htmlFor="date">Data do evento</label>
                    <input type="date" name="date" id="event-date" placeholder="xx/xx/xxxx" />
                </fieldset>
                <fieldset>
                    <label htmlFor="theme">Tema do evento</label>
                    <input type="text" name="theme" id="event-theme" placeholder="Selecione uma opção" />
                </fieldset>
            </section>
            <button className="form-btn">Criar evento</button>
        </form>
    )
}