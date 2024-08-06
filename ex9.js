const {createApp, ref} = Vue;

createApp({
    data() {
        return {
           list:[ // 개인 과목별 점수, 개인 총점
            
           ],
           count:0, // 인원수 카운트
           totalScore:0, // 전체 총점
        }
    },
    methods: {
        gradeForm(){
            // 콘솔로 체크
            // console.log(this.$refs.name.value, this.java, this.react, this.vue)
            // console.log(this.list);


            // 개인 총점
            let score = this.java + this.react + this.vue;
            this.list.push({name:this.$refs.name.value, java:this.java, react:this.react, vue:this.vue, myScore:score});

            this.count++;
            this.totalScore += score;
        }
        
    },
}).mount('#app');