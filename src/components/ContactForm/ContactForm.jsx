import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

import { AiOutlineUser } from 'react-icons/ai';
import { FiSmartphone } from 'react-icons/fi';

import { nanoid } from 'nanoid';

import { Button, Label, Input } from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleAppend = newContact => {
    const { name: newName } = newContact;

    contacts.some(({ name }) => name === newName)
      ? alert(`${newName} is already in contacts.`)
      : dispatch(addContact(newContact));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const name = evt.target.elements.name.value;
    const number = evt.target.elements.number.value;
    const newContact = { name, number, id: nanoid() };

    handleAppend(newContact);

    evt.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label>
        <AiOutlineUser size={28} />
        <Input
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        <FiSmartphone size={28} />
        <Input
          type="tel"
          name="number"
          placeholder="Number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </form>
  );
};
