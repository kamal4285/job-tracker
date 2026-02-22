// // interview count
// let interview = 0;
// document.getElementById('interview-btn').addEventListener('click', function(){
//     interview++;
//     const totalInterview = document.getElementById('total-interview');
//     totalInterview.innerText = interview;
// })

// // rejected count
// let rejected = 0;
// document.getElementById('rejected-btn').addEventListener('click', function(){
//     rejected++;
//     const totalrejected = document.getElementById('total-rejected');
//     totalrejected.innerText = rejected;
// })

// tab convert
function show(id){
    const totalTab = document.getElementById('card-container')
    const interviewTab = document.getElementById('default-tab');
    const rejectedTab = document.getElementById('default-tab');

    totalTab.classList.add('hidden');
    interviewTab.classList.add('hidden');
    rejectedTab.classList.add('hidden');

    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
}

// button color alternation
function addClass(){
    const interviewTabColor = document.getElementById('interview-tab');
    const rejectedTabColor = document.getElementById('rejected-tab');

    // interviewTabColor.classList.add('btn-primary');
    // rejectedTabColor.classList.add('btn-primary');


}

// all application count
const application = document.getElementsByClassName('card');
const totalApplication = document.getElementById('total-application');
for(let i = 0; i<application.length; i++){
    totalApplication.innerText = i;
}

// delete application
const deleteBtn = document.querySelectorAll('.delete-btn');
deleteBtn.forEach(function(btn){
    btn.addEventListener('click', function(){
        console.log('hi')
        btn.parentElement.remove();
    })
})


// interview and reject counting
let applicationStatus = null;
let totalInterview = 0;
let totalReject = 0;

const totalI = document.getElementById('total-interview');
const totalR = document.getElementById('total-rejected');
function updateCount(){
    totalI.innerText = totalInterview;
    totalR.innerText = totalReject;
}


document.getElementsByClassName('interview-btn').addEventListener('click', function(){
    console.log('hello world')
    if(applicationStatus !== 'rejected'){
        if(applicationStatus === 'intrview'){
        totalReject--;
       }
       totalInterview++;
       applicationStatus = 'rejected';
       
       updateCount();
    }
})
document.getElementsByClassName('rejected-btn').addEventListener('click', function(){
     if(applicationStatus !== 'interview'){
       if(applicationStatus === 'rejected'){
        totalInterview--;
       }
       totalReject++;
       applicationStatus = 'interview';
       
       updateCount();
    }
})

