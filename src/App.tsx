import { useState } from 'react';
import { Word, HandleLikenessEntryType, LetterLibrary } from './types/types';
import { Header } from './components/Header';
import { WordList } from './components/WordList';
import { addWordToList } from './functions/addWordToList';
import { createWordObj } from './functions/createWordObj';
import { buildLetterLibrary } from './functions/buildLetterLibrary';
import { scoreWords } from './functions/scoreWords';
import { eliminateWords } from './functions/eliminateWords';
import Input from './components/Input';
import * as Context from './Context';
import ButtonGroup from './components/ButtonGroup';

function App() {
	const [inputValue, setInputValue] = useState('');
	const [wordList, setWordList] = useState<Word[]>([]);
	const [letterLibrary, setLetterLibrary] = useState<LetterLibrary>([]);

	const handleAddWord = (inputValue: string) => {
		const wordObj = createWordObj(inputValue);
		const updatedList = addWordToList({ wordList, word: wordObj });
		const updatedLetterLibrary = buildLetterLibrary(updatedList);

		setLetterLibrary(updatedLetterLibrary);
		setWordList(updatedList);
		setInputValue('');
	};

	const handleEvaluateWords = () => {
		const scoredWordList = scoreWords({ wordList, letterLibrary });
		setWordList(scoredWordList);
	};

	const handleLikenessEntry = ({ word, likeness }: HandleLikenessEntryType) => {
		const newList = eliminateWords({ baseWord: word, likeness, wordList });
		const scoredWordList = scoreWords({ wordList: newList, letterLibrary });
		setWordList(scoredWordList);
	};

	const handleClear = () => {
		setWordList([]);
		setInputValue('');
	};

	return (
			<div className='m-auto max-w-4xl flex flex-col h-svh'>
				<Header />
				<div className='flex flex-col grow'>
					<Context.AppContext.Provider
						value={{
							inputValue,
							wordList,
						}}
					>
						<div className='grow'>
							<Input setInputValue={setInputValue} handleAddWord={handleAddWord} />
							<WordList handleLikenessEntry={handleLikenessEntry} />
						</div>
						<ButtonGroup
							handleEvaluateWords={handleEvaluateWords}
							handleClear={handleClear}
						/>
					</Context.AppContext.Provider>
				</div>
			</div>
	);
}

export default App;
