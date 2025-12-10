/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.broadcaster = (function() {

    /**
     * Namespace broadcaster.
     * @exports broadcaster
     * @namespace
     */
    var broadcaster = {};

    broadcaster.proto = (function() {

        /**
         * Namespace proto.
         * @memberof broadcaster
         * @namespace
         */
        var proto = {};

        /**
         * BROADCASTER_TYPE enum.
         * @name broadcaster.proto.BROADCASTER_TYPE
         * @enum {number}
         * @property {number} BIG_WIN=0 BIG_WIN value
         * @property {number} BONUS_WIN=1 BONUS_WIN value
         * @property {number} SHUTDOWN=2 SHUTDOWN value
         */
        proto.BROADCASTER_TYPE = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "BIG_WIN"] = 0;
            values[valuesById[1] = "BONUS_WIN"] = 1;
            values[valuesById[2] = "SHUTDOWN"] = 2;
            return values;
        })();

        /**
         * DELIVER_TYPE enum.
         * @name broadcaster.proto.DELIVER_TYPE
         * @enum {number}
         * @property {number} LOBBY=0 LOBBY value
         * @property {number} GAME=1 GAME value
         */
        proto.DELIVER_TYPE = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "LOBBY"] = 0;
            values[valuesById[1] = "GAME"] = 1;
            return values;
        })();

        proto.Broadcaster = (function() {

            /**
             * Properties of a Broadcaster.
             * @memberof broadcaster.proto
             * @interface IBroadcaster
             * @property {common.proto.EMSGID|null} [msgid] Broadcaster msgid
             * @property {broadcaster.proto.DELIVER_TYPE|null} [dvType] Broadcaster dvType
             * @property {broadcaster.proto.BROADCASTER_TYPE|null} [bcType] Broadcaster bcType
             * @property {string|null} [gameId] Broadcaster gameId
             * @property {number|null} [subgameId] Broadcaster subgameId
             * @property {string|null} [memberId] Broadcaster memberId
             * @property {string|null} [message] Broadcaster message
             * @property {number|null} [time] Broadcaster time
             */

            /**
             * Constructs a new Broadcaster.
             * @memberof broadcaster.proto
             * @classdesc Represents a Broadcaster.
             * @implements IBroadcaster
             * @constructor
             * @param {broadcaster.proto.IBroadcaster=} [properties] Properties to set
             */
            function Broadcaster(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Broadcaster msgid.
             * @member {common.proto.EMSGID} msgid
             * @memberof broadcaster.proto.Broadcaster
             * @instance
             */
            Broadcaster.prototype.msgid = 0;

            /**
             * Broadcaster dvType.
             * @member {broadcaster.proto.DELIVER_TYPE} dvType
             * @memberof broadcaster.proto.Broadcaster
             * @instance
             */
            Broadcaster.prototype.dvType = 0;

            /**
             * Broadcaster bcType.
             * @member {broadcaster.proto.BROADCASTER_TYPE} bcType
             * @memberof broadcaster.proto.Broadcaster
             * @instance
             */
            Broadcaster.prototype.bcType = 0;

            /**
             * Broadcaster gameId.
             * @member {string} gameId
             * @memberof broadcaster.proto.Broadcaster
             * @instance
             */
            Broadcaster.prototype.gameId = "";

            /**
             * Broadcaster subgameId.
             * @member {number} subgameId
             * @memberof broadcaster.proto.Broadcaster
             * @instance
             */
            Broadcaster.prototype.subgameId = 0;

            /**
             * Broadcaster memberId.
             * @member {string} memberId
             * @memberof broadcaster.proto.Broadcaster
             * @instance
             */
            Broadcaster.prototype.memberId = "";

            /**
             * Broadcaster message.
             * @member {string} message
             * @memberof broadcaster.proto.Broadcaster
             * @instance
             */
            Broadcaster.prototype.message = "";

            /**
             * Broadcaster time.
             * @member {number} time
             * @memberof broadcaster.proto.Broadcaster
             * @instance
             */
            Broadcaster.prototype.time = 0;

            /**
             * Creates a new Broadcaster instance using the specified properties.
             * @function create
             * @memberof broadcaster.proto.Broadcaster
             * @static
             * @param {broadcaster.proto.IBroadcaster=} [properties] Properties to set
             * @returns {broadcaster.proto.Broadcaster} Broadcaster instance
             */
            Broadcaster.create = function create(properties) {
                return new Broadcaster(properties);
            };

            /**
             * Encodes the specified Broadcaster message. Does not implicitly {@link broadcaster.proto.Broadcaster.verify|verify} messages.
             * @function encode
             * @memberof broadcaster.proto.Broadcaster
             * @static
             * @param {broadcaster.proto.IBroadcaster} message Broadcaster message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Broadcaster.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.msgid != null && Object.hasOwnProperty.call(message, "msgid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgid);
                if (message.dvType != null && Object.hasOwnProperty.call(message, "dvType"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.dvType);
                if (message.bcType != null && Object.hasOwnProperty.call(message, "bcType"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.bcType);
                if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.gameId);
                if (message.subgameId != null && Object.hasOwnProperty.call(message, "subgameId"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.subgameId);
                if (message.memberId != null && Object.hasOwnProperty.call(message, "memberId"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.memberId);
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.message);
                if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.time);
                return writer;
            };

            /**
             * Encodes the specified Broadcaster message, length delimited. Does not implicitly {@link broadcaster.proto.Broadcaster.verify|verify} messages.
             * @function encodeDelimited
             * @memberof broadcaster.proto.Broadcaster
             * @static
             * @param {broadcaster.proto.IBroadcaster} message Broadcaster message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Broadcaster.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Broadcaster message from the specified reader or buffer.
             * @function decode
             * @memberof broadcaster.proto.Broadcaster
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {broadcaster.proto.Broadcaster} Broadcaster
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Broadcaster.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.broadcaster.proto.Broadcaster();
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
                            message.dvType = reader.int32();
                            break;
                        }
                    case 3: {
                            message.bcType = reader.int32();
                            break;
                        }
                    case 4: {
                            message.gameId = reader.string();
                            break;
                        }
                    case 5: {
                            message.subgameId = reader.uint32();
                            break;
                        }
                    case 6: {
                            message.memberId = reader.string();
                            break;
                        }
                    case 7: {
                            message.message = reader.string();
                            break;
                        }
                    case 8: {
                            message.time = reader.uint32();
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
             * Decodes a Broadcaster message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof broadcaster.proto.Broadcaster
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {broadcaster.proto.Broadcaster} Broadcaster
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Broadcaster.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Broadcaster message.
             * @function verify
             * @memberof broadcaster.proto.Broadcaster
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Broadcaster.verify = function verify(message) {
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
                if (message.dvType != null && message.hasOwnProperty("dvType"))
                    switch (message.dvType) {
                    default:
                        return "dvType: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.bcType != null && message.hasOwnProperty("bcType"))
                    switch (message.bcType) {
                    default:
                        return "bcType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.gameId != null && message.hasOwnProperty("gameId"))
                    if (!$util.isString(message.gameId))
                        return "gameId: string expected";
                if (message.subgameId != null && message.hasOwnProperty("subgameId"))
                    if (!$util.isInteger(message.subgameId))
                        return "subgameId: integer expected";
                if (message.memberId != null && message.hasOwnProperty("memberId"))
                    if (!$util.isString(message.memberId))
                        return "memberId: string expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                if (message.time != null && message.hasOwnProperty("time"))
                    if (!$util.isInteger(message.time))
                        return "time: integer expected";
                return null;
            };

            /**
             * Creates a Broadcaster message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof broadcaster.proto.Broadcaster
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {broadcaster.proto.Broadcaster} Broadcaster
             */
            Broadcaster.fromObject = function fromObject(object) {
                if (object instanceof $root.broadcaster.proto.Broadcaster)
                    return object;
                var message = new $root.broadcaster.proto.Broadcaster();
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
                switch (object.dvType) {
                default:
                    if (typeof object.dvType === "number") {
                        message.dvType = object.dvType;
                        break;
                    }
                    break;
                case "LOBBY":
                case 0:
                    message.dvType = 0;
                    break;
                case "GAME":
                case 1:
                    message.dvType = 1;
                    break;
                }
                switch (object.bcType) {
                default:
                    if (typeof object.bcType === "number") {
                        message.bcType = object.bcType;
                        break;
                    }
                    break;
                case "BIG_WIN":
                case 0:
                    message.bcType = 0;
                    break;
                case "BONUS_WIN":
                case 1:
                    message.bcType = 1;
                    break;
                case "SHUTDOWN":
                case 2:
                    message.bcType = 2;
                    break;
                }
                if (object.gameId != null)
                    message.gameId = String(object.gameId);
                if (object.subgameId != null)
                    message.subgameId = object.subgameId >>> 0;
                if (object.memberId != null)
                    message.memberId = String(object.memberId);
                if (object.message != null)
                    message.message = String(object.message);
                if (object.time != null)
                    message.time = object.time >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a Broadcaster message. Also converts values to other types if specified.
             * @function toObject
             * @memberof broadcaster.proto.Broadcaster
             * @static
             * @param {broadcaster.proto.Broadcaster} message Broadcaster
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Broadcaster.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.msgid = options.enums === String ? "eReserved" : 0;
                    object.dvType = options.enums === String ? "LOBBY" : 0;
                    object.bcType = options.enums === String ? "BIG_WIN" : 0;
                    object.gameId = "";
                    object.subgameId = 0;
                    object.memberId = "";
                    object.message = "";
                    object.time = 0;
                }
                if (message.msgid != null && message.hasOwnProperty("msgid"))
                    object.msgid = options.enums === String ? $root.common.proto.EMSGID[message.msgid] === undefined ? message.msgid : $root.common.proto.EMSGID[message.msgid] : message.msgid;
                if (message.dvType != null && message.hasOwnProperty("dvType"))
                    object.dvType = options.enums === String ? $root.broadcaster.proto.DELIVER_TYPE[message.dvType] === undefined ? message.dvType : $root.broadcaster.proto.DELIVER_TYPE[message.dvType] : message.dvType;
                if (message.bcType != null && message.hasOwnProperty("bcType"))
                    object.bcType = options.enums === String ? $root.broadcaster.proto.BROADCASTER_TYPE[message.bcType] === undefined ? message.bcType : $root.broadcaster.proto.BROADCASTER_TYPE[message.bcType] : message.bcType;
                if (message.gameId != null && message.hasOwnProperty("gameId"))
                    object.gameId = message.gameId;
                if (message.subgameId != null && message.hasOwnProperty("subgameId"))
                    object.subgameId = message.subgameId;
                if (message.memberId != null && message.hasOwnProperty("memberId"))
                    object.memberId = message.memberId;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                if (message.time != null && message.hasOwnProperty("time"))
                    object.time = message.time;
                return object;
            };

            /**
             * Converts this Broadcaster to JSON.
             * @function toJSON
             * @memberof broadcaster.proto.Broadcaster
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Broadcaster.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Broadcaster
             * @function getTypeUrl
             * @memberof broadcaster.proto.Broadcaster
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Broadcaster.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/broadcaster.proto.Broadcaster";
            };

            return Broadcaster;
        })();

        return proto;
    })();

    return broadcaster;
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
