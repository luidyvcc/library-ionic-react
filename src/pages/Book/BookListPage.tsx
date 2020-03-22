import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

import BookListContextual from '../../components/BookListContextual';

const BookListPage: React.FC = () =>
    <IonPage id="book-list">
        <IonHeader>
            <IonToolbar color="primary">
                <IonTitle>Livros</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            <BookListContextual />
        </IonContent>
    </IonPage>

export default BookListPage
