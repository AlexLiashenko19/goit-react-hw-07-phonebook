import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Form } from './Form/Form';
import { useSelector } from 'react-redux';
import { selectContacts, selectIsLoading } from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <section>
      <h2>Phonebook</h2>
      <Form />
      {isLoading && <Loader />}
      <h2>Contacts</h2>
      {contacts?.length === 0 ? (
        <p>You didn't have any contacts yet</p>
      ) : (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </section>
  );
};
