export const fetchJSON = async (url, options) => {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return await response.json();
};
