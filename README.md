# job-tracker
1. difference between getElementById, getElementsByClassName, querySelector, querySelectorAll
Ans:
getElementById: Best selecting function for specific element. Very fast. Element select by Id name.
getElementsByClassName: Selects elements by class name. returns HTML collection to use this.
querySelector: Select the first element in the nodelist of same class.
querySelectorAll: Select all element in the nodelist of same class.


2. How do you create and insert a new element into the DOM?
Ans: For inserting a new element into a DOM, at first create a element ----> adding content in the new create element ----> insert into a specific element container as a child.
We can see in code--->

const div = document.createElement("div");
div.innerText = "Hello World";
const container = document.getElementById("card-container");
container.appendChild(div);

where the new div are inserted into the previous container Id: card-container.



3. What is Event Bubbling? And how does it work?
Ans: Event bubbling is a process of called children to parent element.
The process flow one by one children to parent element. 
Suppose in a html file having a button inside a div element. Where event flow will be:
button----> div-----> body--> html---> document


4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event delegation is a technique in javascript language where a single event listener add in a parent element to handle events for its child elements using event bubbleing technique. because the event bubbleing allows to use event delegation.
By sing event bubbleing easy build the delegation technique.


5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: 
preventDefault()------> stop browser default action.
stopPropagation()-----> stop event bubbling. when use the stopPropagation() in a function the event bubbling working procedure stop this place and return answer.