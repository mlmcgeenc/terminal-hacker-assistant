import { ScoreWordsType, Word } from "../types/types";

export const scoreWords = ({ wordList, letterLibrary }: ScoreWordsType): Word[] => {
	const newList: Word[] = [];

	console.log('wordList: ', wordList);

	wordList.forEach((word: Word) => {
		[...word.text].forEach((char, i) => {
			word.score += letterLibrary[i][char] || 0;
		});
		newList.push(word);
	});

	return newList;
};