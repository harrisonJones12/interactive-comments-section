"use strict";
//* Core JS logic to show data on the webpage
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("./data.json");
            const json = yield response.json();
            setUpComment(json);
            // console.log(json);
        }
        catch (error) {
            console.log("error", error);
            //* add logic or call a function to show a error modal.
        }
    });
}
getData();
const setUpComment = (commentsObj) => {
    const { comments } = commentsObj;
    comments.forEach((comment) => {
        console.log("comment", comment);
        const mainCardDiv = document.createElement("div");
        const userNameSpan = document.createElement("span");
        userNameSpan.id = "username";
        userNameSpan.className = "username-of-comment-poster";
        userNameSpan.append(comment.user.username);
        mainCardDiv.className = "card-main";
        mainCardDiv.id = "card-main-container";
        const mainContainer = document.getElementById("main-page-container");
        mainContainer === null || mainContainer === void 0 ? void 0 : mainContainer.append(mainCardDiv);
        const getMainCardDiv = document.querySelectorAll(".card-main");
        getMainCardDiv.forEach((cardDiv) => {
            cardDiv.append(userNameSpan);
        });
    });
};
