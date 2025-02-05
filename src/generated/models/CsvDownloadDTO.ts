// tslint:disable
/**
 * OH 2.0 Api Documentation
 * OH 2.0 Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
* @export
* @interface CsvDownloadDTO
*/

export interface CsvDownloadDTO {
  /**
   * The id of the medical
   * @type {number}
   * @memberof CsvDownloadDTO
   */
  ID?: number;
  /**
   * The product code
   * @type {string}
   * @memberof CsvDownloadDTO
   */
  Code?: string;
  /**
   * @type {string}
   * @memberof CsvDownloadDTO
   */
  Type?: string;
  /**
   * The description of the medical
   * @type {string}
   * @memberof CsvDownloadDTO
   */
  Description?: string;
  /**
   * The number of pieces per packet
   * @type {number}
   * @memberof CsvDownloadDTO
   */
  PcsXPck?: number;
  /**
   * The input quantity of the medical
   * @type {number}
   * @memberof CsvDownloadDTO
   */
  Stock?: number;
  /**
   * The out quantity of the medical
   * @type {string}
   * @memberof CsvDownloadDTO
   */
  Crit_Level?: string;
  /**
   * The min quantity of the medical
   * @type {string}
   * @memberof CsvDownloadDTO
   */
  Out_Of_Stock?: string;
}
