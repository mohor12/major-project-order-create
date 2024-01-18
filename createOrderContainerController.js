({
	doInit : function(component, event, helper) {
        debugger;
		var recordtypeId=component.get("v.pageReference").state.recordTypeId;
        component.set("v.recordTypeId",recordtypeId);
	},
    onPageReferenceChange:function(component, event, helper){
    	$A.get('e.force:refreshView').fire();
	},
 	closeModal:function(component, event, helper){
    	$A.get('e.force:closeQuickAction').fire();
	}
})