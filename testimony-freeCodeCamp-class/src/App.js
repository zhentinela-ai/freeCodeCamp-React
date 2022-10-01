import React from "react";
import "./App.css";
import Testimony from "./components/Testimony";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="main-container">
          <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
          <Testimony
            name="Shawn Wang"
            counrty="Singapur"
            image="Shawn"
            charge="Ingeniero de Software"
            company="Amazon"
            testimony="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."
          />
          <Testimony
            name="Sarah Chima"
            counrty="Nigeria"
            image="Sarah"
            charge="Ingeniera de Software"
            company="ChatDesk"
            testimony="freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."
          />
          <Testimony
            name="Emma Bostian"
            counrty="Suecia"
            image="Emma"
            charge="Ingeniera de Software"
            company="Spotify"
            testimony="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
          />
        </div>
      </div>
    );
  }
}

export default App;
