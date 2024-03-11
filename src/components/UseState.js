import React from 'react';
import {useState} from 'react'; 

function UseState(props) {

    //useState() : 생태(데이터) 가 변경되면 자동으로 랜더링됨, 
        // 상태값은 pros를 사용해서 부모 컴포넌트 ==> 자식 컴포넌트 로 랜더링됨 
        // 여러 이벤트에 대한 함수를 매번 생성해야 한다.  <== 코드가 지저분 해 질 수 있다. 

    //useState 선언 
    const [count, setCount] = useState(0); 

    // 각 각의 이벤트에 대해서 함수 호출후 기존의 count 에 값을 수정후 setCount 에 값을 넣어줌
    const add1 = () => {
        setCount (count + 1) ; 
    }
    const add10 = () => {
        setCount (count + 10) ; 
    }
    const add100 = () => {
        setCount (count + 100) ; 
    }
    const add1000 = () => {
        setCount (count + 1000) ; 
    }

    return (
        <div>
            <div><h1> {count} </h1></div>
            <button onClick = {add1}> 더하기 1 </button>
            <button onClick = {add10}> 더하기 10 </button>
            <button onClick = {add100}> 더하기 100 </button>
            <button onClick = {add1000}> 더하기 1000 </button>
        </div>
    );
}

export default UseState;