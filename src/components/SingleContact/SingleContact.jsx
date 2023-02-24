import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/thunks';
import { StyledItem, StyledList } from './SingleContact.styled';
import { IoIosCall } from 'react-icons/io';
import { AiFillDelete } from 'react-icons/ai';

const SingleContact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const words = name.split(' ');
  const letters = [];
  words.forEach(word => letters.push(word[0]));
  const initials = letters.join('');

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <StyledItem>
      <div className="initials">{initials}</div>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <StyledList id={name}>
        <li>
          <a href={`tel:${number}`} style={{ color: 'green' }}>
            <IoIosCall />
          </a>
        </li>
        <li onClick={handleDeleteContact} style={{ color: 'red' }}>
          <AiFillDelete style={{ cursor: 'pointer' }} />
        </li>
      </StyledList>
    </StyledItem>
  );
};

SingleContact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default SingleContact;
