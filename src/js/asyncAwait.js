export async function coinFlip() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const isHeads = Boolean(Math.round(Math.random()));

    if (isHeads) {
        return 'heads';
    }
    throw Error('tails');
}

export async function future() {
    try {
        return await coinFlip();
    } catch (e) {
        console.error(e);
        throw e;
    }
}
