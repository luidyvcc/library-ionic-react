import React from 'react'
import { IonList, IonItem, IonLabel, IonText } from '@ionic/react'
import { Author } from '../models/Author';

type AuthorListProps = {
	authors: Author[]
	getBooks: (at: number) => void
}

const AuthorList: React.FC<AuthorListProps> = ({
	authors, getBooks
}: AuthorListProps) => {

	const handleGetBooks = (index: number) => {
		getBooks(index)
	}
	return (
		<>
			<IonList>
				{authors.map(item =>
					<IonItem
						key={item.objectId}
						button
						onClick={() => handleGetBooks(item.objectId)}
						>
						<IonLabel>
							<IonText>{item.name ?? item.name}</IonText>
						</IonLabel>
					</IonItem>
				)}
			</IonList>
		</>
	);
}

export default AuthorList