import styled from "styled-components/native";

const HomeScreen = () => {
  return (
    <Container>
      <Title>Hello Expo + Styled Components!</Title>
    </Container>
  );
};

export default HomeScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f0f4f8;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;

  text-align: center;
`;
