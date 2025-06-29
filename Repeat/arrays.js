let marks_class12 = [91,92,93,50,65,null,false,"not present"]
marks_class12[0]=45;
// for(let i=0;i<marks_class12.length;i++){
//     console.log(marks_class12[i]);
// }

for(let a in marks_class12){
    a=Number.parseInt(a);
    console.log("The marks scored by the student of Roll Number "+(a+1)+" are "+marks_class12[a])
}