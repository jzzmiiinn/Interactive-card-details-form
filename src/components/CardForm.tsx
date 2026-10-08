import { useState } from "react";
import { FormInput } from "./FormInput";

interface CardFormProps {
  cardholderName: string;
  cardNumber: string;
  expMonth: string;
  expYear: string;
  cvc: string;

  setCardholderName: (value: string) => void;
  setCardNumber: (value: string) => void;
  setExpMonth: (value: string) => void;
  setExpYear: (value: string) => void;
  setCvc: (value: string) => void;

  onConfirm: () => void;
}

interface Errors {
  cardholderName?: string;
  cardNumber?: string;
  expMonth?: string;
  expYear?: string;
  cvc?: string;
}

export const CardForm = ({
  cardholderName,
  cardNumber,
  expMonth,
  expYear,
  cvc,
  setCardholderName,
  setCardNumber,
  setExpMonth,
  setExpYear,
  setCvc,
  onConfirm,
}: CardFormProps) => {
  const [errors, setErrors] = useState<Errors>({});

  const handleCardNumberChange = (value: string) => {
    const numbersOnly = value.replace(/\D/g, "").slice(0, 16);

    const formatted = numbersOnly.match(/.{1,4}/g)?.join(" ") || "";

    setCardNumber(formatted);
  };

  const validate = () => {
    const newErrors: Errors = {};

    if (!cardholderName.trim()) {
      newErrors.cardholderName = "Can't be blank";
    }

    const cleanCardNumber = cardNumber.replace(/\s/g, "");

    if (!cleanCardNumber) {
      newErrors.cardNumber = "Can't be blank";
    } else if (cleanCardNumber.length !== 16) {
      newErrors.cardNumber = "Wrong format, numbers only";
    }

    if (!expMonth) {
      newErrors.expMonth = "Can't be blank";
    } else if (Number(expMonth) < 1 || Number(expMonth) > 12) {
      newErrors.expMonth = "Wrong format";
    }

    if (!expYear) {
      newErrors.expYear = "Can't be blank";
    }

    if (!cvc) {
      newErrors.cvc = "Can't be blank";
    } else if (cvc.length !== 3) {
      newErrors.cvc = "Wrong format";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      onConfirm();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <FormInput
        label="Cardholder Name"
        placeholder="e.g. Jane Appleseed"
        type="text"
        id="cardholder-name"
        value={cardholderName}
        onChange={setCardholderName}
        error={errors.cardholderName}
      />

      <FormInput
        label="Card Number"
        placeholder="e.g. 1234 5678 9123 0000"
        type="text"
        id="card-number"
        value={cardNumber}
        onChange={handleCardNumberChange}
        error={errors.cardNumber}
        maxLength={19}
      />

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium uppercase tracking-wider text-[#21092f]">
            Exp. Date (MM/YY)
          </label>

          <div className="flex gap-2">
            <input
              id="exp-month"
              type="text"
              placeholder="MM"
              value={expMonth}
              maxLength={2}
              onChange={(e) =>
                setExpMonth(e.target.value.replace(/\D/g, "").slice(0, 2))
              }
              className={`h-12 w-full rounded-lg border px-3 text-sm outline-none placeholder:text-gray-400 focus:border-[#6448ff] focus:ring-1 focus:ring-[#6448ff]
                ${errors.expMonth ? "border-red-500" : "border-gray-300"}
              `}
            />

            <input
              id="exp-year"
              type="text"
              placeholder="YY"
              value={expYear}
              maxLength={2}
              onChange={(e) =>
                setExpYear(e.target.value.replace(/\D/g, "").slice(0, 2))
              }
              className={`h-12 w-full rounded-lg border px-3 text-sm outline-none placeholder:text-gray-400 focus:border-[#6448ff] focus:ring-1 focus:ring-[#6448ff]
                ${errors.expYear ? "border-red-500" : "border-gray-300"}
              `}
            />
          </div>

          <div className="flex gap-2">
            {errors.expMonth && (
              <p className="text-xs text-red-500">{errors.expMonth}</p>
            )}

            {errors.expYear && (
              <p className="text-xs text-red-500">{errors.expYear}</p>
            )}
          </div>
        </div>

        {/* CVC */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="cvc"
            className="text-xs font-medium uppercase tracking-wider text-[#21092f]"
          >
            CVC
          </label>

          <input
            id="cvc"
            type="text"
            placeholder="e.g. 123"
            value={cvc}
            maxLength={3}
            onChange={(e) =>
              setCvc(e.target.value.replace(/\D/g, "").slice(0, 3))
            }
            className={`h-12 w-full rounded-lg border px-4 text-sm outline-none placeholder:text-gray-400 focus:border-[#6448ff] focus:ring-1 focus:ring-[#6448ff]
              ${errors.cvc ? "border-red-500" : "border-gray-300"}
            `}
          />

          {errors.cvc && <p className="text-xs text-red-500">{errors.cvc}</p>}
        </div>
      </div>

      <button
        type="submit"
        className="mt-2 h-12 w-full rounded-lg bg-[#21092f] text-sm font-medium text-white transition hover:bg-[#3a1350] focus:outline-none focus:ring-2 focus:ring-[#6448ff] focus:ring-offset-2"
      >
        Confirm
      </button>
    </form>
  );
};
