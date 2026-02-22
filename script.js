// btn toggle complete
const totalTab = document.getElementById('card-container')
const interviewTab = document.getElementById('default-tab');
const rejectedTab = document.getElementById('default-tab');

const totalTab2 = document.getElementById('all-counter-tab')
const interviewTab2 = document.getElementById('interview-tab');
const rejectedTab2 = document.getElementById('rejected-tab');

function show(id){
    totalTab.classList.add('hidden');
    interviewTab.classList.add('hidden');
    rejectedTab.classList.add('hidden');

    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
}
function toggleStyle(id){
    totalTab2.classList.remove('btn-primary');
    interviewTab2.classList.remove('btn-primary');
    rejectedTab2.classList.remove('btn-primary');

    totalTab2.classList.add('btn');
    interviewTab2.classList.add('btn');
    rejectedTab2.classList.add('btn');

    const selected = document.getElementById(id);
    selected.classList.add('btn-primary');

}



// --------------
let interviewList = [];
let rejectedList = [];

// all application count
// const application = document.getElementsByClassName('card');
// total applications
const totalApplication = document.getElementById('total-application');
// total interview
const totalInterview = document.getElementById('total-interview');
// total rejected
const totalRejected = document.getElementById('total-rejected');

const totalCard = document.getElementById('card-container');

const mainContainer = document.querySelector('main');

function calculateCount(){
    totalApplication.innerText = totalCard.children.length;
    totalInterview.innerText = interviewList.length;
    totalRejected.innerText = rejectedList.length;
}
calculateCount();









// delete application
// const deleteBtn = document.querySelectorAll('.delete-btn');
// deleteBtn.forEach(function(btn){
//     btn.addEventListener('click', function(){
//         console.log('hi')
//         btn.parentElement.remove();
//     })
// })


// interview and reject counting
// let applicationStatus = null;
// let totalInterview = 0;
// let totalReject = 0;

// const totalI = document.getElementById('total-interview');
// const totalR = document.getElementById('total-rejected');
// function updateCount(){
//     totalI.innerText = totalInterview;
//     totalR.innerText = totalReject;
// }


// document.getElementsByClassName('interview-btn').addEventListener('click', function(){
//     console.log('hello world')
//     if(applicationStatus !== 'rejected'){
//         if(applicationStatus === 'intrview'){
//         totalReject--;
//        }
//        totalInterview++;
//        applicationStatus = 'rejected';
       
//        updateCount();
//     }
// })
// document.getElementsByClassName('rejected-btn').addEventListener('click', function(){
//      if(applicationStatus !== 'interview'){
//        if(applicationStatus === 'rejected'){
//         totalInterview--;
//        }
//        totalReject++;
//        applicationStatus = 'interview';
       
//        updateCount();
//     }
// })

