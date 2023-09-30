function solution(today, terms, privacies) {
    var answer = [];
    let setTerms = {};

    for(let i=0; i<terms.length; i++){
        let term = terms[i].split(" ");
        setTerms[term[0]] = term[1];
    }
    //약관 종류와 유효기간 정리

    for(let i=0; i< privacies.length; i++){
        let privacy = privacies[i].split(" ");
        let date = privacy[0].split(".");
        let term = setTerms[privacy[1]];

        let year = parseInt(date[0]);
        let month = parseInt(date[1]) + parseInt(term);
        let day = parseInt(date[2]);

        year += Math.floor((month-1) / 12);
        month = (month-1) % 12 + 1;
        if(day <= 1){
            month -= 1;
            if(month < 1){
                month += 12;
                year -= 1;
            }
            day = 28;
        }else{
            day -= 1;
        }

        if(month<10){
            month = "0"+month.toString();
        }else{
            month = month.toString();
        }
        if(day<10){
            day = "0"+day.toString();
        }else{
            day = day.toString();
        }

        let calculatedDate = [year.toString() , month, day];
        let date1 = new Date(today.split(".").join("-"));
        let date2 = new Date(calculatedDate.join("-")); 
        if(date1 > date2){
            answer.push(i+1);
        }
    }
    // 날짜 계산해서 유효기간이 넘은 idx 체크
    return answer;
    }
