/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ContentsLimitInsurance } from '../models/contents-limit-insurance';
import { ContentsLimitInsuranceCategory } from '../models/contents-limit-insurance-category';

@Injectable({
  providedIn: 'root',
})
export class ContentsLimitInsuranceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiContentsLimitInsuranceItemsGet
   */
  static readonly ApiContentsLimitInsuranceItemsGetPath = '/api/contents-limit-insurance-items';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContentsLimitInsuranceItemsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContentsLimitInsuranceItemsGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ContentsLimitInsurance>>> {

    const rb = new RequestBuilder(this.rootUrl, ContentsLimitInsuranceService.ApiContentsLimitInsuranceItemsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ContentsLimitInsurance>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiContentsLimitInsuranceItemsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContentsLimitInsuranceItemsGet$Plain(params?: {
  }): Observable<Array<ContentsLimitInsurance>> {

    return this.apiContentsLimitInsuranceItemsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ContentsLimitInsurance>>) => r.body as Array<ContentsLimitInsurance>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContentsLimitInsuranceItemsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContentsLimitInsuranceItemsGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ContentsLimitInsurance>>> {

    const rb = new RequestBuilder(this.rootUrl, ContentsLimitInsuranceService.ApiContentsLimitInsuranceItemsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ContentsLimitInsurance>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiContentsLimitInsuranceItemsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContentsLimitInsuranceItemsGet$Json(params?: {
  }): Observable<Array<ContentsLimitInsurance>> {

    return this.apiContentsLimitInsuranceItemsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ContentsLimitInsurance>>) => r.body as Array<ContentsLimitInsurance>)
    );
  }

  /**
   * Path part for operation apiContentsLimitInsuranceItemsPut
   */
  static readonly ApiContentsLimitInsuranceItemsPutPath = '/api/contents-limit-insurance-items';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContentsLimitInsuranceItemsPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContentsLimitInsuranceItemsPut$Plain$Response(params?: {
    body?: ContentsLimitInsurance
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, ContentsLimitInsuranceService.ApiContentsLimitInsuranceItemsPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiContentsLimitInsuranceItemsPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContentsLimitInsuranceItemsPut$Plain(params?: {
    body?: ContentsLimitInsurance
  }): Observable<boolean> {

    return this.apiContentsLimitInsuranceItemsPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContentsLimitInsuranceItemsPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContentsLimitInsuranceItemsPut$Json$Response(params?: {
    body?: ContentsLimitInsurance
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, ContentsLimitInsuranceService.ApiContentsLimitInsuranceItemsPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiContentsLimitInsuranceItemsPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContentsLimitInsuranceItemsPut$Json(params?: {
    body?: ContentsLimitInsurance
  }): Observable<boolean> {

    return this.apiContentsLimitInsuranceItemsPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation apiContentsLimitInsuranceItemsPost
   */
  static readonly ApiContentsLimitInsuranceItemsPostPath = '/api/contents-limit-insurance-items';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContentsLimitInsuranceItemsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContentsLimitInsuranceItemsPost$Plain$Response(params?: {
    body?: ContentsLimitInsurance
  }): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, ContentsLimitInsuranceService.ApiContentsLimitInsuranceItemsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiContentsLimitInsuranceItemsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContentsLimitInsuranceItemsPost$Plain(params?: {
    body?: ContentsLimitInsurance
  }): Observable<number> {

    return this.apiContentsLimitInsuranceItemsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContentsLimitInsuranceItemsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContentsLimitInsuranceItemsPost$Json$Response(params?: {
    body?: ContentsLimitInsurance
  }): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, ContentsLimitInsuranceService.ApiContentsLimitInsuranceItemsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiContentsLimitInsuranceItemsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContentsLimitInsuranceItemsPost$Json(params?: {
    body?: ContentsLimitInsurance
  }): Observable<number> {

    return this.apiContentsLimitInsuranceItemsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation apiContentsLimitInsuranceItemsCategoriesGet
   */
  static readonly ApiContentsLimitInsuranceItemsCategoriesGetPath = '/api/contents-limit-insurance-items/categories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContentsLimitInsuranceItemsCategoriesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContentsLimitInsuranceItemsCategoriesGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ContentsLimitInsuranceCategory>>> {

    const rb = new RequestBuilder(this.rootUrl, ContentsLimitInsuranceService.ApiContentsLimitInsuranceItemsCategoriesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ContentsLimitInsuranceCategory>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiContentsLimitInsuranceItemsCategoriesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContentsLimitInsuranceItemsCategoriesGet$Plain(params?: {
  }): Observable<Array<ContentsLimitInsuranceCategory>> {

    return this.apiContentsLimitInsuranceItemsCategoriesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ContentsLimitInsuranceCategory>>) => r.body as Array<ContentsLimitInsuranceCategory>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContentsLimitInsuranceItemsCategoriesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContentsLimitInsuranceItemsCategoriesGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ContentsLimitInsuranceCategory>>> {

    const rb = new RequestBuilder(this.rootUrl, ContentsLimitInsuranceService.ApiContentsLimitInsuranceItemsCategoriesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ContentsLimitInsuranceCategory>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiContentsLimitInsuranceItemsCategoriesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContentsLimitInsuranceItemsCategoriesGet$Json(params?: {
  }): Observable<Array<ContentsLimitInsuranceCategory>> {

    return this.apiContentsLimitInsuranceItemsCategoriesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ContentsLimitInsuranceCategory>>) => r.body as Array<ContentsLimitInsuranceCategory>)
    );
  }

  /**
   * Path part for operation apiContentsLimitInsuranceItemsIdDelete
   */
  static readonly ApiContentsLimitInsuranceItemsIdDeletePath = '/api/contents-limit-insurance-items/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContentsLimitInsuranceItemsIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContentsLimitInsuranceItemsIdDelete$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, ContentsLimitInsuranceService.ApiContentsLimitInsuranceItemsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiContentsLimitInsuranceItemsIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContentsLimitInsuranceItemsIdDelete$Plain(params: {
    id: number;
  }): Observable<boolean> {

    return this.apiContentsLimitInsuranceItemsIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContentsLimitInsuranceItemsIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContentsLimitInsuranceItemsIdDelete$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, ContentsLimitInsuranceService.ApiContentsLimitInsuranceItemsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiContentsLimitInsuranceItemsIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContentsLimitInsuranceItemsIdDelete$Json(params: {
    id: number;
  }): Observable<boolean> {

    return this.apiContentsLimitInsuranceItemsIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

}
