<template>
  <div class=""></div>
</template>

<script>
export default {
  fatch({ store, params }) {
    // context 인자를 받음
    // vuex 스토어에 데이터를 넣기 위해 사용함
    // let data = "hello world";
    // store.commit("dataUpdate", data);
  },

  // 인스턴스가 생성될 때 호출
  created() {},

  // 비동기적으로 데이터 생성 json 형태로 반환하면 data () 와 머지됨
  asyncData(context) {
    // context는 url에 있는 params나 query를 가져올 수 있음
    // redirect나 error를 이용하여 원하는 페이지로 리다이렉트 시키거나 에러페이지를 띄울 수 있음
    // vuex가 설정된 경우 store를 사용할 수 있음

    // 서버에서 데이터를 받아오는 부분

    return { message2: "world" };
  },

  // 데이터 생성
  data() {
    return {};
  },

  // 없어도 됨, 해당 페이지 <head> 커스텀마이징
  head() {
    return {
      title: "hello world",
      meta: [{ hid: "고유값", name: "설명", content: "커스텀 설명" }],
    };
  },

  // 해당 파일에 동작시킬 메소드 정의
  methods: {},

  // 복잡한 계산식일 때 computed를 이용
  computed: {},

  // 외부 컴포넌트 추가 {a, b, c}의 형태로 작성. 각각의 컴포넌트는 import a from 'a'로 가져옴
  components: {},

  // 없어도 됨, layout 설정, 기본 레이아웃 사용 시 지워도 됨
  layout: "",

  // 없어도 됨, 미들웨어 설정
  // middleware : 'authenticated'는 middleware 디렉토리의 authenticated.js 파일 실행
  // 컴포넌트가 호출되기 전에 특정 코드를 실행시킬 수 있음
  // 미들웨어를 사용하기 위해서는 middleware에 js 파일을 만들어주어야 함
  middleware: "",

  // 없어도 됨, 최상단 true, 최하단 false
  scrollToTop: true || false,
};
</script>