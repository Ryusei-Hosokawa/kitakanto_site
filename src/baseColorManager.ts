export function baseColorManager(baseColor: string | undefined) {
    if(baseColor === "b-w"){
        return "text-textColor1"
        
    } else if(baseColor === "w-b"){
        return "text-textColor2"
    } else {
        return baseColor
    }
};
/*
【使い方】
baseColorManager関数をインポートし、
テキストカラーの指定を行いたい要素内で下記のように"baseColor"という変数に
"b-w" もしくは "w-b" または任意の色指定を直接記述。

const baseColor = "b-w";
<p className={`${baseColorManager(baseColor)}`}></p>
*/ 