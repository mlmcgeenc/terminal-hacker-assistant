import { LetterLibrary, Word } from "../types/types";

export const buildLetterLibrary = (wordList: Word[]): LetterLibrary => {
	const wordLength = wordList[0].text.length;
	const letterLibrary = Array.from({ length: wordLength }, () => ({}));

	wordList.forEach((word) => {
		[...word.text].forEach((letter, position) => {
			letterLibrary[position][letter] = (letterLibrary[position][letter] || 0) + 1;
		});
	});

	return letterLibrary;
};
