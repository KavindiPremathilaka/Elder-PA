import "./EPASection.css";
import epaImg from "../../assets/images/epa.jpg";

const EPASection = () => {
  return (
    <section className="epa-section container">

      <div className="epa-left">

        <h2>
          EPA is your <span>PA</span>
        </h2>

        <p>
          EPA is your personal assistant to manage your care
          requirements. We manage service providers whenever
          you require them and for how long and at what costs
        </p>

      </div>

      <div className="epa-right">
        <img src={epaImg} alt="" />
      </div>

      <div className="epa-dots"></div>

    </section>
  );
};

export default EPASection;