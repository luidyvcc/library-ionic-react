import React, { useReducer } from 'react';

import { Author } from '../models/Author';
import { Book } from '../models/Book';
import { Review } from '../models/Review';

export interface AppData {
    isLoading: boolean
    errorMsg: string
    authors: Author[]
    books: Book[]
    book: Book
    reviews: Review[]
}

const DEFAUL_APPDATA: AppData = {
    isLoading: false,
    errorMsg: '',
    authors: [],
    books: [],
    book: {
        objectId: '',
        quantity: 0,
        author: {objectId: 0}
    },
    reviews: []
}

export interface AppDataAction {
    action: 
        ({ type: 'request', state: AppData })
        | ({ type: 'set', state: AppData })
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
                    const newState = { ...state, isLoading: true, errorMsg: '' }
                    return newState
                }
                case 'set': {
                    return action.state
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