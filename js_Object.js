//bind ,call  and apply 
const Object1={
    name:"fahima",
    id:33,
    salary:25000,
    getFunctionMethod:function(){
        console.log('my name is '+ this.name + ' and my id is'+ this.id);
    }, 
    chargeBill:function(amount){
this.salary=this.salary-amount;
return this.salary;

    }
}

 Object1.getFunctionMethod();
 Object1.chargeBill(1000);
 console.log('normal object 1st salary is=',Object1.salary);

 //bind 
 //bind->to borrow method from another object
//q:ekta object er method ke onno object e add korar 3ta system ase
//1->bind(less efficient)return hishebe onno arekti function dibe
//2->call
//apply
const object_bind={
    Firstname:"jash",
    LastName:"mitu",
    salary:28000
}

const charge_bil_in_bind=Object1.chargeBill.bind(object_bind);
charge_bil_in_bind(20000);
console.log('bind result=',object_bind.salary);

//call (this value and argument parameter ke coma dia seperate kore)onno object er function ke nije kore na eney direct call kore
Object1.chargeBill.call(object_bind,20000);//here object_bind is this value of chargebill
console.log('call result=',object_bind.salary);

//apply(array hishabe argument patano lage,1st this argument sara)
Object1.chargeBill.call(object_bind,[20000]);//here object_bind is this value of chargebill
console.log('apply result=',object_bind.salary);

