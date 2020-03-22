import React, { useContext, useEffect } from 'react';
import AuthorList from './AuthorList';
import { AppContext } from '../contexts/AppContext';
import { AuthorService } from '../services/AuthorService';
import { IonLoading, IonToast } from '@ionic/react';
import { useHistory } from 'react-router';

const AuthorListContextual: React.FC = () => {
    const history = useHistory()

    const [appData, dispatchAppData] = useContext(AppContext);

    useEffect(() => {
        dispatchAppData({ action: { type: 'request', state: appData }})
        AuthorService.getAuthors()
            .then(response => {
                const newState = {
                    ...appData,
                    authors: response.map(item => ({
                        objectId: item.objectId,
                        name: item.name
                    })),
                    isLoading: false,
                    errorMsg: ''
                };
                dispatchAppData({ action: { type: 'set', state: newState }})
            })
            .catch(error => {
                const newState = { ...appData, errorMsg: error, isLoading: false }
                dispatchAppData({ action: { type: 'set', state: newState }})
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

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
            : <AuthorList
                authors={appData.authors}
                getBooks={at => history.push(`/mobile/book/${at}`)}
            />}
        </>
        
    )
}

export default AuthorListContextual;