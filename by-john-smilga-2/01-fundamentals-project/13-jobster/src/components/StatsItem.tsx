import Wrapper from "../assets/wrappers/StatItem";

interface IStatsItemProps {
  count: number;
  title: string;
  icon: React.ReactNode;
  color: string;
  bcg: string;
}

const StatsItem: React.FC<IStatsItemProps> = ({
  count,
  title,
  icon,
  color,
  bcg,
}) => {
  return (
    <Wrapper color={color}>
      <header>
        <span className="count">{count}</span>
        <span className="icon">{icon}</span>
      </header>
      <h5 className="title">{title}</h5>
    </Wrapper>
  );
};
export default StatsItem;
