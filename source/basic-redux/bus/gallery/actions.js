import * as t from './types';

export const showNextPhoto = () => {
    return {
        type: t.SHOW_NEXT_PHOTO,
    };
};

export const showPrevPhoto = () => {
    return {
        type: t.SHOW_PREV_PHOTO,
    };
};

export const showSelectedPhoto = (photoIndex) => {
    return {
        type:    t.SHOW_SELECTED_PHOTO,
        payload: photoIndex,
    };
};
