//#region "400"
/**
 * Represents the HTTP 400 status code.
 */
export const HTTP_400_CODE = 400;
/**
 * Represents the name of the HTTP 400 status code - Bad Request.
 */
export const HTTP_400_NAME = 'Bad Request';
/**
 * The description for HTTP 400 status code.
 * The server could not understand the request due to invalid syntax.
 */
export const HTTP_400_DESCRIPTION =
  'The server could not understand the request due to invalid syntax.';
//#endregion "400"

//#region "401"
/**
 * HTTP status code for Unauthorized (401).
 */
export const HTTP_401_CODE = 401;
/**
 * The name for HTTP 401 status code.
 */
export const HTTP_401_NAME = 'Unauthorized';
/**
 * Description for HTTP_401_DESCRIPTION constant.
 * The client must authenticate itself to get the requested response.
 */
export const HTTP_401_DESCRIPTION =
  'The client must authenticate itself to get the requested response.';
//#endregion "401"

//#region "402"
/**
 * HTTP status code for Payment Required (402).
 */
export const HTTP_402_CODE = 402;
/**
 * Represents the name of the HTTP 402 status code - Payment Required.
 */
export const HTTP_402_NAME = 'Payment Required';
/**
 * Description for HTTP_402_DESCRIPTION constant.
 * This response code is reserved for future use.
 */
export const HTTP_402_DESCRIPTION =
  'This response code is reserved for future use.';
//#endregion "402"

//#region "403"
/**
 * HTTP 403 status code constant.
 */
export const HTTP_403_CODE = 403;
/**
 * The name constant for HTTP 403 status code.
 */
export const HTTP_403_NAME = 'Forbidden';
/**
 * Description for HTTP_403_DESCRIPTION constant.
 * The client does not have access rights to the content.
 */
export const HTTP_403_DESCRIPTION =
  'The client does not have access rights to the content.';
//#endregion "403"

//#region "404"
/**
 * HTTP status code for Not Found (404).
 */
export const HTTP_404_CODE = 404;
/**
 * The name for the HTTP 404 status code.
 */
export const HTTP_404_NAME = 'Not Found';
/**
 * Description for HTTP_404_DESCRIPTION constant.
 * Represents the message displayed when the server cannot find the requested resource.
 */
export const HTTP_404_DESCRIPTION =
  'The server can not find the requested resource.';
//#endregion "404"

//#region "405"
/**
 * HTTP status code constant for 405 - Method Not Allowed.
 */
export const HTTP_405_CODE = 405;
/**
 * The name of the HTTP 405 status code, which indicates that the method specified in the request is not allowed for the target resource.
 */
export const HTTP_405_NAME = 'Method Not Allowed';
/**
 * Description for HTTP_405_DESCRIPTION constant.
 * The request method is known by the server but has been disabled and cannot be used.
 */
export const HTTP_405_DESCRIPTION =
  'The request method is known by the server but has been disabled and cannot be used.';
//#endregion "405"

//#region "406"
/**
 * HTTP status code constant for 406 - Not Acceptable.
 */
export const HTTP_406_CODE = 406;
/**
 * Represents the name for HTTP status code 406 - Not Acceptable.
 */
export const HTTP_406_NAME = 'Not Acceptable';
/**
 * The server cannot produce a response matching the list of acceptable values defined in the request's proactive content negotiation headers.
 */
export const HTTP_406_DESCRIPTION =
  "The server cannot produce a response matching the list of acceptable values defined in the request's proactive content negotiation headers.";
//#endregion "406"

//#region "407"
/**
 * HTTP status code for 407 - Proxy Authentication Required.
 */
export const HTTP_407_CODE = 407;
/**
 * The name of the HTTP status code 407.
 */
export const HTTP_407_NAME = 'Proxy Authentication Required';
/**
 * Description for HTTP_407_DESCRIPTION constant.
 * The client must first authenticate itself with the proxy.
 */
export const HTTP_407_DESCRIPTION =
  'The client must first authenticate itself with the proxy.';
//#endregion "407"

//#region "408"
/**
 * Represents the HTTP status code 408 - Request Timeout.
 */
export const HTTP_408_CODE = 408;
/**
 * Represents the name of the HTTP 408 status code - Request Timeout.
 */
export const HTTP_408_NAME = 'Request Timeout';
/**
 * Description for HTTP_408_DESCRIPTION constant.
 * The server would like to shut down this unused connection.
 */
