import "./WhyJoin.css";
import whyImg from "../../assets/images/whyjoin.jpg";

const WhyJoin = () => {
  return (
    <section className="why-section container">

      <h2>Why join us?</h2>

      <div className="why-wrapper">

        <div className="why-image">
          <img src={whyImg} alt="" />
        </div>

        <div className="why-cards">

          <div className="card">
            <h3>Select a Care Service</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <div className="card">
            <h3>Create your care package</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <div className="card">
            <h3>Your PA will manage</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <div className="card">
            <h3>Put your foot up</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default WhyJoin;