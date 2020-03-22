import React, { useContext, useEffect } from 'react';
import BookList from './BookList';
import { AppContext } from '../contexts/AppContext';
import { BookService } from '../services/BookService';
import { IonLoading, IonToast } from '@ionic/react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';

type getByAuthorParams = {
    idx?: string
}

const BookListContextual: React.FC = () => {
    const history = useHistory()

    const params: getByAuthorParams = useParams()
    const idx: string = params.idx ?? ''

    const [appData, dispatchAppData] = useContext(AppContext);

    useEffect(() => {
        dispatchAppData({ action: { type: 'request', state: appData }})
        BookService.getBooks()
            .then(response => {
                const newState = {
                    ...appData,
                    books: response.map(item => ({
                        objectId: item.objectId,
                        title: item.title,
                        quantity: item.quantity,
                        cover: item.cover,
                        author: item.author
                    })),
                    isLoading: false,
                    errorMsg: ''
                };
                dispatchAppData({ action: { type: 'set', state: newState }})
            })
            .catch(error => {
                const newState = { ...appData, errorMsg: error, isLoading: false }
                dispatchAppData({ action: { type: 'set', state: newState }})
            });
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
            : <BookList
                books={idx!=='0' 
                    ? appData.books.filter(item =>  item.author.objectId.toString() === idx)
                    : appData.books
                }
                bookDetail={at => history.push(`/mobile/book-detail/${at}`)}
            />}
        </>
        
    )
}

export default BookListContextual;