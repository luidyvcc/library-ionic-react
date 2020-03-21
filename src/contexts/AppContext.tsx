import React, { useReducer } from 'react';

import { Author } from '../models/Author';
import { Book } from '../models/Book';

export interface AppData {
    isLoading: boolean
    authors: Author[]
    books: Book[]
    book?: Book
}

const DEFAUL_APPDATA: AppData = {
    isLoading: false,
    authors: [],
    books: [],
}

export interface AppDataAction {
    action: 
        ({ type: 'request', state: AppData })
        | ({ type: 'set', state: AppData })
        | ({ type: 'book-detail', state: AppData, at: Book })
        | ({ type: 'book-by-author', at: number })
}

export const AppContext = React.createContext<[AppData, React.Dispatch<AppDataAction>]>([
    DEFAUL_APPDATA, () => {}
])

export const AppContextProvider: React.FC<React.PropsWithChildren<{}>> = ({
    children,
}: React.PropsWithChildren<{}>) => {
    const reducer = useReducer(
        (state: AppData, { action }: AppDataAction): AppData => {
            switch (action.type) {
                case 'request': {
                    const newState = { ...state, isLoading: true }
                    return newState
                }
                case 'set': {
                    return action.state
                }
                case 'book-detail': {
                    return action.state
                }
                // eslint-disable-next-line
                case 'book-by-author': {
                    return state
                }
            }
        },
        DEFAUL_APPDATA
    )

    return (
        <AppContext.Provider value={reducer}>
            {children}
        </AppContext.Provider>
    )
}