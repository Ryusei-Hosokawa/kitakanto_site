import React from "react";

export default function FooterItemsComponent() {
    const footerListData = [
        {
            title: "ハローワーク　札幌",
            url: "https://jsite.mhlw.go.jp/hokkaido-hellowork/list/sapporo/shisetsu/hw-sapporo.html",
        },
        {
            title: "ハローワーク札幌北",
            url: "https://jsite.mhlw.go.jp/hokkaido-hellowork/list/sapporo/shisetsu/hw-kita.html",
        },
        {
            title: "ハローワーク札幌東",
            url: "https://jsite.mhlw.go.jp/hokkaido-hellowork/list/sapporo/shisetsu/hw-higashi2.html",
        },
        {
            title: "ハローワークプラザ",
            url: "https://jsite.mhlw.go.jp/hokkaido-hellowork/list/sapporo/shisetsu/hw-plaza.html",
        },
    ];
    return (
        <ul className="block w-full max-w-[250px] mx-auto mb-[30px]">
            {footerListData.map((item, index) => (
                <li key={index} className="block w-full mb-[10px] border-b-[1.5px] border-b-textColor3 group hover:border-b-accentColor">
                    <a
                        className="block w-full text-center text-[30px] leading-[1em] text-textColor3 group-hover:text-accentColor"
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {item.title}
                    </a>
                </li>
            ))}
        </ul>
    );
}
