interface CompleteStateProps {
  onContinue: () => void;
}

export const CompleteState = ({ onContinue }: CompleteStateProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#6348fe] to-[#21092f]">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12.5L9.5 17L19 7"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h1 className="mb-4 text-2xl font-medium uppercase tracking-[0.2em] text-[#21092f]">
        Thank You!
      </h1>

      <p className="mb-8 text-sm text-gray-500">
        We've added your card details
      </p>

      <button
        type="button"
        onClick={onContinue}
        className="h-12 w-full rounded-lg bg-[#21092f] text-sm font-medium text-white transition hover:bg-[#3a1350] "
      >
        Continue
      </button>
    </div>
  );
};
