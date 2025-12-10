/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.common = (function() {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    var common = {};

    common.fish = (function() {

        /**
         * Namespace fish.
         * @memberof common
         * @namespace
         */
        var fish = {};

        fish.proto = (function() {

            /**
             * Namespace proto.
             * @memberof common.fish
             * @namespace
             */
            var proto = {};

            proto.Header = (function() {

                /**
                 * Properties of a Header.
                 * @memberof common.fish.proto
                 * @interface IHeader
                 * @property {common.fish.proto.EMSGID|null} [msgid] Header msgid
                 */

                /**
                 * Constructs a new Header.
                 * @memberof common.fish.proto
                 * @classdesc Represents a Header.
                 * @implements IHeader
                 * @constructor
                 * @param {common.fish.proto.IHeader=} [properties] Properties to set
                 */
                function Header(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Header msgid.
                 * @member {common.fish.proto.EMSGID} msgid
                 * @memberof common.fish.proto.Header
                 * @instance
                 */
                Header.prototype.msgid = 0;

                /**
                 * Creates a new Header instance using the specified properties.
                 * @function create
                 * @memberof common.fish.proto.Header
                 * @static
                 * @param {common.fish.proto.IHeader=} [properties] Properties to set
                 * @returns {common.fish.proto.Header} Header instance
                 */
                Header.create = function create(properties) {
                    return new Header(properties);
                };

                /**
                 * Encodes the specified Header message. Does not implicitly {@link common.fish.proto.Header.verify|verify} messages.
                 * @function encode
                 * @memberof common.fish.proto.Header
                 * @static
                 * @param {common.fish.proto.IHeader} message Header message or plain object to encode
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
                 * Encodes the specified Header message, length delimited. Does not implicitly {@link common.fish.proto.Header.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof common.fish.proto.Header
                 * @static
                 * @param {common.fish.proto.IHeader} message Header message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Header.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Header message from the specified reader or buffer.
                 * @function decode
                 * @memberof common.fish.proto.Header
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {common.fish.proto.Header} Header
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Header.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.fish.proto.Header();
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
                 * @memberof common.fish.proto.Header
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {common.fish.proto.Header} Header
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
                 * @memberof common.fish.proto.Header
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
                        case 3000:
                        case 3001:
                        case 3100:
                        case 3101:
                        case 3102:
                        case 3103:
                        case 3104:
                        case 3105:
                        case 3106:
                        case 4700:
                        case 4701:
                        case 4702:
                        case 4800:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates a Header message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof common.fish.proto.Header
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {common.fish.proto.Header} Header
                 */
                Header.fromObject = function fromObject(object) {
                    if (object instanceof $root.common.fish.proto.Header)
                        return object;
                    var message = new $root.common.fish.proto.Header();
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
                    case "eAllFishCall":
                    case 3000:
                        message.msgid = 3000;
                        break;
                    case "eAllFishRecall":
                    case 3001:
                        message.msgid = 3001;
                        break;
                    case "eBetChange":
                    case 3100:
                        message.msgid = 3100;
                        break;
                    case "eBroadcastBetChange":
                    case 3101:
                        message.msgid = 3101;
                        break;
                    case "eBroadcastShoot":
                    case 3102:
                        message.msgid = 3102;
                        break;
                    case "eBroadcastFishIn":
                    case 3103:
                        message.msgid = 3103;
                        break;
                    case "eBroadcastFishOut":
                    case 3104:
                        message.msgid = 3104;
                        break;
                    case "eBroadcastFishChange":
                    case 3105:
                        message.msgid = 3105;
                        break;
                    case "eBroadcastGroupIn":
                    case 3106:
                        message.msgid = 3106;
                        break;
                    case "eRoundStart":
                    case 4700:
                        message.msgid = 4700;
                        break;
                    case "eRoundEnd":
                    case 4701:
                        message.msgid = 4701;
                        break;
                    case "eBossComing":
                    case 4702:
                        message.msgid = 4702;
                        break;
                    case "eShoot":
                    case 4800:
                        message.msgid = 4800;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Header message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof common.fish.proto.Header
                 * @static
                 * @param {common.fish.proto.Header} message Header
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
                        object.msgid = options.enums === String ? $root.common.fish.proto.EMSGID[message.msgid] === undefined ? message.msgid : $root.common.fish.proto.EMSGID[message.msgid] : message.msgid;
                    return object;
                };

                /**
                 * Converts this Header to JSON.
                 * @function toJSON
                 * @memberof common.fish.proto.Header
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Header.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Header
                 * @function getTypeUrl
                 * @memberof common.fish.proto.Header
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Header.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/common.fish.proto.Header";
                };

                return Header;
            })();

            proto.BetRateLine = (function() {

                /**
                 * Properties of a BetRateLine.
                 * @memberof common.fish.proto
                 * @interface IBetRateLine
                 * @property {number|null} [betLevelIndex] BetRateLine betLevelIndex
                 * @property {number|null} [betIndex] BetRateLine betIndex
                 * @property {number|null} [rateIndex] BetRateLine rateIndex
                 */

                /**
                 * Constructs a new BetRateLine.
                 * @memberof common.fish.proto
                 * @classdesc Represents a BetRateLine.
                 * @implements IBetRateLine
                 * @constructor
                 * @param {common.fish.proto.IBetRateLine=} [properties] Properties to set
                 */
                function BetRateLine(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * BetRateLine betLevelIndex.
                 * @member {number} betLevelIndex
                 * @memberof common.fish.proto.BetRateLine
                 * @instance
                 */
                BetRateLine.prototype.betLevelIndex = 0;

                /**
                 * BetRateLine betIndex.
                 * @member {number} betIndex
                 * @memberof common.fish.proto.BetRateLine
                 * @instance
                 */
                BetRateLine.prototype.betIndex = 0;

                /**
                 * BetRateLine rateIndex.
                 * @member {number} rateIndex
                 * @memberof common.fish.proto.BetRateLine
                 * @instance
                 */
                BetRateLine.prototype.rateIndex = 0;

                /**
                 * Creates a new BetRateLine instance using the specified properties.
                 * @function create
                 * @memberof common.fish.proto.BetRateLine
                 * @static
                 * @param {common.fish.proto.IBetRateLine=} [properties] Properties to set
                 * @returns {common.fish.proto.BetRateLine} BetRateLine instance
                 */
                BetRateLine.create = function create(properties) {
                    return new BetRateLine(properties);
                };

                /**
                 * Encodes the specified BetRateLine message. Does not implicitly {@link common.fish.proto.BetRateLine.verify|verify} messages.
                 * @function encode
                 * @memberof common.fish.proto.BetRateLine
                 * @static
                 * @param {common.fish.proto.IBetRateLine} message BetRateLine message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BetRateLine.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.betLevelIndex != null && Object.hasOwnProperty.call(message, "betLevelIndex"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.betLevelIndex);
                    if (message.betIndex != null && Object.hasOwnProperty.call(message, "betIndex"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.betIndex);
                    if (message.rateIndex != null && Object.hasOwnProperty.call(message, "rateIndex"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.rateIndex);
                    return writer;
                };

                /**
                 * Encodes the specified BetRateLine message, length delimited. Does not implicitly {@link common.fish.proto.BetRateLine.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof common.fish.proto.BetRateLine
                 * @static
                 * @param {common.fish.proto.IBetRateLine} message BetRateLine message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BetRateLine.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a BetRateLine message from the specified reader or buffer.
                 * @function decode
                 * @memberof common.fish.proto.BetRateLine
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {common.fish.proto.BetRateLine} BetRateLine
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BetRateLine.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.fish.proto.BetRateLine();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.betLevelIndex = reader.int32();
                                break;
                            }
                        case 2: {
                                message.betIndex = reader.int32();
                                break;
                            }
                        case 3: {
                                message.rateIndex = reader.int32();
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
                 * Decodes a BetRateLine message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof common.fish.proto.BetRateLine
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {common.fish.proto.BetRateLine} BetRateLine
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BetRateLine.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a BetRateLine message.
                 * @function verify
                 * @memberof common.fish.proto.BetRateLine
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                BetRateLine.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.betLevelIndex != null && message.hasOwnProperty("betLevelIndex"))
                        if (!$util.isInteger(message.betLevelIndex))
                            return "betLevelIndex: integer expected";
                    if (message.betIndex != null && message.hasOwnProperty("betIndex"))
                        if (!$util.isInteger(message.betIndex))
                            return "betIndex: integer expected";
                    if (message.rateIndex != null && message.hasOwnProperty("rateIndex"))
                        if (!$util.isInteger(message.rateIndex))
                            return "rateIndex: integer expected";
                    return null;
                };

                /**
                 * Creates a BetRateLine message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof common.fish.proto.BetRateLine
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {common.fish.proto.BetRateLine} BetRateLine
                 */
                BetRateLine.fromObject = function fromObject(object) {
                    if (object instanceof $root.common.fish.proto.BetRateLine)
                        return object;
                    var message = new $root.common.fish.proto.BetRateLine();
                    if (object.betLevelIndex != null)
                        message.betLevelIndex = object.betLevelIndex | 0;
                    if (object.betIndex != null)
                        message.betIndex = object.betIndex | 0;
                    if (object.rateIndex != null)
                        message.rateIndex = object.rateIndex | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a BetRateLine message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof common.fish.proto.BetRateLine
                 * @static
                 * @param {common.fish.proto.BetRateLine} message BetRateLine
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                BetRateLine.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.betLevelIndex = 0;
                        object.betIndex = 0;
                        object.rateIndex = 0;
                    }
                    if (message.betLevelIndex != null && message.hasOwnProperty("betLevelIndex"))
                        object.betLevelIndex = message.betLevelIndex;
                    if (message.betIndex != null && message.hasOwnProperty("betIndex"))
                        object.betIndex = message.betIndex;
                    if (message.rateIndex != null && message.hasOwnProperty("rateIndex"))
                        object.rateIndex = message.rateIndex;
                    return object;
                };

                /**
                 * Converts this BetRateLine to JSON.
                 * @function toJSON
                 * @memberof common.fish.proto.BetRateLine
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                BetRateLine.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for BetRateLine
                 * @function getTypeUrl
                 * @memberof common.fish.proto.BetRateLine
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                BetRateLine.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/common.fish.proto.BetRateLine";
                };

                return BetRateLine;
            })();

            proto.Point = (function() {

                /**
                 * Properties of a Point.
                 * @memberof common.fish.proto
                 * @interface IPoint
                 * @property {number|null} [x] Point x
                 * @property {number|null} [y] Point y
                 */

                /**
                 * Constructs a new Point.
                 * @memberof common.fish.proto
                 * @classdesc Represents a Point.
                 * @implements IPoint
                 * @constructor
                 * @param {common.fish.proto.IPoint=} [properties] Properties to set
                 */
                function Point(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Point x.
                 * @member {number} x
                 * @memberof common.fish.proto.Point
                 * @instance
                 */
                Point.prototype.x = 0;

                /**
                 * Point y.
                 * @member {number} y
                 * @memberof common.fish.proto.Point
                 * @instance
                 */
                Point.prototype.y = 0;

                /**
                 * Creates a new Point instance using the specified properties.
                 * @function create
                 * @memberof common.fish.proto.Point
                 * @static
                 * @param {common.fish.proto.IPoint=} [properties] Properties to set
                 * @returns {common.fish.proto.Point} Point instance
                 */
                Point.create = function create(properties) {
                    return new Point(properties);
                };

                /**
                 * Encodes the specified Point message. Does not implicitly {@link common.fish.proto.Point.verify|verify} messages.
                 * @function encode
                 * @memberof common.fish.proto.Point
                 * @static
                 * @param {common.fish.proto.IPoint} message Point message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Point.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                        writer.uint32(/* id 1, wireType 1 =*/9).double(message.x);
                    if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                        writer.uint32(/* id 2, wireType 1 =*/17).double(message.y);
                    return writer;
                };

                /**
                 * Encodes the specified Point message, length delimited. Does not implicitly {@link common.fish.proto.Point.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof common.fish.proto.Point
                 * @static
                 * @param {common.fish.proto.IPoint} message Point message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Point.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Point message from the specified reader or buffer.
                 * @function decode
                 * @memberof common.fish.proto.Point
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {common.fish.proto.Point} Point
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Point.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.fish.proto.Point();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.x = reader.double();
                                break;
                            }
                        case 2: {
                                message.y = reader.double();
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
                 * Decodes a Point message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof common.fish.proto.Point
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {common.fish.proto.Point} Point
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Point.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Point message.
                 * @function verify
                 * @memberof common.fish.proto.Point
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Point.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.x != null && message.hasOwnProperty("x"))
                        if (typeof message.x !== "number")
                            return "x: number expected";
                    if (message.y != null && message.hasOwnProperty("y"))
                        if (typeof message.y !== "number")
                            return "y: number expected";
                    return null;
                };

                /**
                 * Creates a Point message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof common.fish.proto.Point
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {common.fish.proto.Point} Point
                 */
                Point.fromObject = function fromObject(object) {
                    if (object instanceof $root.common.fish.proto.Point)
                        return object;
                    var message = new $root.common.fish.proto.Point();
                    if (object.x != null)
                        message.x = Number(object.x);
                    if (object.y != null)
                        message.y = Number(object.y);
                    return message;
                };

                /**
                 * Creates a plain object from a Point message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof common.fish.proto.Point
                 * @static
                 * @param {common.fish.proto.Point} message Point
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Point.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.x = 0;
                        object.y = 0;
                    }
                    if (message.x != null && message.hasOwnProperty("x"))
                        object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
                    if (message.y != null && message.hasOwnProperty("y"))
                        object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
                    return object;
                };

                /**
                 * Converts this Point to JSON.
                 * @function toJSON
                 * @memberof common.fish.proto.Point
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Point.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Point
                 * @function getTypeUrl
                 * @memberof common.fish.proto.Point
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Point.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/common.fish.proto.Point";
                };

                return Point;
            })();

            /**
             * EMSGID enum.
             * @name common.fish.proto.EMSGID
             * @enum {number}
             * @property {number} eReserved=0 eReserved value
             * @property {number} eAllFishCall=3000 eAllFishCall value
             * @property {number} eAllFishRecall=3001 eAllFishRecall value
             * @property {number} eBetChange=3100 eBetChange value
             * @property {number} eBroadcastBetChange=3101 eBroadcastBetChange value
             * @property {number} eBroadcastShoot=3102 eBroadcastShoot value
             * @property {number} eBroadcastFishIn=3103 eBroadcastFishIn value
             * @property {number} eBroadcastFishOut=3104 eBroadcastFishOut value
             * @property {number} eBroadcastFishChange=3105 eBroadcastFishChange value
             * @property {number} eBroadcastGroupIn=3106 eBroadcastGroupIn value
             * @property {number} eRoundStart=4700 eRoundStart value
             * @property {number} eRoundEnd=4701 eRoundEnd value
             * @property {number} eBossComing=4702 eBossComing value
             * @property {number} eShoot=4800 eShoot value
             */
            proto.EMSGID = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "eReserved"] = 0;
                values[valuesById[3000] = "eAllFishCall"] = 3000;
                values[valuesById[3001] = "eAllFishRecall"] = 3001;
                values[valuesById[3100] = "eBetChange"] = 3100;
                values[valuesById[3101] = "eBroadcastBetChange"] = 3101;
                values[valuesById[3102] = "eBroadcastShoot"] = 3102;
                values[valuesById[3103] = "eBroadcastFishIn"] = 3103;
                values[valuesById[3104] = "eBroadcastFishOut"] = 3104;
                values[valuesById[3105] = "eBroadcastFishChange"] = 3105;
                values[valuesById[3106] = "eBroadcastGroupIn"] = 3106;
                values[valuesById[4700] = "eRoundStart"] = 4700;
                values[valuesById[4701] = "eRoundEnd"] = 4701;
                values[valuesById[4702] = "eBossComing"] = 4702;
                values[valuesById[4800] = "eShoot"] = 4800;
                return values;
            })();

            return proto;
        })();

        return fish;
    })();

    return common;
})();

module.exports = $root;
