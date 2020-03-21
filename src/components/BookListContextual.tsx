import React, { useContext, useEffect } from 'react';
import BookList from './BookList';
import { AppContext } from '../contexts/AppContext';
import { BookService } from '../services/BookService';
import { IonLoading } from '@ionic/react';
import { useParams } from 'react-router';
// import { useHistory } from 'react-router';

type getByAuthorParams = {
    idx?: string
}

const BookListContextual: React.FC = () => {

    const params: getByAuthorParams = useParams()
    const idx: string = params.idx ?? ''

    const [appData, dispatchAppData] = useContext(AppContext);

    useEffect(() => {
        dispatchAppData({ action: { type: 'request', state: appData }})
        BookService.getBooks()
            .then(response => {
                console.log('books response', response)
                const books = idx
                    ? response.filter(item => {
                        return item.author.objectId.toString() === idx
                    })
                    : response.map(item => ({
                        objectId: item.objectId,
                        title: item.title,
                        quantity: item.quantity,
                        cover: item.cover,
                        author: item.author
                    }));
                console.log('books: ', books)
                const newState = { ...appData, books: books, isLoading: false };
                dispatchAppData({ action: { type: 'set', state: newState }})
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

    // const history = useHistory()

    return (
        <>
            {appData.isLoading
            ? <IonLoading
                isOpen={true}
                message={'Carregando...'}
            /> 
            : <BookList
                books={appData.books}
                bookDetail={at => {
                    dispatchAppData({ 
                        action: { type: 'book-detail', state: appData, at }
                    })
                }}
            />}
        </>
        
    )
}

export default BookListContextual;