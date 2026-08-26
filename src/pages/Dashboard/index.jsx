import { Card } from "../../components/Card";
import style from "./Dashboard.module.css";

const Dashboard = () => {
  const cardList = [
    { id: 1, title: "Total de produtos", value: 35, variant: "normal" },
    { id: 2, title: "Total de usuários", value: 120, variant: "success" },
    { id: 3, title: "Outros", value: 271, variant: "warning" },
  ];

  return (
    <div className={style.container}>
      <h1>Dashboard</h1>
      <div className={style.box}>
        {cardList.map((item) => (
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
