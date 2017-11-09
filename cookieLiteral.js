var cookie = {
	
    set: function(cname,cvalue,days,path) {
        var d = new Date();
        d.setTime(d.getTime() + (days*24*60*60*1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },
    
    get: function(cname) {
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
    },
    
    check: function(cname) {
        var cookieName=this.get(cname);
        if (cookieName != "") {
        	console.log(cookieName + " - Cookie is available");
        } else {
        	console.log("Cookie is not available");
        }
    },

    remove: function(cname){
        this.set(cname,"",-1);
        console.log("Cookie has been removed");
    }
    
};