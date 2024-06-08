import { BoxBackground } from "./styles";

function SearchBox({ value, change }) {
  return <BoxBackground value={value} onChange={change}></BoxBackground>;
}

export default SearchBox;
