async function make() {
    const response = await fetch("http://localhost:3000/quizes/");
    const data = await response.json();

    data.forEach((e, INDEX) => {
        let template =
            `<div class="quiz">
        <div>
            <h3 id="quiz-title">${e.quiz_title}</h3>
            <h4 id="quiz-number-of-questions">number of questions: ${e.number_questions}</h4>
            <p id="quiz-description-added">Description: ${e.description}</p>
            <p id="time-estimated">Estimated time : ${e.estimated_time}</p>
            <p id="Difficulty">Difficulty: ${e.difficulty}</p>
        </div>
        <a href="quiz.html">
            <div class="quiz-button">
                <button class="start-button">
                    <?xml version="1.0" ?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                    <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.1318 11.3125L12.7388 10.7333L12.7388 10.7333L13.1318 11.3125ZM4.98688 10.3431L4.31382 10.5354L4.31382 10.5354L4.98688 10.3431ZM4.44847 8.45868L3.77541 8.65098L3.77541 8.65098L4.44847 8.45868ZM2.33917 9.0235L3.01827 8.85373L3.01827 8.85372L2.33917 9.0235ZM3.89881 15.262L4.57791 15.0923L4.57791 15.0923L3.89881 15.262ZM13.7445 21C13.7445 21.3866 14.0579 21.7 14.4445 21.7C14.8311 21.7 15.1445 21.3866 15.1445 21H13.7445ZM15.1445 18.3333C15.1445 17.9467 14.8311 17.6333 14.4445 17.6333C14.0579 17.6333 13.7445 17.9467 13.7445 18.3333H15.1445ZM18.5 10V9.3C18.3618 9.3 18.2267 9.34091 18.1117 9.41756L18.5 10ZM15.5 10H16.2C16.2 9.6134 15.8866 9.3 15.5 9.3V10ZM15.5 12H14.8C14.8 12.2582 14.9421 12.4954 15.1697 12.6172C15.3973 12.739 15.6735 12.7256 15.8883 12.5824L15.5 12ZM10.889 11.3C9.06642 11.3 7.58896 9.82255 7.58896 8.00001H6.18896C6.18896 10.5958 8.29322 12.7 10.889 12.7V11.3ZM7.58896 8.00001C7.58896 6.17746 9.06642 4.7 10.889 4.7V3.3C8.29322 3.3 6.18896 5.40427 6.18896 8.00001H7.58896ZM10.889 4.7C12.7115 4.7 14.189 6.17746 14.189 8.00001H15.589C15.589 5.40427 13.4847 3.3 10.889 3.3V4.7ZM14.189 8.00001C14.189 9.13616 13.6154 10.1386 12.7388 10.7333L13.5248 11.8918C14.769 11.0477 15.589 9.61973 15.589 8.00001H14.189ZM12.7388 10.7333C12.2115 11.091 11.5757 11.3 10.889 11.3V12.7C11.8647 12.7 12.7728 12.4019 13.5248 11.8918L12.7388 10.7333ZM18.2555 21V18.7778H16.8555V21H18.2555ZM12.6666 13.1889H9.68766V14.5889H12.6666V13.1889ZM5.65995 10.1508L5.12154 8.26637L3.77541 8.65098L4.31382 10.5354L5.65995 10.1508ZM1.66007 9.19328L3.21971 15.4318L4.57791 15.0923L3.01827 8.85373L1.66007 9.19328ZM3.21971 15.4318C3.48767 16.5037 4.45071 17.2556 5.55553 17.2556V15.8556C5.09312 15.8556 4.69006 15.5409 4.57791 15.0923L3.21971 15.4318ZM3.39853 6.9667C2.23273 6.9667 1.37732 8.06229 1.66007 9.19328L3.01827 8.85372C2.95643 8.60634 3.14353 8.3667 3.39853 8.3667V6.9667ZM5.12154 8.26637C4.90174 7.49708 4.1986 6.9667 3.39853 6.9667V8.3667C3.57353 8.3667 3.72733 8.48271 3.77541 8.65098L5.12154 8.26637ZM9.68766 13.1889C7.81741 13.1889 6.17375 11.9491 5.65995 10.1508L4.31382 10.5354C4.99934 12.9347 7.19234 14.5889 9.68766 14.5889V13.1889ZM18.2555 18.7778C18.2555 15.6911 15.7533 13.1889 12.6666 13.1889V14.5889C14.9801 14.5889 16.8555 16.4643 16.8555 18.7778H18.2555ZM15.1445 21V18.3333H13.7445V21H15.1445ZM14.5 3.7H19.5V2.3H14.5V3.7ZM20.8 5V8H22.2V5H20.8ZM19.5 9.3H18.5V10.7H19.5V9.3ZM15.5 9.3H14V10.7H15.5V9.3ZM18.1117 9.41756L15.1117 11.4176L15.8883 12.5824L18.8883 10.5824L18.1117 9.41756ZM16.2 12V10H14.8V12H16.2ZM20.8 8C20.8 8.71797 20.218 9.3 19.5 9.3V10.7C20.9912 10.7 22.2 9.49117 22.2 8H20.8ZM19.5 3.7C20.218 3.7 20.8 4.28203 20.8 5H22.2C22.2 3.50883 20.9912 2.3 19.5 2.3V3.7ZM14.5 2.3C13.3671 2.3 12.3988 2.99751 11.9979 3.98386L13.2949 4.51098C13.4887 4.03415 13.9562 3.7 14.5 3.7V2.3Z"
                            fill="#000000" />
                        <circle cx="16.5" cy="6.5" fill="#000000" r="0.5" />
                        <circle cx="18.5" cy="6.5" fill="#000000" r="0.5" />
                    </svg>
                    Start Quiz
                </button>
            </div>
        </a>
        </div>`
        quizlist.innerHTML += template;
        let quizesAdded = document.querySelectorAll(".quiz");
        quizesAdded.forEach((j,t) => {
            if (data[t].status === "inactif") {
                j.style.background = "gray";
            } else {
                j.style.background = "transparent";
            }
        })

        let quizesbutton = document.querySelectorAll(".quiz-button");
        quizesbutton.forEach((k, index) => {
            k.addEventListener("click", () => {
                localStorage.setItem("id", data[index].id);
            })
        })

        let quizesThere = document.querySelectorAll(".quiz");
        quizesThere.forEach((e, index) => {
            e.addEventListener("click", () => {
                if (data[index].status === "actif") {
                    data[index].status = "inactif"
                    e.style.background = "gray"
                    fetch(`http://localhost:3000/quizes/${data[index].id}`, {
                        method: "PATCH",
                        headers: {
                            'Content-Type': "application/json"
                        },
                        body: JSON.stringify({
                            "status": data[index].status
                        })
                    })
                } else {
                    data[index].status = "actif"
                    e.style.background = "transparent"
                    fetch(`http://localhost:3000/quizes/${data[index].id}`, {
                        method: "PATCH",
                        headers: {
                            'Content-Type': "application/json"
                        },
                        body: JSON.stringify({
                            "status": data[index].status
                        })
                    })
                }
            })
        })
    })

}
make()

