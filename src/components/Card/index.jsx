import Style from "./Card.module.css";

const Card = ({ title, value, variant = "normal" }) => {
  const variantList = {
    normal: Style.normal,
    success: Style.success,
    warning: Style.warning,
  };

  return (
    <div className={`${Style.container} ${variantList[variant]}`}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export { Card };
