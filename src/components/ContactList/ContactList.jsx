import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { getContacts, getFilterValue } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

import {
  List,
  Button,
  Item,
  ContactText,
  ContactNumber,
  Wrapper,
} from './ContactList.styled';
import { FiDelete } from 'react-icons/fi';
import { BsDot } from 'react-icons/bs';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const handleDelete = evt => {
    const { id } = evt.target;
    dispatch(deleteContact(id));
  };

  return (
    <List>
      {contacts.map(({ name, number, id }) => {
        if (filter) {
          return (
            name.toLowerCase().includes(filter.toLowerCase()) && (
              <Item key={id}>
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
              </Item>
            )
          );
        }

        return (
          <Item key={id}>
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
          </Item>
        );
      })}
    </List>
  );
};
