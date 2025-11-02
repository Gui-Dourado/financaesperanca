import { useState, useId } from "react";
import { InputSpace, Label, Input, InputWrapper, ToggleBtn } from "./styles";
import { FiEye, FiEyeOff } from "react-icons/fi"; // npm i react-icons

const InputForm = ({ name, text, type = "text", placeholder, value, handleOnChange, autoComplete, ...props }) => {
    const [show, setShow] = useState(false);
    const id = useId();
    const isPassword = type === "password";
    const inputType = isPassword && show ? "text" : type;

    return (
        <InputSpace>
            <Label htmlFor={name || id}>{text}</Label>
            <InputWrapper>
                <Input
                    type={inputType}
                    name={name}
                    id={name || id}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleOnChange}
                    autoComplete={autoComplete || (isPassword ? "current-password" : undefined)}
                    {...props}
                />
                {isPassword && (
                    <ToggleBtn
                        type="button"
                        aria-label={show ? "Ocultar senha" : "Mostrar senha"}
                        aria-pressed={show}
                        onMouseDown={(e) => e.preventDefault()} // mantém o foco no input
                        onClick={() => setShow((s) => !s)}
                        title={show ? "Ocultar senha" : "Mostrar senha"}
                    >
                        {show ? <FiEyeOff aria-hidden="true" /> : <FiEye aria-hidden="true" />}
                    </ToggleBtn>
                )}
            </InputWrapper>
        </InputSpace>
    );
};

export default InputForm;