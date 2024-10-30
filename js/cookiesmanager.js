/* =========================================================

 * cookiesmanager.js v0.0.1

 * All rights reserved with Faster Themes, http://fasterthemes.com/

 * =========================================================

 * Copyright 2014 fasterthemes.

 * ========================================================= */
jQuery(document).ready(function($) {
	jQuery("#get_cookies_id").trigger('click');  // Handler for .ready() called.  

}); 
  jQuery("#openModel").click(function($){

                ReadCookie();

            });

            function WriteCookie()
            {
                document.mycookisfrm.customer.value="mycookies";
                if( document.mycookisfrm.customer.value == "" ){
                    alert("Enter some value!");
                    return;
                }

                cookievalue= escape(document.mycookisfrm.customer.value) + ";";
                document.cookie="name=" + cookievalue;
                alert("Setting Cookies : " + "name=" + cookievalue );
            }

            function ReadCookie()
            {
                jQuery("#cookiesData").html("");
                var allcookies = document.cookie;
                
                var html="";
                // Get all the cookies pairs in an array
                cookiearray  = allcookies.split(';');
                console.log(cookiearray);
                // Now take key value pair out of this array
				var counter=0;
                var newm="";
                newm+="{"
                for(var i=0; i<cookiearray.length; i++){
                   
                    
                    name = cookiearray[i].split('=')[0];
                    var value = cookiearray[i].split('=')[1];
                    newm+=i+":"
                    if(cookiearray.length !=1){
                        newm+="{"+name+":"+value+"}," 
                    }else{
                        newm+="{"+name+":"+value+"}" 
                    }
					if(name !=" expires" && cookiearray[i] !=""){
	                  
					  if(jQuery.trim(name)=='__utma' || jQuery.trim(name)=='__utmb' || jQuery.trim(name)=='__utmc' || jQuery.trim(name)=='__utmz' || jQuery.trim(name)=='__utmv' || jQuery.trim(name)=='__utmz'){
						  if(counter==1){
						    html +="<tr>";
							html +="<td>Google Analytics</td>";
							html +="<td>These are cookies for Google Analytics</td>";
		 
							html +="<td>Yes <input class='deleterdoyes' type='radio' id='"+jQuery.trim(name)+"_"+jQuery.trim(value)+"_delete_no' name='delete' value=\'"+jQuery.trim(name)+"\'> ";
							html +=" No <input class='deleterdo' type='radio' id=\'"+jQuery.trim(name)+"\' name='delete'> </td>";
		 
							html +="<td><input class='permanent' type='checkbox' id=\'"+jQuery.trim(name)+"\' name='permanent' value=\'"+jQuery.trim(name)+"\'></td>";
		 
							html +="</td>";
	
							html +="</tr>";
						  
						  }
							
					  }else{
						  
						    html +="<tr>";
							html +="<td>"+name+"</td>";
							html +="<td>"+value+"</td>";
		 
							html +="<td> <input class='deleterdoyes' type='radio' id='"+jQuery.trim(name)+"_"+jQuery.trim(value)+"_delete_no' name='delete' value=\'"+jQuery.trim(name)+"\'>Yes";
							html +=" <input class='deleterdo' type='radio' id=\'"+jQuery.trim(name)+"\' name='delete'>No</td>";
		 
							html +="<td><input class='permanent' type='checkbox' id=\'"+jQuery.trim(name)+"\' name='permanent' value=\'"+jQuery.trim(name)+"\'></td>";
		 
							html +="</td>";
	
							html +="</tr>";
						 
					  }
                    }
					counter++;
                }
                newm = newm.replace(/,+jQuery/, '');
                newm+="}"
                console.log(newm[0]);
                jQuery("#cookiesData").html(html);
   
   
   
                jQuery('.deleterdo').click(function(){
                    var name=this.id                    
                    var expires = "";

                       var date = new Date();
                        date.setTime(date.getTime() + (-1 * 60 * 1000));
                        expires = "; expires=" + date.toGMTString();
                   
                        document.cookie = this.id + "=" + this.value + expires + "; path=/";
                   
                });
	
                jQuery('.permanent').click(function(){
                    if(this.checked == true){
                        var name=this.id
                   
                        var expires = "";
                        
                            var date = new Date();
                            date.setTime(date.getTime() + (30 * 60 * 1000));
                            expires = "; expires=" + date.toGMTString();
                   
                            document.cookie = this.id + "=" + this.value + expires + "; path=/";
                       
                    }
 
                });
            }

            function permanentCookie(name,value,days)
            {
                name=escape(document.mycookisfrm.customer.value);
                if(days=="")
                {
                    document.cookie = name + "=" + value + "; path=/";
                }
                else
                {
                        if(name=="")
                        {
                            var name ="name";
                        }

                    var date = new Date();
                    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                    var expires = "; expires=" + date.toGMTString();
                    document.cookie = name + "=" + value +  "; path=/";
 
                }  
            }