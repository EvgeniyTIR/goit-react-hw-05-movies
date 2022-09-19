import { Wrapper, Input, Icon } from './SearchBox.styled';

export const SearchBox = ({ value, onChange }) => {
  return (
    <Wrapper>
      <Icon />
      <Input
        type="input"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </Wrapper>
  );
};
