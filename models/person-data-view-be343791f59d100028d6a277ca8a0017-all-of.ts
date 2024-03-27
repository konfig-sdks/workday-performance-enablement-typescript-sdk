/*
performanceEnablement

The Performance Management service enables applications to access and create feedback about workers in the system.

The version of the OpenAPI document: v5


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface PersonDataViewBe343791f59d100028d6a277ca8a0017AllOf
 */
export interface PersonDataViewBe343791f59d100028d6a277ca8a0017AllOf {
    /**
     * Returns the primary public work phone number for the worker.
     * @type {string}
     * @memberof PersonDataViewBe343791f59d100028d6a277ca8a0017AllOf
     */
    'phone'?: string;
    /**
     * Returns the public primary work email address for the worker.
     * @type {string}
     * @memberof PersonDataViewBe343791f59d100028d6a277ca8a0017AllOf
     */
    'email'?: string;
    /**
     * Id of the instance
     * @type {string}
     * @memberof PersonDataViewBe343791f59d100028d6a277ca8a0017AllOf
     */
    'id'?: string;
}

