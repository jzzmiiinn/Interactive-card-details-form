interface CardPreviewProps {
  cardholderName: string;
  cardNumber: string;
  expDate: string;
  cvc: string;
}

export const CardPreview = ({
  cardholderName,
  cardNumber,
  expDate,
  cvc,
}: CardPreviewProps) => {
  return (
    <div className="relative h-[250px] w-full sm:h-[350px] lg:h-full lg:min-h-[650px]">
      <div className="absolute right-[3%] top-0 z-0 aspect-[1.586/1] w-[80%] max-w-[447px] rounded-xl bg-[url('/bg-card-back.png')] bg-cover bg-center bg-no-repeat shadow-2xl sm:right-[5%] sm:w-[75%] lg:right-[4%] lg:top-[51%] lg:w-[82%]">
        <p className="absolute right-[12%] top-1/2 translate-y-1/2 text-[9px] tracking-wide text-white sm:text-[11px] lg:text-sm">
          {cvc || "000"}
        </p>
      </div>

      <div className="absolute left-[3%] top-[105px] z-10 aspect-[1.586/1] w-[80%] max-w-[447px] rounded-xl bg-[url('/bg-card-front.png')] bg-cover bg-center bg-no-repeat shadow-2xl sm:left-[5%] sm:top-[125px]sm:w-[75%] lg:left-[4%] lg:top-[17%] lg:w-[82%]">
        <img
          src="/card-logo.svg"
          alt="Card logo"
          className="absolute left-[7%] top-[9%] w-[16%] max-w-[70px]"
        />

        <p className="absolute bottom-[25%] left-[7%] right-[7%] whitespace-nowrap text-[11px] tracking-[0.12em] text-white sm:text-base lg:text-xl">
          {cardNumber || "0000 0000 0000 0000"}
        </p>

        <div className="absolute bottom-[9%] left-[7%] right-[7%] flex items-center justify-between text-[7px] uppercase tracking-wider text-white sm:text-[9px] lg:text-xs">
          <p className="max-w-[65%] truncate">
            {cardholderName || "Jane Appleseed"}
          </p>

          <p>{expDate || "00/00"}</p>
        </div>
      </div>
    </div>
  );
};
