export function subscribeMessages() {
    return {
        event: 'message',
        handle: NEW_MESSAGE,
    }
}

export function unsubscribeMessages() {
    return {
        event: 'message',
        leave: true,
    }
}

// Action creator with received function:
export function subscribeConversation() {
    return dispatch => dispatch({
        event: 'message',
        handle: data => dispatch({
            type: NEW_MESSAGE,
            payload: data.message,
        }),
    });
}