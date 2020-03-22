import React, { useContext, useEffect } from 'react';
import { AppContext } from '../contexts/AppContext';
import { IonLoading, IonToast } from '@ionic/react';
import { useParams } from 'react-router';
import BookDetail from './BookDetail';

type getByBookIdParams = {
    idx?: string
}

const BookDetailContextual: React.FC = () => {
    const params: getByBookIdParams = useParams()
    const idx: string = params.idx ?? ''
    const [appData, dispatchAppData] = useContext(AppContext);

    useEffect(() => {
        dispatchAppData({ action: { type: 'request', state: appData }})
        const book = appData.books.find(book => book.objectId === idx)
        console.log('book: ', book)
        const newState = {
            ...appData,
            book: book ?? appData.book,
            isLoading: false,
            errorMsg: ''
        };
        dispatchAppData({ action: { type: 'set', state: newState }})
    // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [idx])

    return (
        <>
            {appData.isLoading
            ? <IonLoading
                isOpen={true}
                message={'Carregando...'}
            />
            : appData.errorMsg
            ? <IonToast
                isOpen={!!appData.errorMsg}
                position="middle"
                message={appData.errorMsg}
            />
            : <BookDetail book={appData.book}/>
            }
        </>
        
    )
}

export default BookDetailContextual;