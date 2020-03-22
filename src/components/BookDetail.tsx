import React from 'react'
import { IonList, IonItem, IonText, IonImg, IonCol, IonGrid, IonRow, IonThumbnail } from '@ionic/react'
import { Book } from '../models/Book';

type BookListProps = {
	book: Book
	review: number
}

const NO_IMG: string = 'https://di9mr54a05a64.cloudfront.net/noimage.png';

const BookList: React.FC<BookListProps> = ({
	book, review
}: BookListProps) => 
	<IonGrid>
		<IonRow>
			<IonCol style={{display: 'flex', justifyContent: 'center'}}>
				<img src={book.cover ?? NO_IMG} height="300" />
			</IonCol>
		</IonRow>
		<IonRow>
			<IonCol style={{display: 'flex', justifyContent: 'center'}}>
				<IonText color='primary'>{book.title ?? ''}</IonText>
			</IonCol>
		</IonRow>
		<IonRow>
			<IonCol><IonText>Por: {book.author.name ?? ''}</IonText></IonCol>
		</IonRow>
		<IonRow>
			<IonCol><IonText>Quantidade Disponivel: {book.quantity}</IonText></IonCol>
		</IonRow>
		<IonRow>
			<IonCol><IonText>Nota: {review}</IonText></IonCol>
		</IonRow>
	</IonGrid>

export default BookList