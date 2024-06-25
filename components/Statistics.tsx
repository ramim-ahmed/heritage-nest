import StatisticItem from "./StatisticItem";

export default function Statistics() {
  return (
    <div className="grid lg:grid-cols-4 gap-6 md:grid-cols-2 grid-cols-1">
      <StatisticItem />
      <StatisticItem isTrue />
      <StatisticItem />
      <StatisticItem isTrue />
    </div>
  );
}
