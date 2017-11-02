export const UP = 'up';
export const DOWN = 'down'

export const goUp =  (text) => {
    return {
        type: UP,
        text
    }
}

export const goDown = (text) => {
    return {
        type: DOWN,
        text
    }
}

export const goListAjax = (text) => {
    return {
        type: 'listAjax',
        text
    }
}