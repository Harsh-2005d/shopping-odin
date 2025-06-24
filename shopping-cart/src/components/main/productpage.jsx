import { useOutletContext, useParams } from "react-router-dom";
import { RatingStars } from "../../assets/rating";
export default function Products() {
  const { id } = useParams();
  const { Data, Loading, Error } = useOutletContext();

  const product = Data[id - 1];
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 ">
        <div className="items-center shadow-m border-2 border-black rounded-2xl overflow-hidden w-1/2 ">
          <img
            className=" h-96 w-full object-contain "
            src={product.image}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-base text-gray-700">{product.description}</p>
          <RatingStars rating={product.rating.rate} count={product.rating.count}/>
        </div>
      </div>
    </div>
  );
}
