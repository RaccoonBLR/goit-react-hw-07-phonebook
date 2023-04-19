import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectIsLoading } from 'redux/selectors';

import { Container } from './Container/Container';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Loader } from './Loader/Loader';
import { Notify } from './Notify/Notify';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {isLoading && <Loader />}
      {Boolean(contacts.length) && <ContactList />}
      {!contacts.length && !isLoading && <Notify />}
    </Container>
  );
};
