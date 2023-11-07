import logo from "../../assets/icon/logo.svg";
import search from "../../assets/icon/search.svg";
import Image from "next/image";

import style from "../Header/Header.module.scss";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.logoBox}>
        <Image priority src={logo} alt="logo" />

        <p className={style.logoBox}>Memes</p>
      </div>

      <label className={style.search}>
        <input className={style.searchField} type="text" placeholder="Search" />
        <Image className={style.searchIcon} priority src={search} alt="logo" />
      </label>
    </div>
  );
};

export default Header;
