import type { DropdownListProps } from '../EventForm';
import './DropdownList.css';

export default function DropdownList({ themes }: DropdownListProps) {
    return (
        <select name="theme" id="theme">
            <option value="defaultValue" disabled>Selecione uma opção</option>
            {themes.map((theme) => (
                <option key={theme.id} value={theme.id}>{theme.title}</option>
            ))}
        </select>
    )
}