let qcm_append = document.querySelector(".qcm-container");
let true_append = document.querySelector(".True-false-admin");
let response_append = document.querySelector(".text-response-admin");

let actualquiztitle = document.getElementById("quiz-title");
let actualnumberqs = document.getElementById("quiz-number-of-questions");
let actualdifficulty = document.getElementById("Difficulty");
let actualestimated = document.getElementById("time-estimated");

let add_qcm_button = document.querySelector(".addqcm")
let add_true_button = document.querySelector(".addtrue")
let add_response = document.querySelector(".addinput")

let titleInput = document.getElementById("quiz-admin-title");
let descriptionInput = document.getElementById("quiz-admin-description");
let themeInput = document.getElementById("quiz-admin-theme");
let Number_questions = document.getElementById("quiz-admin-number");
let quizTime = document.getElementById("quiz-admin-time");

let submitButton = document.querySelector(".Add");
let easyCheck = document.getElementById("easy");
let normalCheck = document.getElementById("normal");
let hardCheck = document.getElementById("hard");
let questionCounter = 0

let quizlist = document.querySelector(".list_quizes");


let Isdifficult = ''

easyCheck.onclick = () => {
    Isdifficult = "easy"
}
normalCheck.onclick = () => {
    Isdifficult = "normal"
}
hardCheck.onclick = () => {
    Isdifficult = "hard"
}



