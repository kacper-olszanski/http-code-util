import { StatusCodeInfo } from "../types/types.js";
import { 
    HTTP_500_CODE, HTTP_500_DESCRIPTION, HTTP_500_NAME, 
    HTTP_501_CODE, HTTP_501_DESCRIPTION, HTTP_501_NAME, 
    HTTP_502_CODE, HTTP_502_DESCRIPTION, HTTP_502_NAME, 
    HTTP_503_CODE, HTTP_503_DESCRIPTION, HTTP_503_NAME, 
    HTTP_504_CODE, HTTP_504_DESCRIPTION, HTTP_504_NAME, 
    HTTP_505_CODE, HTTP_505_DESCRIPTION, HTTP_505_NAME, 
    HTTP_506_CODE, HTTP_506_DESCRIPTION, HTTP_506_NAME, 
    HTTP_507_CODE, HTTP_507_DESCRIPTION, HTTP_507_NAME, 
    HTTP_508_CODE, HTTP_508_DESCRIPTION, HTTP_508_NAME, 
    HTTP_510_CODE, HTTP_510_DESCRIPTION, HTTP_510_NAME, 
    HTTP_511_CODE, HTTP_511_DESCRIPTION, HTTP_511_NAME, 
    HTTP_599_CODE, HTTP_599_DESCRIPTION, HTTP_599_NAME 
} from "./5XX-constants.js";

export const HTTP_5XX_CODES = [
    HTTP_500_CODE, HTTP_501_CODE, HTTP_502_CODE, HTTP_503_CODE, 
    HTTP_504_CODE, HTTP_505_CODE, HTTP_506_CODE, HTTP_507_CODE, 
    HTTP_508_CODE, HTTP_510_CODE, HTTP_511_CODE, HTTP_599_CODE
] as const satisfies number[];

export type HTTP_5XX_TYPE = typeof HTTP_5XX_CODES[number];

export const HTTP_5XX_RECORD: Record<HTTP_5XX_TYPE, StatusCodeInfo> = {
    [HTTP_500_CODE]: {
        name: HTTP_500_NAME,
        description: HTTP_500_DESCRIPTION,
    },
    [HTTP_501_CODE]: {
        name: HTTP_501_NAME,
        description: HTTP_501_DESCRIPTION,
    },
    [HTTP_502_CODE]: {
        name: HTTP_502_NAME,
        description: HTTP_502_DESCRIPTION,
    },
    [HTTP_503_CODE]: {
        name: HTTP_503_NAME,
        description: HTTP_503_DESCRIPTION,
    },
    [HTTP_504_CODE]: {
        name: HTTP_504_NAME,
        description: HTTP_504_DESCRIPTION,
    },
    [HTTP_505_CODE]: {
        name: HTTP_505_NAME,
        description: HTTP_505_DESCRIPTION,
    },
    [HTTP_506_CODE]: {
        name: HTTP_506_NAME,
        description: HTTP_506_DESCRIPTION,
    },
    [HTTP_507_CODE]: {
        name: HTTP_507_NAME,
        description: HTTP_507_DESCRIPTION,
    },
    [HTTP_508_CODE]: {
        name: HTTP_508_NAME,
        description: HTTP_508_DESCRIPTION,
    },
    [HTTP_510_CODE]: {
        name: HTTP_510_NAME,
        description: HTTP_510_DESCRIPTION,
    },
    [HTTP_511_CODE]: {
        name: HTTP_511_NAME,
        description: HTTP_511_DESCRIPTION,
    },
    [HTTP_599_CODE]: {
        name: HTTP_599_NAME,
        description: HTTP_599_DESCRIPTION,
    }
} as const;