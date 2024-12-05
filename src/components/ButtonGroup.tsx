import { Button } from './Button';
import { FaSortAmountUp } from 'react-icons/fa';
import { IoNuclear } from 'react-icons/io5';
import { ButtonGroupType } from '../types/types';

const ButtonGroup = ({ handleEvaluateWords, handleClear }: ButtonGroupType) => {
	return (
		<div className='flex justify-around w-full m-auto p-4 gap-4'>
			<Button onClick={handleEvaluateWords} icon={<FaSortAmountUp />}>
				Sort
			</Button>
			<Button onClick={handleClear} icon={<IoNuclear />}>
				Clear
			</Button>
		</div>
	);
};

export default ButtonGroup