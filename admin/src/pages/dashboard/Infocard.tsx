import React from "react";
import Styles from "./infocard.module.css";
type InfoCardPops = {
  title: string;
  value: string;
  precent: string;
  color: string;
  background: string;
};
export default function Infocard({
  title,
  value,
  precent,
  color,
  background,
}: InfoCardPops) {
  return (
    <>
      <div className={Styles.headercard}>
        <p className={Styles.customp}>{title}</p>
        <div className={Styles.headerinfocard}>
          <h1 className={Styles.customh1}>{value}</h1>
          <button
            style={{ background: background, color: color }}
            className={Styles.custombutton}
          >
            {precent}
          </button>
        </div>
      </div>
    </>
  );
}
