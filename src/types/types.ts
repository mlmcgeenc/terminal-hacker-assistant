interface Word {
	text: string;
	score: number;
	eliminated: boolean;
}

interface WordListComponentType {
	handleLikenessEntry: (arg0: HandleLikenessEntryType) => void;
}

interface InputType {
	setInputValue: (arg0: string)=> void;
	handleAddWord: (arg0: string)=> void;
}

interface HandleLikenessEntryType {
	word: string;
	likeness: number;
}

interface AddWordToListType {
	wordList: Word[];
	word: Word;
}

interface ScoreWordsType {
	wordList: Word[];
	letterLibrary: LetterLibrary;
}

interface EliminateWordsType {
	baseWord: string;
	likeness: number;
	wordList: Word[];
}

interface ButtonType {
	children?: string;
	onClick?: () => void;
	icon?: React.ReactNode;
}

interface ButtonGroupType {
	handleEvaluateWords: () => void;
	handleClear: () => void;
  }

type LetterLibrary = Record<string, Record<string, number>>[];

export type {
	Word,
	WordListComponentType,
  InputType,
	HandleLikenessEntryType,
	AddWordToListType,
	ScoreWordsType,
	EliminateWordsType,
	ButtonType,
	ButtonGroupType,
	LetterLibrary,
};
