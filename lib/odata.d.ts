/** @module odata */

import * as utils from './odata/odatautils';
import * as metadata from './odata/metadata';
export { utils, metadata };
export function parseMetadata(csdlMetadataDocument: string): Object;
