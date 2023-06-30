import React from "react";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

const Landing: React.FC = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="jobster logo" className="logo" />
      </nav>

      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Job <span>Tracking</span>App
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            aliquid optio iste aut unde adipisci saepe ipsa sequi quo sapiente
            laboriosam distinctio minus quibusdam ea eveniet? Eum, quo odio
            provident cupiditate aliquam libero sapiente consequatur rem tempora
            earum ab excepturi dolore distinctio rerum necessitatibus sed
            officia non sit voluptatem accusamus.
          </p>
          <button type="button" className="btn btn-hero">
            Login/Register
          </button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </main>
  );
};

export default Landing;
