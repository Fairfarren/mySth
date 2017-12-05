const state = {
    DETAILED_SHOW: true,
    DETAILED_SHOW_MARGIN: '88px',
    POPUP_SHOW: {
        show: false,
        who: 'signInUp'
    },
    USER: {
        name: '',
        img: 'static/images/userImg.png',
    },
    //购买课程弹窗
    POPUP_PAY_CLASS: {
        name: '',
        publisher: '',
        lecturer: '',
        time: '',
        price: '',
        dCode: '',
        payTime: ''
    }
}

export default state;
