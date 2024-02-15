# jeju-itinerary-recommendation
제주도 여행일정 추천

## 1. 목표와 기능

### 1.1 목표
- 막연한 제주도 여행 계획에 도움을 줄 수 있는 웹 서비스

### 1.2 기능
- 최소한의 정보 입력으로 제주도 여행일정을 생성 
- 별도 로그인 없이 바로 서비스 이용 가능

### 1.3 팀 구성
<table>
    <tr>
        <th>신찬수</th>
    </tr>
        <td><img src="my_image.jpg"  alt="신찬수 증명사진"></td>
</table>


## 2. 개발 환경 및 배포 URL

### 2.1 개발 환경
- 사용 언어
    - HTML, CSS, JS
- 서비스 배포환경
    - github, 로컬 환경

### 2.2 배포 URL
- https://devshin-91.github.io/jeju-itinerary-recommendation/

## 3. 요구사항 명세와 기능 명세

```mermaid
    sequenceDiagram
    actor A as client
    participant B as Web
    participant C as server
    A->>+B: 일정 생성 요청
    B->>+C: 요청 전송
    alt API URL이 맞다면
    C->>+B: 일정 생성 및 전송
    B->>+A: 생성된 일정 전달
    else API URL이 맞지 않다면
    C->>+B: False
    B->>+A: 일정 생성 실패
    end
```

## 4. 프로젝트 구조와 개발 일정
### 4.1 프로젝트 구조
```
📦jeju-itinerary-recommendation
 ┣ 📂css
 ┃ ┗ 📜style.css
 ┣ 📂images
 ┃ ┣ 📜cafe.jfif
 ┃ ┣ 📜logo.jfif
 ┃ ┗ 📜ms-icon-310x310.png
 ┣ 📂js
 ┃ ┗ 📜index.js
 ┣ 📜.env
 ┣ 📜.gitignore
 ┣ 📜index.html
 ┗ 📜README.md
```

### 4.2 개발 일정(WBS)
* 아래 일정표는 머메이드로 작성했습니다.
```mermaid
gantt
    title jeju-itinerary-recommendation
    dateFormat YY-MM-DD
    section 기획
        정보 입력 :2024-02-14, 1d
        일정 생성 :2024-02-14, 1d
    section 디자인
        리디자인(CSS) :2024-02-14, 1d
    section FE
        AI 연동 HTML 생성 :2024-02-13, 1d
        메인 :2024-02-14, 1d
        JS 분리 :2024-02-14, 1d
        정보 입력 :2024-02-14, 1d
        일정 생성 :2024-02-14, 1d
        라이센스 검토 :2024-02-14, 1d 
        로고, 이미지 추가 :2024-02-14, 1d  
        리디자인 적용 :2024-02-14, 1d
    section BE
        AI 연동 및 보수(JS) : 2024-02-14, 1d 
        Prompt Engineering :2024-02-14, 1d
```

## 5. 역할 분담

- 팀장 : 신찬수
- FE : 신찬수
- BE : 신찬수
- 디자인 : 신찬수

## 6. 와이어프레임 / UI / BM

### 6.1 와이어프레임
<img src="main.jpg" width="100%" alt="UI 화면">

### 6.2 화면 설계
<table>
    <tbody>
        <tr>
            <td>메인</td>
        </tr>
        <tr>
            <td>
		<img src="main.gif" width="100%" alt="작동화면">
            </td>
        </tr>
    </tbody>
</table>

## 7. Architecture

```mermaid
graph TD;
  A[HTML] --> |이벤트 발생| B[JS];
  B[JS] --> |요청 전송| C[서버]
  C[서버] --> |요청 처리 및 정보 전송| B[JS]
  B[JS] --> |정보 전달| A[HTML]
```

## 8. 개발하며 느낀점
- CSS를 다루면서 생각보다 시맨틱 태그를 쓰려고 하는 게 쉽지가 않았다.

- github 환경에서 민감한 데이터 노출과 같은 보안적인 문제를 생각할 수 있었다.

- github 환경에서 vanilla JS가 어떤 한계를 갖는지 확인할 수 있었고 추후 langchain이나 nodeJS로 보완해야겠다는 생각이 들었다.
