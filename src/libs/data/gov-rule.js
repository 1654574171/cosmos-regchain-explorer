/* eslint-disable  */
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rule = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const any_1 = require("cosmjs-types/google/protobuf/any");
const duration_1 = require("cosmjs-types/google/protobuf/duration");
const timestamp_1 = require("cosmjs-types/google/protobuf/timestamp");
const coin_1 = require("cosmjs-types/cosmos/base/v1beta1/coin");
exports.protobufPackage = "cosmos.gov.v1beta1";

const baseRule = { ruleName: "", content: "", hash: "" };
exports.Rule = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ruleName !== "") {
            writer.uint32(10).string(message.ruleName);
        }
        if (message.content !== "") {
            writer.uint32(18).string(message.content);
        }
        if (message.hash !== "") {
            writer.uint32(26).string(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRule);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ruleName = reader.string();
                    break;
                case 2:
                    message.content = reader.string();
                    break;
                case 3:
                    message.hash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseRule);
        message.ruleName = (_a = object.ruleName) !== null && _a !== void 0 ? _a : "";
        message.content = (_b = object.content) !== null && _b !== void 0 ? _b : "";
        message.hash = (_c = object.hash) !== null && _c !== void 0 ? _c : "";
        return message;
    },
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
