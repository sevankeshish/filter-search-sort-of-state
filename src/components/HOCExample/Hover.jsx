import WithCount from "../HOC/withCount";

const HoverComponent = ({ count, countHandler }) => {
  return <h2 onMouseOver={countHandler}>hovered {count} times</h2>;
};

export default WithCount(HoverComponent, 10);
