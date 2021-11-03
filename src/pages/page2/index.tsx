import React, { useState } from "react";
import styles from "./index.less";
import { colorList, IColor } from "@/utils/data";
import { note } from "@umijs/deps/compiled/signale";
const unique = (array: any) => {
  return Array.from(new Set(array));
};
function debounce(fn: Function, delay: number) {
  let timer: any = null;
  return function () {
    let self = this,
      args = arguments;
    timer && clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(self, args);
    }, delay);
  };
}
const Page2: React.FC = () => {
  const [taglist, setTaglist] = useState<IColor[]>([]);
  const [ullist, setUllist] = useState<IColor[]>([]);
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
  const delTag = (name: string) => {
    setTaglist(taglist.filter((i) => i.name !== name));
  };
  const onChange = (e: any) => {
    console.log("e.target.value==", e.target.value);
    const res = colorList.filter((a) =>
      a.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setUllist(res);
  };
  const checkLi = (item: IColor, checked: boolean) => {
    console.log("checked==", checked);
    const nextTaglist = checked
      ? taglist.filter((t) => t.name !== item.name)
      : [...taglist, item];

    setTaglist(nextTaglist);
  };

  return (
    <div>
      <h2 className={styles.title}>Page Part2</h2>
      <div className={styles.tagsInput}>
        {taglist.map((item) => (
          <div
            key={item.name}
            style={{
              color: "#fff",
              backgroundColor: `#${item.hex}`,
              marginRight: "5px",
            }}
          >
            <span>{item.name}</span>
            <span
              style={{ margin: "0 3px", cursor: "pointer" }}
              onClick={() => delTag(item.name)}
            >
              x
            </span>
          </div>
        ))}
        <input onKeyUp={onKeyUp} onChange={debounce(onChange, 200)} />
      </div>
      <ul className={styles.ul}>
        {ullist.map((item) => (
          <li
            key={item.name}
            style={{
              backgroundColor: taglist.some((a) => a.name === item.name)
                ? "steelblue"
                : "#fff",
            }}
            onClick={() =>
              checkLi(
                item,
                taglist.some((a) => a.name === item.name)
              )
            }
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Page2;
