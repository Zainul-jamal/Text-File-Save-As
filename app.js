const textarea = document.querySelector("textarea");
const fileNameInput = document.querySelector(".fileName");
const selectMenu = document.querySelector(".saveAs");
const saveBtn = document.querySelector(".saveBtn");

selectMenu.addEventListener("change", () => {
    let selectedOption = selectMenu.options[selectMenu.selectedIndex].text;
    saveBtn.innerHTML = `Save As "${selectedOption.split(" ")[0]}"  File`;
});




saveBtn.addEventListener("click", () => {
    const blob =new Blob([textarea.value], {type: selectMenu.value});
    const fileUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");//Creation <a> tag
    link.download = fileNameInput.value;//passing filename as download
    link.href     = fileUrl;// passing fileUrl as href value of link
    link.click();  // clicking link so the file download
console.log(fileNameInput.value);
});


// Function to toggle save button opacity based on textarea content
function toggleSaveBtn() {
    if (textarea.value.trim() !== "") {
        saveBtn.style.opacity = "1";
        saveBtn.style.pointerEvents = "auto";
    } else {
        saveBtn.style.opacity = "0.6";
        saveBtn.style.pointerEvents = "none";
    }
}

// Call toggleSaveBtn initially and whenever textarea content changes
toggleSaveBtn();
textarea.addEventListener("input", toggleSaveBtn);