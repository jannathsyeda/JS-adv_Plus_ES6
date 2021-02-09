//topic1------------ truthy falsy-------------
// js e kuno value=0 holey false dore.
//js e only khali string diley consition false ashe
//let =NaN diley  false ashbe
//*Falsy:
// false
// 0
// ""
// udenfined
// null
// NaN

//*Truthy
//'0', ' ' []




const age=0;
if(age){
    console.log('condition true');
}else{
    console.log('condition false');
}



const name="";
if(age){
    console.log('condition true');
}else{
    console.log('condition false');
}



const name12=12;
if(name12 ||name12== 0){
    console.log('condition true');
}else{
    console.log('condition false');
}

console.log('----end truthy falsy-------');


//topic2 ------------- Null Vs Undefined-----------------

let nameUndefined;
console.log(nameUndefined);


const array=[11,12,13];
const resultarray=array[11];
console.log(resultarray);


const object={name:'fahi' ,id:3,dept:'cse'};
const objectResult=object.phone;
console.log(objectResult);



function add(n4,n3){
    n4*n3
}
const result11=add(12,10);
console.log(result11);

null //when u define null,then result will be null.explicitly define kore dewa jay.agey value chilo,then value ta nia nisi,then null dia check korlam value ta roise kina .for cheacking jkuno element ase ki na.not existing,kuno value nai.explicitly set kore dewa hoy


console.log('----end----')

//topic3 -------------- double equal (==) vs triple equal (===)
//== only value check,
//===value and type check
const first=2;
const second="2";
if(first===second){
    console.log("equal");
}else{
    console.log('not');
}



const first2 = 0;
const second1 = false;

if(first2 == second1){
    console.log("equal");
}
else
{
    console.log("not");
}





const first1 = 0;
const second2 = false;

if(first1 === second2){
    console.log("equal");
}
else
{
    console.log("not");
}


console.log("------==,=== end----------");


//topic4--------------map, filter, find
//map is used in array,which return an array

//map hochey kuno ekta arrayr moddey looping kore kaj kore,and array return kore je kaj dewa hoy oi kajer

//map
console.log("--map start-")
const numbers=[1,2,3,4,5,6,8];
const resultMap=numbers.map(function(element){
     return element*element;
})
console.log(resultMap);
console.log('----');


//map plus arrow
console.log('---map plus arrow---')
digit=[2,4,2,1,6,4];
const MapArrow=digit.map(element => element*element);
console.log(MapArrow);

//map can return element,index,array
console.log('----map element,index,array--');
digit1=[2,4,2,1,6,4];
const mapIndexElementArray=digit1.map(function(element,index,array){
    console.log(element,index,array);
})



//map only array return
console.log('----map only array return--');
digit2=[2,4,2,1,6,4];
const mapIndexElementArray2=digit2.map(function(array){
    console.log(array);
})


//filter
//return an array,with only the matching element
console.log('-filter--');
const FilterArray=[2,4,2,1,6,4];
const resultFilter=FilterArray.filter(x=>x<6);//6 er chuto all return korbe
console.log(resultFilter);


//find
console.log('--find--');
const FindArray=[4,1,2,4,1,6];
const resultFind=FindArray.find(x=>x<6);//6 er chuto array er moddey 1st element ta return korbe.
console.log(resultFind);

//foreach



//reduce



//*Apply map, filter, find with arrow on an array of objects
const Student=[
    
        { id:1 , house: '120/Sylhet'},    
        {id:2 , house: '1200/Sylhet'},
        {id:3, house: '1201/Sylhet'} ,    
        {id:4 , house: '122/Sylhet'}      
    ]

///map
    const  ArrayMap1=Student.map(s=>s.FirstName);
    const ArrayMap2=Student.map(s=>s);
    const ArrayMap3=Student.map(s=>s.house);
    console.log(ArrayMap2);
    console.log(ArrayMap1);

//filter
console.log('---filter--');
    const ArrayFilterId=Student.filter(s=>s.id>2);
    console.log(ArrayFilterId);







