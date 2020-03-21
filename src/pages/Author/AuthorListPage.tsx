import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
// import { useHistory } from 'react-router';

import AuthorListContextual from '../../components/AuthorListContextual';

const AuthorListPage: React.FC = () => {
    
    // const history = useHistory()

    // const handleInsert = () => {
    //     history.push('/set')
    // }

    return (
        <IonPage id="list">
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Autores</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <AuthorListContextual />
            </IonContent>
        </IonPage>
    )
}

export default AuthorListPage