let quiz = []
let qcmQuestionFormat = {}
let trueFalseFormat = {}
let inputResponseFormat = {}
let Tquestions = []

add_qcm_button.onclick = arm;
function arm() {
    if (!document.getElementById("Is_qcm_exist")) {
        const question = document.createElement("input");
        question.placeholder = "Qcm question";
        question.id = "Is_qcm_exist";
        const choice1 = document.createElement("input");
        choice1.placeholder = "First option";
        const choice2 = document.createElement("input");
        choice2.placeholder = "Second option";
        const choice3 = document.createElement("input");
        choice3.placeholder = "Third option";
        const choice4 = document.createElement("input");
        choice4.placeholder = "Fourth option";
        const Answer = document.createElement("input");
        Answer.placeholder = "Quiz answer";
        const points = document.createElement("input");
        points.placeholder = "Points per question"
        const explanation = document.createElement("input")
        explanation.placeholder = "Explanation";
        const button = document.createElement("input");
        button.type = "submit";
        button.id = "submi_admin";
        const rebutton = document.createElement("button");
        rebutton.id = "Remove-type-quiz";
        rebutton.textContent = "Remove";
        qcm_append.append(question, choice1, choice2, choice3, choice4, Answer, points, explanation, button, rebutton);
        button.onclick = test
        function test() {
            qcmQuestionFormat = {
                "quiz_type": `qcm`,
                "question_text": `${question.value}`,
                "question_points": points.value,
                "a": `${choice1.value}`,
                "b": `${choice2.value}`,
                "c": `${choice3.value}`,
                "d": `${choice4.value}`,
                "correct": `${Answer.value}`,
                "explanation": `${explanation.value}`
            }
            console.log(qcmQuestionFormat);
            Tquestions.push(qcmQuestionFormat);
            question.value = "";
            choice1.value = "";
            choice2.value = "";
            choice3.value = "";
            choice4.value = "";
            points.value = "";
            explanation.value = "";
            Answer.value = "";
            qcm_append.removeChild(question)
            qcm_append.removeChild(choice1)
            qcm_append.removeChild(choice2)
            qcm_append.removeChild(choice3)
            qcm_append.removeChild(choice4)
            qcm_append.removeChild(Answer)
            qcm_append.removeChild(button)
            qcm_append.removeChild(rebutton)
            qcm_append.removeChild(points)
            qcm_append.removeChild(explanation)
        }

        rebutton.onclick = reset
        function reset() {
            qcm_append.removeChild(question)
            qcm_append.removeChild(choice1)
            qcm_append.removeChild(choice2)
            qcm_append.removeChild(choice3)
            qcm_append.removeChild(choice4)
            qcm_append.removeChild(Answer)
            qcm_append.removeChild(button)
            qcm_append.removeChild(rebutton)
            qcm_append.removeChild(points)
            qcm_append.removeChild(explanation)
        }
    } else {
        alert("You can only add one type of question at a time!!");
    }

}
add_true_button.onclick = att;
function att() {
    if (!document.getElementById("Is_true_exist")) {
        const question = document.createElement("input");
        question.id = "Is_true_exist";
        question.placeholder = "True or False question";
        const answer = document.createElement("input");
        answer.placeholder = "True Or False";
        const points = document.createElement("input");
        points.placeholder = "Points per question"
        const explanation = document.createElement("input")
        explanation.placeholder = "Explanation";
        const button = document.createElement("input");
        button.type = "submit";
        button.id = "submi_admin";
        const rebutton = document.createElement("button");
        rebutton.textContent = "remove";
        rebutton.id = "Remove-type-quiz";
        true_append.append(question, answer, points, explanation, button, rebutton);

        button.onclick = test
        function test() {
            trueFalseFormat = {
                "quiz_type": "yes-no",
                "question_text": `${question.value}`,
                "question_points": points.value,
                "a": "true",
                "b": "false",
                "correct": `${answer.value}`,
                "explanation": `${explanation.value}`
            }
            Tquestions.push(trueFalseFormat);
            console.log(trueFalseFormat);

            question.value = "";
            true_append.removeChild(question);
            true_append.removeChild(answer);
            true_append.removeChild(button);
            true_append.removeChild(rebutton);
            true_append.removeChild(points);
            true_append.removeChild(explanation);
        }

        rebutton.onclick = reset
        function reset() {
            true_append.removeChild(question);
            true_append.removeChild(answer);
            true_append.removeChild(button);
            true_append.removeChild(rebutton);
            true_append.removeChild(points);
            true_append.removeChild(explanation);
        }
    } else {
        alert("you can only add one type of question at a time!!");
    }
}

