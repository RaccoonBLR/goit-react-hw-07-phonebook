import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

import { FiDelete } from 'react-icons/fi';
import { BsDot } from 'react-icons/bs';

import { Button, ContactText, ContactNumber, Wrapper } from './Contact.styled';

import PropTypes from 'prop-types';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const { name, number, id } = contact;

  const handleDelete = ({ target }) => dispatch(deleteContact(target.id));

  return (
    <>
      <ContactText>
        <BsDot size={32} />
        {name}:
      </ContactText>
      <Wrapper>
        <ContactNumber>{number}</ContactNumber>
        <Button onClick={handleDelete} id={id}>
          <FiDelete size={24} />
        </Button>
      </Wrapper>
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.exact({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};
