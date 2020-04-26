import {ClientContext} from "../context/Client";
import {useContext} from 'react';

export function useRole() {
    const clientContext = useContext(ClientContext);
    if (!clientContext){
        throw new Error('Need context at client context');
    }
    return clientContext;
}
