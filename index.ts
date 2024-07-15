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
  user: { image: { png: string }; username: string };
  createdAt: string;
}

const setUpComment = (commentsObj: Array<object>) => {
  const { comments }: any = commentsObj;

  comments.forEach((comment: comment) => {
    console.log("comment", comment);
    const mainCardDiv = document.createElement("div");
    mainCardDiv.className = "card-main";
    mainCardDiv.id = "card-main-container";

    const userNameSpan = document.createElement("span");
    userNameSpan.id = "username";
    userNameSpan.className = "username-of-comment-poster";
    userNameSpan.append(comment.user.username);

    const createdOnSpan = document.createElement("span");
    createdOnSpan.id = "created-on";
    createdOnSpan.className = "created-on-time";
    createdOnSpan.append(comment.createdAt);

    const usersImage = document.createElement("img");
    usersImage.src = comment.user.image.png;
    usersImage.className = "users-image";

    const cardUserContainer = document.createElement("div");
    cardUserContainer.id = "user-info";
    cardUserContainer.className = "user-info-container";

    const cardComment = document.createElement("p");
    cardComment.id = "comment-text ";
    cardComment.className = "card-comment-content";
    cardComment.append(comment.content);

    const scoreTrackerMain = document.createElement("div");
    scoreTrackerMain.id = "score-tracker-main";
    scoreTrackerMain.className = "score-tracker-main-container";

    const mainContainer = document.getElementById("main-page-container");
    mainContainer?.append(mainCardDiv);

    const getMainCardDiv = document.querySelectorAll(".card-main");

    const plusLogoSvgTag = document.createElement("svg");

    // TODO append plusLogoImageTag element to scoreTrackerMain
    const plusLogoImageTag = document.createElement("image");
    plusLogoImageTag.id = "plus";
    plusLogoImageTag.className = "plus-icon";
    plusLogoImageTag.href = "./images/icon-plus.svg";
    plusLogoSvgTag.append(plusLogoImageTag);

    getMainCardDiv.forEach((cardDiv) => cardDiv.append(cardUserContainer));

    const getUserInfoContainer = document.querySelectorAll(
      ".user-info-container"
    );

    getUserInfoContainer.forEach((cardDiv) => {
      cardDiv.append(usersImage);
      cardDiv.append(userNameSpan);
      cardDiv.append(createdOnSpan);
      cardDiv.append(cardComment);
    });
  });
};
