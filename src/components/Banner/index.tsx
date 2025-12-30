import './Banner.css';

interface BannerProps {
    image: string,
    title: string
}

export default function Banner({ image, title }: BannerProps) {
    return (
        <img src={image} alt={title} />
    )
}
