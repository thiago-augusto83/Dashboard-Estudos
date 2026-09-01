import Style from "./Card.module.css";

const Card = ({ title, value, variant = "normal" }) => {
  return (
    <div className={`${Style.container} ${Style[variant] ?? Style["normal"]}`}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export { Card };