add_response.onclick = app;
function app() {
    if (!document.getElementById("isThis_exist")) {
        const question = document.createElement("input");
        question.placeholder = "Text response question"
        question.id = "isThis_exist"
        const answer = document.createElement("input");
        answer.placeholder = "Correct Answer";
        const points = document.createElement("input");
        points.placeholder = "Points per question"
        const explanation = document.createElement("input")
        explanation.placeholder = "Explanation";
        const button = document.createElement("input");
        button.type = "submit";
        button.id = "submi_admin";
        const rebutton = document.createElement("button");
        rebutton.textContent = "remove";
        rebutton.id = "Remove-type-quiz";
        response_append.append(question, answer, points, explanation, button, rebutton);

        button.onclick = test
        function test() {
            inputResponseFormat = {
                "quiz_type": "input",
                "question_text": `${question.value}`,
                "question_points": points.value,
                "correct": `${answer.value}`,
                "explanation": `${explanation.value}`
            }
            Tquestions.push(inputResponseFormat);
            console.log(inputResponseFormat);

            question.value = "";
            response_append.removeChild(question);
            response_append.removeChild(answer);
            response_append.removeChild(button);
            response_append.removeChild(rebutton);
            response_append.removeChild(points);
            response_append.removeChild(explanation);
        }

        rebutton.onclick = reset
        function reset() {
            response_append.removeChild(question);
            response_append.removeChild(answer);
            response_append.removeChild(button);
            response_append.removeChild(rebutton);
            response_append.removeChild(points);
            response_append.removeChild(explanation);
        }
    } else {
        alert("you can only add one question type at a time!!")
    }

}

let info = {}
submitButton.onclick = () => {


    if (titleInput.value !== "" && descriptionInput.value !== "" && themeInput.value !== "" && Number_questions !== "") {
        info = {
            "quiz_title": `${titleInput.value}`,
            "description": `${descriptionInput.value}`,
            "number_questions": `${Number_questions.value}`,
            "category": `${themeInput.value}`,
            "difficulty": `${Isdifficult}`,
            "estimated_time": `${quizTime.value}`,
            "status": "actif",
            "questions": []
        }

        titleInput.value = ''
        descriptionInput.value = ''
        themeInput.value = ''
        Number_questions.value = ''
        Isdifficult.value = ''
        quizTime.value = ''

        Tquestions.forEach((e) => {
            info.questions.push(e)
        })

        quiz.push(info)
        fetch('http://localhost:3000/quizes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(quiz[0])
        }).then(data => {
            quiz = []
        })
    } else {
        alert("you cant submit without submiting informations");
    }
}

