import { Card } from "../../components/Card";
import style from "./Dashboard.module.css";

const Dashboard = () => {
  const cardList = [
    { id: 1, title: "Total de produtos", value: 35 },
    { id: 2, title: "Total de usuários", value: 120 },
    { id: 3, title: "Outros", value: 271 },
  ];

  return (
    <div className={style.container}>
      <h1>Dashboard</h1>
      <div className={style.box}>
        {cardList.map((item) => (
          <Card key={item.id} title={item.title} value={item.value} />
        ))}
      </div>
    </div>
  );
};

export { Dashboard };
