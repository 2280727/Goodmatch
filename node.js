function stringTodecimal(input){
    let count=0;
    let output="";
    let visited=" ";
   
    for(let i=0;i<input.length;i++){
   
      if(visited.includes(input[i])){
        continue;
      }
      visited+=input[i];
   
      for(let q=0;q<input.length;q++){
        if(input[i] == input[q]){  
          count++;
         
        }
      }
      if(count!=0){
      output += count.toString();
      }
      count=0;
    }
      return output;
    
   }
   let input="Jack matches Jill";
   stringTodecimal(input.toLowerCase());
   
   function toTwoDigits(input,output){
     if(input.length==0){
       return output;
     }
     
     if(input.length%2==0){
       
       if(input.length>2){
         let first=input[0];
         let last=input[input.length-1];
         input=input.slice(1,input.length-1);
         output +=(parseInt(first)+parseInt(last)).toString();
         return toTwoDigits(input,output);
       }else{
         let first=input[0];
         let last=input[input.length-1];
         input="";
         output +=(parseInt(first)+parseInt(last)).toString();
         return toTwoDigits(input,output);
       }
       
     }else{
       
       if(input.length==1){
         output +=input;
         input="";
         return toTwoDigits(input,output);
       }else{
         let first=input[0];
         let last=input[input.length-1];
         input=input.slice(1,input.length-1);
         output +=(parseInt(first)+parseInt(last)).toString();
         return toTwoDigits(input,output)
       }
       
   
     }
     
   
     
   }
   
   function oparation(personA,personB){
     let input=personA+' matches '+personB;
     let output=stringTodecimal(input);
        while(output.length>2){
         output=toTwoDigits(output,"");
        }
        if(parseInt(output)>79){
          console.log(input+' '+output+', good match');
        }else{
         console.log(input+' '+output);
        }
          
        }
oparation("Jack","Jill");
   
   
   
   