import { EliminateWordsType, Word } from "../types/types";

export const eliminateWords = ({
	baseWord,
	likeness,
	wordList,
}: EliminateWordsType): Word[] => {
	const newList: Word[] = [];
	console.log('baseWord: ', baseWord);

	for (let j = 0; j < wordList.length; j++) {
		let matches = 0;

		for (let i = 0; i < baseWord.length; i++) {
			if (baseWord[i] === wordList[j].text[i]) matches++;
			if (matches > likeness) {
				wordList[j].eliminated = true;
			}
			if (!newList.includes(wordList[j])) {
				newList.push(wordList[j]);
			}
		}
	}
	return newList;
};
