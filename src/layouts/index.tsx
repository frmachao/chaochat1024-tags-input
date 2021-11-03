import styles from "./index.less";
import { Link } from "umi";
const LayoutBase: React.FC = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>layout</h1>
      <ul>
        <li>
          <Link to={"/page1"}> part1</Link>
        </li>
        <li>
          <Link to={"/page2"}> part2</Link>
        </li>
      </ul>
      {props.children}
    </div>
  );
};
export default LayoutBase;
