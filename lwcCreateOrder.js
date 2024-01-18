import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ORDER_OBJECT from "@salesforce/schema/Order"
import ACCOUNTID_FIELD from '@salesforce/schema/Order.AccountId';
import STATUS_FIELD from '@salesforce/schema/Order.Status';
import EFFECTIVEDATE_FIELD from '@salesforce/schema/Order.EffectiveDate';
import BILLINGADDRESS_FIELD from '@salesforce/schema/Order.BillingAddress';
import SHIPPINGADDRESS_FIELD from '@salesforce/schema/Order.ShippingAddress';
import LightningModal from "lightning/modal";
export default class LwcCreateOrder extends LightningElement {
    @api objectApiName;
    errors;
    fields = [ACCOUNTID_FIELD, STATUS_FIELD,EFFECTIVEDATE_FIELD,BILLINGADDRESS_FIELD,SHIPPINGADDRESS_FIELD];

    handleSuccess(event) {
    
        console.log('field:'+ this.fields);
        const evt = new ShowToastEvent({
            title: "Order created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(evt);
        
    }
    closePopup() {
        //this.showSpinner = true;
		this[NavigationMixin.Navigate]({
			type: 'standard__objectPage',
			attributes: {
				objectApiName: 'Order',
				actionName: 'home',
			},
		});
      }
}