import React, { useState, dangerouslySetInnerHTML } from "react";

import styles from './Widget.module.scss'

import { DotsThreeVertical, Copy, ArrowSquareOut, Trash } from "phosphor-react";

import Button from "../../../components/Button/Button";
import EmojiBox from "../../../components/EmojiBox/EmojiBox";

import GoogleBox from './GoogleBox/GoogleBox'
import HibpWidget from './HibpWidget/HipbpWidget'
import TwitterBox from './TwitterBox/TwitterBox'

export default function Widget({ api, box, data, dataLabel }) {

    const [results, setResults] = useState(true)
    const [label, setLabel] = useState("Ver más")

    const [theApi, setApi] = useState(api.slice(0,2))

    const resultsLength = api.length;
    const resultsMore = resultsLength - 2;

    const handleClick = () => {
        results ? setApi(api) & setResults(false) & setLabel("Ver menos")
        : setApi(api.slice(0, 2)) & setResults(true) & setLabel("Ver más")
    }

    const [array, setArray] = useState({})

    


    return (
        <div className={styles.Widget}>
            <div className={styles.heading}>
                <div className={styles.title}>
                    <h4>{dataLabel}</h4>
                    <p>{data}</p>
                </div>
                <DotsThreeVertical size={24} weight="bold" />
            </div>
            {theApi.map((data, key) => (
                    box == "google" ? <GoogleBox key={key} logo={data.favicons.low_res} title={data.title} description={data.description} onPress={() => {moveWidgets}}/>
                    : box == "hibp" ? <HibpWidget key={key} logo={data.LogoPath} title={data.Title} description={data.Description} />
                    : box == "twitter" ? <TwitterBox key={key} userName={data.user.name} userAlias={data.user.screen_name} text={data.text} /> : null
            ))}
            {resultsLength > 2 ?
                <div className={styles.more_results}>
                    <p>Hay {resultsMore} resultados más</p>
                    <Button type="ghost" label={label} onPress={handleClick} />
                </div> : null}
            {resultsLength == 0 ? <EmojiBox type="empty" width="5rem" color="secondary" label="Vaya, no se han encontrado resultados." /> : null}
        </div>
    )
}