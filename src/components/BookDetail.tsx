import React from 'react'
import { IonList, IonItem, IonText, IonAvatar, IonImg, IonCol } from '@ionic/react'
import { Book } from '../models/Book';

type BookListProps = {
	book: Book
}

const NO_IMG: string = 'https://di9mr54a05a64.cloudfront.net/noimage.png';

const BookList: React.FC<BookListProps> = ({
	book
}: BookListProps) => {
	return (
		<>
			<IonList>
				<IonItem key={book.objectId} >
					<IonCol>
						<IonAvatar>
							<IonImg src={book.cover ?? NO_IMG} alt="Cover" /> 
						</IonAvatar>
					</IonCol>
					<IonCol><IonText>{book.title ?? ''}</IonText></IonCol>
					<IonCol><IonText>{book.author.name ?? ''}</IonText></IonCol>
				</IonItem>
			</IonList>
		</>
	);
}

export default BookList