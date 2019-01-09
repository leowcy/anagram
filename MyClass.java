package myclass;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.Arrays;
import java.util.Scanner;


public class MyClass{
    
	public static int flag = 0;
	public static String[] outcome = new String[1000000];
	
    //check the String if it is an English word
    public static boolean check_for_word(String word) {
        
        try {
            BufferedReader in = new BufferedReader(new FileReader(
                    "/usr/share/dict/american-english"));
            String str;
            while ((str = in.readLine()) != null) {
                if ( str.equals(word) ) {
                    return true;
                }
            }
            in.close();
        } catch (IOException e) {
        }

        return false;
    }
    
    public static void possibleStrings(int maxLength, char[] alphabet, String curr) {
    	
    	
    	
        // If the current string has reached it's maximum length
        if( curr.length() == maxLength) 
        {	
        	//decide whether there is duplicate Strings. If yes, discard it. No, check_for_word for it.
        	if(	!Arrays.stream(outcome).anyMatch(curr::equals) ) {
        		outcome[flag] = curr;
        		flag++;
        		
        		//check the string is English word or not
        		if( check_for_word(outcome[flag-1]) ) {
            		System.out.println(maxLength+ " Letter Word(s): " + outcome[flag-1]);
            		}
        	}
        	
        	
        	
        	

        // Else add each letter from the alphabet to new strings and process these new strings again
        }
        
        else 
        {
            for(int i = 0; i < alphabet.length; i++) {
            		String oldCurr = curr;
            		curr += alphabet[i];
                
            	//	System.out.println("output instant curr: "+curr);
                
            		possibleStrings(maxLength,alphabet,curr);
                
            		curr = oldCurr;
            	//	System.out.println("1");
            }
        }
        
        
    }
    

    //main function
    public static void main(String args[]) {
    	
        Scanner reader = new Scanner(System.in); 
        
        System.out.println("Input a String or Any word you like: ");
        
        String s = reader.nextLine();
        
        char[] array = s.toCharArray();
        
        int l = array.length;
        
        for(int maxlength = l; maxlength >=2; maxlength --) {
        	possibleStrings(maxlength, array, "");
        }
            
        
		
		/*
		 * if( check_for_word(s) == true) {
		 * System.out.println("The word "+s+" is an English word."); }
		 */
    }
}
