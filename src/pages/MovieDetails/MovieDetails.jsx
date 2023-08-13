import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
const MovieDetails = () => {
  return (
    <>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
