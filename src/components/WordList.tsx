import { useContext } from 'react';
import { WordListComponentType } from '../types/types';
import { AppContext } from '../Context';

export const WordList = ({ handleLikenessEntry }: WordListComponentType) => {
	const { wordList } = useContext(AppContext);
	const sortedList = wordList.sort((a, b) => b.score - a.score);

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
					<li className='grow flex justify-between border-b border-b-green-800 border-dashed'>
						<span
							className={`uppercase p-2 ${
								word.eliminated
									? 'line-through text-green-950 bg-black'
									: 'text-green-600'
							}`}
						>
							{word.text}
						</span>
						<label htmlFor='likeness'>Likeness</label>
						<select
							id='likeness'
							className='text-green-600 bg-black rounded px-2 py-1 focus:bg-green-600 focus:text-black focus:ring-green-400 focus:ring'
							onChange={(e) =>
								handleLikenessEntry({
									word: word.text,
									likeness: parseInt(e.target.value),
								})
							}
						>
							{Array.from({ length: word.text.length + 1 }, (_, i) => (
								<option key={i} value={i}>
									{i}
								</option>
							))}
						</select>
					</li>
				))}
			</ul>
		</div>
	);
};
