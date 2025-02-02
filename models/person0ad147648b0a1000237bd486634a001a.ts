/*
performanceEnablement

The Performance Management service enables applications to access and create feedback about workers in the system.

The version of the OpenAPI document: v5


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PersonDataViewBe343791f59d100028d6a277ca8a0017 } from './person-data-view-be343791f59d100028d6a277ca8a0017';

/**
 * Person for the \\~Worker\\~
 * @export
 * @interface Person0ad147648b0a1000237bd486634a001a
 */
export interface Person0ad147648b0a1000237bd486634a001a {
    /**
     * Returns the primary public work phone number for the worker.
     * @type {string}
     * @memberof Person0ad147648b0a1000237bd486634a001a
     */
    'phone'?: string;
    /**
     * Returns the public primary work email address for the worker.
     * @type {string}
     * @memberof Person0ad147648b0a1000237bd486634a001a
     */
    'email'?: string;
    /**
     * Id of the instance
     * @type {string}
     * @memberof Person0ad147648b0a1000237bd486634a001a
     */
    'id'?: string;
}

