## 자바스크립트 함수

1. 답: D

2. 답: C

3. 답: A

4. 답: B

5. 답: C

6. 답: B

7. 답: C

8. 답: A

9. 답: C

10. 답: B

```javascript
function add(a, b) {
  return a+b;
}

// add(2, 3)의 반환값은 5
console.log(add(2, 3))
```

11. 답: C

```javascript
function greet(name){
  return "Hi " + name;
}
// greet()의 반환값은 "Hi Yumi"
console.log(greet("Yumi"));
```

12. 답: A, B

13. 답: B

14. 답: B

15. 답: B

```javascript
let x = 10;

function test(){
  // 동일한 이름의 지역변수 선언 시, 유효범위가 더 좁은 지역변수를 우선 적용
  let x = 5;
  console.log(x);
}

// 5 출력
test();
```

16. 답: A

```javascript
function square(x){
  return x*x; 
}

// argument 없음 -> undefined에 관한 산술연산 -> 산술연산 불가 -> NaN 반환
console.log(square());
```

17. 답: A

18. 답: A

```javascript
const multiply = (a,b=2) => a*b;

// a = 5, b = 2이므로 10을 반환
console.log(multiply(5));
```

19. 답: C

20. 답: A

```javascript
var say = function(){
  return "Hello"; 
}
console.log(say());   // Hello 출력
```

21. 답: B

22. 답: C

```javascript
// run(): 콜백함수를 매개변수로 받아 실행하는 고차함수
function run(fn) {
  fn();
}
// 고차함수 실행 시 콜백함수를 전달하려면 일급객체로서의 함수 자체를 전달
run(function(){
  console.log("done");
});
```

23. 답: C

```javascript
function outer(){
  // 중첩 함수
  function inner(){
    return "inside";
  }
  return inner();
}
// outer() 호출 -> 내부 중첩 함수인 inner() 호출 -> inner()의 반환값을 출력
console.log(outer());
```

24. 답: C

25. 답: A

```javascript
(function(a,b){
  console.log(a+b);
})(3,4);

// 위 함수는 아래 코드와 동일한 방식으로 실행됨
function fn(a, b) {
  console.log(a+b);
}
fn(3, 4)  // 7 반환
```

26. 답: C

```javascript
function makeAdder(x){
  // makeAdder()에서 반환되는 익명함수가 클로저
  return function(y){
    // 클로저는 익명함수 바깥에서 선언된 매개변수 x의 값을 반영 -> 5+y와 동일
    return x+y;
  }
}
// add5는 makeAdder의 반환값인 익명함수 -> (y) => y+5;
const add5 = makeAdder(5);
// 2를 add5의 매개변수 y로 전달 -> 2+5 = 7
console.log(add5(2)); 
```

27. 답: C

28. 답: C

```javascript
function counter(){
  // 함수 counter()의 지역변수 num은 절대 외부에 노출되지 않음 -> 정보은닉
  // 클로저의 입장에서, 상위 스코프의 지역변수는 일종의 전역변수처럼 사용됨
  let num = 0;

  // 클로저에 해당: 외부에서 선언된 num의 값을 기억하고 사용
  return function(){
    num++;
    return num;
  }
}
// 변수 c는 counter()의 반환값인 익명함수에 해당
const c = counter();
// num의 값은 0에서 1로 증가 -> 1 출력
console.log(c());
// num의 값은 1에서 2로 증가 -> 2 출력
console.log(c());
```

29. 답: D

30. 답: B

31. 답: A

```javascript
function sayHi(){
  // 일반함수로 호출된 함수의 인자로 사용된 this = 전역 객체
  console.log(this);
}
sayHi(); 
```

32. 답: D

33. 답: A

34. 답: A

35. 답: A

```javascript
// Java의 스트림에서의 map()과 용법이 유사
[1,2,3].map(x => x*2);
```

36. 답: B

```javascript
// Java의 스트림과 filter()와 용법이 유사
[1,2,3,4].filter(n => n%2===0);
```

37. 답: A

```javascript
// Java 스트림의 리듀스 연산과 동일
[1,2,3].reduce((acc,cur)=>acc+cur,0);
```

38. 답: B

```javascript
const f = () => ({name:"Yumi"});

// 객체 {name:"Yumi"} 자체를 출력
console.log(f());
```

39. 답: A

40. 답: B