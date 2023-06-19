export const addOrder = (items, name, list, updateCart, updateList) => {
	updateCart(items + 1);
	if (!list.has(name)) {
		updateList(new Map(list.set(name, 1)));
	} else {
		updateList(new Map(list.set(name, list.get(name) + 1)));
	}
};

export const removeOrder = (items, name, list, updateCart, updateList) => {
	if (items > 0) {
		updateCart(items - 1);

		if (list.get(name) === 1) {
            list.delete(name);
            updateList(new Map(list));
		} else {
			updateList(new Map(list.set(name, list.get(name) - 1)));
		}
	}
};
