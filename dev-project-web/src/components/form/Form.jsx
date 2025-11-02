import { CenterBox, FormBox } from "./styles";

const Form = ({ children }) => {
    return (
        <CenterBox>
            <FormBox>
                {children}
            </FormBox>
        </CenterBox>
    );
}

export default Form;