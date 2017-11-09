var cookie = (function(){
	
    function set(cname,cvalue,days,path) {
        var d = new Date();
        d.setTime(d.getTime() + (days*24*60*60*1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    
    function get(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    
    function check(cname) {
        var cookieName=this.get(cname);
        if (cookieName != "") {
        	console.log(cookieName + " - Cookie is available");
        } else {
        	console.log("Cookie is not available");
        }
    }
    
    function remove(cname){
    	set(cname,"",-1);
        console.log("Cookie has been removed");
    }
    
    return {
    	set: set,
        get: get,
        check: check,
        remove: remove
    }
    
})();