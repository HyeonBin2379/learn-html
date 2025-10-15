## 변수

1. 답: C
2. 결과: undefined 출력
3. 선언되지 않은 변수 y가 사용되었으므로, 주어진 코드의 첫번째 줄에서 에러 발생
4. 답:

```jsx
obj.n = 2;
```

5. 답: C
6. 결과:

```jsx
3
```

---

## 문자열

7. 답: B
8. 답: 3
9. 결과:

```jsx
hello
```

10. 결과:

```jsx
hi
```

11. 결과:

```jsx
['a', 'b', 'c']
```

12. 결과: true
13. 결과

```jsx
bat
```

---

## 조건문

14. 출력결과

```jsx
true false
```

15. 출력결과

```jsx
odd
```

16. 답: B
17. 출력결과

```jsx
DONE
```

---

## Object

18. 출력결과

```jsx
Ann
```

19. 출력결과

```jsx
100
```

20. 출력결과

```jsx
false
```

---

## Array

21. 출력 결과

```jsx
[1, 2, 3, 4]
```

22. 답: 배열 arr에서 꺼낸 마지막 요소를 반환
23. 
- 의미: 지정한 시작 인덱스부터 마지막 인덱스 직전까지의 요소들로 이루어진 부분 배열을 반환
- 실행 결과:

```jsx
[2, 3]
```

24. 

의미: 시작 인덱스가 1번일 때, 시작인덱스를 포함한 2개의 요소를 배열 arr에서 삭제
실행 결과:

```jsx
[1]
```

25. 실행 결과:

```jsx
[2, 4, 6]
```

26. 실행 결과:

```jsx
[2, 4]
```

27. 실행 결과:

```jsx
true
```

28. 실행 결과

```jsx
6
```

---

## Loop

29. 실행 결과

```
0
1
2
```

30. 답: 저장된 요소들에 관한 반복이 가능한 컬렉션에 적합
31. 답: 인덱스 또는 key값을 통한 순회가 가능한 배열 및 객체에 적합
32. 답: 6
33. 실행 결과

```
H
i
```

34. 답: of(인덱스가 아닌 각각의 요소들의 값을 출력해야 하기 때문)
35. 답:

```jsx
for (const color of colors) {
   console.log(color);
}

```

36. 답

```jsx
for (const ch of str) {
  console.log(ch);
}
```

37. 답

```jsx
let sum = scores.reduce((acc, cur) => acc+cur, 0);
let avg = sum / scores.length;
console.log(sum);
console.log(avg);
```

38.

```jsx
nums.slice(0, 2).forEach((value) => console.log(value));
```

39.

```jsx
for (const key in user) {
    console.log(key + ":" + user[key]);
}

```

40.

```jsx
arr.forEach((value) => console.log(value));
```

41.

답: key와 값의 쌍으로 구성된 엔트리들의 집합

42. 

답: 중복되지 않는 데이터들을 저장하는 컬렉션

43.

답: 속성이 없는 객체 k가 키, 값이 123인 엔트리를 주어진 Map에 추가 -> 객체 k에 대응되는 값 123을 출력

```jsx
123
```

44.

```jsx
3
```

45. 답: size