export const getImgUrl = (imgPathInAssets) => {
	return new URL(`../assets/${imgPathInAssets}`, import.meta.url).href;
};
