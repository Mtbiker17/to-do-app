(()=>{"use strict";inbox.addEventListener("click",(()=>{currentTitle.textContent="Inbox"})),today.addEventListener("click",(()=>{currentTitle.textContent="Today"})),week.addEventListener("click",(()=>{currentTitle.textContent="Weekly"})),month.addEventListener("click",(()=>{currentTitle.textContent="Monthly"})),important.addEventListener("click",(()=>{currentTitle.textContent="Important"}));const t=new class{constructor(t,e,n,i){this.title=t,this.dueDate=e,this.priority=n,this.notes=i}getTitle(){return this.title}setDueDate(){return this.dueDate}setPriority(){return this.priority}addNotes(){return this.notes}}("Mow","","","");console.log(t),console.log("webpack worked")})();