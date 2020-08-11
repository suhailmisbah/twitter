export const insert = (caption, imgUrl) => {
    return {
        type: 'insert',
        caption: caption,
        url: imgUrl
    };
};

// export const decrement = () => {
//     return {
//         type: 'DECREMENT'
//     };
// };


