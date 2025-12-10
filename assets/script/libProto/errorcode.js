/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.errorcode = (function() {

    /**
     * Namespace errorcode.
     * @exports errorcode
     * @namespace
     */
    var errorcode = {};

    errorcode.proto = (function() {

        /**
         * Namespace proto.
         * @memberof errorcode
         * @namespace
         */
        var proto = {};

        /**
         * Level enum.
         * @name errorcode.proto.Level
         * @enum {number}
         * @property {number} WARNING=0 WARNING value
         * @property {number} ERROR=1 ERROR value
         * @property {number} FATAL=2 FATAL value
         */
        proto.Level = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "WARNING"] = 0;
            values[valuesById[1] = "ERROR"] = 1;
            values[valuesById[2] = "FATAL"] = 2;
            return values;
        })();

        proto.Error = (function() {

            /**
             * Properties of an Error.
             * @memberof errorcode.proto
             * @interface IError
             * @property {common.proto.EMSGID|null} [msgid] Error msgid
             * @property {errorcode.proto.Level|null} [level] Error level
             * @property {string|null} [code] Error code
             */

            /**
             * Constructs a new Error.
             * @memberof errorcode.proto
             * @classdesc Represents an Error.
             * @implements IError
             * @constructor
             * @param {errorcode.proto.IError=} [properties] Properties to set
             */
            function Error(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Error msgid.
             * @member {common.proto.EMSGID} msgid
             * @memberof errorcode.proto.Error
             * @instance
             */
            Error.prototype.msgid = 0;

            /**
             * Error level.
             * @member {errorcode.proto.Level} level
             * @memberof errorcode.proto.Error
             * @instance
             */
            Error.prototype.level = 0;

            /**
             * Error code.
             * @member {string} code
             * @memberof errorcode.proto.Error
             * @instance
             */
            Error.prototype.code = "";

            /**
             * Creates a new Error instance using the specified properties.
             * @function create
             * @memberof errorcode.proto.Error
             * @static
             * @param {errorcode.proto.IError=} [properties] Properties to set
             * @returns {errorcode.proto.Error} Error instance
             */
            Error.create = function create(properties) {
                return new Error(properties);
            };

            /**
             * Encodes the specified Error message. Does not implicitly {@link errorcode.proto.Error.verify|verify} messages.
             * @function encode
             * @memberof errorcode.proto.Error
             * @static
             * @param {errorcode.proto.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.msgid != null && Object.hasOwnProperty.call(message, "msgid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgid);
                if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.level);
                if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.code);
                return writer;
            };

            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link errorcode.proto.Error.verify|verify} messages.
             * @function encodeDelimited
             * @memberof errorcode.proto.Error
             * @static
             * @param {errorcode.proto.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @function decode
             * @memberof errorcode.proto.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {errorcode.proto.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.errorcode.proto.Error();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.msgid = reader.int32();
                            break;
                        }
                    case 2: {
                            message.level = reader.int32();
                            break;
                        }
                    case 3: {
                            message.code = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof errorcode.proto.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {errorcode.proto.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Error message.
             * @function verify
             * @memberof errorcode.proto.Error
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Error.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.msgid != null && message.hasOwnProperty("msgid"))
                    switch (message.msgid) {
                    default:
                        return "msgid: enum value expected";
                    case 0:
                    case 1:
                    case 100:
                    case 101:
                    case 102:
                    case 103:
                    case 104:
                    case 200:
                    case 201:
                    case 300:
                    case 400:
                    case 500:
                    case 600:
                    case 601:
                    case 602:
                    case 603:
                    case 604:
                    case 700:
                    case 701:
                    case 800:
                    case 900:
                    case 901:
                    case 1000:
                    case 1100:
                    case 1101:
                    case 1102:
                    case 1103:
                    case 1200:
                    case 1300:
                    case 1400:
                    case 1401:
                    case 1500:
                    case 1600:
                    case 1700:
                    case 1701:
                    case 1800:
                    case 1900:
                    case 2000:
                    case 2100:
                    case 2200:
                    case 2300:
                    case 2400:
                    case 2500:
                        break;
                    }
                if (message.level != null && message.hasOwnProperty("level"))
                    switch (message.level) {
                    default:
                        return "level: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.code != null && message.hasOwnProperty("code"))
                    if (!$util.isString(message.code))
                        return "code: string expected";
                return null;
            };

            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof errorcode.proto.Error
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {errorcode.proto.Error} Error
             */
            Error.fromObject = function fromObject(object) {
                if (object instanceof $root.errorcode.proto.Error)
                    return object;
                var message = new $root.errorcode.proto.Error();
                switch (object.msgid) {
                default:
                    if (typeof object.msgid === "number") {
                        message.msgid = object.msgid;
                        break;
                    }
                    break;
                case "eReserved":
                case 0:
                    message.msgid = 0;
                    break;
                case "eActivity":
                case 1:
                    message.msgid = 1;
                    break;
                case "eBroadcastResult":
                case 100:
                    message.msgid = 100;
                    break;
                case "eBroadcastPlayerIn":
                case 101:
                    message.msgid = 101;
                    break;
                case "eBroadcastPlayerOut":
                case 102:
                    message.msgid = 102;
                    break;
                case "eBroadcaster":
                case 103:
                    message.msgid = 103;
                    break;
                case "eBroadcastOption":
                case 104:
                    message.msgid = 104;
                    break;
                case "eCentInAsk":
                case 200:
                    message.msgid = 200;
                    break;
                case "eCentInReask":
                case 201:
                    message.msgid = 201;
                    break;
                case "eD":
                case 300:
                    message.msgid = 300;
                    break;
                case "eErrorCode":
                case 400:
                    message.msgid = 400;
                    break;
                case "eF":
                case 500:
                    message.msgid = 500;
                    break;
                case "eGameConfigCall":
                case 600:
                    message.msgid = 600;
                    break;
                case "eGameConfigRecall":
                case 601:
                    message.msgid = 601;
                    break;
                case "eGameStripsCall":
                case 602:
                    message.msgid = 602;
                    break;
                case "eGameStripsRecall":
                case 603:
                    message.msgid = 603;
                    break;
                case "eGameRecovery":
                case 604:
                    message.msgid = 604;
                    break;
                case "eHeartbeatCall":
                case 700:
                    message.msgid = 700;
                    break;
                case "eHeartbeatRecall":
                case 701:
                    message.msgid = 701;
                    break;
                case "eI":
                case 800:
                    message.msgid = 800;
                    break;
                case "eJackpotInfo":
                case 900:
                    message.msgid = 900;
                    break;
                case "eJackpotNotify":
                case 901:
                    message.msgid = 901;
                    break;
                case "eK":
                case 1000:
                    message.msgid = 1000;
                    break;
                case "eLoginCall":
                case 1100:
                    message.msgid = 1100;
                    break;
                case "eLoginRecall":
                case 1101:
                    message.msgid = 1101;
                    break;
                case "eLobbyConfigCall":
                case 1102:
                    message.msgid = 1102;
                    break;
                case "eLobbyConfigRecall":
                case 1103:
                    message.msgid = 1103;
                    break;
                case "eMemberInfoAsk":
                case 1200:
                    message.msgid = 1200;
                    break;
                case "eN":
                case 1300:
                    message.msgid = 1300;
                    break;
                case "eOptionCall":
                case 1400:
                    message.msgid = 1400;
                    break;
                case "eOptionRecall":
                case 1401:
                    message.msgid = 1401;
                    break;
                case "eP":
                case 1500:
                    message.msgid = 1500;
                    break;
                case "eQ":
                case 1600:
                    message.msgid = 1600;
                    break;
                case "eResultCall":
                case 1700:
                    message.msgid = 1700;
                    break;
                case "eResultRecall":
                case 1701:
                    message.msgid = 1701;
                    break;
                case "eS":
                case 1800:
                    message.msgid = 1800;
                    break;
                case "eT":
                case 1900:
                    message.msgid = 1900;
                    break;
                case "eU":
                case 2000:
                    message.msgid = 2000;
                    break;
                case "eV":
                case 2100:
                    message.msgid = 2100;
                    break;
                case "eW":
                case 2200:
                    message.msgid = 2200;
                    break;
                case "eX":
                case 2300:
                    message.msgid = 2300;
                    break;
                case "eY":
                case 2400:
                    message.msgid = 2400;
                    break;
                case "eZ":
                case 2500:
                    message.msgid = 2500;
                    break;
                }
                switch (object.level) {
                default:
                    if (typeof object.level === "number") {
                        message.level = object.level;
                        break;
                    }
                    break;
                case "WARNING":
                case 0:
                    message.level = 0;
                    break;
                case "ERROR":
                case 1:
                    message.level = 1;
                    break;
                case "FATAL":
                case 2:
                    message.level = 2;
                    break;
                }
                if (object.code != null)
                    message.code = String(object.code);
                return message;
            };

            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @function toObject
             * @memberof errorcode.proto.Error
             * @static
             * @param {errorcode.proto.Error} message Error
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Error.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.msgid = options.enums === String ? "eReserved" : 0;
                    object.level = options.enums === String ? "WARNING" : 0;
                    object.code = "";
                }
                if (message.msgid != null && message.hasOwnProperty("msgid"))
                    object.msgid = options.enums === String ? $root.common.proto.EMSGID[message.msgid] === undefined ? message.msgid : $root.common.proto.EMSGID[message.msgid] : message.msgid;
                if (message.level != null && message.hasOwnProperty("level"))
                    object.level = options.enums === String ? $root.errorcode.proto.Level[message.level] === undefined ? message.level : $root.errorcode.proto.Level[message.level] : message.level;
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = message.code;
                return object;
            };

            /**
             * Converts this Error to JSON.
             * @function toJSON
             * @memberof errorcode.proto.Error
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Error.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Error
             * @function getTypeUrl
             * @memberof errorcode.proto.Error
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Error.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/errorcode.proto.Error";
            };

            return Error;
        })();

        return proto;
    })();

    return errorcode;
})();

$root.common = (function() {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    var common = {};

    common.proto = (function() {

        /**
         * Namespace proto.
         * @memberof common
         * @namespace
         */
        var proto = {};

        proto.Header = (function() {

            /**
             * Properties of a Header.
             * @memberof common.proto
             * @interface IHeader
             * @property {common.proto.EMSGID|null} [msgid] Header msgid
             */

            /**
             * Constructs a new Header.
             * @memberof common.proto
             * @classdesc Represents a Header.
             * @implements IHeader
             * @constructor
             * @param {common.proto.IHeader=} [properties] Properties to set
             */
            function Header(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Header msgid.
             * @member {common.proto.EMSGID} msgid
             * @memberof common.proto.Header
             * @instance
             */
            Header.prototype.msgid = 0;

            /**
             * Creates a new Header instance using the specified properties.
             * @function create
             * @memberof common.proto.Header
             * @static
             * @param {common.proto.IHeader=} [properties] Properties to set
             * @returns {common.proto.Header} Header instance
             */
            Header.create = function create(properties) {
                return new Header(properties);
            };

            /**
             * Encodes the specified Header message. Does not implicitly {@link common.proto.Header.verify|verify} messages.
             * @function encode
             * @memberof common.proto.Header
             * @static
             * @param {common.proto.IHeader} message Header message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Header.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.msgid != null && Object.hasOwnProperty.call(message, "msgid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgid);
                return writer;
            };

            /**
             * Encodes the specified Header message, length delimited. Does not implicitly {@link common.proto.Header.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.proto.Header
             * @static
             * @param {common.proto.IHeader} message Header message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Header.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Header message from the specified reader or buffer.
             * @function decode
             * @memberof common.proto.Header
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.proto.Header} Header
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Header.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.proto.Header();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.msgid = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Header message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.proto.Header
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.proto.Header} Header
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Header.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Header message.
             * @function verify
             * @memberof common.proto.Header
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Header.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.msgid != null && message.hasOwnProperty("msgid"))
                    switch (message.msgid) {
                    default:
                        return "msgid: enum value expected";
                    case 0:
                    case 1:
                    case 100:
                    case 101:
                    case 102:
                    case 103:
                    case 104:
                    case 200:
                    case 201:
                    case 300:
                    case 400:
                    case 500:
                    case 600:
                    case 601:
                    case 602:
                    case 603:
                    case 604:
                    case 700:
                    case 701:
                    case 800:
                    case 900:
                    case 901:
                    case 1000:
                    case 1100:
                    case 1101:
                    case 1102:
                    case 1103:
                    case 1200:
                    case 1300:
                    case 1400:
                    case 1401:
                    case 1500:
                    case 1600:
                    case 1700:
                    case 1701:
                    case 1800:
                    case 1900:
                    case 2000:
                    case 2100:
                    case 2200:
                    case 2300:
                    case 2400:
                    case 2500:
                        break;
                    }
                return null;
            };

            /**
             * Creates a Header message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.proto.Header
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.proto.Header} Header
             */
            Header.fromObject = function fromObject(object) {
                if (object instanceof $root.common.proto.Header)
                    return object;
                var message = new $root.common.proto.Header();
                switch (object.msgid) {
                default:
                    if (typeof object.msgid === "number") {
                        message.msgid = object.msgid;
                        break;
                    }
                    break;
                case "eReserved":
                case 0:
                    message.msgid = 0;
                    break;
                case "eActivity":
                case 1:
                    message.msgid = 1;
                    break;
                case "eBroadcastResult":
                case 100:
                    message.msgid = 100;
                    break;
                case "eBroadcastPlayerIn":
                case 101:
                    message.msgid = 101;
                    break;
                case "eBroadcastPlayerOut":
                case 102:
                    message.msgid = 102;
                    break;
                case "eBroadcaster":
                case 103:
                    message.msgid = 103;
                    break;
                case "eBroadcastOption":
                case 104:
                    message.msgid = 104;
                    break;
                case "eCentInAsk":
                case 200:
                    message.msgid = 200;
                    break;
                case "eCentInReask":
                case 201:
                    message.msgid = 201;
                    break;
                case "eD":
                case 300:
                    message.msgid = 300;
                    break;
                case "eErrorCode":
                case 400:
                    message.msgid = 400;
                    break;
                case "eF":
                case 500:
                    message.msgid = 500;
                    break;
                case "eGameConfigCall":
                case 600:
                    message.msgid = 600;
                    break;
                case "eGameConfigRecall":
                case 601:
                    message.msgid = 601;
                    break;
                case "eGameStripsCall":
                case 602:
                    message.msgid = 602;
                    break;
                case "eGameStripsRecall":
                case 603:
                    message.msgid = 603;
                    break;
                case "eGameRecovery":
                case 604:
                    message.msgid = 604;
                    break;
                case "eHeartbeatCall":
                case 700:
                    message.msgid = 700;
                    break;
                case "eHeartbeatRecall":
                case 701:
                    message.msgid = 701;
                    break;
                case "eI":
                case 800:
                    message.msgid = 800;
                    break;
                case "eJackpotInfo":
                case 900:
                    message.msgid = 900;
                    break;
                case "eJackpotNotify":
                case 901:
                    message.msgid = 901;
                    break;
                case "eK":
                case 1000:
                    message.msgid = 1000;
                    break;
                case "eLoginCall":
                case 1100:
                    message.msgid = 1100;
                    break;
                case "eLoginRecall":
                case 1101:
                    message.msgid = 1101;
                    break;
                case "eLobbyConfigCall":
                case 1102:
                    message.msgid = 1102;
                    break;
                case "eLobbyConfigRecall":
                case 1103:
                    message.msgid = 1103;
                    break;
                case "eMemberInfoAsk":
                case 1200:
                    message.msgid = 1200;
                    break;
                case "eN":
                case 1300:
                    message.msgid = 1300;
                    break;
                case "eOptionCall":
                case 1400:
                    message.msgid = 1400;
                    break;
                case "eOptionRecall":
                case 1401:
                    message.msgid = 1401;
                    break;
                case "eP":
                case 1500:
                    message.msgid = 1500;
                    break;
                case "eQ":
                case 1600:
                    message.msgid = 1600;
                    break;
                case "eResultCall":
                case 1700:
                    message.msgid = 1700;
                    break;
                case "eResultRecall":
                case 1701:
                    message.msgid = 1701;
                    break;
                case "eS":
                case 1800:
                    message.msgid = 1800;
                    break;
                case "eT":
                case 1900:
                    message.msgid = 1900;
                    break;
                case "eU":
                case 2000:
                    message.msgid = 2000;
                    break;
                case "eV":
                case 2100:
                    message.msgid = 2100;
                    break;
                case "eW":
                case 2200:
                    message.msgid = 2200;
                    break;
                case "eX":
                case 2300:
                    message.msgid = 2300;
                    break;
                case "eY":
                case 2400:
                    message.msgid = 2400;
                    break;
                case "eZ":
                case 2500:
                    message.msgid = 2500;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a Header message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.proto.Header
             * @static
             * @param {common.proto.Header} message Header
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Header.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.msgid = options.enums === String ? "eReserved" : 0;
                if (message.msgid != null && message.hasOwnProperty("msgid"))
                    object.msgid = options.enums === String ? $root.common.proto.EMSGID[message.msgid] === undefined ? message.msgid : $root.common.proto.EMSGID[message.msgid] : message.msgid;
                return object;
            };

            /**
             * Converts this Header to JSON.
             * @function toJSON
             * @memberof common.proto.Header
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Header.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Header
             * @function getTypeUrl
             * @memberof common.proto.Header
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Header.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.proto.Header";
            };

            return Header;
        })();

        /**
         * EMSGID enum.
         * @name common.proto.EMSGID
         * @enum {number}
         * @property {number} eReserved=0 eReserved value
         * @property {number} eActivity=1 eActivity value
         * @property {number} eBroadcastResult=100 eBroadcastResult value
         * @property {number} eBroadcastPlayerIn=101 eBroadcastPlayerIn value
         * @property {number} eBroadcastPlayerOut=102 eBroadcastPlayerOut value
         * @property {number} eBroadcaster=103 eBroadcaster value
         * @property {number} eBroadcastOption=104 eBroadcastOption value
         * @property {number} eCentInAsk=200 eCentInAsk value
         * @property {number} eCentInReask=201 eCentInReask value
         * @property {number} eD=300 eD value
         * @property {number} eErrorCode=400 eErrorCode value
         * @property {number} eF=500 eF value
         * @property {number} eGameConfigCall=600 eGameConfigCall value
         * @property {number} eGameConfigRecall=601 eGameConfigRecall value
         * @property {number} eGameStripsCall=602 eGameStripsCall value
         * @property {number} eGameStripsRecall=603 eGameStripsRecall value
         * @property {number} eGameRecovery=604 eGameRecovery value
         * @property {number} eHeartbeatCall=700 eHeartbeatCall value
         * @property {number} eHeartbeatRecall=701 eHeartbeatRecall value
         * @property {number} eI=800 eI value
         * @property {number} eJackpotInfo=900 eJackpotInfo value
         * @property {number} eJackpotNotify=901 eJackpotNotify value
         * @property {number} eK=1000 eK value
         * @property {number} eLoginCall=1100 eLoginCall value
         * @property {number} eLoginRecall=1101 eLoginRecall value
         * @property {number} eLobbyConfigCall=1102 eLobbyConfigCall value
         * @property {number} eLobbyConfigRecall=1103 eLobbyConfigRecall value
         * @property {number} eMemberInfoAsk=1200 eMemberInfoAsk value
         * @property {number} eN=1300 eN value
         * @property {number} eOptionCall=1400 eOptionCall value
         * @property {number} eOptionRecall=1401 eOptionRecall value
         * @property {number} eP=1500 eP value
         * @property {number} eQ=1600 eQ value
         * @property {number} eResultCall=1700 eResultCall value
         * @property {number} eResultRecall=1701 eResultRecall value
         * @property {number} eS=1800 eS value
         * @property {number} eT=1900 eT value
         * @property {number} eU=2000 eU value
         * @property {number} eV=2100 eV value
         * @property {number} eW=2200 eW value
         * @property {number} eX=2300 eX value
         * @property {number} eY=2400 eY value
         * @property {number} eZ=2500 eZ value
         */
        proto.EMSGID = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "eReserved"] = 0;
            values[valuesById[1] = "eActivity"] = 1;
            values[valuesById[100] = "eBroadcastResult"] = 100;
            values[valuesById[101] = "eBroadcastPlayerIn"] = 101;
            values[valuesById[102] = "eBroadcastPlayerOut"] = 102;
            values[valuesById[103] = "eBroadcaster"] = 103;
            values[valuesById[104] = "eBroadcastOption"] = 104;
            values[valuesById[200] = "eCentInAsk"] = 200;
            values[valuesById[201] = "eCentInReask"] = 201;
            values[valuesById[300] = "eD"] = 300;
            values[valuesById[400] = "eErrorCode"] = 400;
            values[valuesById[500] = "eF"] = 500;
            values[valuesById[600] = "eGameConfigCall"] = 600;
            values[valuesById[601] = "eGameConfigRecall"] = 601;
            values[valuesById[602] = "eGameStripsCall"] = 602;
            values[valuesById[603] = "eGameStripsRecall"] = 603;
            values[valuesById[604] = "eGameRecovery"] = 604;
            values[valuesById[700] = "eHeartbeatCall"] = 700;
            values[valuesById[701] = "eHeartbeatRecall"] = 701;
            values[valuesById[800] = "eI"] = 800;
            values[valuesById[900] = "eJackpotInfo"] = 900;
            values[valuesById[901] = "eJackpotNotify"] = 901;
            values[valuesById[1000] = "eK"] = 1000;
            values[valuesById[1100] = "eLoginCall"] = 1100;
            values[valuesById[1101] = "eLoginRecall"] = 1101;
            values[valuesById[1102] = "eLobbyConfigCall"] = 1102;
            values[valuesById[1103] = "eLobbyConfigRecall"] = 1103;
            values[valuesById[1200] = "eMemberInfoAsk"] = 1200;
            values[valuesById[1300] = "eN"] = 1300;
            values[valuesById[1400] = "eOptionCall"] = 1400;
            values[valuesById[1401] = "eOptionRecall"] = 1401;
            values[valuesById[1500] = "eP"] = 1500;
            values[valuesById[1600] = "eQ"] = 1600;
            values[valuesById[1700] = "eResultCall"] = 1700;
            values[valuesById[1701] = "eResultRecall"] = 1701;
            values[valuesById[1800] = "eS"] = 1800;
            values[valuesById[1900] = "eT"] = 1900;
            values[valuesById[2000] = "eU"] = 2000;
            values[valuesById[2100] = "eV"] = 2100;
            values[valuesById[2200] = "eW"] = 2200;
            values[valuesById[2300] = "eX"] = 2300;
            values[valuesById[2400] = "eY"] = 2400;
            values[valuesById[2500] = "eZ"] = 2500;
            return values;
        })();

        proto.Status = (function() {

            /**
             * Properties of a Status.
             * @memberof common.proto
             * @interface IStatus
             */

            /**
             * Constructs a new Status.
             * @memberof common.proto
             * @classdesc Represents a Status.
             * @implements IStatus
             * @constructor
             * @param {common.proto.IStatus=} [properties] Properties to set
             */
            function Status(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Status instance using the specified properties.
             * @function create
             * @memberof common.proto.Status
             * @static
             * @param {common.proto.IStatus=} [properties] Properties to set
             * @returns {common.proto.Status} Status instance
             */
            Status.create = function create(properties) {
                return new Status(properties);
            };

            /**
             * Encodes the specified Status message. Does not implicitly {@link common.proto.Status.verify|verify} messages.
             * @function encode
             * @memberof common.proto.Status
             * @static
             * @param {common.proto.IStatus} message Status message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Status.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link common.proto.Status.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.proto.Status
             * @static
             * @param {common.proto.IStatus} message Status message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Status.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @function decode
             * @memberof common.proto.Status
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.proto.Status} Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Status.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.proto.Status();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.proto.Status
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.proto.Status} Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Status.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Status message.
             * @function verify
             * @memberof common.proto.Status
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Status.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.proto.Status
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.proto.Status} Status
             */
            Status.fromObject = function fromObject(object) {
                if (object instanceof $root.common.proto.Status)
                    return object;
                return new $root.common.proto.Status();
            };

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.proto.Status
             * @static
             * @param {common.proto.Status} message Status
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Status.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Status to JSON.
             * @function toJSON
             * @memberof common.proto.Status
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Status.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Status
             * @function getTypeUrl
             * @memberof common.proto.Status
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Status.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.proto.Status";
            };

            /**
             * Code enum.
             * @name common.proto.Status.Code
             * @enum {number}
             * @property {number} kSuccess=0 kSuccess value
             * @property {number} kInvalid=1 kInvalid value
             * @property {number} kOffline=2 kOffline value
             * @property {number} kNoEnoughCredit=3 kNoEnoughCredit value
             * @property {number} kHostError=4 kHostError value
             * @property {number} kOutOfDate=5 kOutOfDate value
             * @property {number} kFreeGameEnd=6 kFreeGameEnd value
             * @property {number} kNoMoreBets=7 kNoMoreBets value
             * @property {number} kNoSeatAvailable=8 kNoSeatAvailable value
             * @property {number} kIdle=9 kIdle value
             * @property {number} kGaming=10 kGaming value
             * @property {number} kIPisSame=11 kIPisSame value
             */
            Status.Code = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "kSuccess"] = 0;
                values[valuesById[1] = "kInvalid"] = 1;
                values[valuesById[2] = "kOffline"] = 2;
                values[valuesById[3] = "kNoEnoughCredit"] = 3;
                values[valuesById[4] = "kHostError"] = 4;
                values[valuesById[5] = "kOutOfDate"] = 5;
                values[valuesById[6] = "kFreeGameEnd"] = 6;
                values[valuesById[7] = "kNoMoreBets"] = 7;
                values[valuesById[8] = "kNoSeatAvailable"] = 8;
                values[valuesById[9] = "kIdle"] = 9;
                values[valuesById[10] = "kGaming"] = 10;
                values[valuesById[11] = "kIPisSame"] = 11;
                return values;
            })();

            return Status;
        })();

        return proto;
    })();

    return common;
})();

module.exports = $root;
