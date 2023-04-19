import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

import { Contact } from 'components/Contact/Contact';

import { List, Item } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          <Contact contact={contact} />
        </Item>
      ))}
    </List>
  );
};
