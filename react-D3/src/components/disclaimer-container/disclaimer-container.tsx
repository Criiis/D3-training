import Button from "../button";

interface DisclaimerContainerProps {
  onClick: () => void;
}
const DisclaimerContainer = ({ onClick }: DisclaimerContainerProps) => {
  return (
    <div className="p-4 rounded-lg max-w-md mx-auto fixed bottom-3 left-3 z-10 bg-zinc-950 shadow-md">
      <p className="text-white text-sm mb-4">
        This interface was created in order to learn different types of libraries. All information
        is fictitious and does not reflect the real state of the market or anyone's Portfolio.
      </p>
      <Button onClick={onClick}>Understood</Button>
    </div>
  );
};

export default DisclaimerContainer;
