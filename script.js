// btn toggle complete
const totalTab = document.getElementById('card-container')
const interviewTab = document.getElementById('default-tab');
const rejectedTab = document.getElementById('default-tab');

const totalTab2 = document.getElementById('all-counter-tab')
const interviewTab2 = document.getElementById('interview-tab');
const rejectedTab2 = document.getElementById('rejected-tab');

const filteredSection = document.getElementById('filtered-section');

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

    if(id == 'interview-tab'){
        totalCard.classList.add('hidden');
        filteredSection.classList.remove('hidden');
    }

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


mainContainer.addEventListener('click', function(event){
    console.log(event.target.classList.contains('interview-btn'));
    if(event.target.classList.contains('interview-btn')){
        const parentNode = event.target.parentNode.parentNode;
        const jobName = parentNode.querySelector('.job-name').innerText;
        const jobDegignation =parentNode.querySelector('.job-designation').innerText;
        const deleteIcon = parentNode.querySelector('.delete-icon').innerText;
        const location = parentNode.querySelector('.location').innerText;
        const statusBtn = parentNode.querySelector('.status-btn').innerText;
        const jobInfo = parentNode.querySelector('.job-info').innerText;
        const interviewBtn = parentNode.querySelector('.interview-btn').innerText;
        const rejectedBtn = parentNode.querySelector('.rejected-btn').innerText;

        //console.log(jobName, jobDegignation, deleteIcon,location, statusBtn, jobInfo);
        const cardInfo = {
            jobName,
            jobDegignation,
            deleteIcon,
            location,
            statusBtn,
            jobInfo,
            interviewBtn,
            rejectedBtn
        }
        //console.log(cardInfo);

        const jobNameExist = interviewList.find(item => item.jobName == cardInfo.jobName)
        parentNode.querySelector('.status-btn').innerText = 'INTERVIEW';
        if(!jobNameExist){
            interviewList.push(cardInfo);
        }
        renderInterview ();
    }

})

const filterSection = document.getElementById('filtered-section');
function renderInterview (){
    filterSection.innerHTML = '';
    for(let interview of interviewList){
        console.log(interview);
        let div = document.createElement('div');
        div.className = "card w-10/12 mx-auto mt-7 p-5 bg-base-100 space-y-5 rounded-lg text-center sm:text-left";
        div.innerHTML= `
        <div class="flex justify-between">
                <div class="text-left">
                    <h3 class="job-name text-lg font-bold text-base-content/70">Mobile First Crop</h3>
                    <h4 class="job-designation text-md font-semibold text-base-content/50">React Native Devloper</h4>
                </div>
                <div class="delete-icon p-3 border border-gray-300 rounded-full opacity-50"><i class="fa-solid fa-trash-can"></i></div>
            </div>
            <h5 class="location text-[14px] font-semibold text-base-content/50">Remote • Full-time • $130,000 - $175,000</h5>
            <div>
                <button class="btn status-btn bg-[#EEF4FF] py-1.5 px-5 text-base">NOT APPLIED</button>
            </div>
            <p class="job-info">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
            <div class="space-x-2">
                <button class="btn interview-btn border bg-base-100 border-green-600 text-green-600">INTERVIEW</button>
                <button class="btn rejected-btn border bg-base-100 border-red-600 text-red-600">REJECTED</button>
            </div>
        `
        filterSection.appendChild(div);
    }
}







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

