import { Box } from '@mui/material'
import StyledComponents from '../../../utils/sharedStyles'

const RussianAlphabetCapital = [
  ['Ա', 'Բ', 'Գ', 'Դ', 'Ե'],
  ['Զ', 'Է', 'Թ', 'Ժ', 'Ի'],
  ['Լ', 'Խ', 'Ծ', 'Կ', 'Հ'],
  ['Ձ', 'Ղ', 'Ճ', 'Մ', 'Յ'],
  ['Ն', 'Շ', 'Ո', 'Չ', 'Պ'],
  ['Ջ', 'Ս', 'Վ', 'Տ', 'Ց'],
  ['Ու', 'Փ', 'Ք', 'Օ'],
]
const { StyledAlphabet, StyledLetter } = StyledComponents
function Alphabet ({ setLetter }) {
  return (
    <Box sx={{ maxWidth: '250px' }}>
      <StyledAlphabet>
        {RussianAlphabetCapital.map((letter, index) => (
          <StyledLetter key={index} onClick={() => setLetter(letter)}>
            {letter}
          </StyledLetter>
        ))}
      </StyledAlphabet>
    </Box>
  )
}

export default Alphabet
