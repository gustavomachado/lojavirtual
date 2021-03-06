/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ClientcontrollerApi {

    protected basePath = 'https://localhost:7001/ws-lojavirtual/api';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * 
     * @summary Cria um cliente
     * @param client Cliente
     */
    public createClientUsingPOST(client: models.Client, extraHttpRequestParams?: any): Observable<models.Client> {
        return this.createClientUsingPOSTWithHttpInfo(client, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary Deletar um cliente pelo ID
     * @param id Id do cliente
     */
    public deleteClientUsingDELETE(id: number, extraHttpRequestParams?: any): Observable<models.Client> {
        return this.deleteClientUsingDELETEWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary Encontra um cliente pelo ID
     * @param id Id do Cliente
     */
    public findClientUsingGET(id: number, extraHttpRequestParams?: any): Observable<models.Client> {
        return this.findClientUsingGETWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary busca todos os aparelhos com paginação
     * @param page page
     * @param count count
     * @param order order
     * @param sort sort
     */
    public getAllClientPaginatedUsingGET(page?: number, count?: number, order?: string, sort?: string, extraHttpRequestParams?: any): Observable<models.PageClient> {
        return this.getAllClientPaginatedUsingGETWithHttpInfo(page, count, order, sort, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary getAllClient
     */
    public getAllClientUsingGET(extraHttpRequestParams?: any): Observable<models.IterableClient> {
        return this.getAllClientUsingGETWithHttpInfo(extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary Busca clientes pelo cpf
     * @param cpf Cfp do cliente
     */
    public searchClientByCpfUsingGET(cpf: string, extraHttpRequestParams?: any): Observable<Array<models.Client>> {
        return this.searchClientByCpfUsingGETWithHttpInfo(cpf, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary Busca clientes pelo nome
     * @param nome Nome do cliente
     */
    public searchClientByNomeUsingGET(nome: string, extraHttpRequestParams?: any): Observable<Array<models.Client>> {
        return this.searchClientByNomeUsingGETWithHttpInfo(nome, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary Atualiza cliente
     * @param client Cliente
     */
    public updateClientUsingPUT(client: models.Client, extraHttpRequestParams?: any): Observable<models.Client> {
        return this.updateClientUsingPUTWithHttpInfo(client, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * Cria um cliente
     * 
     * @param client Cliente
     */
    public createClientUsingPOSTWithHttpInfo(client: models.Client, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/client';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'client' is not null or undefined
        if (client === null || client === undefined) {
            throw new Error('Required parameter client was null or undefined when calling createClientUsingPOST.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            '*/*'
        ];

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: client == null ? '' : JSON.stringify(client), // https://github.com/angular/angular/issues/10612
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Deletar um cliente pelo ID
     * 
     * @param id Id do cliente
     */
    public deleteClientUsingDELETEWithHttpInfo(id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/client/${id}'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteClientUsingDELETE.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            '*/*'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Delete,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Encontra um cliente pelo ID
     * 
     * @param id Id do Cliente
     */
    public findClientUsingGETWithHttpInfo(id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/client/${id}'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findClientUsingGET.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            '*/*'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * busca todos os aparelhos com paginação
     * 
     * @param page page
     * @param count count
     * @param order order
     * @param sort sort
     */
    public getAllClientPaginatedUsingGETWithHttpInfo(page?: number, count?: number, order?: string, sort?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/client';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (page !== undefined) {
            queryParameters.set('page', <any>page);
        }

        if (count !== undefined) {
            queryParameters.set('count', <any>count);
        }

        if (order !== undefined) {
            queryParameters.set('order', <any>order);
        }

        if (sort !== undefined) {
            queryParameters.set('sort', <any>sort);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            '*/*'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * getAllClient
     * 
     */
    public getAllClientUsingGETWithHttpInfo(extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/client/findAll';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            '*/*'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Busca clientes pelo cpf
     * 
     * @param cpf Cfp do cliente
     */
    public searchClientByCpfUsingGETWithHttpInfo(cpf: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/client/cpf/${cpf}'
                    .replace('${' + 'cpf' + '}', String(cpf));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'cpf' is not null or undefined
        if (cpf === null || cpf === undefined) {
            throw new Error('Required parameter cpf was null or undefined when calling searchClientByCpfUsingGET.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            '*/*'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Busca clientes pelo nome
     * 
     * @param nome Nome do cliente
     */
    public searchClientByNomeUsingGETWithHttpInfo(nome: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/client/nome/${nome}'
                    .replace('${' + 'nome' + '}', String(nome));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'nome' is not null or undefined
        if (nome === null || nome === undefined) {
            throw new Error('Required parameter nome was null or undefined when calling searchClientByNomeUsingGET.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            '*/*'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Atualiza cliente
     * 
     * @param client Cliente
     */
    public updateClientUsingPUTWithHttpInfo(client: models.Client, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/client';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'client' is not null or undefined
        if (client === null || client === undefined) {
            throw new Error('Required parameter client was null or undefined when calling updateClientUsingPUT.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            '*/*'
        ];

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: client == null ? '' : JSON.stringify(client), // https://github.com/angular/angular/issues/10612
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
