import Image from "next/image";
import remove from "../../assets/icon/remove.svg";
import options from "../../assets/icon/options.svg";

import { motion } from "framer-motion";

import style from "./Category.module.scss";

const Category = ({ placeholder }) => {
  return (
    <label className={style.categoryBox}>
      <input
        className={style.categoryField}
        type="text"
        placeholder={placeholder}
      />

      <div className={style.categoryOptions}>
        <div
          className={style.switch}
          data-ison={isOn}
          onClick={handleClick}
        >
          <p>On</p>
          <motion.div
            className={style.handle}
            layout
            transition={spring}
          />
        </div>
        <Image priority src={remove} alt="logo" />
        <Image priority src={options} alt="options" />
      </div>
    </label>
  );
};

const spring = {
  type: "spring",
  stiffness: 300,
  damping: 17,
};

export default Category;
