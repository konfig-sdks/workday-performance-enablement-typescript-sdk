/*
performanceEnablement

The Performance Management service enables applications to access and create feedback about workers in the system.

The version of the OpenAPI document: v5


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { INSTANCEMODELREFERENCE } from './instancemodelreference';

/**
 * Returns the most recent Organization \\~Goals\\~ this \\~Goal\\~ supports. This excludes any changes made to the \\~Goal\\~ in an \\~employee\\~ \\~review\\~ that is still in progress.
 * @export
 * @interface Supports9df8579a128710001ac8e9879d1f0000
 */
export interface Supports9df8579a128710001ac8e9879d1f0000 {
    /**
     * wid / id / reference id
     * @type {string}
     * @memberof Supports9df8579a128710001ac8e9879d1f0000
     */
    'id': string;
    /**
     * A description of the instance
     * @type {string}
     * @memberof Supports9df8579a128710001ac8e9879d1f0000
     */
    'descriptor'?: string;
    /**
     * A link to the instance
     * @type {string}
     * @memberof Supports9df8579a128710001ac8e9879d1f0000
     */
    'href'?: string;
}

