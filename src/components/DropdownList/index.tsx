import type { EventFormProps } from '../EventForm';
import './DropdownList.css';

export default function DropdownList({ themes }: EventFormProps) {
    return (
        <select name="theme" id="theme">
            <option value="defaultValue" disabled>Selecione uma opção</option>
            {themes.map((theme) => (
                <option key={theme.id} value={theme.title}>{theme.title}</option>
            ))}
        </select>
    )
}
