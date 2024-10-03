import { useMemo } from "react";
import { Button } from "./Button";
import { Product } from "../types/product";

interface Props {
  cart: Product[];
}
export function Bill({ cart }: Props) {
  const totalAmount = useMemo(() => {
    let total = 0;
    cart.map((item) => {
      total += item.price * (item.quantity);
    });
    return total;
  }, [cart]);

  const calculateTax = (totalAmount: number) => {
    if (totalAmount === 0) {
      return 0;
    } else {
      return 10.89;
    }
  };

  const totalBill = useMemo(() => {
    return totalAmount + calculateTax(totalAmount);
  }, [totalAmount, calculateTax]);

  return (
    <>
      <div className="flex justify-center">
        <div className="md:w-1/4 mt-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>Rs.{totalAmount}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Taxes</span>
              <span>Rs.{calculateTax(totalAmount)}</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">Rs.{totalBill}</span>
            </div>
            <Button
              className="bg-blue-500 hover:bg-blue-700 py-2 mt-4 w-full"
              children="Payment"
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
}
