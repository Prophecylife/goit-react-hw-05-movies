import { Bars } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <>
      <Bars
        color="#1a5c72"
        height={80}
        width={80}
        wrapperStyle={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};
