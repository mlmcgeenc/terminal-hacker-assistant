import { Word } from "../types/types";

export const createWordObj = (text: string): Word => {
	return {
		text,
		score: 0,
		eliminated: false,
	};
};