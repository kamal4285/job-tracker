// ----------
let currentStatus = '';


// btn toggle complete
const totalTab = document.getElementById('card-container')
const interviewTab = document.getElementById('default-tab');
const rejectedTab = document.getElementById('default-tab');

const totalTab2 = document.getElementById('all-counter-tab')
const interviewTab2 = document.getElementById('interview-tab');
const rejectedTab2 = document.getElementById('rejected-tab');

const filteredSection = document.getElementById('filtered-section');
const filteredSectionR = document.getElementById('filtered-rejected-section');


// tab function (color and new card hidden and show)
function show(id){
    totalTab.classList.add('hidden');
    interviewTab.classList.add('hidden');
    rejectedTab.classList.add('hidden');

    filteredSection.classList.add('hidden');
    filteredSectionR.classList.add('hidden');

    const selected = document.getElementById(id);
    selected.classList.remove('hidden');

    if(id = 'interview-tab'){
        if(totalInterview.innerText > 0){
            interviewTab.classList.add('hidden');
        }
    }
    if(id = 'rejected-tab'){
        if(totalRejected.innerText > 0){
            rejectedTab.classList.add('hidden');
        }
    }
}
function toggleStyle(id){
    totalTab2.classList.remove('btn-primary');
    interviewTab2.classList.remove('btn-primary');
    rejectedTab2.classList.remove('btn-primary');

    totalTab2.classList.add('btn');
    interviewTab2.classList.add('btn');
    rejectedTab2.classList.add('btn');

    const selected = document.getElementById(id);
    currentStatus = id;

    selected.classList.add('btn-primary');


    if(id == 'interview-tab'){
        filteredSection.classList.remove('hidden');
    }
    else if(id == 'rejected-tab'){
        filteredSectionR.classList.remove('hidden');
    }

}



// --------------
let interviewList = [];
let rejectedList = [];


// all application count
 const application = document.getElementsByClassName('card');
// total applications
const totalApplication = document.getElementById('total-application');
// total interview
const totalInterview = document.getElementById('total-interview');
// total rejected
const totalRejected = document.getElementById('total-rejected');
// total card in container
const jobCard = document.getElementById('job-card');

const totalCard = document.getElementById('card-container');

const mainContainer = document.querySelector('main');

function calculateCount(){
    totalApplication.innerText = totalCard.children.length;
    totalInterview.innerText = interviewList.length;
    totalRejected.innerText = rejectedList.length;
    jobCard.innerText = totalCard.children.length;
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
         parentNode.querySelector('.status-btn').innerText = 'INTERVIEW';

        //console.log(jobName, jobDegignation, deleteIcon,location, statusBtn, jobInfo);
        const cardInfo = {
            jobName,
            jobDegignation,
            deleteIcon,
            location,
            statusBtn: 'INTERVIEW',
            jobInfo,
            interviewBtn,
            rejectedBtn
        }
        //console.log(cardInfo);

        const jobNameExist = interviewList.find(item => item.jobName == cardInfo.jobName)
       
        if(!jobNameExist){
            interviewList.push(cardInfo);
        }
        rejectedList = rejectedList.filter(item => item.jobName != cardInfo.jobName);

        // if(currentStatus == 'REJECTED'){
        //      renderRejected();
        //  }
        calculateCount();
        renderInterview();
        renderRejected();
        
    }
    else  if(event.target.classList.contains('rejected-btn')){
        const parentNode = event.target.parentNode.parentNode;
        const jobName = parentNode.querySelector('.job-name').innerText;
        const jobDegignation =parentNode.querySelector('.job-designation').innerText;
        const deleteIcon = parentNode.querySelector('.delete-icon').innerText;
        const location = parentNode.querySelector('.location').innerText;
        const statusBtn = parentNode.querySelector('.status-btn').innerText;
        const jobInfo = parentNode.querySelector('.job-info').innerText;
        const interviewBtn = parentNode.querySelector('.interview-btn').innerText;
        const rejectedBtn = parentNode.querySelector('.rejected-btn').innerText;
         parentNode.querySelector('.status-btn').innerText = 'REJECTED';

        //console.log(jobName, jobDegignation, deleteIcon,location, statusBtn, jobInfo);
        const cardInfo = {
            jobName,
            jobDegignation,
            deleteIcon,
            location,
            statusBtn: 'REJECTED',
            jobInfo,
            interviewBtn,
            rejectedBtn
        }
        //console.log(cardInfo);

        const jobNameExist = rejectedList.find(item => item.jobName == cardInfo.jobName)
       
        if(!jobNameExist){
            rejectedList.push(cardInfo);
        }
        interviewList = interviewList.filter(item => item.jobName != cardInfo.jobName);
        
        // if(currentStatus == 'interview-tab'){
        //     renderInterview();
        // }

        calculateCount();
        renderRejected();
        renderInterview();
    }

})

const filterSection = document.getElementById('filtered-section');
const filterSectionR = document.getElementById('filtered-rejected-section');


