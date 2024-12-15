export function baseColorManager(baseColor: string | undefined) {
    if(baseColor === "b-w"){
        return "text-textColor1"
        
    } else if(baseColor === "w-b"){
        return "text-textColor2"
    } else {
        return baseColor
    }
};