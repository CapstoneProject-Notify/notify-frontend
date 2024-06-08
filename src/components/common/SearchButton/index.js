import { GreenBackground } from "./styles";

function SearchButton({ click }) {
  return <GreenBackground onClick={click}>SEARCH</GreenBackground>;
}

export default SearchButton;