function renderInterview (){
    filterSection.innerHTML = '';
    for(let interview of interviewList){
        console.log(interview);
        let div = document.createElement('div');
        div.className = "card w-10/12 mx-auto mt-7 p-5 bg-base-100 space-y-5 rounded-lg text-center sm:text-left";
        div.innerHTML= `
        <div class="flex justify-between">
                <div class="text-left">
                    <h3 class="job-name text-lg font-bold text-base-content/70">${interview.jobName}</h3>
                    <h4 class="job-designation text-md font-semibold text-base-content/50">${interview.jobDegignation}</h4>
                </div>
                <div class="delete-icon p-3 border border-gray-300 rounded-full opacity-50"><i class="fa-solid fa-trash-can"></i></div>
            </div>
            <h5 class="location text-[14px] font-semibold text-base-content/50">${interview.location}</h5>
            <div>
                <button class="btn status-btn bg-[#EEF4FF] py-1.5 px-5 text-base">${interview.statusBtn}</button>
            </div>
            <p class="job-info">${interview.jobInfo}</p>
            <div class="space-x-2">
                <button class="btn interview-btn border bg-base-100 border-green-600 text-green-600">INTERVIEW</button>
                <button class="btn rejected-btn border bg-base-100 border-red-600 text-red-600">REJECTED</button>
            </div>
        `
        filterSection.appendChild(div);
    }
}


function renderRejected (){
    filterSectionR.innerHTML = '';
    for(let reject of rejectedList){
        console.log(reject);
        let div = document.createElement('div');
        div.className = "card w-10/12 mx-auto mt-7 p-5 bg-base-100 space-y-5 rounded-lg text-center sm:text-left";
        div.innerHTML= `
        <div class="flex justify-between">
                <div class="text-left">
                    <h3 class="job-name text-lg font-bold text-base-content/70">${reject.jobName}</h3>
                    <h4 class="job-designation text-md font-semibold text-base-content/50">${reject.jobDegignation}</h4>
                </div>
                <div class="delete-icon p-3 border border-gray-300 rounded-full opacity-50"><i class="fa-solid fa-trash-can"></i></div>
            </div>
            <h5 class="location text-[14px] font-semibold text-base-content/50">${reject.location}</h5>
            <div>
                <button class="btn status-btn bg-[#EEF4FF] py-1.5 px-5 text-base">${reject.statusBtn}</button>
            </div>
            <p class="job-info">${reject.jobInfo}</p>
            <div class="space-x-2">
                <button class="btn interview-btn border bg-base-100 border-green-600 text-green-600">INTERVIEW</button>
                <button class="btn rejected-btn border bg-base-100 border-red-600 text-red-600">REJECTED</button>
            </div>
        `
        filterSectionR.appendChild(div);
    }
}


//delete btn
const deleteFunction = document.querySelectorAll('.delete-icon');

    deleteFunction.forEach(function(deleteFunction){
       
        deleteFunction.addEventListener('click', function(event){
            //console.log(event.target.parentNode.parentNode.parentNode.remove(event.target));
            const card = event.target.closest('.card');
            card.remove();
        
        const jobName = card.querySelector('.job-name').innerText;
        
        interviewList = interviewList.filter(item => item.jobName !== jobName); // Remove from Interview list
        rejectedList = rejectedList.filter(item => item.jobName !== jobName); //remove from rejected list
        
        renderInterview();
        renderRejected();
        calculateCount();
        })
    });
    



//alternation card interview to rejected tab
filterSectionR.addEventListener('click', function(event){
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
         parentNode.querySelector('.status-btn').innerText = 'REJECTED';

        //console.log(jobName, jobDegignation, deleteIcon,location, statusBtn, jobInfo);
        const cardInfo = {
            jobName,
            jobDegignation,
            deleteIcon,
            location,
            statusBtn: 'REJECTED',
            jobInfo,
            interviewBtn,
            rejectedBtn
        }
        //console.log(cardInfo);

        const jobNameExist = interviewList.find(item => item.jobName == cardInfo.jobName)
       
        if(!jobNameExist){
            interviewList.push(cardInfo);
        }
        rejectedList = rejectedList.filter(item => item.jobName != cardInfo.jobName);
        

        calculateCount();
        renderRejected();
        renderInterview();
    }

})

// alternation card rejected to interrview tab
filterSection.addEventListener('click', function(event){
      if(event.target.classList.contains('rejected-btn')){
        const parentNode = event.target.parentNode.parentNode;
        const jobName = parentNode.querySelector('.job-name').innerText;
        const jobDegignation =parentNode.querySelector('.job-designation').innerText;
        const deleteIcon = parentNode.querySelector('.delete-icon').innerText;
        const location = parentNode.querySelector('.location').innerText;
        const statusBtn = parentNode.querySelector('.status-btn').innerText;
        const jobInfo = parentNode.querySelector('.job-info').innerText;
        const interviewBtn = parentNode.querySelector('.interview-btn').innerText;
        const rejectedBtn = parentNode.querySelector('.rejected-btn').innerText;
         parentNode.querySelector('.status-btn').innerText = 'REJECTED';

        //console.log(jobName, jobDegignation, deleteIcon,location, statusBtn, jobInfo);
        const cardInfo = {
            jobName,
            jobDegignation,
            deleteIcon,
            location,
            statusBtn: 'REJECTED',
            jobInfo,
            interviewBtn,
            rejectedBtn
        }
        //console.log(cardInfo);

        const jobNameExist = rejectedList.find(item => item.jobName == cardInfo.jobName)
       
        if(!jobNameExist){
            rejectedList.push(cardInfo);
        }
        interviewList = interviewList.filter(item => item.jobName != cardInfo.jobName);

        calculateCount();
        renderRejected();
        renderInterview();
    }

})


