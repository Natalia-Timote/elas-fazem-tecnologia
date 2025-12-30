import './Theme.css';

interface Theme {
    id: number,
    title: string
}

interface ThemeProps {
    theme: Theme
}

export default function Theme({ theme }: ThemeProps) {
    return (
        <h3>{theme.title}</h3>
    )
}