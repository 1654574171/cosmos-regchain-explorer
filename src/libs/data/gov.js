/* eslint-disable  */
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleProposal = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const any_1 = require("cosmjs-types/google/protobuf/any");
const rule_1 = require("./gov-rule");
const duration_1 = require('cosmjs-types/google/protobuf/duration')
exports.protobufPackage = "cosmos.gov.v1beta1";

const baseRuleProposal = { title: "", description: "", operationType: "" };
exports.RuleProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.rule !== undefined) {
            rule_1.Rule.encode(message.rule, writer.uint32(26).fork()).ldelim();
        }
        if (message.operationType !== "") {
            writer.uint32(34).string(message.operationType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRuleProposal);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.rule = rule_1.Rule.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.operationType = reader.string();
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
        const message = Object.assign({}, baseRuleProposal);
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        if (object.rule !== undefined && object.rule !== null) {
            message.rule = rule_1.Rule.fromPartial(object.rule);
        }
        else {
            message.rule = undefined;
        }
        message.operationType = (_c = object.operationType) !== null && _c !== void 0 ? _c : "";
        return message;
    },
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
