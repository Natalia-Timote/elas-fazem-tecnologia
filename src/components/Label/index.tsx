import './Label.css';

interface LabelProps {
    children: React.ReactNode,
    fieldsetName: string,
}

export default function Label({ children, fieldsetName}: LabelProps) {
    return (
                <label htmlFor={fieldsetName}>{children}</label>
    )
}