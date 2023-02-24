import IconButton from 'components/IconButton';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/thunks';
import { StyledItem } from './SingleContact.styled';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';

const SingleContact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <StyledItem>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <IconButton
        type="button"
        onClick={() => dispatch(deleteContactThunk(id))}
      >
        <DeleteIcon width="13" height="13" fill="#fff" />
      </IconButton>
    </StyledItem>
  );
};

SingleContact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default SingleContact;
