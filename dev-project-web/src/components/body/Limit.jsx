import { CenterBox, FormBox } from "./styles";

const LimitMain = ({ children }) => {
    return (
        <CenterBox>
            <FormBox>
                {children}
            </FormBox>
        </CenterBox>
    );
}

export default LimitMain;