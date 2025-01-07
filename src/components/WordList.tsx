import { useContext, useMemo } from 'react';
import { WordListComponentType, WordListItemProps } from '../types/types';
import { AppContext } from '../Context';

const WordListItem = ({ word, handleLikenessEntry }: WordListItemProps) => (
	<li className='grow flex justify-between border-b border-b-green-800 border-dashed'>
		<span
			className={`uppercase p-2 ${
				word.eliminated ? 'line-through text-green-950 bg-black' : 'text-green-600'
			}`}
		>
			{word.text}
		</span>
		<label htmlFor={`likeness-${word.text}`}>Likeness</label>
		<select
			id={`likeness-${word.text}`}
			className='text-green-600 bg-black rounded px-2 py-1 focus:bg-green-600 focus:text-black focus:ring-green-400 focus:ring'
			onChange={(e) =>
				handleLikenessEntry({
					word: word.text,
					likeness: parseInt(e.target.value),
				})
			}
		>
			<option key='origin' value='-'>
				-
			</option>
			{Array.from({ length: word.text.length + 1 }, (_, i) => (
				<option key={i} value={i}>
					{i}
				</option>
			))}
		</select>
	</li>
);

export const WordList = ({ handleLikenessEntry }: WordListComponentType) => {
	const { wordList } = useContext(AppContext);
	// const sortedList = wordList.sort((a, b) => b.score - a.score);

	const sortedList = useMemo(() => {
		return wordList.sort((a, b) => b.score - a.score);
	}, [wordList]);

	return (
		<div className=''>
			{wordList.length && (
				<div className='border-b border-green-800 font-bold text-green-900 flex grow justify-between mx-4 px-2'>
					<span>Entry</span>
					<span>Likeness</span>
				</div>
			)}

			<ul className='flex flex-col mx-4 mb-4'>
				{sortedList.map((word) => (
					<WordListItem
						key={word.text}
						word={word}
						handleLikenessEntry={handleLikenessEntry}
					/>
				))}
			</ul>
		</div>
	);
};
