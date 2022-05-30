import React from "react";

import styles from "./EmojiBox.module.scss";

import EmptyEm from "../Emojis/EmptyEm";
import colors from "../../utils/colors";

export default function EmojiBox({type, label, color}) {

    const colorEmoji =

    color === "primary" ? colors.primary :
    color === "secondary" ? colors.secondary :
    color === "black" ? colors.black :
    color === "gray" ? colors.gray :
    color === "white" ? colors.white : null

    return(
        <div className={styles.EmojiBox}>
            {type === "empty" ? 
            <EmptyEm color={colorEmoji}/>
            : null}
            <p style={{color: colorEmoji}}>{label}</p>
        </div>
    )
}