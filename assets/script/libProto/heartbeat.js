/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.heartbeat = (function() {

    /**
     * Namespace heartbeat.
     * @exports heartbeat
     * @namespace
     */
    var heartbeat = {};

    heartbeat.proto = (function() {

        /**
         * Namespace proto.
         * @memberof heartbeat
         * @namespace
         */
        var proto = {};

        proto.HeartbeatCall = (function() {

            /**
             * Properties of a HeartbeatCall.
             * @memberof heartbeat.proto
             * @interface IHeartbeatCall
             * @property {common.proto.EMSGID|null} [msgid] HeartbeatCall msgid
             * @property {number|Long|null} [clientTimestamp] HeartbeatCall clientTimestamp
             */

            /**
             * Constructs a new HeartbeatCall.
             * @memberof heartbeat.proto
             * @classdesc Represents a HeartbeatCall.
             * @implements IHeartbeatCall
             * @constructor
             * @param {heartbeat.proto.IHeartbeatCall=} [properties] Properties to set
             */
            function HeartbeatCall(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * HeartbeatCall msgid.
             * @member {common.proto.EMSGID} msgid
             * @memberof heartbeat.proto.HeartbeatCall
             * @instance
             */
            HeartbeatCall.prototype.msgid = 0;

            /**
             * HeartbeatCall clientTimestamp.
             * @member {number|Long} clientTimestamp
             * @memberof heartbeat.proto.HeartbeatCall
             * @instance
             */
            HeartbeatCall.prototype.clientTimestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new HeartbeatCall instance using the specified properties.
             * @function create
             * @memberof heartbeat.proto.HeartbeatCall
             * @static
             * @param {heartbeat.proto.IHeartbeatCall=} [properties] Properties to set
             * @returns {heartbeat.proto.HeartbeatCall} HeartbeatCall instance
             */
            HeartbeatCall.create = function create(properties) {
                return new HeartbeatCall(properties);
            };

            /**
             * Encodes the specified HeartbeatCall message. Does not implicitly {@link heartbeat.proto.HeartbeatCall.verify|verify} messages.
             * @function encode
             * @memberof heartbeat.proto.HeartbeatCall
             * @static
             * @param {heartbeat.proto.IHeartbeatCall} message HeartbeatCall message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HeartbeatCall.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.msgid != null && Object.hasOwnProperty.call(message, "msgid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgid);
                if (message.clientTimestamp != null && Object.hasOwnProperty.call(message, "clientTimestamp"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.clientTimestamp);
                return writer;
            };

            /**
             * Encodes the specified HeartbeatCall message, length delimited. Does not implicitly {@link heartbeat.proto.HeartbeatCall.verify|verify} messages.
             * @function encodeDelimited
             * @memberof heartbeat.proto.HeartbeatCall
             * @static
             * @param {heartbeat.proto.IHeartbeatCall} message HeartbeatCall message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HeartbeatCall.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a HeartbeatCall message from the specified reader or buffer.
             * @function decode
             * @memberof heartbeat.proto.HeartbeatCall
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {heartbeat.proto.HeartbeatCall} HeartbeatCall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HeartbeatCall.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.heartbeat.proto.HeartbeatCall();
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
                            message.clientTimestamp = reader.int64();
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
             * Decodes a HeartbeatCall message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof heartbeat.proto.HeartbeatCall
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {heartbeat.proto.HeartbeatCall} HeartbeatCall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HeartbeatCall.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a HeartbeatCall message.
             * @function verify
             * @memberof heartbeat.proto.HeartbeatCall
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HeartbeatCall.verify = function verify(message) {
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
                if (message.clientTimestamp != null && message.hasOwnProperty("clientTimestamp"))
                    if (!$util.isInteger(message.clientTimestamp) && !(message.clientTimestamp && $util.isInteger(message.clientTimestamp.low) && $util.isInteger(message.clientTimestamp.high)))
                        return "clientTimestamp: integer|Long expected";
                return null;
            };

            /**
             * Creates a HeartbeatCall message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof heartbeat.proto.HeartbeatCall
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {heartbeat.proto.HeartbeatCall} HeartbeatCall
             */
            HeartbeatCall.fromObject = function fromObject(object) {
                if (object instanceof $root.heartbeat.proto.HeartbeatCall)
                    return object;
                var message = new $root.heartbeat.proto.HeartbeatCall();
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
                if (object.clientTimestamp != null)
                    if ($util.Long)
                        (message.clientTimestamp = $util.Long.fromValue(object.clientTimestamp)).unsigned = false;
                    else if (typeof object.clientTimestamp === "string")
                        message.clientTimestamp = parseInt(object.clientTimestamp, 10);
                    else if (typeof object.clientTimestamp === "number")
                        message.clientTimestamp = object.clientTimestamp;
                    else if (typeof object.clientTimestamp === "object")
                        message.clientTimestamp = new $util.LongBits(object.clientTimestamp.low >>> 0, object.clientTimestamp.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a HeartbeatCall message. Also converts values to other types if specified.
             * @function toObject
             * @memberof heartbeat.proto.HeartbeatCall
             * @static
             * @param {heartbeat.proto.HeartbeatCall} message HeartbeatCall
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HeartbeatCall.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.msgid = options.enums === String ? "eReserved" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.clientTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.clientTimestamp = options.longs === String ? "0" : 0;
                }
                if (message.msgid != null && message.hasOwnProperty("msgid"))
                    object.msgid = options.enums === String ? $root.common.proto.EMSGID[message.msgid] === undefined ? message.msgid : $root.common.proto.EMSGID[message.msgid] : message.msgid;
                if (message.clientTimestamp != null && message.hasOwnProperty("clientTimestamp"))
                    if (typeof message.clientTimestamp === "number")
                        object.clientTimestamp = options.longs === String ? String(message.clientTimestamp) : message.clientTimestamp;
                    else
                        object.clientTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.clientTimestamp) : options.longs === Number ? new $util.LongBits(message.clientTimestamp.low >>> 0, message.clientTimestamp.high >>> 0).toNumber() : message.clientTimestamp;
                return object;
            };

            /**
             * Converts this HeartbeatCall to JSON.
             * @function toJSON
             * @memberof heartbeat.proto.HeartbeatCall
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HeartbeatCall.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for HeartbeatCall
             * @function getTypeUrl
             * @memberof heartbeat.proto.HeartbeatCall
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            HeartbeatCall.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/heartbeat.proto.HeartbeatCall";
            };

            return HeartbeatCall;
        })();

        proto.HeartbeatRecall = (function() {

            /**
             * Properties of a HeartbeatRecall.
             * @memberof heartbeat.proto
             * @interface IHeartbeatRecall
             * @property {common.proto.EMSGID|null} [msgid] HeartbeatRecall msgid
             * @property {number|Long|null} [clientTimestamp] HeartbeatRecall clientTimestamp
             * @property {number|Long|null} [serverTimestamp] HeartbeatRecall serverTimestamp
             */

            /**
             * Constructs a new HeartbeatRecall.
             * @memberof heartbeat.proto
             * @classdesc Represents a HeartbeatRecall.
             * @implements IHeartbeatRecall
             * @constructor
             * @param {heartbeat.proto.IHeartbeatRecall=} [properties] Properties to set
             */
            function HeartbeatRecall(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * HeartbeatRecall msgid.
             * @member {common.proto.EMSGID} msgid
             * @memberof heartbeat.proto.HeartbeatRecall
             * @instance
             */
            HeartbeatRecall.prototype.msgid = 0;

            /**
             * HeartbeatRecall clientTimestamp.
             * @member {number|Long} clientTimestamp
             * @memberof heartbeat.proto.HeartbeatRecall
             * @instance
             */
            HeartbeatRecall.prototype.clientTimestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * HeartbeatRecall serverTimestamp.
             * @member {number|Long} serverTimestamp
             * @memberof heartbeat.proto.HeartbeatRecall
             * @instance
             */
            HeartbeatRecall.prototype.serverTimestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new HeartbeatRecall instance using the specified properties.
             * @function create
             * @memberof heartbeat.proto.HeartbeatRecall
             * @static
             * @param {heartbeat.proto.IHeartbeatRecall=} [properties] Properties to set
             * @returns {heartbeat.proto.HeartbeatRecall} HeartbeatRecall instance
             */
            HeartbeatRecall.create = function create(properties) {
                return new HeartbeatRecall(properties);
            };

            /**
             * Encodes the specified HeartbeatRecall message. Does not implicitly {@link heartbeat.proto.HeartbeatRecall.verify|verify} messages.
             * @function encode
             * @memberof heartbeat.proto.HeartbeatRecall
             * @static
             * @param {heartbeat.proto.IHeartbeatRecall} message HeartbeatRecall message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HeartbeatRecall.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.msgid != null && Object.hasOwnProperty.call(message, "msgid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgid);
                if (message.clientTimestamp != null && Object.hasOwnProperty.call(message, "clientTimestamp"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.clientTimestamp);
                if (message.serverTimestamp != null && Object.hasOwnProperty.call(message, "serverTimestamp"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.serverTimestamp);
                return writer;
            };

            /**
             * Encodes the specified HeartbeatRecall message, length delimited. Does not implicitly {@link heartbeat.proto.HeartbeatRecall.verify|verify} messages.
             * @function encodeDelimited
             * @memberof heartbeat.proto.HeartbeatRecall
             * @static
             * @param {heartbeat.proto.IHeartbeatRecall} message HeartbeatRecall message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HeartbeatRecall.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a HeartbeatRecall message from the specified reader or buffer.
             * @function decode
             * @memberof heartbeat.proto.HeartbeatRecall
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {heartbeat.proto.HeartbeatRecall} HeartbeatRecall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HeartbeatRecall.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.heartbeat.proto.HeartbeatRecall();
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
                            message.clientTimestamp = reader.int64();
                            break;
                        }
                    case 3: {
                            message.serverTimestamp = reader.int64();
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
             * Decodes a HeartbeatRecall message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof heartbeat.proto.HeartbeatRecall
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {heartbeat.proto.HeartbeatRecall} HeartbeatRecall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HeartbeatRecall.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a HeartbeatRecall message.
             * @function verify
             * @memberof heartbeat.proto.HeartbeatRecall
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HeartbeatRecall.verify = function verify(message) {
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
                if (message.clientTimestamp != null && message.hasOwnProperty("clientTimestamp"))
                    if (!$util.isInteger(message.clientTimestamp) && !(message.clientTimestamp && $util.isInteger(message.clientTimestamp.low) && $util.isInteger(message.clientTimestamp.high)))
                        return "clientTimestamp: integer|Long expected";
                if (message.serverTimestamp != null && message.hasOwnProperty("serverTimestamp"))
                    if (!$util.isInteger(message.serverTimestamp) && !(message.serverTimestamp && $util.isInteger(message.serverTimestamp.low) && $util.isInteger(message.serverTimestamp.high)))
                        return "serverTimestamp: integer|Long expected";
                return null;
            };

            /**
             * Creates a HeartbeatRecall message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof heartbeat.proto.HeartbeatRecall
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {heartbeat.proto.HeartbeatRecall} HeartbeatRecall
             */
            HeartbeatRecall.fromObject = function fromObject(object) {
                if (object instanceof $root.heartbeat.proto.HeartbeatRecall)
                    return object;
                var message = new $root.heartbeat.proto.HeartbeatRecall();
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
                if (object.clientTimestamp != null)
                    if ($util.Long)
                        (message.clientTimestamp = $util.Long.fromValue(object.clientTimestamp)).unsigned = false;
                    else if (typeof object.clientTimestamp === "string")
                        message.clientTimestamp = parseInt(object.clientTimestamp, 10);
                    else if (typeof object.clientTimestamp === "number")
                        message.clientTimestamp = object.clientTimestamp;
                    else if (typeof object.clientTimestamp === "object")
                        message.clientTimestamp = new $util.LongBits(object.clientTimestamp.low >>> 0, object.clientTimestamp.high >>> 0).toNumber();
                if (object.serverTimestamp != null)
                    if ($util.Long)
                        (message.serverTimestamp = $util.Long.fromValue(object.serverTimestamp)).unsigned = false;
                    else if (typeof object.serverTimestamp === "string")
                        message.serverTimestamp = parseInt(object.serverTimestamp, 10);
                    else if (typeof object.serverTimestamp === "number")
                        message.serverTimestamp = object.serverTimestamp;
                    else if (typeof object.serverTimestamp === "object")
                        message.serverTimestamp = new $util.LongBits(object.serverTimestamp.low >>> 0, object.serverTimestamp.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a HeartbeatRecall message. Also converts values to other types if specified.
             * @function toObject
             * @memberof heartbeat.proto.HeartbeatRecall
             * @static
             * @param {heartbeat.proto.HeartbeatRecall} message HeartbeatRecall
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HeartbeatRecall.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.msgid = options.enums === String ? "eReserved" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.clientTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.clientTimestamp = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.serverTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.serverTimestamp = options.longs === String ? "0" : 0;
                }
                if (message.msgid != null && message.hasOwnProperty("msgid"))
                    object.msgid = options.enums === String ? $root.common.proto.EMSGID[message.msgid] === undefined ? message.msgid : $root.common.proto.EMSGID[message.msgid] : message.msgid;
                if (message.clientTimestamp != null && message.hasOwnProperty("clientTimestamp"))
                    if (typeof message.clientTimestamp === "number")
                        object.clientTimestamp = options.longs === String ? String(message.clientTimestamp) : message.clientTimestamp;
                    else
                        object.clientTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.clientTimestamp) : options.longs === Number ? new $util.LongBits(message.clientTimestamp.low >>> 0, message.clientTimestamp.high >>> 0).toNumber() : message.clientTimestamp;
                if (message.serverTimestamp != null && message.hasOwnProperty("serverTimestamp"))
                    if (typeof message.serverTimestamp === "number")
                        object.serverTimestamp = options.longs === String ? String(message.serverTimestamp) : message.serverTimestamp;
                    else
                        object.serverTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.serverTimestamp) : options.longs === Number ? new $util.LongBits(message.serverTimestamp.low >>> 0, message.serverTimestamp.high >>> 0).toNumber() : message.serverTimestamp;
                return object;
            };

            /**
             * Converts this HeartbeatRecall to JSON.
             * @function toJSON
             * @memberof heartbeat.proto.HeartbeatRecall
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HeartbeatRecall.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for HeartbeatRecall
             * @function getTypeUrl
             * @memberof heartbeat.proto.HeartbeatRecall
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            HeartbeatRecall.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/heartbeat.proto.HeartbeatRecall";
            };

            return HeartbeatRecall;
        })();

        return proto;
    })();

    return heartbeat;
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
