import { Box } from "@mui/material";
import AlphabeticalStyledComponents from "./styles";

const AlphabetCapital = [
    'Ա', 'Բ', 'Գ', 'Դ', 'Ե',
    'Զ', 'Է', 'Թ', 'Ժ', 'Ի',
    'Լ', 'Խ', 'Ծ', 'Կ', 'Հ',
    'Ձ', 'Ղ', 'Ճ', 'Մ', 'Յ',
    'Ն', 'Շ', 'Ո', 'Չ', 'Պ',
    'Ջ', 'Ս', 'Վ', 'Տ', 'Ց',
    'Ու', 'Փ', 'Ք', 'Օ',
];
const { StyledAlphabet, StyledLetter } = AlphabeticalStyledComponents;
function Alphabet({ setLetter, setTitle }) {
    function handleClick(letter) {
        setLetter(letter);
        setTitle(`Այբբենական ցուցիչ (${letter})`);
    }
    return (
        <Box sx={{ maxWidth: "250px" }}>
            <StyledAlphabet>
                {AlphabetCapital.map((letter, index) => (
                    <StyledLetter key={index} onClick={() => handleClick(letter)}>
                        {letter}
                    </StyledLetter>
                ))}
            </StyledAlphabet>
        </Box>
    );
}

export default Alphabet;
