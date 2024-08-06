// js 파일 별도 작성!
const {createApp} = Vue;

createApp({
    data() {
        return {
            list: ['아이스 커피', '포도주스', '밀크티', '바닐라라떼'],
            objArr: [
                {site:'양양', takeTime:'3시간'},
                {site:'파리', takeTime:'12시간'},
                {site:'시드니', takeTime:'10시간'}
            ],
            myArr: ['일', '이', '삼', '사', '오'],
            numArr: [1, 2, 3, 4, 5],
        }
    },
    methods: {
        addList(){
            this.myArr.push('추가');
        },
        addListIndex(arg){
            this.myArr.splice(arg, 0, '삽입');  // 배열 요소를 제거하고 새로운 요소로 대체
        },
        changeList(arg){
            this.myArr.splice(arg, 1, '수정');
        },
        deleteList(arg){
            this.myArr.splice(arg, 1);
        }
    },
}).mount('#app');