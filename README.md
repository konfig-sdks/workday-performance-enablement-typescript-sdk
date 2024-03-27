<div align="left">

[![Visit Workday](./header.png)](https://workday.com)

# [Workday](https://workday.com)<a id="workday"></a>

The Performance Management service enables applications to access and create feedback about workers in the system.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`workdayperformanceenablement.promptValues.getInstances`](#workdayperformanceenablementpromptvaluesgetinstances)
  * [`workdayperformanceenablement.promptValues.getInstances_0`](#workdayperformanceenablementpromptvaluesgetinstances_0)
  * [`workdayperformanceenablement.promptValues.getInstances_1`](#workdayperformanceenablementpromptvaluesgetinstances_1)
  * [`workdayperformanceenablement.promptValues.getInstances_2`](#workdayperformanceenablementpromptvaluesgetinstances_2)
  * [`workdayperformanceenablement.promptValues.getInstances_3`](#workdayperformanceenablementpromptvaluesgetinstances_3)
  * [`workdayperformanceenablement.feedbackBadges.getById`](#workdayperformanceenablementfeedbackbadgesgetbyid)
  * [`workdayperformanceenablement.feedbackBadges.getCollection`](#workdayperformanceenablementfeedbackbadgesgetcollection)
  * [`workdayperformanceenablement.giveRequestedFeedbackEvents.getCollectionFeedbackEvents`](#workdayperformanceenablementgiverequestedfeedbackeventsgetcollectionfeedbackevents)
  * [`workdayperformanceenablement.giveRequestedFeedbackEvents.getInstance`](#workdayperformanceenablementgiverequestedfeedbackeventsgetinstance)
  * [`workdayperformanceenablement.giveRequestedFeedbackEvents.updateEvent`](#workdayperformanceenablementgiverequestedfeedbackeventsupdateevent)
  * [`workdayperformanceenablement.workers.createFeedbackEvent`](#workdayperformanceenablementworkerscreatefeedbackevent)
  * [`workdayperformanceenablement.workers.getCollectionStaffing`](#workdayperformanceenablementworkersgetcollectionstaffing)
  * [`workdayperformanceenablement.workers.getFeedbackEvent`](#workdayperformanceenablementworkersgetfeedbackevent)
  * [`workdayperformanceenablement.workers.getFeedbackEvents`](#workdayperformanceenablementworkersgetfeedbackevents)
  * [`workdayperformanceenablement.workers.getGoals`](#workdayperformanceenablementworkersgetgoals)
  * [`workdayperformanceenablement.workers.getRequestedEvent`](#workdayperformanceenablementworkersgetrequestedevent)
  * [`workdayperformanceenablement.workers.getRequestedFeedbackEvents`](#workdayperformanceenablementworkersgetrequestedfeedbackevents)
  * [`workdayperformanceenablement.workers.getSelfRequestedFeedback`](#workdayperformanceenablementworkersgetselfrequestedfeedback)
  * [`workdayperformanceenablement.workers.getSelfRequestedFeedbackEvent`](#workdayperformanceenablementworkersgetselfrequestedfeedbackevent)
  * [`workdayperformanceenablement.workers.getSingleGoal`](#workdayperformanceenablementworkersgetsinglegoal)
  * [`workdayperformanceenablement.workers.getStaffingInformation`](#workdayperformanceenablementworkersgetstaffinginformation)
  * [`workdayperformanceenablement.workers.requestFeedbackOnSelfEvents`](#workdayperformanceenablementworkersrequestfeedbackonselfevents)
  * [`workdayperformanceenablement.workers.requestFeedbackOnWorkerEvents`](#workdayperformanceenablementworkersrequestfeedbackonworkerevents)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Workday&serviceName=PerformanceEnablement&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { WorkdayPerformanceEnablement } from "workday-performance-enablement-typescript-sdk";

const workdayperformanceenablement = new WorkdayPerformanceEnablement({
  // Defining the base path is optional and defaults to https://<tenantHostname>/performanceEnablement/v5
  // basePath: "https://<tenantHostname>/performanceEnablement/v5",
  accessToken: "ACCESS_TOKEN",
});

const getInstancesResponse =
  await workdayperformanceenablement.promptValues.getInstances({});

console.log(getInstancesResponse);
```

## Reference<a id="reference"></a>


### `workdayperformanceenablement.promptValues.getInstances`<a id="workdayperformanceenablementpromptvaluesgetinstances"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstancesResponse =
  await workdayperformanceenablement.promptValues.getInstances({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### workers: `string`[]<a id="workers-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/workersToNotify/workersToNotify` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperformanceenablement.promptValues.getInstances_0`<a id="workdayperformanceenablementpromptvaluesgetinstances_0"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstances_0Response =
  await workdayperformanceenablement.promptValues.getInstances_0({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### templateType: `string`<a id="templatetype-string"></a>

The feedback template type for this feedback event, either Feedback on Self, 133de7d11fea10001dbb45a701140098 or Feedback on Worker 133de7d11fea10001dbb45973dec0097. This field is required.

##### worker: `string`<a id="worker-string"></a>

The worker WID. This field is required for the Feedback on Worker template and not supported for the Feedback on Self template. It can\'t be the processing worker.

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/feedbackTemplate/feedbackTemplate` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperformanceenablement.promptValues.getInstances_1`<a id="workdayperformanceenablementpromptvaluesgetinstances_1"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstances_1Response =
  await workdayperformanceenablement.promptValues.getInstances_1({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/feedbackOnWorker/feedbackOnWorker` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperformanceenablement.promptValues.getInstances_2`<a id="workdayperformanceenablementpromptvaluesgetinstances_2"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstances_2Response =
  await workdayperformanceenablement.promptValues.getInstances_2({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### templateType: `string`<a id="templatetype-string"></a>

The feedback template type for this feedback event, either Feedback on Self, 133de7d11fea10001dbb45a701140098 or Feedback on Worker 133de7d11fea10001dbb45973dec0097. This field is required.

##### worker: `string`<a id="worker-string"></a>

The worker WID. This field is required for the Feedback on Worker templateType and not supported for the Feedback on Self templateType. It can\'t be the processing worker.

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/feedbackResponder/feedbackResponder` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperformanceenablement.promptValues.getInstances_3`<a id="workdayperformanceenablementpromptvaluesgetinstances_3"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstances_3Response =
  await workdayperformanceenablement.promptValues.getInstances_3({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### relatesToTag: `string`<a id="relatestotag-string"></a>

The talent tag linked to the feedback question.

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/relatesTo/relatesTo` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperformanceenablement.feedbackBadges.getById`<a id="workdayperformanceenablementfeedbackbadgesgetbyid"></a>

Retrieves a single Feedback Badge instance

Secured by: Give Feedback

Scope: Performance Enablement, Worker Profile and Skills

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse =
  await workdayperformanceenablement.feedbackBadges.getById({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

#### 🔄 Return<a id="🔄-return"></a>

[FeedbackBadgeDetail9eab868ca81410001402525d054211f7](./models/feedback-badge-detail9eab868ca81410001402525d054211f7.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/feedbackBadges/{ID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperformanceenablement.feedbackBadges.getCollection`<a id="workdayperformanceenablementfeedbackbadgesgetcollection"></a>

Retrieves all active Feedback Badges.

Secured by: Give Feedback

Scope: Performance Enablement, Worker Profile and Skills

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCollectionResponse =
  await workdayperformanceenablement.feedbackBadges.getCollection({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[FeedbackBadgesGetCollectionResponse](./models/feedback-badges-get-collection-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/feedbackBadges` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperformanceenablement.giveRequestedFeedbackEvents.getCollectionFeedbackEvents`<a id="workdayperformanceenablementgiverequestedfeedbackeventsgetcollectionfeedbackevents"></a>

Retrieves all requested feedback given events for the user that responded to the feedback request.

Secured by: Self-Service: Role Requested Feedback, Self-Service: Self Requested Feedback

Scope: Performance Enablement, Worker Profile and Skills

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCollectionFeedbackEventsResponse =
  await workdayperformanceenablement.giveRequestedFeedbackEvents.getCollectionFeedbackEvents(
    {}
  );
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[GiveRequestedFeedbackEventsGetCollectionFeedbackEventsResponse](./models/give-requested-feedback-events-get-collection-feedback-events-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/giveRequestedFeedbackEvents` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperformanceenablement.giveRequestedFeedbackEvents.getInstance`<a id="workdayperformanceenablementgiverequestedfeedbackeventsgetinstance"></a>

Retrieves a single requested feedback given event instance for the user that responded to the feedback request.

Secured by: Self-Service: Role Requested Feedback, Self-Service: Self Requested Feedback

Scope: Performance Enablement, Worker Profile and Skills

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstanceResponse =
  await workdayperformanceenablement.giveRequestedFeedbackEvents.getInstance({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

#### 🔄 Return<a id="🔄-return"></a>

[GiveRequestedFeedbackDetailsD396fd5bffec10000e3eba1a70440000](./models/give-requested-feedback-details-d396fd5bffec10000e3eba1a70440000.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/giveRequestedFeedbackEvents/{ID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperformanceenablement.giveRequestedFeedbackEvents.updateEvent`<a id="workdayperformanceenablementgiverequestedfeedbackeventsupdateevent"></a>

Updates the Give Requested Feedback Event that matches the WID in the url, and the current authenticated user is a responder for the event.
This endpoint is equivalent to the Give Requested Feedback task in Workday.

Secured by: Give Requested Feedback REST+TG

Scope: Performance Enablement, Worker Profile and Skills

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEventResponse =
  await workdayperformanceenablement.giveRequestedFeedbackEvents.updateEvent({
    iD: "iD_example",
    dueDate: "2024-03-23T07:00:00.000Z",
    feedbackGivenDate: "2024-03-23T07:00:00.000Z",
    feedbackCreationDate: "2024-03-23T07:00:00.000Z",
    expirationDate: "2024-03-23T07:00:00.000Z",
    displayNameofResponder: true,
    feedbackPrivate: true,
    feedbackConfidential: true,
    descriptor: "Lorem ipsum dolor sit ame",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### dueDate: `string`<a id="duedate-string"></a>

The date the business process needs to be completed.

##### feedbackGivenDate: `string`<a id="feedbackgivendate-string"></a>

The date the feedback was provided.

##### feedbackCreationDate: `string`<a id="feedbackcreationdate-string"></a>

The date the feedback event was created.

##### requestedBy: [`RequestedByD396fd5bffec1000100f44a5808f0006`](./models/requested-by-d396fd5bffec1000100f44a5808f0006.ts)<a id="requestedby-requestedbyd396fd5bffec1000100f44a5808f0006modelsrequested-by-d396fd5bffec1000100f44a5808f0006ts"></a>

##### aboutWorker: [`AboutWorkerD396fd5bffec1000100f44a5808f0005`](./models/about-worker-d396fd5bffec1000100f44a5808f0005.ts)<a id="aboutworker-aboutworkerd396fd5bffec1000100f44a5808f0005modelsabout-worker-d396fd5bffec1000100f44a5808f0005ts"></a>

##### expirationDate: `string`<a id="expirationdate-string"></a>

The date the feedback request expires.

##### displayNameofResponder: `boolean`<a id="displaynameofresponder-boolean"></a>

True if the feedback provider\\\'s name is not displayed.

##### feedbackComments: [`RequestedFeedbackCommentsD396fd5bffec10001393477e77870000`](./models/requested-feedback-comments-d396fd5bffec10001393477e77870000.ts)[]<a id="feedbackcomments-requestedfeedbackcommentsd396fd5bffec10001393477e77870000modelsrequested-feedback-comments-d396fd5bffec10001393477e77870000ts"></a>

The feedback comments for this feedback event. To include feedback comments in reports or notifications intended for Employees, use Feedback Comments for Self-Service Reporting instead.

##### businessProcessParameters: [`BusinessProcessParametersD396fd5bffec1000100f440bde4c0001`](./models/business-process-parameters-d396fd5bffec1000100f440bde4c0001.ts)<a id="businessprocessparameters-businessprocessparametersd396fd5bffec1000100f440bde4c0001modelsbusiness-process-parameters-d396fd5bffec1000100f440bde4c0001ts"></a>

##### feedbackPrivate: `boolean`<a id="feedbackprivate-boolean"></a>

Yes if the feedback is private between the feedback provider and the worker.

##### feedbackConfidential: `boolean`<a id="feedbackconfidential-boolean"></a>

Yes if the feedback is confidential between the feedback provider and the manager. Employees, or who the feedback is about, don\\\'t see confidential feedback.

##### id: `string`<a id="id-string"></a>

Id of the instance

##### descriptor: `string`<a id="descriptor-string"></a>

A preview of the instance

#### 🔄 Return<a id="🔄-return"></a>

[GiveRequestedFeedbackDetailsD396fd5bffec10000e3eba1a70440000](./models/give-requested-feedback-details-d396fd5bffec10000e3eba1a70440000.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/giveRequestedFeedbackEvents/{ID}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperformanceenablement.workers.createFeedbackEvent`<a id="workdayperformanceenablementworkerscreatefeedbackevent"></a>

Creates a single instance of feedback for each of the specified workers with the provided data. The worker is specified by the Workday ID of the worker. You can use a returned id from GET /workers in the Staffing service /staffing.

If you want to see the status of conditionally hidden attributes for this request, call this method with the wd-metadata-api-version header. Set the header value to v1 (or the latest Workday Metadata API version). When you specify the wd-metadata-api-version header, this method returns the response metadata, instead of the actual data.

This endpoint is equivalent to the Give Feedback task in Workday. This endpoint initiates the Give Feedback business process or the Give Feedback to Multiple Recipients business process based on the request.

Secured by: Give Feedback

Scope: Performance Enablement, Worker Profile and Skills

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createFeedbackEventResponse =
  await workdayperformanceenablement.workers.createFeedbackEvent({
    iD: "iD_example",
    hiddenFromWorker: true,
    hiddenFromManager: true,
    comment:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    feedbackGivenDate: "2024-03-23T07:00:00.000Z",
    showFeedbackProviderName: true,
    descriptor: "Lorem ipsum dolor sit ame",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### toWorker: [`ToWorkerF4946919a39f10000f03207b1f230000`](./models/to-worker-f4946919a39f10000f03207b1f230000.ts)<a id="toworker-toworkerf4946919a39f10000f03207b1f230000modelsto-worker-f4946919a39f10000f03207b1f230000ts"></a>

##### workersToNotify: [`WorkersToNotify9e478586f65410001035b6c26a4c0000`](./models/workers-to-notify9e478586f65410001035b6c26a4c0000.ts)[]<a id="workerstonotify-workerstonotify9e478586f65410001035b6c26a4c0000modelsworkers-to-notify9e478586f65410001035b6c26a4c0000ts"></a>

The workers that were selected to be notified of the feedback given event.

##### relatesTo: [`RelatesTo9d12ad407f0f10001c3949add7d40000`](./models/relates-to9d12ad407f0f10001c3949add7d40000.ts)<a id="relatesto-relatesto9d12ad407f0f10001c3949add7d40000modelsrelates-to9d12ad407f0f10001c3949add7d40000ts"></a>

##### businessProcessParameters: [`BusinessProcessParametersAfd6ac52d6251000117d0a60ed8b0000`](./models/business-process-parameters-afd6ac52d6251000117d0a60ed8b0000.ts)<a id="businessprocessparameters-businessprocessparametersafd6ac52d6251000117d0a60ed8b0000modelsbusiness-process-parameters-afd6ac52d6251000117d0a60ed8b0000ts"></a>

##### feedbackAlsoAbout: [`GetWorkersFeedbackAlsoAbout3ab333661034100010b5635b2f7a0302`](./models/get-workers-feedback-also-about3ab333661034100010b5635b2f7a0302.ts)[]<a id="feedbackalsoabout-getworkersfeedbackalsoabout3ab333661034100010b5635b2f7a0302modelsget-workers-feedback-also-about3ab333661034100010b5635b2f7a0302ts"></a>

The other workers this feedback event is about.

##### hiddenFromWorker: `boolean`<a id="hiddenfromworker-boolean"></a>

True if the feedback event is confidential between the feedback provider and the manager. Workers don\\\'t see confidential feedback.

##### hiddenFromManager: `boolean`<a id="hiddenfrommanager-boolean"></a>

True if the feedback event is private between the feedback provider and the worker. Private feedback isn\\\'t shared with managers.

##### comment: `string`<a id="comment-string"></a>

The comment text for an anytime feedback event.

##### fromWorker: [`FromWorkerAfd6ac52d62510001357f891ccfd0001`](./models/from-worker-afd6ac52d62510001357f891ccfd0001.ts)<a id="fromworker-fromworkerafd6ac52d62510001357f891ccfd0001modelsfrom-worker-afd6ac52d62510001357f891ccfd0001ts"></a>

##### badge: [`BadgeAfd6ac52d62510001357f891ccfd0003`](./models/badge-afd6ac52d62510001357f891ccfd0003.ts)<a id="badge-badgeafd6ac52d62510001357f891ccfd0003modelsbadge-afd6ac52d62510001357f891ccfd0003ts"></a>

##### relatedFeedbackEvents: [`RelatedFeedbackEvents9708c966f04f10000e1e9b7f9a5c0000`](./models/related-feedback-events9708c966f04f10000e1e9b7f9a5c0000.ts)[]<a id="relatedfeedbackevents-relatedfeedbackevents9708c966f04f10000e1e9b7f9a5c0000modelsrelated-feedback-events9708c966f04f10000e1e9b7f9a5c0000ts"></a>

The anytime feedback events for the multiple recipients event.

##### feedbackGivenDate: `string`<a id="feedbackgivendate-string"></a>

The date the feedback was provided.

##### showFeedbackProviderName: `boolean`<a id="showfeedbackprovidername-boolean"></a>

True if the feedback provider\\\'s name has chosen to be displayed. Names not chosen to be displayed are not shared.

##### href: `string`<a id="href-string"></a>

A link to the instance

##### id: `string`<a id="id-string"></a>

Id of the instance

##### descriptor: `string`<a id="descriptor-string"></a>

A preview of the instance

#### 🔄 Return<a id="🔄-return"></a>

[FeedbackEventDetailAfd6ac52d62510001086b5c85cd50000](./models/feedback-event-detail-afd6ac52d62510001086b5c85cd50000.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/anytimeFeedbackEvents` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperformanceenablement.workers.getCollectionStaffing`<a id="workdayperformanceenablementworkersgetcollectionstaffing"></a>

Retrieves a collection of workers and current staffing information.

Secured by: Self-Service: Current Staffing Information, Worker Data: Public Worker Reports

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCollectionStaffingResponse =
  await workdayperformanceenablement.workers.getCollectionStaffing({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### includeTerminatedWorkers: `boolean`<a id="includeterminatedworkers-boolean"></a>

Include terminated workers in the output

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### search: `string`<a id="search-string"></a>

Searches workers by name or worker ID. The search is case-insensitive. You can include space-delimited search strings for an OR search.

#### 🔄 Return<a id="🔄-return"></a>

[WorkersGetCollectionStaffingResponse](./models/workers-get-collection-staffing-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperformanceenablement.workers.getFeedbackEvent`<a id="workdayperformanceenablementworkersgetfeedbackevent"></a>

Retrieves a single feedback given event instance with the specified ID.

This endpoint is equivalent to the View Feedback task in Workday.

Secured by: Self-Service: Anytime Feedback, Worker Data: Anytime Feedback

Scope: Performance Enablement, Worker Profile and Skills

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFeedbackEventResponse =
  await workdayperformanceenablement.workers.getFeedbackEvent({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[FeedbackEventDetailAfd6ac52d62510001086b5c85cd50000](./models/feedback-event-detail-afd6ac52d62510001086b5c85cd50000.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/anytimeFeedbackEvents/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperformanceenablement.workers.getFeedbackEvents`<a id="workdayperformanceenablementworkersgetfeedbackevents"></a>

Retrieves all feedback given events about the specified worker. Could also return a feedback multiple recipient event.

This endpoint is equivalent to the View Feedback task in Workday.

Secured by: Self-Service: Anytime Feedback, Worker Data: Anytime Feedback

Scope: Performance Enablement, Worker Profile and Skills

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFeedbackEventsResponse =
  await workdayperformanceenablement.workers.getFeedbackEvents({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[WorkersGetFeedbackEventsResponse](./models/workers-get-feedback-events-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/anytimeFeedbackEvents` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperformanceenablement.workers.getGoals`<a id="workdayperformanceenablementworkersgetgoals"></a>

Retrieves all goals for a worker with the specified ID. You can use a returned id from GET /workers in the Staffing service. The goal data includes name, description, category, tags, associated reviews, due date, completed date, status, creator, worker it is for, supporting organization goal, locked reason, and activity streamable item.

Secured by: Self-Service: Employee Goals, Worker Data: Employee Goals

Scope: Performance Enablement

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getGoalsResponse = await workdayperformanceenablement.workers.getGoals({
  iD: "iD_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[WorkersGetGoalsResponse](./models/workers-get-goals-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/goals` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperformanceenablement.workers.getRequestedEvent`<a id="workdayperformanceenablementworkersgetrequestedevent"></a>

Retrieves a single requested feedback event instance for the specified worker. This endpoint is equivalent to the View Feedback and View Feedback by Request tasks in Workday.

Secured by: Self-Service: Role Requested Feedback, Worker Data: Role Requested Feedback

Scope: Performance Enablement, Worker Profile and Skills

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRequestedEventResponse =
  await workdayperformanceenablement.workers.getRequestedEvent({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[RequestedFeedbackOnWorkerEventDetail2b4c8a6ca069100035b8586e16c20000](./models/requested-feedback-on-worker-event-detail2b4c8a6ca069100035b8586e16c20000.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/requestedFeedbackOnWorkerEvents/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperformanceenablement.workers.getRequestedFeedbackEvents`<a id="workdayperformanceenablementworkersgetrequestedfeedbackevents"></a>

Retrieves all requested feedback events for the specified worker. This endpoint is equivalent to the View Feedback task in Workday.

Secured by: Self-Service: Role Requested Feedback, Worker Data: Role Requested Feedback

Scope: Performance Enablement, Worker Profile and Skills

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRequestedFeedbackEventsResponse =
  await workdayperformanceenablement.workers.getRequestedFeedbackEvents({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[WorkersGetRequestedFeedbackEventsResponse](./models/workers-get-requested-feedback-events-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/requestedFeedbackOnWorkerEvents` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperformanceenablement.workers.getSelfRequestedFeedback`<a id="workdayperformanceenablementworkersgetselfrequestedfeedback"></a>

Retrieves all self-requested feedback events for the specified worker. This endpoint is equivalent to the View Feedback task in Workday.

Secured by: Self-Service: Self Requested Feedback, Worker Data: Self Requested Feedback

Scope: Performance Enablement, Worker Profile and Skills

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSelfRequestedFeedbackResponse =
  await workdayperformanceenablement.workers.getSelfRequestedFeedback({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[WorkersGetSelfRequestedFeedbackResponse](./models/workers-get-self-requested-feedback-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/requestedFeedbackOnSelfEvents` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperformanceenablement.workers.getSelfRequestedFeedbackEvent`<a id="workdayperformanceenablementworkersgetselfrequestedfeedbackevent"></a>

Retrieves a single self-requested feedback event instance for the specified worker. This endpoint is equivalent to the View Feedback and View Feedback by Request tasks in Workday.

Secured by: Self-Service: Self Requested Feedback, Worker Data: Self Requested Feedback

Scope: Performance Enablement, Worker Profile and Skills

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSelfRequestedFeedbackEventResponse =
  await workdayperformanceenablement.workers.getSelfRequestedFeedbackEvent({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[RequestedFeedbackOnSelfEventDetail19acce0101b310002e6bf03e1bbc0000](./models/requested-feedback-on-self-event-detail19acce0101b310002e6bf03e1bbc0000.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/requestedFeedbackOnSelfEvents/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperformanceenablement.workers.getSingleGoal`<a id="workdayperformanceenablementworkersgetsinglegoal"></a>

Retrieves a single goal instance for a worker with the specified ID. The goal data includes name, description, category, tags, associated reviews, due date, completed date, status, creator, worker it is for, supporting organization goal, locked reason, and activity streamable item.

Secured by: Self-Service: Employee Goals, Worker Data: Employee Goals

Scope: Performance Enablement

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSingleGoalResponse =
  await workdayperformanceenablement.workers.getSingleGoal({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[GoalsSummary2c793e888bcd100033e663075a2b0000](./models/goals-summary2c793e888bcd100033e663075a2b0000.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/goals/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperformanceenablement.workers.getStaffingInformation`<a id="workdayperformanceenablementworkersgetstaffinginformation"></a>

Retrieves a collection of workers and current staffing information.

Secured by: Self-Service: Current Staffing Information, Worker Data: Public Worker Reports

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStaffingInformationResponse =
  await workdayperformanceenablement.workers.getStaffingInformation({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

#### 🔄 Return<a id="🔄-return"></a>

[WorkerDataC2466b0778c610000d1936006720000e](./models/worker-data-c2466b0778c610000d1936006720000e.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperformanceenablement.workers.requestFeedbackOnSelfEvents`<a id="workdayperformanceenablementworkersrequestfeedbackonselfevents"></a>

Secured by: Get Feedback on Self REST+TG

Scope: Performance Enablement, Worker Profile and Skills

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const requestFeedbackOnSelfEventsResponse =
  await workdayperformanceenablement.workers.requestFeedbackOnSelfEvents({
    iD: "iD_example",
    expirationDate: "2024-03-23T07:00:00.000Z",
    requestDate: "2024-03-23T07:00:00.000Z",
    feedbackOverallStatus:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    feedbackPrivate: true,
    feedbackResponders: [
      {
        descriptor: "Lorem ipsum dolor sit ame",
      },
    ],
    showFeedbackProviderName: true,
    descriptor: "Lorem ipsum dolor sit ame",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### businessProcessParameters: [`BusinessProcessParameters4db9c44d36231000134c7a5b6f3b0000`](./models/business-process-parameters4db9c44d36231000134c7a5b6f3b0000.ts)<a id="businessprocessparameters-businessprocessparameters4db9c44d36231000134c7a5b6f3b0000modelsbusiness-process-parameters4db9c44d36231000134c7a5b6f3b0000ts"></a>

##### feedbackQuestions: [`RequestedFeedbackQuestionFfdd5de32f7f1000144df0c21e640000`](./models/requested-feedback-question-ffdd5de32f7f1000144df0c21e640000.ts)[]<a id="feedbackquestions-requestedfeedbackquestionffdd5de32f7f1000144df0c21e640000modelsrequested-feedback-question-ffdd5de32f7f1000144df0c21e640000ts"></a>

Feedback questions used in requested feedback events.

##### feedbackAbout: [`FeedbackAbout4db9c44d36231000134c7b8eb3800003`](./models/feedback-about4db9c44d36231000134c7b8eb3800003.ts)<a id="feedbackabout-feedbackabout4db9c44d36231000134c7b8eb3800003modelsfeedback-about4db9c44d36231000134c7b8eb3800003ts"></a>

##### feedbackTemplate: [`FeedbackTemplate4db9c44d36231000134c7b8eb3800000`](./models/feedback-template4db9c44d36231000134c7b8eb3800000.ts)<a id="feedbacktemplate-feedbacktemplate4db9c44d36231000134c7b8eb3800000modelsfeedback-template4db9c44d36231000134c7b8eb3800000ts"></a>

##### expirationDate: `string`<a id="expirationdate-string"></a>

The date the feedback request expires.

##### requestDate: `string`<a id="requestdate-string"></a>

The date the feedback request was initiated.

##### feedbackOverallStatus: `string`<a id="feedbackoverallstatus-string"></a>

Overall status of the requested feedback process.

##### feedbackPrivate: `boolean`<a id="feedbackprivate-boolean"></a>

Private feedback between the feedback provider and the worker. Private feedback isn\\\'t shared with managers.

##### feedbackResponders: [`FeedbackRespondersFfdd5de32f7f100016dbb1b188d70000`](./models/feedback-responders-ffdd5de32f7f100016dbb1b188d70000.ts)[]<a id="feedbackresponders-feedbackrespondersffdd5de32f7f100016dbb1b188d70000modelsfeedback-responders-ffdd5de32f7f100016dbb1b188d70000ts"></a>

The respondents who\\\'ve been requested to provide feedback.

##### showFeedbackProviderName: `boolean`<a id="showfeedbackprovidername-boolean"></a>

Whether to display the name of the responders or have them remain anonymous.

##### descriptor: `string`<a id="descriptor-string"></a>

A preview of the instance

##### id: `string`<a id="id-string"></a>

Id of the instance

#### 🔄 Return<a id="🔄-return"></a>

[RequestedFeedbackOnSelfEventDetail19acce0101b310002e6bf03e1bbc0000](./models/requested-feedback-on-self-event-detail19acce0101b310002e6bf03e1bbc0000.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/requestedFeedbackOnSelfEvents` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperformanceenablement.workers.requestFeedbackOnWorkerEvents`<a id="workdayperformanceenablementworkersrequestfeedbackonworkerevents"></a>

Not applicable.

Secured by: Get Feedback on \~Worker\~ REST+TG

Scope: Performance Enablement, Worker Profile and Skills

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const requestFeedbackOnWorkerEventsResponse =
  await workdayperformanceenablement.workers.requestFeedbackOnWorkerEvents({
    iD: "iD_example",
    feedbackConfidential: true,
    feedbackOverallStatus:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    showFeedbackProviderName: true,
    requestDate: "2024-03-23T07:00:00.000Z",
    expirationDate: "2024-03-23T07:00:00.000Z",
    feedbackResponders: [
      {
        descriptor: "Lorem ipsum dolor sit ame",
      },
    ],
    descriptor: "Lorem ipsum dolor sit ame",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### feedbackAbout: [`FeedbackAbout2b4c8a6ca069100035b85907ae2c0002`](./models/feedback-about2b4c8a6ca069100035b85907ae2c0002.ts)<a id="feedbackabout-feedbackabout2b4c8a6ca069100035b85907ae2c0002modelsfeedback-about2b4c8a6ca069100035b85907ae2c0002ts"></a>

##### feedbackConfidential: `boolean`<a id="feedbackconfidential-boolean"></a>

Yes if the feedback is confidential between the feedback provider and the manager. Workers don\\\'t see confidential feedback.

##### feedbackOverallStatus: `string`<a id="feedbackoverallstatus-string"></a>

Overall status of the requested feedback process.

##### showFeedbackProviderName: `boolean`<a id="showfeedbackprovidername-boolean"></a>

Whether to display the name of the responders or have them remain anonymous.ccc

##### requestDate: `string`<a id="requestdate-string"></a>

The date the feedback request was initiated.

##### expirationDate: `string`<a id="expirationdate-string"></a>

The date the feedback request expires.

##### feedbackQuestions: [`RequestedFeedbackQuestionFfdd5de32f7f1000144df0c21e640000`](./models/requested-feedback-question-ffdd5de32f7f1000144df0c21e640000.ts)[]<a id="feedbackquestions-requestedfeedbackquestionffdd5de32f7f1000144df0c21e640000modelsrequested-feedback-question-ffdd5de32f7f1000144df0c21e640000ts"></a>

Feedback questions used in requested feedback events.

##### feedbackTemplate: [`FeedbackTemplate2b4c8a6ca069100035b859a141200001`](./models/feedback-template2b4c8a6ca069100035b859a141200001.ts)<a id="feedbacktemplate-feedbacktemplate2b4c8a6ca069100035b859a141200001modelsfeedback-template2b4c8a6ca069100035b859a141200001ts"></a>

##### feedbackResponders: [`FeedbackRespondersFfdd5de32f7f100016dbb1b188d70000`](./models/feedback-responders-ffdd5de32f7f100016dbb1b188d70000.ts)[]<a id="feedbackresponders-feedbackrespondersffdd5de32f7f100016dbb1b188d70000modelsfeedback-responders-ffdd5de32f7f100016dbb1b188d70000ts"></a>

The respondents who\\\'ve been requested to provide feedback.

##### businessProcessParameters: [`BusinessProcessParameters2b4c8a6ca069100035b85907ae2c0000`](./models/business-process-parameters2b4c8a6ca069100035b85907ae2c0000.ts)<a id="businessprocessparameters-businessprocessparameters2b4c8a6ca069100035b85907ae2c0000modelsbusiness-process-parameters2b4c8a6ca069100035b85907ae2c0000ts"></a>

##### descriptor: `string`<a id="descriptor-string"></a>

A preview of the instance

##### id: `string`<a id="id-string"></a>

Id of the instance

#### 🔄 Return<a id="🔄-return"></a>

[RequestedFeedbackOnWorkerEventDetail2b4c8a6ca069100035b8586e16c20000](./models/requested-feedback-on-worker-event-detail2b4c8a6ca069100035b8586e16c20000.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/requestedFeedbackOnWorkerEvents` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
