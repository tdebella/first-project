// const Url = process.env.PUBLIC_URL + "/images/hero-desktop.jpg";

import "./Solastyle.css";

export default function Sola() {
  return (
    <div>
      <h1> This is my project</h1>
      <img
        className="hero-img"
        src={process.env.PUBLIC_URL + "/images/hero-desktop.jpg"}
        alt="hero-image"
      />
      <p>
        Ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse,
        corporis quam. Ipsum, eaque! Beatae, alias maiores accusantium excepturi
        voluptate quia dolor temporibus quo nostrum, pariatur vel dolore quos
        quaerat labore.
      </p>
    </div>
  );
}
