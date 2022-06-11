import React from "react";

import styles from "./EmojiBox.module.scss";

import EmptyEm from "../Emojis/EmptyEm";
import LoveEm from "../Emojis/LoveEm";
import LoadingEm from "../Emojis/LoadingEm";
import colors from "../../utils/colors";

export default function EmojiBox({type, label, color, width}) {

    const colorEmoji =

    color === "primary" ? colors.primary :
    color === "secondary" ? colors.secondary :
    color === "black" ? colors.black :
    color === "gray" ? colors.gray :
    color === "white" ? colors.white : null

    return(
        <div className={styles.EmojiBox}>
            {type === "empty" ?
            <EmptyEm color={colorEmoji} width={width}/> :
            type === "love" ?
            <LoveEm color={colorEmoji} width={width}/> :
            type === "loading" ?
            <LoadingEm color={colorEmoji} width={width}/> 
            : null}
            <p style={{color: colors.secondary}}>{label}</p>
        </div>
    )
}