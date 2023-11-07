import done from "../../assets/icon/done.svg";
import Image from "next/image";

import style from "../ChangeButton/ChangeButton.module.scss";

const ChangeButton = () => {
  return (
    <div className={style.changeBox}>
      <button className={style.changeBtn}>
        Save Changes
        <Image priority src={done} alt="done" />
      </button>
      <button>Cancel</button>
    </div>
  );
};

export default ChangeButton;
