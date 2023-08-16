import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { StyledField, StyledForm, Button } from './StyledSearchbar';

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
      <StyledForm>
        <StyledField
          name="query"
          type="text"
          placeholder="Movie name"
          required
        ></StyledField>
        <Button type="submit">Search</Button>
      </StyledForm>
    </Formik>
  );
};

Searchbar.propTypes = {
  onQueryChange: PropTypes.func.isRequired,
};
