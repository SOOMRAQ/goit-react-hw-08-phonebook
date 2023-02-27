import { StyledContainer } from 'components/App/App.styled';

const Home = () => {
  return (
    <StyledContainer>
      <div
        style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <h1>Welcome!</h1>
        <p>Sign In / Sign Up to your Account</p>
      </div>
    </StyledContainer>
  );
};

export default Home;
