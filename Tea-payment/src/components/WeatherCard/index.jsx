import React from "react";

import * as Styles from "./styles";

function getDateName(day) {
  return new Date(day * 1000).toLocaleDateString("en", {
    weekday: "long",
  });
}

function WeatherCard({ isLoading, day }) {
  return (
    <>
      {isLoading ? (
        <div>
          <span>Carregando temperatura</span>
        </div>
      ) : (
        <Styles.Card>
          <Styles.Day>{getDateName(day.dt)}</Styles.Day>
          <Styles.Icon>Icon</Styles.Icon>
          <Styles.Degrees></Styles.Degrees>
          <Styles.SubInfo>
            <div>
              <h6>min</h6>
              <p>22</p>
            </div>
            <div>
              <h6>max</h6>
              <p>{day.temp.max.toFixed(0)}℃</p>
            </div>
          </Styles.SubInfo>
          <Styles.SubInfo>
            <div>
              <h6>wind speed</h6>
              <Styles.SubData>5</Styles.SubData>
            </div>
            <div>
              <h6>wind dir</h6>
              <Styles.SubData>SW</Styles.SubData>
            </div>
          </Styles.SubInfo>
        </Styles.Card>
      )}
    </>
  );
}

export default WeatherCard;
