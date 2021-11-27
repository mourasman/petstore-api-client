/**
 * Swagger Petstore - OpenAPI 3.0
 * This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about Swagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we\'ve switched to the design first approach! You can now help us improve the API whether it\'s by making changes to the definition itself or to the code. That way, with time, we can improve the API in general, and expose some of the new features in OAS3.  Some useful links: - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore) - [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
 *
 * The version of the OpenAPI document: 1.0.7
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Category } from './category';
import { Tag } from './tag';

export class Pet {
    'id'?: number;
    'name': string;
    'category'?: Category;
    'photoUrls': Array<string>;
    'tags'?: Array<Tag>;
    /**
    * pet status in the store
    */
    'status'?: Pet.StatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "Category"
        },
        {
            "name": "photoUrls",
            "baseName": "photoUrls",
            "type": "Array<string>"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<Tag>"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Pet.StatusEnum"
        }    ];

    static getAttributeTypeMap() {
        return Pet.attributeTypeMap;
    }
}

export namespace Pet {
    export enum StatusEnum {
        Available = <any> 'available',
        Pending = <any> 'pending',
        Sold = <any> 'sold'
    }
}
