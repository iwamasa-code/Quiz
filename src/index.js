const quiz = [
  {
    question: "日本の四季の正しい順番は次のうちどれ？",
    answers: [
      "春・冬・夏・秋",
      "春・夏・冬・秋",
      "春・夏・秋・冬",
      "秋・冬・夏・春"
    ],
    correct: "春・夏・秋・冬"
  },
  {
    question: "次のうち正しい円周率はどれ？",
    answers: ["314", "3.14", "31.4", "3,14"],
    correct: "3.14"
  },
  {
    question: "この中で世界三大美人として当てはまっていないのは誰？",
    answers: ["クレオパトラ", "紫式部", "小野小町", "楊貴妃"],
    correct: "紫式部"
  }
];

let quizIndex = 0;
const quizLength = quiz.length;

let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

const setupQuestionButton = () => {
  document.getElementById("question").textContent = quiz[quizIndex].question;

  let buttonIndex = 0;
  let buttonLength = $button.length;

  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuestionButton();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    alert("正解！！");
    score++;
  } else {
    alert("不正解...");
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    setupQuestionButton();
  } else {
    alert(
      "終了！！！ あなたの正解数は" + score + "/" + quizLength + "です！！"
    );
  }
};

//ボタンをクリックしたときの正誤判定
let handlerIndex = 0;

while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}

// 「$」でHTMLのオブジェクトが入っていることが理解しやすい(絶対書く物でも無い)
