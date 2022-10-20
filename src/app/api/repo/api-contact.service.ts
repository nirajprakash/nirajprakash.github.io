import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

// Services
import { ApiService } from '../common/api.service';
import { ApiConstants, API_CONSTANTS } from '../api_constants';

// Params
import { ParamContactFlowRes, ParamPostContact } from '../params/contact-param';


@Injectable({
  providedIn: 'root'
})
export class ApiContactService {

	constructor(
		private apiService: ApiService,
		@Inject(API_CONSTANTS) public apiConstants: ApiConstants
	) { }



	add(contact: ParamPostContact): Observable<ParamPostContact> {
		// console.log(data);

		const params = contact;

		const urlPath = this.apiConstants.contact().contacts;
		return this.apiService.post(urlPath, params);
	}



}
