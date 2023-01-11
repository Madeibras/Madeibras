import { Products } from "Mock/ProductsRoof";
import { IProps } from "Types/Card";
import { HashLink } from "react-router-hash-link";
import * as C from "./style";
import Others from "Components/Others";
import { GiWoodBeam } from "react-icons/gi";

const ProductsRoof = ({ id }: IProps) => {
    
  const Cards = [
    {
      icon: <GiWoodBeam />,
      title: "CONSTRUÇÃO",
      rota: "/construcao",
    }
  ];

  return (
    <>
      <C.Container id={id}>
        {Products.map((item) => (
          <C.Box>
            <HashLink to={`${"#" + id}/${item.link}`}>
              <C.CardProducts>
                <C.BoxImg>
                  <img src={item.img} alt={item.title} />
                </C.BoxImg>
                <C.Title>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </C.Title>
              </C.CardProducts>
            </HashLink>
          </C.Box>
        ))}
        <Others Cards={Cards} />
      </C.Container>
    </>
  );
};

export default ProductsRoof;
