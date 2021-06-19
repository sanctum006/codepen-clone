// let resizeWindow = false;
// let currentX = 0;
// let outputWindow = document.querySelector(".output-window");
// let editorWindow = document.querySelector(".editor-window");
// let resizeBar = document.querySelector(".resize-bar");
// let edit = document.querySelectorAll(".edit");
// let windowWidth = window.innerWidth;

// window.addEventListener("load", () => {
//     editorWindow.style.width = "400px";
//     resizeBar.style.width = "15px";
//     outputWindow.style.width = window.innerWidth - 415 + "px";
// });

// // document.querySelector(".resize-bar").addEventListener("mousedown", (event) => {
// //     resizeWindow = true;
// //     currentX = event.clientX;
// // });

// // document.addEventListener("mouseup", (event) => {
// //     resizeWindow = false;
// // });

// // // document.querySelector(".resize-bar").addEventListener("mouseup", (event) => {
// // //     resizeWindow = false;
// // // });

// // document.addEventListener("mousemove", (event) => {

// //     // console.log(event.clientX);
// //     if (resizeWindow == true) {
// //         let posChange = event.clientX - currentX;

// //         console.log(posChange);

// //         if (posChange < 0) {
// //             let outputWindowWidth = outputWindow.style.width;
// //             let editorWindowWidth = editorWindow.style.width;

// //             posChange = -posChange;
            
// //             let outputWindowNewWidth = outputWindowWidth.slice(0, outputWindowWidth.length - 2);
// //             let editorWindowNewWidth = editorWindowWidth.slice(0, editorWindowWidth.length - 2);

// //             if (editorWindowNewWidth > 300) {
// //                 resizeBar.style.width = "15px";
// //                 editorWindow.style.width = eval(editorWindowNewWidth + " - " + posChange) + "px";
// //                 outputWindow.style.width = eval(windowWidth -  (eval(editorWindowNewWidth + " - " + posChange)) + " - 15 + ") + "px";
// //             }
// //         } else {
// //             // console.log(1, outputWindow.style.width);
// //             // console.log(2, editorWindow.style.width);
// //             let outputWindowWidth = outputWindow.style.width;
// //             let editorWindowWidth = editorWindow.style.width;

// //             let outputWindowNewWidth = outputWindowWidth.slice(0, outputWindowWidth.length - 2);
// //             let editorWindowNewWidth = editorWindowWidth.slice(0, editorWindowWidth.length - 2);
// //             resizeBar.style.width = "15px";
// //             editorWindow.style.width = eval(editorWindowNewWidth + " + " + posChange) + "px";
// //             outputWindow.style.width = eval(windowWidth -  (eval(editorWindowNewWidth + " + " + posChange)) + " - 15 + ") + "px";
// //             // outputWindow.style.width = eval(outputWindowNewWidth + " - " + posChange) + "px";
// //             // editorWindow.style.width = eval(editorWindowNewWidth + " + " + posChange) + "px";
// //             // console.log(3, outputWindow.style.width);
// //             // console.log(4, editorWindow.style.width);
// //         }
// //     }
// // });

document.querySelector(".pen-name").addEventListener("focus", (event) => {
    setTimeout(() => {
        console.log("Csaxcs");
        if (event.srcElement.textContent == "") {
            event.srcElement.textContent = "Untitled";
            console.log("Csaxcs");
        }
    }, 3000);
});

document.querySelector(".html-editor").addEventListener("mousedown", () => {
    setInterval(() => {
        document.querySelector(".output-window").innerHTML = document.querySelector(".html-box").value;
    }, 3000);
});

document.querySelector(".css-editor").addEventListener("mousedown", () => {
    setInterval(() => {
        document.querySelector(".style").innerHTML = document.querySelector(".css-box").value;
    }, 3000);
});

document.querySelector(".js-editor").addEventListener("mousedown", () => {
    setInterval(() => {
        document.querySelector(".script").innerHTML = document.querySelector(".js-box").value;
        document.querySelector(".script").reload();
    }, 10);
});