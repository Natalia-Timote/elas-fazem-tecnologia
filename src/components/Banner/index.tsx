import './Banner.css';

interface BannerProps {
    image: string,
    title: string
}

export default function Banner({ image, title }: BannerProps) {
    return (
        <div className='banner'>
            <img src={image} alt={title} className='banner-image' />
        </div>
    )
}
