import './Logo.css';

interface LogoProps {
    image: string,
    title: string
}

export default function Logo({ image, title }: LogoProps) {
    return (
        <div className='logo '>
            <img src={image} alt={title} />
            <h1>Elas fazem Tecnologia</h1>
        </div>
    )
}
