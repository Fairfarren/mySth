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
//判断是否登录
export const LOGIN_OR_NOT = state => {
    if(sessionStorage.token && sessionStorage.user) {
        const user = JSON.parse(sessionStorage.user);
        state.USER.name = user.name;
        state.USER.img = user.img;
    }
}
//登录成功
export const LOGIN_SUCCESS = (state, user) => {
    // console.log(user);
    user.user_info.username ? ( () => {
        state.USER.name = user.user_info.username;
    })() : ( () => {
        state.USER.name = 'hello';
    })()
     user.user_info.avatar ? ( () => {
        state.USER.img = user.user_info.avatar;
    })() : ( () => {
        state.USER.img = 'static/images/11.png';
    })()
    sessionStorage.setItem('token', user.token);
    sessionStorage.setItem('user', JSON.stringify({
        name: state.USER.name,
        img: state.USER.img
    }));
}
//退出登录,清空用户信息
export const LOGIN_OUT_SUCCESS = state => {
    state.USER = {
        name: '',
        img: 'static/images/userImg.png'
    }
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
}
//获取用户信息，跟新用户名，手机号，头像
export const SET_USER_INFO = (state, user) => {
    state.USER.name = user.username;
    state.USER.img = user.avatar;
    state.USER.phoneNumber = user.mobile;
    state.USER.id = user.id;
}
//用户绑定手机
export const USER_PHONE_NUMBER = (state, phoneNumber) => {
    state.USER.phoneNumber = phoneNumber;
}
//购买课程弹窗赋值
export const POPUP_PAY_CLASS_STH = (state, data) => {
    state.POPUP_PAY_CLASS = {
        name: data.name,
        publisher: data.publisher,
        lecturer: data.lecturer,
        time: data.time,
        price: data.price
    }
}