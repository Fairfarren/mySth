//全局方法

//判断是不是直播页面
export const WATCH_DETAILED_SHOW_TRUE = (state) => {
    state.DETAILED_SHOW = true;
    state.DETAILED_SHOW_MARGIN = '56px';
}
export const WATCH_DETAILED_SHOW_FALSE = (state) => {
    state.DETAILED_SHOW = false;
    state.DETAILED_SHOW_MARGIN = '0';
}
//end判断是不是直播页面

//关闭弹窗
export const CLOSE_PUPUP = (state) => {
    state.POPUP_SHOW.show = false;
    // state.POPUP_SHOW.who = 'signInUp';
}

//登录注册弹出框
export const PUPUP_SHOW_SIGNINUP = (state) => {
    state.POPUP_SHOW.show = true;
    // state.USER.name.length > 0 ? ( () => {
    //     state.POPUP_SHOW.who = 'addPhoneNumber';
    // })() : ( () => {
    //     state.POPUP_SHOW.who = 'signInUp';
    // })()
    
    // console.log(state.POPUP_SHOW.show)
}