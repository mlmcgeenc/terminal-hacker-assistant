import { useContext } from 'react';
import { AppContext } from '../Context';
import { FaPlusCircle } from 'react-icons/fa';
import { InputType } from '../types/types';

const Input = ({ setInputValue, handleAddWord }: InputType) => {
	const { inputValue } = useContext(AppContext);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
			if (e.key === 'Enter') {
				handleAddWord(inputValue);
			}
		};

	return (
		<div className='bg-green-950 max-h-14 flex justify-between rounded m-4 border border-green-800 placeholder-green-800 text-green-600 text-base p-2 focus-within:bg-green-600'>
			<input
				type='text'
				id='input'
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				onKeyDown={handleKeyDown}
				className='peer bg-transparent grow placeholder-green-800 focus:placeholder-green-950 text-green-600 focus:text-black text-base p-2 focus:border-green-600 focus:outline-none focus:ring-0'
				placeholder='Type word here'
			/>
			<FaPlusCircle
				onClick={() => handleAddWord(inputValue)}
				className='text-green-600 text-2xl my-auto peer-focus:text-green-950'
			/>
		</div>
	);
};

export default Input;
