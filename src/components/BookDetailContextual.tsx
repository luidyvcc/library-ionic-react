import React, { useContext, useEffect } from 'react';
import { AppContext } from '../contexts/AppContext';
import { IonLoading, IonToast } from '@ionic/react';
import { useParams } from 'react-router';
import BookDetail from './BookDetail';
import { BookService } from '../services/BookService';

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
        if (book) {
            BookService.getReviews(book)
                .then(response => {
                    console.log('review: ',response)
                    const newState = {
                        ...appData,
                        book: book,
                        reviews: response.map(item => ({
                            objectId: item.objectId,
                            rating: item.rating,
                            book: item.book,
                        })),
                        isLoading: false,
                        errorMsg: ''
                    };
                    dispatchAppData({ action: { type: 'set', state: newState }})
                })
                .catch(error => {
                    const newState = { ...appData, errorMsg: error, isLoading: false }
                    dispatchAppData({ action: { type: 'set', state: newState }})
                })
        } else {
            const newState = {
                ...appData,
                isLoading: false,
                errorMsg: 'Erro ao buscar livro'
            };
            dispatchAppData({ action: { type: 'set', state: newState }})
        }
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
            : <BookDetail
                book={appData.book}
                review={
                    Math.round(
                        appData.reviews
                        .reduce((acc, item) => acc + (item.rating), 0)
                        /appData.reviews.length
                    )
                }
            />
            }
        </>
        
    )
}

export default BookDetailContextual;