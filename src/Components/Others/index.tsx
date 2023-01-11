import * as C from "./styles";
import { useNavigate } from "react-router-dom";
import MiniCard from "./MiniCard/";
import ReactGa from "react-ga";
import { ICards } from "./Types/ICards";

export default function Others({Cards}: ICards) {

  const navigate = useNavigate();
  const eventCards = (item: any) => {
    ReactGa.event({
      category: item.title,
      action: "Outros produtos",
    });
    navigate(item.rota);
  };

  return (
    <div>
      <C.SubTitle>Outros Produtos</C.SubTitle>
      <C.Cards>
        {Cards.map((item) => (
          <MiniCard
            title={item.title}
            icon={item.icon}
            onClick={() => eventCards(item)}
          />
        ))}
      </C.Cards>
    </div>
  );
}
