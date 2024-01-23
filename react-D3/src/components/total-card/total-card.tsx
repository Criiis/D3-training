const TotalCard = () => {
  return (
    <div
      className="bg-zinc-200 rounded-xl p-3 dark:bg-zinc-800 w-full md:max-w-[350px] min-h-[200px] flex flex-col justify-between bg-left-bottom bg-no-repeat"
      style={{ backgroundImage: "url('./background-texture.png')" }}
      // TODO: Add a background image to the card needs to work for white theme
    >
      <p className="m-0 mt-1 font-medium text-s mb-5">Total Holding</p>

      <div>
        <p className="m-0 font-bold text-3xl">£ 36,248.00</p>
        <p className="m-0 mt-1 font-medium text-xs">
          Total Return: <span className="text-base font-bold text-green-400">+362.48 (1.00%)</span>
        </p>
      </div>
    </div>
  );
};

export default TotalCard;
