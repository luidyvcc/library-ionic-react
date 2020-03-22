import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

import BookDetailContextual from '../../components/BookDetailContextual';

const BookDetailPage: React.FC = () => 
    <IonPage id="book-detail">
        <IonHeader>
            <IonToolbar color="primary">
                <IonTitle>Livro</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            <BookDetailContextual />
        </IonContent>
    </IonPage>

export default BookDetailPage
