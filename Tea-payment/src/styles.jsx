import styled from "styled-components";

export const AppWrapper = styled("div")`
  background-image: url(./assets/images/sunsettwo.jpg);
  background-size: cover;
  background-position: bottom;
  min-height: 100vh;
  opacity: 0.85;
`;

export const CityButtonsWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
`;

export const CityWeatherWrapper = styled("div")`
  display: flex;
  justify-content: space-around;
  padding: 0 100px;
`;
