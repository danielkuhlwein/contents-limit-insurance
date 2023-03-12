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
   * Path part for operation getItems
   */
  static readonly GetItemsPath = '/api/contents-limit-insurance-items';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItems$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItems$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ContentsLimitInsurance>>> {

    const rb = new RequestBuilder(this.rootUrl, ContentsLimitInsuranceService.GetItemsPath, 'get');
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
   * To access the full response (for headers, for example), `getItems$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItems$Plain(params?: {
  }): Observable<Array<ContentsLimitInsurance>> {

    return this.getItems$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ContentsLimitInsurance>>) => r.body as Array<ContentsLimitInsurance>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItems()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItems$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ContentsLimitInsurance>>> {

    const rb = new RequestBuilder(this.rootUrl, ContentsLimitInsuranceService.GetItemsPath, 'get');
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
   * To access the full response (for headers, for example), `getItems$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItems(params?: {
  }): Observable<Array<ContentsLimitInsurance>> {

    return this.getItems$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ContentsLimitInsurance>>) => r.body as Array<ContentsLimitInsurance>)
    );
  }

  /**
   * Path part for operation updateItem
   */
  static readonly UpdateItemPath = '/api/contents-limit-insurance-items';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateItem$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateItem$Plain$Response(params?: {
    body?: ContentsLimitInsurance
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, ContentsLimitInsuranceService.UpdateItemPath, 'put');
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
   * To access the full response (for headers, for example), `updateItem$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateItem$Plain(params?: {
    body?: ContentsLimitInsurance
  }): Observable<boolean> {

    return this.updateItem$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateItem()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateItem$Response(params?: {
    body?: ContentsLimitInsurance
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, ContentsLimitInsuranceService.UpdateItemPath, 'put');
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
   * To access the full response (for headers, for example), `updateItem$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateItem(params?: {
    body?: ContentsLimitInsurance
  }): Observable<boolean> {

    return this.updateItem$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation addItem
   */
  static readonly AddItemPath = '/api/contents-limit-insurance-items';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addItem$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  addItem$Plain$Response(params?: {
    body?: ContentsLimitInsurance
  }): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, ContentsLimitInsuranceService.AddItemPath, 'post');
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
   * To access the full response (for headers, for example), `addItem$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  addItem$Plain(params?: {
    body?: ContentsLimitInsurance
  }): Observable<number> {

    return this.addItem$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addItem()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  addItem$Response(params?: {
    body?: ContentsLimitInsurance
  }): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, ContentsLimitInsuranceService.AddItemPath, 'post');
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
   * To access the full response (for headers, for example), `addItem$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  addItem(params?: {
    body?: ContentsLimitInsurance
  }): Observable<number> {

    return this.addItem$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation getCategories
   */
  static readonly GetCategoriesPath = '/api/contents-limit-insurance-items/categories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCategories$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategories$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ContentsLimitInsuranceCategory>>> {

    const rb = new RequestBuilder(this.rootUrl, ContentsLimitInsuranceService.GetCategoriesPath, 'get');
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
   * To access the full response (for headers, for example), `getCategories$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategories$Plain(params?: {
  }): Observable<Array<ContentsLimitInsuranceCategory>> {

    return this.getCategories$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ContentsLimitInsuranceCategory>>) => r.body as Array<ContentsLimitInsuranceCategory>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCategories()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategories$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ContentsLimitInsuranceCategory>>> {

    const rb = new RequestBuilder(this.rootUrl, ContentsLimitInsuranceService.GetCategoriesPath, 'get');
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
   * To access the full response (for headers, for example), `getCategories$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategories(params?: {
  }): Observable<Array<ContentsLimitInsuranceCategory>> {

    return this.getCategories$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ContentsLimitInsuranceCategory>>) => r.body as Array<ContentsLimitInsuranceCategory>)
    );
  }

  /**
   * Path part for operation generateSampleItems
   */
  static readonly GenerateSampleItemsPath = '/api/contents-limit-insurance-items/sample';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `generateSampleItems$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  generateSampleItems$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ContentsLimitInsurance>>> {

    const rb = new RequestBuilder(this.rootUrl, ContentsLimitInsuranceService.GenerateSampleItemsPath, 'post');
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
   * To access the full response (for headers, for example), `generateSampleItems$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  generateSampleItems$Plain(params?: {
  }): Observable<Array<ContentsLimitInsurance>> {

    return this.generateSampleItems$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ContentsLimitInsurance>>) => r.body as Array<ContentsLimitInsurance>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `generateSampleItems()` instead.
   *
   * This method doesn't expect any request body.
   */
  generateSampleItems$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ContentsLimitInsurance>>> {

    const rb = new RequestBuilder(this.rootUrl, ContentsLimitInsuranceService.GenerateSampleItemsPath, 'post');
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
   * To access the full response (for headers, for example), `generateSampleItems$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  generateSampleItems(params?: {
  }): Observable<Array<ContentsLimitInsurance>> {

    return this.generateSampleItems$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ContentsLimitInsurance>>) => r.body as Array<ContentsLimitInsurance>)
    );
  }

  /**
   * Path part for operation deleteItem
   */
  static readonly DeleteItemPath = '/api/contents-limit-insurance-items/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItem$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItem$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, ContentsLimitInsuranceService.DeleteItemPath, 'delete');
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
   * To access the full response (for headers, for example), `deleteItem$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItem$Plain(params: {
    id: number;
  }): Observable<boolean> {

    return this.deleteItem$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItem()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItem$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, ContentsLimitInsuranceService.DeleteItemPath, 'delete');
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
   * To access the full response (for headers, for example), `deleteItem$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItem(params: {
    id: number;
  }): Observable<boolean> {

    return this.deleteItem$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

}
