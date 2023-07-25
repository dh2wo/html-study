window.onload = function() {
    let btn = document.getElementById("btn");
    btn.onclick = function() {
        //이름
        let name = document.getElementById("name");
        if (name.value == '') {
            alert("이름을 입력하세요.");
            name.focus();
            return;
        }
        
        //전화번호
        let select_phone= document.getElementById("select_phone");
        select_phone = select_phone.options[select_phone.selectedIndex].value;
        
        let phone = document.getElementById("phone");
        if (isNaN(phone.value) || phone.value.length != 8 ) {
            alert("-를 제외한 정확한 길이의 숫자만 입력해 주세요.");
            phone.value = null;
            phone.focus();
            return;
        }
        phone = select_phone + phone.value;
        
        //이메일
        let email = document.getElementById("email");
        if(!email.value.includes('@')) {
            alert("정확한 이메일 타입으로 입력해 주세요.");
            email.value = null;
            email.focus();
            return;
        }
        //직업군
        let job = document.getElementById("job");

        //라디오 버튼 값 가져오기
        let service = document.getElementsByName("service");
        for(let s of service){
            if(s.checked) {
                service = s.value;
            }
        }

        //체크박스 값 가져오기
        let enhances = [];
        let enhance = document.getElementsByName("enhance");
        for(let e of enhance){
            if(e.checked) {
                enhances.push(e.value);
            }
        }
        if(enhances.length === 0) {
            alert("체크박스 1개 이상 선택해주세요.");
            return;
        }
        enhance = enhances.toString().replaceAll(',', '/');
        
        //textarea값
        let etc = document.getElementById("etc");
        
        //결과 출력
        let result = document.getElementById("result");
        let statement = `<h2>설문 결과</h2>
                        <ul>
                        <li>이름 : ${name.value} </li>
                        <li>전화번호 : ${phone} </li>
                        <li>Email : ${email.value} </li>
                        <li>직업 : ${job.value} </li>
                        <li>가장 많이 사용하는 구글 서비스 : ${service} </li>
                        <li>기능강화가 필요한 도구 : ${enhance} </li>
                        <li>남기실 말씀 : ${etc.value} </li>
                        </ul>`;
        
        result.style.display = 'block';              
        result.innerHTML = statement;
    }
}