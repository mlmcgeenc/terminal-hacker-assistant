import { createContext } from "react";
import { Word } from "./types/types";

interface ContextType {
	inputValue: string;
  wordList: Word[];
}

export const AppContext = createContext <ContextType>({	inputValue: '', wordList: []});

// const WordListContext = createContext(null)

// const WordListDispatchContext = createContext(null)

// export function WordListProvider({ children }) {
//   const [words, dispatch] = useReducer(
//     wordListReducer,
//     initialWords
//   )

//   return (
//     <WordListContext.Provider value={words}>
//       <WordListDispatchContext.Provider value={dispatch}>
//       {children}
//       </WordListDispatchContext.Provider>
//     </WordListContext.Provider>
//   )
// }

// export function useWords() {
//   return useContext(WordListContext)
// }

// export function useWordListDispatch() {
//   return useContext(WordListDispatchContext)
// }

// function wordListReducer(words: Word[], action: { type: string; text: string; }) {
//   switch (action.type) {
//     case 'ADD_WORD': {
//       if (words.length && words.every((word: Word) => word.text.length != action.text.length)) {
//         throw Error('All words must be the same length');
//       }
//       if (words.some((listWord: Word) => listWord.text === action.text)) {
//         throw Error('Word already in list');
//       }
//       console.log('Word added: ', [
// 				...words,
// 				{
// 					text: action.text,
// 					score: 0,
// 					eliminated: false,
// 				},
// 			]);
//       return [...words, {
//         text: action.text,
// 		    score: 0,
// 		    eliminated: false,
//       }]
//     }
//     case 'EDIT_WORD': {
//       console.log('Editing of words not possible at this time')
//       break;
//     }
//     case 'REMOVE_WORD': {
//       console.log('Removing words from list not possible at this time')
//        break;
//     }
//     default: {
//       throw Error('Unkown action: ' + action.type)
//     }
//   }
// }

// const initialWords: Word[] = []
