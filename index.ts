//* Core JS logic to show data on the webpage

async function getData() {
  try {
    const response = await fetch("./data.json");
    const json = await response.json();
    setUpComment(json);
    // console.log(json);
  } catch (error) {
    console.log("error", error);
    //* add logic or call a function to show a error modal.
  }
}

getData();

interface comment {
  id: number;
  content: string;
  score: number;
  user: { image: object; username: string };
}

const setUpComment = (commentsObj: Array<object>) => {
  const { comments }: any = commentsObj;

  comments.forEach((comment: comment) => {
    console.log("comment", comment);
    const mainCardDiv = document.createElement("div");

    const userNameSpan = document.createElement("span");

    userNameSpan.id = "username";
    userNameSpan.className = "username-of-comment-poster";
    userNameSpan.append(comment.user.username);

    mainCardDiv.className = "card-main";
    mainCardDiv.id = "card-main-container";
    const mainContainer = document.getElementById("main-page-container");
    mainContainer?.append(mainCardDiv);

    const getMainCardDiv = document.querySelectorAll(".card-main");

    getMainCardDiv.forEach((cardDiv) => {
      cardDiv.append(userNameSpan);
    });
  });
};
