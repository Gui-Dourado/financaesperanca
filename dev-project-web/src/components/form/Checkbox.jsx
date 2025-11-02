import { CheckBox, CheckBoxLabel, CheckBoxSpace } from "./styles";

const CheckBoxForm = ({ name, text, type, value, handleOnChange }) => {
    return (
        <CheckBoxSpace>
            <CheckBox
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={handleOnChange}
            />
            <CheckBoxLabel htmlFor={name}>{text}</CheckBoxLabel>
        </CheckBoxSpace>
    );
}

export default CheckBoxForm;