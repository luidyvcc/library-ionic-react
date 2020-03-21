import React from 'react'
import { IonList, IonItem, IonText, IonAvatar, IonImg, IonCol } from '@ionic/react'
import { Book } from '../models/Book';

type BookListProps = {
	books: Book[]
	bookDetail: (at: Book) => void
}

const NO_IMG: string = 'https://di9mr54a05a64.cloudfront.net/noimage.png';

const BookList: React.FC<BookListProps> = ({
	books, bookDetail
}: BookListProps) => {

	const handleShowDetail = (index: Book) => {
		bookDetail(index)
	}
	return (
		<>
			<IonList>
				{books.map(item =>
					<IonItem
						key={item.objectId}
						button
						onClick={() => handleShowDetail(item)}
						>
							<IonCol>
								<IonAvatar>
									<IonImg src={item.cover ?? NO_IMG} alt="Cover" /> 
								</IonAvatar>
							</IonCol>
							<IonCol><IonText>{item.title ?? ''}</IonText></IonCol>
							<IonCol><IonText>{item.author.name ?? ''}</IonText></IonCol>
					</IonItem>
				)}
			</IonList>
		</>
	);
}

export default BookList