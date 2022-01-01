const home = () =>{
    let content1 = document.querySelector(".content");
    content1.style.display = "flex";
    let content = document.querySelector(".content1");
    content.style.display = "flex";
    let box = document.querySelector(".suggestion-box");
    box.style.display = "none";
    let contactus = document.querySelector(".contact-us");
    contactus.style.display = "none";
    let missionVision = document.querySelector(".mission-vision");
    missionVision.style.display = "none";
    let BioData = document.querySelector(".leave-form1");
    BioData.style.display = "none";
    let leaveForm = document.querySelector(".leave-form");
    leaveForm.style.display = "none";

}
const suggestions = () =>{
   let content1 = document.querySelector(".content");
    content1.style.display = "none";
    let missionVision = document.querySelector(".mission-vision");
    missionVision.style.display = "none"
    let contactus = document.querySelector(".contact-us");
    contactus.style.display = "none";
    let leaveForm = document.querySelector(".leave-form");
    leaveForm.style.display = "none";
   let box = document.querySelector(".suggestion-box");
   box.style.display = "flex";
   let content = document.querySelector(".content1");
    content.style.display = "flex";
   let BioData = document.querySelector(".leave-form1");
    BioData.style.display = "none";
    

}

const contactUs = () => {
    let content1 = document.querySelector(".content");
    content1.style.display = "none"
    let box = document.querySelector(".suggestion-box");
    box.style.display = "none";
    let missionVision = document.querySelector(".mission-vision");
    missionVision.style.display = "none";
    let header = document.querySelector(".header1");
    header.style.display = "flex";
    let contactus = document.querySelector(".contact-us");
    contactus.style.display = "flex";
    let BioData = document.querySelector(".leave-form1");
    BioData.style.display = "none";
    let leaveForm = document.querySelector(".leave-form");
    leaveForm.style.display = "none";
    

}
const missionVision = () => {
    let content1 = document.querySelector(".content");
    content1.style.display = "none";
    let box = document.querySelector(".suggestion-box");
    box.style.display = "none";
    let contactus = document.querySelector(".contact-us");
    contactus.style.display = "none";
    let header = document.querySelector(".header1");
    header.style.display = "flex";
    let content = document.querySelector(".content1");
    content.style.display = "flex";
    let BioData = document.querySelector(".leave-form1");
    BioData.style.display = "none";
    let missionVision = document.querySelector(".mission-vision");
    missionVision.style.display = "flex";



}

const formsh = () => {
    let content1 = document.querySelector(".content");
    content1.style.display = "none"
    let box = document.querySelector(".suggestion-box");
    box.style.display = "none";
    let contactus = document.querySelector(".contact-us");
    contactus.style.display = "none";
    let content = document.querySelector(".content1");
    content.style.display = "none";
    let missionVision = document.querySelector(".mission-vision");
    missionVision.style.display = "none";
    let header = document.querySelector(".header1");
    header.style.display = "none";
    let BioData = document.querySelector(".leave-form1");
    BioData.style.display = "none";
    let leaveForm = document.querySelector(".leave-form");
    leaveForm.style.display = "flex";


}

const formBio = () => {
    let content1 = document.querySelector(".content");
    content1.style.display = "none";
    let box = document.querySelector(".suggestion-box");
    box.style.display = "none";
    let contactus = document.querySelector(".contact-us");
    contactus.style.display = "none";
    let content = document.querySelector(".content1");
    content.style.display = "none";
    let missionVision = document.querySelector(".mission-vision");
    missionVision.style.display = "none";
    let header = document.querySelector(".header1");
    header.style.display = "none";
    let leaveForm = document.querySelector(".leave-form");
    leaveForm.style.display = "none";
    let BioData = document.querySelector(".leave-form1");
    BioData.style.display = "block";

}

function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    w=window.open();
    w.document.write(printContents);
    w.print();
    w.close();
}