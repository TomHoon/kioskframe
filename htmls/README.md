### caution
+ 특정 페이지 리프레시 > css 날라감
+ nginx에서 캐시 처리하여 재현안됨. local에서만 발생함

### 서버 켜기
+ npx webpack serve


---
### 빌드
+ npx webpack


--- 
### Webpack Knowledge - Question
+ Q1. js chunk는 왜 script 태그로 안들어가는가
+ Q2. css는 어떤 태그로 주입되는가


---
### Webpack Knowledge - Answer
+ Q1. chunk 자체가 memory에 들어가서 load하여 사용함
+ Q2. link로 들어감


---
### Experiment List
1. Dynamic Imported 할 때 명시하지 않는 경우 전부 Build
2. Css Extract
3. Image static file
4. Html. SPA Build
5. CopyWebpackPlugin을 이용해 파일 전체 이동 시키기
6. common 사이즈, 개수 체크
7. refresh시 path에 맞게 랜딩
8. direct url 처리
9. convention (eslint, prettier(tab))
