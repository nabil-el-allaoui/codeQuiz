let data = '';
let i = 1;
let progress_full = 100;
let progress = 0;
let score = 0;
var timer;
var correct_answers = 0;
async function good() {
    let qcm = document.querySelector(".qcm");
    let true_false = document.querySelector(".true-false");
    let text_response = document.querySelector(".text-response");
    let quiz_question = document.querySelector(".quiz-question");
    let question = quiz_question.querySelector("h3");
    const response = await fetch('./data.json');
    data = await response.json();
    type = data[i].quiz_type;
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

    NumberOfquestions_html.innerHTML = `${i}/${data[0].number_questions}`;




    progress = (i / data[0].number_questions) * progress_full;

    function result() {
        if (i === data.length - 1) {
            localStorage.setItem("score", score);
            setTimeout(() => {
                main.style.opacity = "0";
                explanation.style.display = "none";
                quiz_question.style.display = "none";
                result_interface.style.display = "flex";
                result_interface.style.opacity = "1";
                correctAnsewrs.innerHTML = `Questions Answered: ${correct_answers} Correct`;
                rate.innerHTML = `Success rate : ${((correct_answers/data[0].number_questions) * 100).toFixed(2)}%`;
                
            }, 5000);
        }
    }

    function timer() {
        var sec = 30;
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
                    good()
                }, 5000);
            }
        }, 1000);
    }
    function explain() {
        setTimeout(() => {
            explanation.style.display = "flex";
            explanation.innerHTML = data[i].explanation;
        }, 1000);
    }

    if (type === "qcm") {
        explanation.style.display = "none";
        timer()
        qcm.style.display = "grid";
        quiz_question.querySelector(".qcm-icon").style.display = "block";
        amount.innerHTML = `${data[i].question_points}P`;

        true_false.style.display = "none";
        quiz_question.querySelector(".false-true-icon").style.display = "none";

        text_response.style.display = "none"
        quiz_question.querySelector(".answer-icon").style.display = "none";

        question.innerHTML = data[i].question_text;
        first_option.innerHTML = data[i].a;
        second_option.innerHTML = data[i].b;
        third_option.innerHTML = data[i].c;
        fourth_option.innerHTML = data[i].d;
        qcm_choice.forEach(e => {
            e.style.background = "#F55555";
        });

        qcm_choice.forEach(e => {
            let qcm_text = e.innerText;
            e.onclick = second;
            function second() {
                if (qcm_text.includes(data[i].correct)) {
                    qcm_choice.forEach(l => {
                        let qcm_text = l.innerText;
                        if (qcm_text.includes(data[i].correct)) {
                            l.style.background = "green";
                            score += data[i].question_points;
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
                        if (qcm_text.includes(data[i].correct)) {
                            l.style.background = "green";
                        }
                        else {
                            l.style.background = "red";
                        }
                    })
                }
                result()
                bar.style.width = `${progress}%`;
                bar.style.transition = "all .25s ease"
                setTimeout(() => {
                    clearInterval(timer);
                    i++;
                    true_false.style.display = "none";
                    quiz_question.querySelector(".false-true-icon").style.display = "none";
                    good()
                }, 5000);
            }
        })
        // qcm_options.forEach(e => {
        //     let qcm_answer = e.innerText;
        //     e.addEventListener("click", tst)
        //     function tst() {
        //         if (qcm_answer !== data[i].correct) {
        //             explain();
        //         }
        //         qcm_options.forEach(m => {
        //             let qcm_answer = m.innerText;
        //             if (qcm_answer === data[i].correct) {
        //                 m.style.backgroundColor = "green";
        //                 score += data[i].question_points;
        //                 score_html.innerHTML = score;
        //                 correct_answers++;
        //             } else {
        //                 m.style.backgroundColor = "red";
        //             }
        //             m.removeEventListener("click", tst);
        //         })
        //         result()
        //         bar.style.width = `${progress}%`;
        //         bar.style.transition = "all .25s ease";
        //         setTimeout(() => {
        //             clearInterval(timer);
        //             i++;
        //             qcm.style.display = "none";
        //             quiz_question.querySelector(".qcm-icon").style.display = "none";
        //             good()
        //         }, 5000);
        //     }
        // })
    }
    if (type === "yes-no") {
        explanation.style.display = "none";
        timer()
        true_false.style.display = "grid";
        quiz_question.querySelector(".false-true-icon").style.display = "block";
        amount.innerHTML = data[i].question_points;

        qcm.style.display = "none";
        quiz_question.querySelector(".qcm-icon").style.display = "none";

        text_response.style.display = "none"
        quiz_question.querySelector(".answer-icon").style.display = "none";

        question.innerHTML = data[i].question_text;
        option_true.innerHTML = data[i].a;
        option_false.innerHTML = data[i].b;
        choice.forEach(k => {
            k.style.background = "#F55555";
        })

        choice.forEach(e => {
            let html_text = e.innerText;
            e.onclick = ano;
            function ano() {
                if (html_text.includes(data[i].correct)) {
                    choice.forEach(l => {
                        let html_text = l.innerText;
                        if (html_text.includes(data[i].correct)) {
                            l.style.background = "green";
                            score += data[i].question_points;
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
                    choice.forEach(l => {
                        let html_text = l.innerText;
                        if (html_text.includes(data[i].correct)) {
                            l.style.background = "green";
                        }
                        else {
                            l.style.background = "red";
                        }
                    })
                }
                result()
                bar.style.width = `${progress}%`;
                bar.style.transition = "all .25s ease"
                setTimeout(() => {
                    clearInterval(timer);
                    i++;
                    true_false.style.display = "none";
                    quiz_question.querySelector(".false-true-icon").style.display = "none";
                    good()
                }, 5000);
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
        //         }, 5000);
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
        amount.innerHTML = data[i].question_points;

        true_false.style.display = "none";
        quiz_question.querySelector(".false-true-icon").style.display = "none";

        qcm.style.display = "none";
        quiz_question.querySelector(".qcm-icon").style.display = "none";


        question.innerHTML = data[i].question_text;
        let data_upper = data[i].correct.toUpperCase();
        let submit = document.querySelector(".submit-answer");
        submit.onclick = hero;
        function hero() {
            if (response_input.value.toUpperCase().indexOf(data_upper) >= 0) {
                response_input.style.backgroundColor = "green";
                score += data[i].question_points;
                score_html.innerHTML = score;
                correct_answers++;
            }
            else {
                response_input.style.backgroundColor = "red";
                explain();
            }
            result()
            bar.style.width = `${progress}%`;
            bar.style.transition = "all .25s ease"
            setTimeout(() => {
                clearInterval(timer);
                i++;
                text_response.style.display = "none"
                quiz_question.querySelector(".answer-icon").style.display = "none";
                good()
            }, 5000);
        }
    }


}
good()
