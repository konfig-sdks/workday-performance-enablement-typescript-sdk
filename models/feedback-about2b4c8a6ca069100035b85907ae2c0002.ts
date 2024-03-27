/*
performanceEnablement

The Performance Management service enables applications to access and create feedback about workers in the system.

The version of the OpenAPI document: v5


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { INSTANCEMODELREFERENCE } from './instancemodelreference';

/**
 * The \\~worker\\~ this feedback event is about. This CRF should only be utilized for anytime feedback events.
 * @export
 * @interface FeedbackAbout2b4c8a6ca069100035b85907ae2c0002
 */
export interface FeedbackAbout2b4c8a6ca069100035b85907ae2c0002 {
    /**
     * wid / id / reference id
     * @type {string}
     * @memberof FeedbackAbout2b4c8a6ca069100035b85907ae2c0002
     */
    'id': string;
    /**
     * A description of the instance
     * @type {string}
     * @memberof FeedbackAbout2b4c8a6ca069100035b85907ae2c0002
     */
    'descriptor'?: string;
    /**
     * A link to the instance
     * @type {string}
     * @memberof FeedbackAbout2b4c8a6ca069100035b85907ae2c0002
     */
    'href'?: string;
}

