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

    const mainContainer = document.getElementById("main-page-container");
    mainContainer?.append(mainCardDiv);

    const getMainCardDiv = document.querySelectorAll(".card-main");

    getMainCardDiv.forEach((cardDiv) => cardDiv.append(cardUserContainer));

    const getUserInfoContainer = document.querySelectorAll(
      ".user-info-container"
    );

    getUserInfoContainer.forEach((cardDiv) => {
      cardDiv.append(usersImage);
      cardDiv.append(userNameSpan);
      cardDiv.append(createdOnSpan);
    });
  });
};
