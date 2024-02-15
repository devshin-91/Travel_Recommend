// input 태그에서 입력값 받아오기
const $input1 = document.querySelector('input[name="location"]')
const $input2 = document.querySelector('input[name="days"]')
const $input3 = document.querySelector('input[name="must"]')
const $input4 = document.querySelector('input[type="radio"]:checked')

// button 작동 후 
const $button = document.querySelector('button')
const $answer = document.querySelector('.answer')

// 초기화 : system 역할 정의
const data = []
data.push({
    "role": "system",
    "content": "assistant는 제주도 여행일정 가이드입니다."
})

// gpt api url 
const url = "<본인의 open-api url>"

// 이벤트 발생 -> 질의응답 수행
$button.addEventListener('click', e => {
    e.preventDefault()
    const contents1 = $input1.value
    const contents2 = $input2.value
    const contents3 = $input3.value
    const contents4 = $input4
    // 질의
    data.push({
        "role": "user",
        "content": `제주도 여행일정을 만들어줘. 조건은 다음과 같아.\
                    1. 여행장소는 ${contents1}야.\ 
                    2. 여행일수는 ${contents2}야.\
                    3. 여행일정에 꼭 포함해야하는 장소는 ${contents3}야.\
                    4. 여행일정에서 이동수단은 차를 렌트했는 지 여부로 결정해.\
                    차 렌트 여부는 ${contents4}야.\
                    이와 같은 조건으로 여행일차 별로 문단을 나누어 여행 일정을 생성해줘.`
    })
    // 변수 초기화
    $input1.value = ''
    $input2.value = ''
    $input3.value = ''

    // 응답
    chatGPTAPI()
})

// chatGPTAPI 동작 정의
function chatGPTAPI() {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        redirect: 'follow'
    })
    .then(res => res.json())
    .then(res => {
        console.log(res)
        // 답변 온 것을 assistant로 저장
        $answer.innerHTML = `<p>${res.choices[0].message.content}</p>`
    })
}