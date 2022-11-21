## To do list 페이지네이션 구현

- json-server를 활용해서 페이지네이션 구현

### 페이지네이션 이론

페이지네이션을 구현하기 위한 설정값

- currentPage: 현재 페이지
- totalCount: 총 데이터의 갯수
- pageCount: 화면에 나타날 페이지 갯수
- limit: 한 페이지 당 나타낼 데이터의 갯수

![](https://user-images.githubusercontent.com/16531837/145595161-ceb09871-bfe2-4a33-9e65-b53b0bd9d89f.png)

따라서...

- currentPage: 1
- totalCount: 53 (totalCount는 임의 설정)
- pageCount: 5
- limit: 5

#### 총 페이지 갯수 계산하기

```js
let totalPage = Math.ceil(totalCount / limit)
```

예를 들어보면,

```js
const totalCount = 53
const limit = 5

let totalPage = Math.ceil(totalCount / limit) // 11
```

#### 현재 페이지의 그룹 계산하기

![](https://user-images.githubusercontent.com/16531837/145596540-7c1ff5e6-60f8-40fc-884b-c10f4f4716a2.png)

현재 페이지가 몇번째 그룹에 속해있는지를 알아야
현제 페이지 그룹 상의 첫번째 숫자와 마지막 숫자를 구할 수 있다.

```js
const currentPage = 1
const pageCount = 5

let pageGroup = Math.ceil(currentPage / pageCount) // 1
```

```js
const currentPage = 7
const pageCount = 5

let pageGroup = Math.ceil(currentPage / pageCount) // 2
```

#### 현재 페이지 그룹의 첫번째/마지막 숫자 구하기

이걸 알아야 현재 페이지 그룹의 첫번째~마지막 숫자만큼 페이지를 화면에 표시해줄 수 있다.
그리고 페이지네이션의 이전, 다음을 구현할 수 있다
이전을 누르면 이전 그룹으로 넘겨주고 다음을 누르면 다음 그룹으로 넘겨준다.

```js
const pageGroup = 1
const pageCount = 5
const totalPage = 11

let lastNumber = pageGroup * pageCount // 5
if (lastNumber > totalPage) {
  lastNumber = totalPage
}
let firstNumber = lastNumber - (pageCount - 1) // 1

const next = lastNumber + 1 // 6
const prev = firstNumber - 1 // 0

// 1~5만큼 페이지네이션 그려줌
for (let i = firstNumber; i <= lastNumber; i++) {
  html += `<button class="pageNumber" id="page_${i}">${i}</button>`
}
```

```js
const pageGroup = 2
const pageCount = 5
const totalPage = 11

let lastNumber = pageGroup * pageCount // 10
if (lastNumber > totalPage) {
  lastNumber = totalPage
}
let firstNumber = lastNumber - (pageCount - 1) // 6

const next = lastNumber + 1 // 11
const prev = firstNumber - 1 // 5
```

```js
const pageGroup = 3
const pageCount = 5
const totalPage = 11

let lastNumber = pageGroup * pageCount // 15
if (lastNumber > totalPage) {
  lastNumber = totalPage // 11
}
let firstNumber = lastNumber - (pageCount - 1) // 7

const next = lastNumber + 1 // 12
const prev = firstNumber - 1 // 6
```

### json-server

https://github.com/typicode/json-server
