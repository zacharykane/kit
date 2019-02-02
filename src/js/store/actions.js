export function updateName(newName) {
    return {
        type: 'CHANGE_NAME',
        payload: {
            name: newName,
        },
    };
}
