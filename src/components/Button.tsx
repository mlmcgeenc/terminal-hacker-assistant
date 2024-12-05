import { ButtonType } from "../types/types";

export const Button = ({children, onClick, icon}: ButtonType) => {
  return (
		<button
			className='text-green-600 border flex justify-center border-green-600 py-2 px-4 min-w-20 grow rounded hover:bg-green-600 hover:text-green-950'
			onClick={onClick}
		>
			<div className='text-2xl mr-2'>{icon}</div>
			<span>{children}</span>
		</button>
	);
}
