/* tslint:disable */
/* eslint-disable */
/*
performanceEnablement

The Performance Management service enables applications to access and create feedback about workers in the system.

The version of the OpenAPI document: v5


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { setOAuthToObject } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ERRORMODELREFERENCE } from '../models';
// @ts-ignore
import { FeedbackBadgeDetail9eab868ca81410001402525d054211f7 } from '../models';
// @ts-ignore
import { FeedbackBadgesGetCollectionResponse } from '../models';
// @ts-ignore
import { VALIDATIONERRORMODELREFERENCE } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * FeedbackBadgesApi - axios parameter creator
 * @export
 */
export const FeedbackBadgesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves a single Feedback Badge instance  Secured by: Give Feedback  Scope: Performance Enablement, Worker Profile and Skills
         * @summary Retrieves a Feedback Badge with the specified ID.
         * @param {string} iD The Workday ID of the resource.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById: async (iD: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'iD' is not null or undefined
            assertParamExists('getById', 'iD', iD)
            const localVarPath = `/feedbackBadges/{ID}`
                .replace(`{${"ID"}}`, encodeURIComponent(String(iD !== undefined ? iD : `-ID-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/feedbackBadges/{ID}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves all active Feedback Badges.  Secured by: Give Feedback  Scope: Performance Enablement, Worker Profile and Skills
         * @summary Retrieves a collection of active Feedback Badges.
         * @param {number} [limit] The maximum number of objects in a single response. The default is 20. The maximum is 100.
         * @param {number} [offset] The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCollection: async (limit?: number, offset?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/feedbackBadges`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/feedbackBadges',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FeedbackBadgesApi - functional programming interface
 * @export
 */
export const FeedbackBadgesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FeedbackBadgesApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieves a single Feedback Badge instance  Secured by: Give Feedback  Scope: Performance Enablement, Worker Profile and Skills
         * @summary Retrieves a Feedback Badge with the specified ID.
         * @param {FeedbackBadgesApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById(requestParameters: FeedbackBadgesApiGetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FeedbackBadgeDetail9eab868ca81410001402525d054211f7>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById(requestParameters.iD, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves all active Feedback Badges.  Secured by: Give Feedback  Scope: Performance Enablement, Worker Profile and Skills
         * @summary Retrieves a collection of active Feedback Badges.
         * @param {FeedbackBadgesApiGetCollectionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCollection(requestParameters: FeedbackBadgesApiGetCollectionRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FeedbackBadgesGetCollectionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCollection(requestParameters.limit, requestParameters.offset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FeedbackBadgesApi - factory interface
 * @export
 */
export const FeedbackBadgesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FeedbackBadgesApiFp(configuration)
    return {
        /**
         * Retrieves a single Feedback Badge instance  Secured by: Give Feedback  Scope: Performance Enablement, Worker Profile and Skills
         * @summary Retrieves a Feedback Badge with the specified ID.
         * @param {FeedbackBadgesApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById(requestParameters: FeedbackBadgesApiGetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<FeedbackBadgeDetail9eab868ca81410001402525d054211f7> {
            return localVarFp.getById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves all active Feedback Badges.  Secured by: Give Feedback  Scope: Performance Enablement, Worker Profile and Skills
         * @summary Retrieves a collection of active Feedback Badges.
         * @param {FeedbackBadgesApiGetCollectionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCollection(requestParameters: FeedbackBadgesApiGetCollectionRequest = {}, options?: AxiosRequestConfig): AxiosPromise<FeedbackBadgesGetCollectionResponse> {
            return localVarFp.getCollection(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getById operation in FeedbackBadgesApi.
 * @export
 * @interface FeedbackBadgesApiGetByIdRequest
 */
export type FeedbackBadgesApiGetByIdRequest = {
    
    /**
    * The Workday ID of the resource.
    * @type {string}
    * @memberof FeedbackBadgesApiGetById
    */
    readonly iD: string
    
}

/**
 * Request parameters for getCollection operation in FeedbackBadgesApi.
 * @export
 * @interface FeedbackBadgesApiGetCollectionRequest
 */
export type FeedbackBadgesApiGetCollectionRequest = {
    
    /**
    * The maximum number of objects in a single response. The default is 20. The maximum is 100.
    * @type {number}
    * @memberof FeedbackBadgesApiGetCollection
    */
    readonly limit?: number
    
    /**
    * The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.
    * @type {number}
    * @memberof FeedbackBadgesApiGetCollection
    */
    readonly offset?: number
    
}

/**
 * FeedbackBadgesApiGenerated - object-oriented interface
 * @export
 * @class FeedbackBadgesApiGenerated
 * @extends {BaseAPI}
 */
export class FeedbackBadgesApiGenerated extends BaseAPI {
    /**
     * Retrieves a single Feedback Badge instance  Secured by: Give Feedback  Scope: Performance Enablement, Worker Profile and Skills
     * @summary Retrieves a Feedback Badge with the specified ID.
     * @param {FeedbackBadgesApiGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedbackBadgesApiGenerated
     */
    public getById(requestParameters: FeedbackBadgesApiGetByIdRequest, options?: AxiosRequestConfig) {
        return FeedbackBadgesApiFp(this.configuration).getById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves all active Feedback Badges.  Secured by: Give Feedback  Scope: Performance Enablement, Worker Profile and Skills
     * @summary Retrieves a collection of active Feedback Badges.
     * @param {FeedbackBadgesApiGetCollectionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedbackBadgesApiGenerated
     */
    public getCollection(requestParameters: FeedbackBadgesApiGetCollectionRequest = {}, options?: AxiosRequestConfig) {
        return FeedbackBadgesApiFp(this.configuration).getCollection(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
