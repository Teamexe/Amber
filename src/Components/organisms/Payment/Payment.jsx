import "./Payment.scss";

import GreenButton from "../../atoms/GreenButton/GreenButton";

const Payment = () => {

  let price = '$24';

  return (
    <div className="payment-container">
      <select>
        <option value="actual value 1">Google Pay</option>
        <option value="actual value 2">Cash</option>
        <option value="actual value 3">Gold</option>
      </select>

      <div className="payment-details">
        <h3>{price}</h3>
        <GreenButton className="payment-confirmation-btn">Confirm</GreenButton>
      </div>
    </div>
  );
};

export default Payment;
