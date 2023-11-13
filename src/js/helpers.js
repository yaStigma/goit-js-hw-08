import throttle from "lodash.throttle";

export const saveToLS = throttle((key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}, 500);

export function loadFromLS(key) {
    const data = localStorage.getItem(key);
    try {
        return JSON.parse(data);
    }
    catch {
        return data;
    }
};
