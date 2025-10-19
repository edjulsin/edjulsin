const capitalize = (string: string) => {
	const splitted = string.split(' ')
	const capitalized = splitted.map(([x, ...xs]) => {
		return [x.toUpperCase(), ...xs].join('')
	})
	return capitalized.join(' ')
}

export default capitalize
