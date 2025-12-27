import './Fieldset.css';

interface FieldsetProps {
    children: React.ReactNode,
    fieldsetName: string,
    inputType: string,
    inputId: string,
    inputPlaceholder: string
}

export default function Fieldset({ children, fieldsetName, inputType, inputId, inputPlaceholder }: FieldsetProps) {
    return (
        <>
            <fieldset>
                <label htmlFor={fieldsetName}>{children}</label>
            <input type={inputType} name={fieldsetName} id={inputId} placeholder={inputPlaceholder} />
            </fieldset >
        </>
    )
}