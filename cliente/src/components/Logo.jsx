import React from "react";
import PropTypes from 'prop-types';
import colors from "../utils/colors";
export const Logo = ({ width, color, outlineLight, outlineDark }) => {

    const logoColor = color == 'primary' ? colors.primary : color == 'secondary' ? colors.secondary : color == 'black' ? colors.black : color == 'ghost' ? colors.ghost : null 
    const strokeWidth =  width == 'small' ? "9" : width =="medium" ? "5" : width == 'large' ? '3' : '5'
    return (

        <svg fill="none" viewBox="0 0 307 250" style={{width : width == 'small' ? "3rem" : width =="medium" ? "6rem" : width == 'large' ? '12rem' : width}}>
            <g>
                <path fill={logoColor} d="M184.923 2h-56.111v24.6h56.111V2Zm82.855 106.786H39.221V80.273h228.557v28.513Zm0 111.958V108.786H305v111.958h-37.222Zm-228.557 0h228.557V248H39.221v-27.256Zm0 0V108.786H2v111.958h37.221Zm34.741-77.126h42.184v42.295H73.962v-42.295Zm161.558 0h-42.185v42.295h42.185v-42.295Z" />
                <path stroke={outlineDark ? colors.black : outlineLight ? colors.white : logoColor} strokeWidth={strokeWidth} d="M157.931 80.273V26.6m109.847 82.186V80.273H39.221v28.513m228.557 0v111.958m0-111.958H305v111.958h-37.222m0-111.958H39.221m0 0v111.958m0-111.958H2v111.958h37.221m228.557 0V248H39.221v-27.256m228.557 0H39.221M128.813 2h56.111v24.6h-56.111V2Zm-12.666 141.618H73.962v42.295h42.184v-42.295Zm77.189 0h42.185v42.295h-42.185v-42.295Z" />
            </g>
        </svg>
    )

}

Logo.propTypes = {
    color: PropTypes.oneOf([colors.black, colors.primary, colors.secondary, colors.white]),
    stroke: PropTypes.oneOf([colors.black, colors.primary, colors.secondary, colors.white]),
    width: PropTypes.oneOf(['small', 'medium', 'large']),
    outlineDark: PropTypes.bool,
    outlineLight: PropTypes.bool
};

Logo.defaultProps = {
    outlineDark: true,
    stroke: colors.secondary,
    color: colors.primary,
    width: 'medium'
};