export const HTTP_408_DESCRIPTION =
  'The server would like to shut down this unused connection.';
//#endregion "408"

//#region "409"
/**
 * HTTP status code for Conflict (409).
 */
export const HTTP_409_CODE = 409;
/**
 * The name constant for HTTP status code 409 - Conflict.
 */
export const HTTP_409_NAME = 'Conflict';
/**
 * Description for HTTP_409_DESCRIPTION constant.
 *
 * The request could not be completed due to a conflict with the current state of the target resource.
 */
export const HTTP_409_DESCRIPTION =
  'The request could not be completed due to a conflict with the current state of the target resource.';
//#endregion "409"

//#region "410"
/**
 * HTTP status code for Gone (410).
 */
export const HTTP_410_CODE = 410;
/**
 * Represents the name of the HTTP status code 410 - Gone.
 */
export const HTTP_410_NAME = 'Gone';
/**
 * HTTP 410 Description
 *
 * The content has been permanently deleted from the server, with no forwarding address.
 */
export const HTTP_410_DESCRIPTION =
  'The content has been permanently deleted from server, with no forwarding address.';
//#endregion "410"

//#region "411"
/**
 * HTTP 411 status code constant.
 */
export const HTTP_411_CODE = 411;
/**
 * Represents the HTTP status code name for 411 Length Required.
 */
export const HTTP_411_NAME = 'Length Required';
/**
 * The server refuses to accept the request without a defined Content-Length header.
 */
export const HTTP_411_DESCRIPTION =
  'The server refuses to accept the request without a defined Content-Length header.';
//#endregion "411"

//#region "412"
/**
 * HTTP status code constant for 412 Precondition Failed.
 */
export const HTTP_412_CODE = 412;
/**
 * The name of the HTTP status code 412.
 */
export const HTTP_412_NAME = 'Precondition Failed';
/**
 * Description for HTTP_412_DESCRIPTION constant.
 *
 * The client has indicated preconditions in its headers which the server does not meet.
 */
export const HTTP_412_DESCRIPTION =
  'The client has indicated preconditions in its headers which the server does not meet.';
//#endregion "412"

//#region "413"
/**
 * HTTP status code for Request Entity Too Large (413).
 */
export const HTTP_413_CODE = 413;
/**
 * Represents the HTTP status code name for 413 - Payload Too Large.
 */
export const HTTP_413_NAME = 'Payload Too Large';
/**
 * Description for HTTP_413_DESCRIPTION constant.
 * Represents the message "Request entity is larger than limits defined by server."
 */
export const HTTP_413_DESCRIPTION =
  'Request entity is larger than limits defined by server.';
//#endregion "413"

//#region "414"
/**
 * HTTP status code constant for 414 Request-URI Too Long.
 */
export const HTTP_414_CODE = 414;
/**
 * Represents the HTTP status code 414 - URI Too Long.
 */
export const HTTP_414_NAME = 'URI Too Long';
/**
 * The description for HTTP status code 414.
 * The URI requested by the client is longer than the server is willing to interpret.
 */
export const HTTP_414_DESCRIPTION =
  'The URI requested by the client is longer than the server is willing to interpret.';
//#endregion "414"

//#region "415"
/**
 * HTTP status code for Unsupported Media Type (415).
 */
export const HTTP_415_CODE = 415;
/**
 * The name for HTTP status code 415 - Unsupported Media Type.
 */
export const HTTP_415_NAME = 'Unsupported Media Type';
/**
 * Description for HTTP_415_DESCRIPTION constant.
 * The media format of the requested data is not supported by the server.
 */
export const HTTP_415_DESCRIPTION =
  'The media format of the requested data is not supported by the server.';
//#endregion "415"

//#region "416"
/**
 * HTTP status code constant for 416 Requested Range Not Satisfiable.
 */
export const HTTP_416_CODE = 416;
/**
 * The name for HTTP status code 416 - Range Not Satisfiable.
 */
export const HTTP_416_NAME = 'Range Not Satisfiable';
/**
 * The description for HTTP 416 status code.
 * The range specified by the Range header field in the request can't be fulfilled.
 */
export const HTTP_416_DESCRIPTION =
  "The range specified by the Range header field in the request can't be fulfilled.";
//#endregion "416"

