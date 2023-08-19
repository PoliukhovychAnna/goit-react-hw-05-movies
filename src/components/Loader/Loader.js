import { Blocks } from 'react-loader-spinner';

export const Loader = () => (
  <Blocks
    visible={true}
    height="250"
    width="250"
    ariaLabel="blocks-loading"
    wrapperStyle={{
      marginLeft: '40%',
      //   marginTop: '200px',
    }}
    wrapperClass="blocks-wrapper"
  />
);
