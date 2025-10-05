interface MonthDividerProps {
  monthYear: string;
}

const MonthDivider = ({ monthYear }: MonthDividerProps) => {
  return (
    <div className="col-span-full mt-12 mb-8">
      <h2 className="text-3xl font-normal text-foreground">{monthYear}</h2>
    </div>
  );
};

export default MonthDivider;
