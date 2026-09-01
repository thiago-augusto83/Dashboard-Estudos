import { Card } from "../../components/Card";
import { cardData } from "../../data/cardData";
import style from "./Dashboard.module.css";

const Dashboard = () => {

  return (
    <div className={style.container}>
      <h1>Dashboard</h1>
      <div className={style.box}>
        {cardData.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            value={item.value}
            variant={item.variant}
          />
        ))}
      </div>
    </div>
  );
};

export { Dashboard };