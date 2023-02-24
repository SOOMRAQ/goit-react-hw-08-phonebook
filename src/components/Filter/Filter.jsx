import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import { StyledInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = event => {
    const { value } = event.target;
    dispatch(changeFilter(value.toLowerCase()));
  };
  return (
    <StyledInput
      type="text"
      onChange={event => handleChange(event)}
      value={filter}
      placeholder="Filter by name"
    />
  );
};

export default Filter;
