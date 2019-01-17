//Compare the String in array is Anagram or not and Find all of them
//Algorithm solution: 1. Compare length 2. Contain the alphabet or not 3. The frequency of the alphabet

//define an outcome array to store the output value, flag is the pointer
var outcome = [];
var flag = 0;

function AnagramCompare (a, b) {
	//Normal check
	if( a == null || b == null || a == "" || b == ""){
		throw new Error('Not exist');
	}
	
	//check for length
	if( a.length != b.length ) {
		return false;
	}

	//change to lower case for better comparison
	a = a.toLowerCase();
	b = b.toLowerCase();

	//check whether Contain the alphabet between two String
	//First initial a map with the letter and frequencies of the string
	var map = new Map();

	//for String a in the Map
	for(var n1 = 0; n1<a.length; n1++){
		var alphabet = a.charAt(n1);
		if (!map.has(alphabet)){
			map.set(alphabet, 1);
		}	else	{
			var frequency = map.get(alphabet);
			map.set(alphabet, ++frequency);
		}
	}

	//for String b in the Map. Compare with the value a stored in Map. 
	for(var n2 = 0; n2<b.length; n2++){
		var alphabet2 = b.charAt(n2);

		if(!map.has(alphabet2)){
			return false;
		}	else {
			var frequency2 = map.get(alphabet2);
			
			if (frequency2 == 0) {
				return false;
			}	else {
				map.set(alphabet2, --frequency2);
			}
		}
	}

	return true;
	
}

//Establish a function to Compare the element in String array using the AnagramCompart function
function ana(input_string_array) {

	var l = input_string_array.length;
	for(var n3 = 0, n4 = n3+1 ; n4<l; n4++){
		
		if(n4 < l-1){

			if(AnagramCompare(input_string_array[n3], input_string_array[n4])){
				
				if(outcome.indexOf(input_string_array[n3])==-1 ){
					outcome[flag] = input_string_array[n3];
					flag++;
				}
				if(outcome.indexOf(input_string_array[n4])==-1 ){
					outcome[flag] = input_string_array[n4];
					flag++;
				}
				
			}	
		}	else	{

			//compare
			if(AnagramCompare(input_string_array[n3], input_string_array[n4])){
				
				if(outcome.indexOf(input_string_array[n3])==-1 ){
					outcome[flag] = input_string_array[n3];
					flag++;
				}
				if(outcome.indexOf(input_string_array[n4])==-1 ){
					outcome[flag] = input_string_array[n4];
					flag++;
				}
				
				
			}	else	{
				
				//even if not find the anagram pair, we still store the sting and output it as null
				if( outcome.indexOf(input_string_array[n3]) == -1){
					outcome[flag] = input_string_array[n3];
					flag++;
				}
			}

			//set an Change line flag
			outcome[flag] = "/";
			flag++;

			n3++;
			n4 = n3; //n4 = n3 is enough because at then end of the loop, n4++ will take effect. 
					 //In fact n4 = n3 + 1
		}
	}

	//If the last string in array has no anagram pair, write it into the outcome and output null
	if (n3 == l-1 && outcome.indexOf(input_string_array[n3] == -1) ){
		outcome[flag] = input_string_array[n3];
	}

	//console.log("%s\t",outcome);
	//Output the outcome 
	for(var n5 = 0; n5<outcome.length; n5++){
		if(outcome[n5]!= "/" && n5 != outcome.length-1){
			process.stdout.write(outcome[n5]+" ");
		}	else if(outcome[n5-1]!="/")	{          
			console.log("");
		}	else if(outcome[n5] != "/" && n5 == outcome.length-1){
			console.log(outcome[n5])
		}
	}
}


var input = ["awt", "wat", "atw","wta" ,"cap", "pac", "apc", "pca", "mat" ];

console.log("Input string array is: "+input+"\n");  
process.stdout.write('Output is: \n');

ana(input);