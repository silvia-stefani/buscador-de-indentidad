import React from "react";

export default function Logo({ width, color, bg }) {

    return(

        <div style={{backgroundColor: bg, borderRadius: "50%", padding: ".75rem"}}>
        <svg style={{ width: width }} fill="none" viewBox="0 0 56 47">
            <path fill={color} d="M35.228 26.906h7.547v7.737h-7.547v-7.737Zm-13.808 0h-7.547v7.737h7.547v-7.737Z" />
            <path fill={color} fillRule="evenodd" d="M7.659 46h40.886v-4.986h6.66v-20.48h-6.66v20.48H7.66v-20.48H1v20.48h6.659V46Z" clipRule="evenodd" />
            <path fill={color} d="M23.496 1h10.038v3.682H23.496V1Zm5.074 19.534h19.976v-5.216H7.659v5.216h20.91Z" />
            <path fill={color} d="M48.546 46v.5h.5V46h-.5Zm6.659-4.986v.5h.5v-.5h-.5Zm0-20.48h.5v-.5h-.5v.5Zm-6.66-5.216h.5v-.5h-.5v.5ZM7.66 46h-.5v.5h.5V46ZM1 41.014H.5v.5H1v-.5Zm0-20.48v-.5H.5v.5H1Zm6.659-5.216v-.5h-.5v.5h.5Zm27.57 11.588v-.5h-.5v.5h.5Zm7.546 0h.5v-.5h-.5v.5Zm0 7.737v.5h.5v-.5h-.5Zm-7.547 0h-.5v.5h.5v-.5ZM21.42 26.906h.5v-.5h-.5v.5Zm-7.547 0v-.5h-.5v.5h.5Zm0 7.737h-.5v.5h.5v-.5Zm7.547 0v.5h.5v-.5h-.5ZM23.496 1V.5h-.5V1h.5Zm10.038 0h.5V.5h-.5V1Zm0 3.682v.5h.5v-.5h-.5Zm-10.038 0h-.5v.5h.5v-.5ZM27.635 46.5h20.91v-1h-20.91v1Zm21.41-.5v-4.986h-1V46h1Zm-.5-5.486h-20.91v1h20.91v-1ZM28.57 21.034h19.976v-1H28.57v1Zm19.476-.5v20.48h1v-20.48h-1Zm.5 20.98h6.659v-1h-6.66v1Zm7.159-.5v-20.48h-1v20.48h1Zm-.5-20.98h-6.66v1h6.66v-1Zm-6.16.5v-5.216h-1v5.216h1ZM27.636 45.5H7.659v1h19.976v-1ZM8.159 46v-4.986h-1V46h1Zm-.5-4.486h19.976v-1H7.659v1Zm20.91-21.48H7.66v1h20.91v-1Zm-21.41.5v20.48h1v-20.48h-1Zm.5 19.98H1v1h6.659v-1Zm-6.159.5v-20.48h-1v20.48h1ZM1 21.034h6.659v-1H1v1Zm7.159-.5v-5.216h-1v5.216h1Zm-.5-4.716h20.91v-1H7.66v1Zm27.57 11.588h7.546v-1h-7.547v1Zm7.046-.5v7.737h1v-7.737h-1Zm.5 7.237h-7.547v1h7.547v-1Zm-7.047.5v-7.737h-1v7.737h1ZM21.42 26.406h-7.547v1h7.547v-1Zm-8.047.5v7.737h1v-7.737h-1Zm.5 8.237h7.547v-1h-7.547v1Zm8.047-.5v-7.737h-1v7.737h1Zm7.12-19.325V4.682h-1v10.636h1ZM23.496 1.5h10.038v-1H23.496v1Zm9.538-.5v3.682h1V1h-1Zm.5 3.182H23.496v1h10.038v-1Zm-9.538.5V1h-1v3.682h1Zm24.55 10.136H28.57v1h19.976v-1Zm-19.976 0h-.03v1h.03v-1Zm-.03 0H7.66v1h20.88v-1Z" />
        </svg>
        </div>

    )

}