import React from 'react'
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonTitle, IonIcon } from '@ionic/react'
import { Route } from 'react-router'
import { videocam, person } from 'ionicons/icons'

import Home from './Home'
import AuthorListPage from './Author/AuthorListPage';
import BookListPage from './Book/BookListPage'

const TabsPage: React.FC= () => {
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Route path="/mobile/author" component={AuthorListPage} exact />
                <Route path="/mobile/book/:idx" component={BookListPage} exact />
                <Route path="/mobile" component={Home} exact />
            </IonRouterOutlet>
            <IonTabBar slot="bottom" color="primary">
                <IonTabButton tab="author" href="/mobile/author">
                    <IonTitle>Autores</IonTitle>
                    <IonIcon icon={person} />
                </IonTabButton>
                <IonTabButton tab="book" href="/mobile/book/0">
                    <IonTitle>Livros</IonTitle>
                    <IonIcon icon={videocam} />
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    )
}

export default TabsPage
