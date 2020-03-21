import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
// import { useHistory } from 'react-router';

import BookListContextual from '../../components/BookListContextual';

const BookListPage: React.FC = () => {
    
    // const history = useHistory()

    // const handleInsert = () => {
    //     history.push('/set')
    // }

    return (
        <IonPage id="list">
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Livros</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <BookListContextual />
            </IonContent>
        </IonPage>
    )
}

export default BookListPage
