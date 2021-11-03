import React, { useState } from "react";
import styles from "./index.less";
import { colorList, IColor } from "@/utils/data";
const unique = (array: IColor[]) => {
  return Array.from(new Set(array));
};
const Page1: React.FC = () => {
  const [taglist, setTaglist] = useState<IColor[]>([]);
  // add
  const onKeyUp = (e: any) => {
    if (e.keyCode === 13) {
      const res = colorList.filter(
        (a) => a.name.toLowerCase() === e.target.value.toLowerCase()
      );
      if (res.length === 0) return;
      setTaglist(unique(taglist.concat(res)));
    }
  };
  // del
  const delTag = (hex: string) => {
    setTaglist(taglist.filter((i) => i.hex !== hex));
  };
  return (
    <div>
      <h2 className={styles.title}>Page Part1</h2>
      <div className={styles.tagsInput}>
        {taglist.map((item) => (
          <div
            key={item.hex}
            style={{
              color: "#fff",
              backgroundColor: `#${item.hex}`,
              marginRight: "5px",
            }}
          >
            <span>{item.name}</span>
            <span
              style={{ margin: "0 3px", cursor: "pointer" }}
              onClick={() => delTag(item.hex)}
            >
              x
            </span>
          </div>
        ))}
        <input onKeyUp={onKeyUp} />
      </div>
    </div>
  );
};
export default Page1;
