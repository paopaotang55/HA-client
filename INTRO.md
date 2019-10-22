# 프로젝트 과제 - 클라이언트 편

- 바닥부터 스스로 만들어 보는 과제 입니다. 고통스럽지만 즐겨 주시기 바랍니다.
- 스프린트 과정에서 배우지 않는 내용이 나올 수 있습니다. 시험 시간 내에 검색, 공부, 적용을 통해 헤쳐나가시기 바랍니다.
- 이 과제는 셀프 녹화가 필요 없습니다.
- 해당 과제를 직접 풀이하는 코드를 제외한 모든 리소스 검색이 가능합니다.
- 당연히 동료들의 도움은 받으면 안 됩니다.
- 이전 스프린트 과제를 참고하셔도 좋지만 지나친 복사 붙여넣기는 자제해 주시기 바랍니다.

# 셀프 평가

아래 평가 포인트에 따라 `grading.json` 파일을 업데이트 해 주세요.
최종 평가에 참고로 사용됩니다.

### 평가 스케일

`0`: 전혀 건들지 못함
`1`: 시도 해 봄
`2`: 어설프지만 구현이 됌
`3`: 요구사항을 충분히 만족함

## bare minimum
1. `json`: json 셀프 평가 포인트를 잘 작성한다
2. `run`: 개발 환경이 에러 없이 잘 실행된다
3. `eslint`: eslint 설정을 할 줄 안다
4. `test`: 모든 테스트 케이스를 통과한다
5. `directory`: 코드를 적절한 디렉토리 구조 설계와 파일 분리를 할 줄 안다.
6. `readme`: 누구나 readme를 읽고 쉽게 개발 환경을 구동할 수 있어야 한다.
7. `render_01`: 1번째 페이지를 그릴 줄 안다
8. `render_02`: 2번째 페이지를 그릴 줄 안다
9. `render_03`: 3번째 페이지를 그릴 줄 안다
10. `render_04`: 4번째 페이지를 그릴 줄 안다
11. `router`: react-router-dom 을 적절하게 적용하고 활용할 줄 안다
12. `fetch`: API 통해 리소스를 서버에서 받아와 클라이언트에 렌더할 줄 안다
13. `select_render`: select drop down 혹은 radio 버튼을 활용하여 todo, incomplete todo, complete todo 선택적으로 render 되게 한다
14. `css`: 적절한 CSS 로 화면 배치 및 각 컴포넌트를 꾸밀 줄 안다
15. `git`: 의미있는 git commit 으로 프로젝트를 관리할 줄 안다

## advanced

1. `link`: home button 링크를 통해 원하는 페이지로 한 번에 이동시킬 수 있다
2. `back`: 뒤로 가기 버튼 클릭시 항상 이전 페이지로 돌아갈 수 있다
3. `deploy`: 자신이 만든 페이지를 배포할 수 있다. 배포가 된 경우 `README.md`에 링크를 추가해 주세요
4. `loading`: API data fetch 중에 loading spinner 를 text 혹은 spinner 로 그릴 줄 안다
5. `responsive`: 화면의 크기에 따라 적절하게 반응되는 반응형 페이지를 만들 줄 안다
6. `posting`: advanced의 포스팅을 fetch 해서 렌더할 줄 안다
7. `pagination`: advanced의 포스팅 pagination을 구현할 줄 안다
8. `reply`: post와 함께 reply 데이터를 fetch 받아 렌더할 줄 안다
9. `env`: 리액트 환경 변수 설정을 통해 서버 api uri를 localhost와 이후에 프로덕션에서 사용될 진짜 api 주소가 동적으로 변경될 수 있도록 세팅한다
