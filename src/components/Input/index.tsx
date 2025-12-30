import './Input.css';

interface InputProps {
    fieldsetName: string,
    inputType: string,
    inputId: string,
    inputPlaceholder: string
}

export default function Input({ inputType, fieldsetName, inputId, inputPlaceholder }: InputProps) {
    return (
        <input type={inputType} name={fieldsetName} id={inputId} placeholder={inputPlaceholder} />
    )
}