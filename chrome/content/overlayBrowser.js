var xulnotifybox = {
  newNotify: function xnb_newNotify(example) {
      xnb_newNotify.i = typeof xnb_newNotify.i === "undefined" ? 0 : xnb_newNotify.i+1;
      var notifyBox = window.getNotificationBox(content);

      switch(example) {
      case 1:
	  notifyBox.appendNotification( "XULit say: NotificationBox is cool, isn't it? ("+xnb_newNotify.i+")", 
					"notify-0"+xnb_newNotify.i, "chrome://xulnotificationbox/content/xulit.ico", 
					notifyBox.PRIORITY_INFO_LOW, null);
	  break;
      case 2:
	  notifyBox.appendNotification( 
	      "XULit say: NotificationBox is cool, isn't it? ("+xnb_newNotify.i+")", 
	      "notify-0"+xnb_newNotify.i, "chrome://xulnotificationbox/content/xulit.ico", 
	      notifyBox.PRIORITY_WARNING_MEDIUM, [
		  { accessKey: "O", label: "Ok", callback: function(msg, btn) { alert("OK"); } },
		  { accessKey: "K", label: "KO", popup: null, callback: function(msg, btn) { alert("KO"); } },
	      ]);
	  break;
      case 3:
	  var msg = notifyBox.appendNotification( 
	      "XULit say: NotificationBox is cool, isn't it? ("+xnb_newNotify.i+")", 
	      "notify-0"+xnb_newNotify.i, "chrome://xulnotificationbox/content/xulit.ico", 
	      notifyBox.PRIORITY_CRITICAL_BLOCK, null);
	  msg.addEventListener("DOMNodeRemoved", function(e) { alert("Closed"); }, false);
	  break;

      }
  }
}