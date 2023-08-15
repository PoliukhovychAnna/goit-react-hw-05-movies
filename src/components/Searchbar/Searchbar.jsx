import { Formik, Field, Form } from 'formik';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Searchbar = ({ onQueryChange }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('searchQuery') ?? '';

  useEffect(() => {
    if (!movieName) return;
    onQueryChange(movieName);
  }, [movieName, onQueryChange]);

  const handleSearchSubmit = (values, action) => {
    const searchQuery = values.query;
    const nextParams = searchQuery !== '' ? { searchQuery } : {};
    setSearchParams(nextParams);

    action.resetForm();
  };

  return (
    <Formik initialValues={{ query: '' }} onSubmit={handleSearchSubmit}>
      <Form>
        <Field
          name="query"
          type="text"
          placeholder="Movie name"
          required
        ></Field>
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};
