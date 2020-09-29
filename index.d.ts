export as namespace odatajs;

export var version: {
    major: number;
    minor: number;
    build: number;
};

import * as utils from './lib/utils';
import * as xml from './lib/xml';
import * as oData from './lib/odata';

export { utils, xml, oData };

export { Batch, Edm, Edmx, EdmExtra, HttpOData } from './lib/interfaces';
