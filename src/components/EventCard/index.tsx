import './EventCard.css';

interface Event {
    image: string,
    title: string,
    theme: string,
    date: Date,
    description: string
}

interface EventCardProps {
    event: Event
}

export default function EventCard({ event }: EventCardProps) {
    return (
        <section className='event-card'>
            <img className='event-card-img' src={event.image} alt={event.title} />
            <div className='event-card-infos'>
                <p className='event-card-tag'>{event.theme}</p>
                <p className='event-card-date'>{event.date.toLocaleDateString('pt-br')}</p>
                <h4 className='event-card-title'>{event.title}</h4>
                <p className='event-card-description'>{event.description}</p>
            </div>
        </section>
    )
}