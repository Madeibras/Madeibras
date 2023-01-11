import * as C from "./style";
import { useState } from "react";
import { IProps } from "Types/Card";
import { NavHashLink } from "react-router-hash-link";
import { MdRoofing } from "react-icons/md";
import Card from "Mock/Card.json";
import InfoProducts from "./InfoProducts";
import Salles from "Mock/Salles.json";
import ReactGa from "react-ga";
import Others from "Components/Others";


type Categorys = typeof Card[0];

const Cards = [
  {
    icon: <MdRoofing />,
    title: "TELHADOS",
    rota: "/Telhado"
  },
];

const Product = ({ id }: IProps) => {
  const [activeCategory, setActiveCategory] = useState<boolean | string | null | number | Object>(false);
  const selectFilter = (category: Categorys) => {
    if (activeCategory !== category) {
      ReactGa.event({
        category: category.name,
        action: "Butão dos cards",
      });
      setActiveCategory(category.id);
    } else setActiveCategory(null);
  };

  const FilterSalles = activeCategory
    ? Salles.filter((item) => item.category === activeCategory)
    : [];

  return (
    <>
      <C.Container id={id}>
        {Card.map((item) => (
          <NavHashLink to={`/Construcao/${item.link}`} key={item.id}>
            <C.Box
              onClick={() => selectFilter(item)}
              isActive={activeCategory === item.id ? true : false}>
              <C.Title> {item.name} </C.Title>
              <img src={item.img} alt={item.img} />
              <C.Button onClick={() => selectFilter(item)}> Ver Mais </C.Button>
            </C.Box>
          </NavHashLink>
        ))}
      </C.Container>
      <Others Cards={Cards} />

      <InfoProducts SallesMenu={FilterSalles} />
    </>
  );
};

export default Product;
