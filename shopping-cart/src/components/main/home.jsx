import { useState } from "react";
import { Bill, Checkout } from "../../logic/checkout";
import { Button } from "../ui/button";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Link, useOutletContext } from "react-router-dom";

export default function Home() {
  const { Data, Loading, Error } = useOutletContext();

  const [Price, setPrice] = useState(0);
  if (Loading) return <p>Loading...</p>;
  if (Error) return <p>Error: {Error}</p>;
  if (!Data || Data.length === 0) return <p>No Data found.</p>;
  const handleAddToCart = (id) => {
    Checkout(id); // update Map
    const newPrice = Bill(Data); // calculate new price
    setPrice(newPrice); // update state
  };
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div>
      <div>{formatter.format(Price)}</div>
      {Data?.map((product) => (
        <Card key={product.id} className="border-4 border-black max-w-xs ">
          <Link to={`products/${product.id}`}>
            <CardContent>
              <img className=" h-auto w-auto " src={product.image}></img>
            </CardContent>
          </Link>
          <CardFooter className=" justify-around">
            {formatter.format(product.price)}
            <Button onClick={() => handleAddToCart(product.id)}>
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
