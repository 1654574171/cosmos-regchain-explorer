/* eslint-disable  */
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  regulatory: {
    nested: {
      regulatory: {
        options: {
          go_package: "regulatory/x/regulatory/types"
        },
        nested: {
          RuleProposal: {
            fields: {
              title: {
                type: "string",
                id: 1
              },
              description: {
                type: "string",
                id: 2
              },
              rule: {
                type: "Rule",
                id: 3
              },
              operationType: {
                type: "string",
                id: 4
              }
            }
          },
          Rule: {
            fields: {
              ruleName: {
                type: "string",
                id: 1
              },
              content: {
                type: "string",
                id: 2
              },
              hash: {
                type: "string",
                id: 3
              }
            }
          }
        }
      }
    }
  }
});

module.exports = $root;
