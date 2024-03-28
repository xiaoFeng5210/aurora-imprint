import { nanoid } from 'nanoid';

export const newNanoid = () => {
	return nanoid(8);
}