//#region "417"
/**
 * HTTP status code constant for 417 Expectation Failed.
 */
export const HTTP_417_CODE = 417;
/**
 * Represents the name of the HTTP status code 417 - Expectation Failed.
 */
export const HTTP_417_NAME = 'Expectation Failed';
/**
 * The expectation indicated by the Expect request header field can't be met by the server.
 */
export const HTTP_417_DESCRIPTION =
  "The expectation indicated by the Expect request header field can't be met by the server.";
//#endregion "417"

//#region "418"
/**
 * HTTP status code constant for 418 - I'm a teapot.
 */
export const HTTP_418_CODE = 418;
/**
 * The name of the HTTP 418 status code.
 */
export const HTTP_418_NAME = "I'm a teapot";
/**
 * HTTP 418 Description
 *
 * This constant represents the description for the HTTP status code 418 - "I'm a teapot".
 * It indicates that any attempt to brew coffee with a teapot should result in this error code.
 */
export const HTTP_418_DESCRIPTION =
  'Any attempt to brew coffee with a teapot should result in the error code "418 I\'m a teapot".';
//#endregion "418"

//#region "421"
/**
 * HTTP status code constant for 421 - Misdirected Request.
 */
export const HTTP_421_CODE = 421;
/**
 * Represents the HTTP status code 421 - Misdirected Request.
 */
export const HTTP_421_NAME = 'Misdirected Request';
/**
 * HTTP 421 - Misdirected Request
 * The request was directed at a server that is not able to produce a response.
 */
export const HTTP_421_DESCRIPTION =
  'The request was directed at a server that is not able to produce a response.';
//#endregion "421"

//#region "422"
/**
 * HTTP status code constant for Unprocessable Entity (422).
 */
export const HTTP_422_CODE = 422;
/**
 * The name constant for HTTP 422 Unprocessable Entity status code.
 */
export const HTTP_422_NAME = 'Unprocessable Entity';
/**
 * Represents the description for HTTP status code 422.
 *
 * (WebDAV) The request was well-formed but was unable to be followed due to semantic errors.
 */
export const HTTP_422_DESCRIPTION =
  '(WebDAV) The request was well-formed but was unable to be followed due to semantic errors.';
//#endregion "422"

//#region "423"
/**
 * HTTP status code for 423 - Locked.
 */
export const HTTP_423_CODE = 423;
/**
 * Represents the HTTP status name for the 423 status code.
 */
export const HTTP_423_NAME = 'Locked';
/**
 * Represents the description for HTTP status code 423.
 * This status code indicates that the resource being accessed is locked.
 * (WebDAV) The resource that is being accessed is locked.
 */
export const HTTP_423_DESCRIPTION =
  '(WebDAV) The resource that is being accessed is locked.';
//#endregion "423"

//#region "424"
/**
 * HTTP status code constant for 424 Failed Dependency.
 */
export const HTTP_424_CODE = 424;
/**
 * The name constant for HTTP status code 424 - Failed Dependency.
 */
export const HTTP_424_NAME = 'Failed Dependency';
/**
 * Represents the description for HTTP status code 424.
 *
 * @remarks
 * This status code is used in WebDAV (Web Distributed Authoring and Versioning) to indicate that the request failed
 * due to the failure of a previous request.
 */
export const HTTP_424_DESCRIPTION =
  '(WebDAV) The request failed due to failure of a previous request.';
//#endregion "424"

//#region "425"
/**
 * HTTP status code constant for 425 (Too Early).
 */
export const HTTP_425_CODE = 425;
/**
 * Represents the HTTP status code 425 - Too Early.
 */
export const HTTP_425_NAME = 'Too Early';
/**
 * HTTP_425_DESCRIPTION represents the description for the HTTP 425 status code.
 * It indicates that the server is unwilling to risk processing a request that might be replayed.
 */
export const HTTP_425_DESCRIPTION =
  'Indicates that the server is unwilling to risk processing a request that might be replayed.';
//#endregion "425"

//#region "426"
/**
 * HTTP status code for Upgrade Required (426).
 */
export const HTTP_426_CODE = 426;
/**
 * Represents the HTTP status code 426 - Upgrade Required.
 */
export const HTTP_426_NAME = 'Upgrade Required';
/**
 * The description for HTTP status code 426.
 * The client should switch to a different protocol such as TLS/1.0.
 */
