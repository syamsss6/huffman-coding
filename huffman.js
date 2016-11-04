code={}
pat='';

function frequency(str){
var freqs={};
for (var i in str){

if(freqs[str[i]]==undefined){

freqs[str[i]]=1;
}
else {
freqs[str[i]]=freqs[str[i]]+1;
}
}
return freqs;
}

 

function sortfreq(freqs){
var tuples=[];
for( var let in freqs){
tuples.push([freqs[let],let]);
}
return tuples.sort();
}



function buildtree(tuples)  
{  
while(tuples.length>1)  
{  
leasttwo=[tuples[0][1],tuples[1][1]]  
rest=tuples.slice(2,tuples.length);  
combfreq=tuples[0][0]+tuples[1][0];  
tuples=rest;  
end=[combfreq,leasttwo];  
tuples.push(end);  
tuples.sort();  
}  
return tuples[0][1];  
}  



function assigncode(node,pat)
{
if(typeof(node)==typeof(""))
{
code[node]=pat;
}
else
{
assigncode(node[0],pat+'0');
assigncode(node[1],pat+'1');
}
return code;
}


function encode(str)
{
output="";
for(j in str)
{
output=output+code[str[j]];
}
return output;
}


function decode(tree,encoded)
{
output='';
p=tree;
for(s in encoded)
{
if(encoded[s]=='0')
{
p=p[0];
}
else
{
p=p[1];
}
if(typeof(p)==typeof(''))
{
output=output+p;
p=tree;
}
}
return output;
}


function main()
{
var inpt=require('readline');
var pmpt = inpt.createInterface(process.stdin,process.stdout);
pmpt.question("enter the code: ",function(ip)
{
//ip='malayalam';
w=frequency(ip);
p=sortfreq(w);
tree=buildtree(p);
op=assigncode(tree,pat);
console.log("Code for letters:");
console.log(op);
encoded=encode(ip);
console.log("Encoded:");
console.log(encoded);
decoded=decode(tree,encoded);
console.log("Decoded:");
console.log(decoded);
process.exit();
});
}
main();
