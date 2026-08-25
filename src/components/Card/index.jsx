import Style from "./Card.module.css";

const Card = ({ title, value }) => {
  return (
    <div className={Style.container}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export { Card };
