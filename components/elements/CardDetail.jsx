'use client'
import CardCount from "./CardCount";
import OrderedFoods from "./OrderedFoods";
import TotalPrice from "./TotalPrice";
import Payable from "./Payable";
import Description from "./Description";
import SubmitOrderBtn from "./SubmitOrderBtn";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { addToOrders } from "@/redux/basketSlice";
import { addToHistory } from "@/redux/orderHistorySlice";
import { reset } from "@/redux/basketSlice";

// کامپوننت سبد خرید
// see PageSides.jsx

function CardDetail({ basket, restaurants }) {
  const { restaurant } = useParams();
  const { id, delivery, logo, name, tax } = restaurants.find(
    (items) => items.id == restaurant
  );
  const deliveryCost = delivery.price;

  const { foods } = useSelector((state) => state.basket);

  let totalPrice = 0;
  const basketPrice = foods.forEach((item) => {
    totalPrice += item.count * item.price;
  });

  const dispatch = useDispatch();

  const OrdersHandler = (e) => {
    e.preventDefault();
      dispatch(addToHistory({ payment, totalPrice, deliveryCost, logo, name, id, tax , foods  }))
      dispatch(reset())
  };


 

  const payment = totalPrice + deliveryCost;

  let totalCount = 0;

  if (basket.length == 0) {
    totalCount = 0;
  } else if (basket.length == 1) {
    totalCount = basket[0].count;
  } else {
    totalCount = basket.reduce((pre, curr) => {
      return pre + curr.count;
    }, 0);
  }

  return (
    <div >
      <form className="mt-2 pt-4 pb-3 px-4 bg-surface-light border-[0.0625rem] border-carbon-alphaLight rounded-lg leading-[1.15rem] ">
        <CardCount count={totalCount} />
        {basket.map((item, index) => (
          <>
            <OrderedFoods key={item.id} {...item} index={index} />
          </>
        ))}
        <TotalPrice deliveryCost={deliveryCost} totalPrice={totalPrice} />
        <Payable payment={payment} />
        <Description />
        <SubmitOrderBtn onAdd={OrdersHandler} />
      </form>
    </div>
  );
}

export default CardDetail;
