import { isFunction } from "./type-utils";

export const groupBy = (items, key) => {
	return items.reduce((kvp, item) => {
		const computedKey = isFunction(key) ? key(item) : key;

		(kvp[computedKey] = kvp[computedKey] || []).push(item);

        return kvp;
	}, {});
};

export const distinct = (items, key) => {
	return items.reduce((unique, item) => {
		const computedKey = isFunction(key) ? key(item) : key;

		if (!unique.some(s => s[computedKey] === item[computedKey])) {
			unique.push(item);
		}

		return unique;
	}, []);
};