export const HTTP_426_DESCRIPTION =
  'The client should switch to a different protocol such as TLS/1.0.';
//#endregion "426"

//#region "428"
/**
 * HTTP status code constant for 428 Precondition Required.
 */
export const HTTP_428_CODE = 428;
/**
 * Represents the HTTP status code 428 - Precondition Required.
 */
export const HTTP_428_NAME = 'Precondition Required';
/**
 * HTTP 428 Precondition Required
 * The origin server requires the request to be conditional.
 */
export const HTTP_428_DESCRIPTION =
  'The origin server requires the request to be conditional.';
//#endregion "428"

//#region "429"
/**
 * HTTP status code for Too Many Requests (429).
 */
export const HTTP_429_CODE = 429;
/**
 * The name constant for HTTP status code 429 - Too Many Requests.
 */
export const HTTP_429_NAME = 'Too Many Requests';
/**
 * The user has sent too many requests in a given amount of time ("rate limiting").
 */
export const HTTP_429_DESCRIPTION =
  'The user has sent too many requests in a given amount of time ("rate limiting").';
//#endregion "429"

//#region "431"
/**
 * HTTP status code constant for 431 - Request Header Fields Too Large.
 */
export const HTTP_431_CODE = 431;
/**
 * Represents the HTTP status code 431 - Request Header Fields Too Large.
 */
export const HTTP_431_NAME = 'Request Header Fields Too Large';
/**
 * The description for HTTP status code 431.
 * The server is unwilling to process the request because its header fields are too large.
 */
export const HTTP_431_DESCRIPTION =
  'The server is unwilling to process the request because its header fields are too large.';
//#endregion "431"

//#region "444"
/**
 * Represents the HTTP 444 status code.
 */
export const HTTP_444_CODE = 444;
/**
 * Represents the name of the HTTP 444 status code - Connection Closed Without Response.
 */
export const HTTP_444_NAME = 'Connection Closed Without Response';
/**
 * Description for HTTP_444_DESCRIPTION constant.
 * The server closed the connection without sending any response to the client.
 */
export const HTTP_444_DESCRIPTION =
  'The server closed the connection without sending any response to the client.';
//#endregion "444"

//#region "449"
/**
 * HTTP status code for 449.
 */
export const HTTP_449_CODE = 449;
/**
 * The name of the HTTP status code 449.
 * This status code is used to indicate that the request should be retried after performing the appropriate action.
 */
export const HTTP_449_NAME = 'Retry With';
/**
 * Description for HTTP_449_DESCRIPTION constant.
 * The server cannot honour the request because the user has not provided the required information.
 */
export const HTTP_449_DESCRIPTION =
  'The server cannot honour the request because the user has not provided the required information.';
//#endregion "449"

//#region "450"
/**
 * Represents the HTTP status code 450.
 */
export const HTTP_450_CODE = 450;
/**
 * Represents the HTTP status code 450 - Blocked by Windows Parental Controls.
 */
export const HTTP_450_NAME = 'Blocked by Windows Parental Controls';
/**
 * The description for HTTP status code 450.
 * This status code indicates that the request was blocked by Windows Parental Controls.
 */
export const HTTP_450_DESCRIPTION =
  'The request was blocked by Windows Parental Controls.';
//#endregion "450"

//#region "451"
/**
 * HTTP status code constant for HTTP 451 Unavailable For Legal Reasons.
 */
export const HTTP_451_CODE = 451;
/**
 * Represents the HTTP status code 451 - Unavailable For Legal Reasons.
 */
export const HTTP_451_NAME = 'Unavailable For Legal Reasons';
/**
 * Represents the description for HTTP status code 451.
 * The user requests an illegal resource, such as a web page censored by a government.
 */
export const HTTP_451_DESCRIPTION =
  'The user requests an illegal resource, such as a web page censored by a government.';
//#endregion "451"

//#region "499"
/**
 * Represents the HTTP status code 499.
 */
export const HTTP_499_CODE = 499;
/**
 * Represents the name of the HTTP status code 499 - Client Closed Request.
 */
export const HTTP_499_NAME = 'Client Closed Request';
/**
 * Description for HTTP_499_DESCRIPTION constant.
 * The client has closed the request before the server could send a response.
 */
export const HTTP_499_DESCRIPTION =
  'The client has closed the request before the server could send a response.';
//#endregion "499"
