import { AddWordToListType, Word } from "../types/types";

export const addWordToList = ({ wordList, word }: AddWordToListType): Word[] => {
	const wordLength = word.text.length;

	if (wordList.length && wordList.every((word) => word.text.length != wordLength)) {
		throw new Error('All words must be the same length');
	}

	if (wordList.some((listWord) => listWord.text === word.text)) {
		throw new Error('Word already in list');
	}

	wordList.push(word);
	return wordList;
};