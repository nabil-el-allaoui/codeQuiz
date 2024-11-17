let data = '';
let i = 0;
let progress_full = 100;
let progress = 0;
let score = 0;
var timer;
var correct_answers = 0;
let qsindex = 1;
let indextoplay = '';
var sec;
var totalsec = 0;

if(localStorage.getItem("id") !== null){
    indextoplay = localStorage.getItem("id");
}

async function good() {
    let qcm = document.querySelector(".qcm");
    let true_false = document.querySelector(".true-false");
    let text_response = document.querySelector(".text-response");
    let quiz_question = document.querySelector(".quiz-question");
    let question = quiz_question.querySelector("h3");
    const response = await fetch(`http://localhost:3000/quizes/${indextoplay}`);
    data = await response.json();
    type = data.questions[i].quiz_type;//

    let first_option = document.querySelector("#first");
    let second_option = document.querySelector("#second");
    let third_option = document.querySelector("#third");
    let fourth_option = document.querySelector("#fourth");

    let option_true = document.querySelector("#true");
    let option_false = document.querySelector("#false");

    let qcm_options = document.querySelectorAll(".option");
    let options = document.querySelectorAll(".boolean");

    let score_html = document.querySelector("#score-html");
    let score_number = Number(score_html.textContent);

    let result_interface = document.querySelector(".results");

    let choice = document.querySelectorAll(".choice");

    let qcm_choice = document.querySelectorAll(".qcm_choice");


    let response_input = document.getElementById("response");
    let bar = document.querySelector(".actual-bar");

    let NumberOfquestions_html = document.getElementById("n-questions");

    let explanation = document.querySelector(".explanation");
    let main = document.querySelector(".quiz-section");

    let amount = document.querySelector(".point-amount");

    let correctAnsewrs = document.getElementById("questions-answered");
    let rate = document.getElementById("success-rate");
    let result_score = document.getElementById("text-score");
    let resutl_time = document.getElementById("Total-time");

    NumberOfquestions_html.innerHTML = `${qsindex}/${data.number_questions}`;//



    progress = (qsindex / data.number_questions) * progress_full;//

    function result() {
        if (qsindex === data.questions.length) {//
            setTimeout(() => {
                if (localStorage.getItem("score") !== null) {
                    if (score > localStorage.getItem("score")) {
                        localStorage.setItem("score", score);
                        result_score.innerHTML = `New Record: ${localStorage.getItem("score")}`;
                    }
                    else {
                        result_score.innerHTML = `Record:${score}`;
                    }
                }
                main.style.opacity = "0";
                explanation.style.display = "none";
                quiz_question.style.display = "none";
                result_interface.style.display = "flex";
                result_interface.style.opacity = "1";
                correctAnsewrs.innerHTML = `Questions Answered: ${correct_answers} Correct`;
                rate.innerHTML = `Success rate : ${((correct_answers / data.number_questions) * 100).toFixed(2)}%`;//
                resutl_time.innerHTML = `Total time : ${totalsec}sec`;

            }, 2000);
        }
    }

    function timer() {
        sec = 30;
        timer = setInterval(function () {
            document.getElementById('timer').innerHTML = '00:' + sec;
            sec--;
            if (sec < 0) {
                clearInterval(timer);
            }
            if (sec === 0) {
                explain()
                setTimeout(() => {
                    bar.style.width = `${progress}%`;
                    result()
                    clearInterval(timer);
                    i++;
                    qsindex++;
                    good()
                }, 2000);
            }
        }, 1000);
    }
    function explain() {
        setTimeout(() => {
            explanation.style.display = "flex";
            explanation.innerHTML = data.questions[i].explanation;//
        }, 100);
    }

    if (type === "qcm") {
        explanation.style.display = "none";
        timer()
        qcm.style.display = "grid";
        quiz_question.querySelector(".qcm-icon").style.display = "block";
        amount.innerHTML = `${data.questions[i].question_points}P`;//

        true_false.style.display = "none";
        quiz_question.querySelector(".false-true-icon").style.display = "none";

        text_response.style.display = "none"
        quiz_question.querySelector(".answer-icon").style.display = "none";

        question.innerHTML = data.questions[i].question_text;//
        first_option.innerHTML = data.questions[i].a;//
        second_option.innerHTML = data.questions[i].b;//
        third_option.innerHTML = data.questions[i].c;//
        fourth_option.innerHTML = data.questions[i].d;//
        qcm_choice.forEach(e => {
            e.style.background = "#F55555";
        });

        qcm_choice.forEach(e => {
            let qcm_text = e.innerText;
            e.onclick = second;
            function second() {
                if (qcm_text.includes(data.questions[i].correct)) {//
                    qcm_choice.forEach(l => {
                        let qcm_text = l.innerText;
                        if (qcm_text.includes(data.questions[i].correct)) {//
                            l.style.background = "green";
                            score += Number(data.questions[i].question_points);//
                            score_html.innerHTML = score;
                            correct_answers++;
                            
                        }
                        else {
                            l.style.background = "red";
                        }
                    })
                }
                else {
                    e.style.background = "red";
                    explain();
                    qcm_choice.forEach(l => {
                        let qcm_text = l.innerText;
                        if (qcm_text.includes(data.questions[i].correct)) {//
                            l.style.background = "green";
                        }
                        else {
                            l.style.background = "red";
                        }
                    })
                }
                bar.style.width = `${progress}%`;
                bar.style.transition = "all .25s ease"
                result()
                totalsec += 30 - sec;
                
                setTimeout(() => {
                    clearInterval(timer);
                    i++;
                    qsindex++;
                    true_false.style.display = "none";
                    quiz_question.querySelector(".false-true-icon").style.display = "none";
                    good()
                }, 2000);
            }
        })
    }
    if (type === "yes-no") {
        explanation.style.display = "none";
        timer()
        true_false.style.display = "grid";
        quiz_question.querySelector(".false-true-icon").style.display = "block";
        amount.innerHTML = `${data.questions[i].question_points}P`;

        qcm.style.display = "none";
        quiz_question.querySelector(".qcm-icon").style.display = "none";

        text_response.style.display = "none"
        quiz_question.querySelector(".answer-icon").style.display = "none";

        question.innerHTML = data.questions[i].question_text;
        option_true.innerHTML = data.questions[i].a;
        option_false.innerHTML = data.questions[i].b;
        choice.forEach(k => {
            k.style.background = "#F55555";
        })

        choice.forEach(e => {
            let html_text = e.innerText;
            e.onclick = ano;
            function ano() {
                if (html_text.includes(data.questions[i].correct)) {
                    choice.forEach(l => {
                        let html_text = l.innerText;
                        if (html_text.includes(data.questions[i].correct)) {
                            l.style.background = "green";
                            score += Number(data.questions[i].question_points);
                            score_html.innerHTML = score;
                            // score += data[0].questions[i].question_points;
                            score_html.innerHTML = score;
                            correct_answers++;
                        }
                        else {
                            l.style.background = "red";
                        }
                    })
                }
                else {
                    explain();
                    e.style.background = "red";
                    choice.forEach(l => {
                        let html_text = l.innerText;
                        if (html_text.includes(data.questions[i].correct)) {
                            l.style.background = "green";
                        }
                        else {
                            l.style.background = "red";
                        }
                    })
                }
                totalsec += 30 - sec;
                result()
                bar.style.width = `${progress}%`;
                bar.style.transition = "all .25s ease"
                setTimeout(() => {
                    clearInterval(timer);
                    i++;
                    qsindex++;
                    true_false.style.display = "none";
                    quiz_question.querySelector(".false-true-icon").style.display = "none";
                    good()
                }, 2000);
            }
        })
        // options.forEach(e => {
        //     e.addEventListener("click", ano)
        //     function ano() {
        //         options.forEach(j => {
        //             let html_text = j.innerText;
        //             if (html_text === data[i].correct) {
        //                 j.style.backgroundColor = "red";
        //                 e.style.backgroundColor = "green";
        //                 score += data[i].question_points;
        //                 score_html.innerHTML = score;
        //             }
        //             if(html_text !== data[i].correct) {
        //                 j.style.backgroundColor = "green";
        //                 e.style.backgroundColor = "red";
        //                 explain();
        //             }
        //             j.removeEventListener("click", ano);
        //         })
        //         result()
        //         bar.style.width = `${progress}%`;
        //         bar.style.transition = "all .25s ease"
        //         setTimeout(() => {
        //             clearInterval(timer);
        //             i++;
        //             true_false.style.display = "none";
        //             quiz_question.querySelector(".false-true-icon").style.display = "none";
        //             good()
        //         }, 2000);
        //     }
        // })
    }
    if (type === "input") {
        explanation.style.display = "none";
        timer()
        response_input.value = "";
        response_input.style.background = "black";
        text_response.style.display = "grid";
        quiz_question.querySelector(".answer-icon").style.display = "block";
        amount.innerHTML = `${data.questions[i].question_points}P`;

        true_false.style.display = "none";
        quiz_question.querySelector(".false-true-icon").style.display = "none";

        qcm.style.display = "none";
        quiz_question.querySelector(".qcm-icon").style.display = "none";


        question.innerHTML = data.questions[i].question_text;
        let data_upper = data.questions[i].correct.toUpperCase();
        let submit = document.querySelector(".submit-answer");
        submit.onclick = hero;
        function hero() {
            if (response_input.value.toUpperCase().indexOf(data_upper) >= 0) {
                response_input.style.backgroundColor = "green";
                score += Number(data.questions[i].question_points);
                score_html.innerHTML = score;
                correct_answers++;
            }
            else {
                response_input.style.backgroundColor = "red";
                explain();
            }
            totalsec += 30 - sec;
            result()
            bar.style.width = `${progress}%`;
            bar.style.transition = "all .25s ease"
            setTimeout(() => {
                clearInterval(timer);
                i++;
                qsindex++;
                text_response.style.display = "none"
                quiz_question.querySelector(".answer-icon").style.display = "none";
                good()
            }, 2000);
        }
    }
}

if (localStorage.getItem("score") === null) {
    localStorage.setItem("score", 0);
}

