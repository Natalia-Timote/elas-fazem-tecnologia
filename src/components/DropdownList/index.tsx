import './DropdownList.css';

interface DropdownListProps {
    children: React.ReactNode
}

export default function DropdownList({ children }: DropdownListProps) {
    return (
        <select name="dropdownList" id="dropdownList">
            {children}
        </select>
    )
}
