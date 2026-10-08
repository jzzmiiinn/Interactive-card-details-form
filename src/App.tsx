import { useState } from "react";
import { CardPreview } from "./components/CardPreview";
import { CardForm } from "./components/CardForm";
import { CompleteState } from "./components/CompleteMessage";

function App() {
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const handleConfirm = () => {
    setIsComplete(true);
  };

  const handleContinue = () => {
    setCardholderName("");
    setCardNumber("");
    setExpMonth("");
    setExpYear("");
    setCvc("");
    setIsComplete(false);
  };

  const formattedCardNumber =
    cardNumber
      .replace(/\s/g, "")
      .match(/.{1,4}/g)
      ?.join(" ") || "";

  const formattedExpDate =
    expMonth || expYear ? `${expMonth || "00"}/${expYear || "00"}` : "";

  return (
    <main className="min-h-screen bg-white font-[Space_Grotesk] lg:flex">
      <section className="relative h-[240px] w-full bg-[url('/bg-main-mobile.png')] bg-cover bg-center bg-no-repeat sm:h-[300px] lg:h-screen lg:w-[40%] lg:bg-[url('/bg-main-desktop.png')]">
        <CardPreview
          cardholderName={cardholderName}
          cardNumber={formattedCardNumber}
          expDate={formattedExpDate}
          cvc={cvc}
        />
      </section>

      <section className="flex min-h-[calc(100vh-240px)] w-full items-center justify-center px-6 py-10 sm:min-h-[calc(100vh-300px)] lg:min-h-screen lg:w-[60%] lg:px-12">
        <div className="w-full max-w-[380px]">
          {isComplete ? (
            <CompleteState onContinue={handleContinue} />
          ) : (
            <CardForm
              cardholderName={cardholderName}
              cardNumber={cardNumber}
              expMonth={expMonth}
              expYear={expYear}
              cvc={cvc}
              setCardholderName={setCardholderName}
              setCardNumber={setCardNumber}
              setExpMonth={setExpMonth}
              setExpYear={setExpYear}
              setCvc={setCvc}
              onConfirm={handleConfirm}
            />
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
