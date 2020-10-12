const myLogger = store => next => action => {
    console.log(action);
    const result = next(action);    // 다음 미들웨어, 미들웨어가 없다면 리듀서에게 반환하겟다.
    console.log('\t', store.getState());
    return result;
};

export default myLogger;