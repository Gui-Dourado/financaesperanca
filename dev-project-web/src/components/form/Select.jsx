import { Label, SelectSpace, Selector, SelectOption } from "./styles";

const SelectForm = ({ name = "gender", text, value, onChange }) => {
    const options = [
        { label: "Selecione o gênero", value: "" },
        { label: "Feminino", value: "feminino" },
        { label: "Masculino", value: "masculino" },
        { label: "Outro", value: "outro" },
        { label: "Prefiro não divulgar", value: "prefiro não divulgar" }
    ];

    function handleChange(e) {
        onChange?.(e.target.value);
    }

    return (
        <SelectSpace>
            <Label htmlFor={name}>{text}</Label>
            <Selector id={name} name={name} value={value} onChange={handleChange}>
                {options.map(option => (
                    <SelectOption value={option.value}>{option.label}</SelectOption>
                ))}
            </Selector>
        </SelectSpace>
    );
}

export default SelectForm;