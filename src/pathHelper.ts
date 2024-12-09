export const getImageUrl = (fileName: string, extension: string = "jpg") => {
    return new URL(`./assets/images/${fileName}.${extension}`, import.meta.url)
        .href;
};