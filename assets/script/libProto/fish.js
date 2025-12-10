/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.fish = (function() {

    /**
     * Namespace fish.
     * @exports fish
     * @namespace
     */
    var fish = {};

    fish.proto = (function() {

        /**
         * Namespace proto.
         * @memberof fish
         * @namespace
         */
        var proto = {};

        proto.RoundStart = (function() {

            /**
             * Properties of a RoundStart.
             * @memberof fish.proto
             * @interface IRoundStart
             * @property {common.fish.proto.EMSGID|null} [msgid] RoundStart msgid
             * @property {string|null} [roomUuid] RoundStart roomUuid
             */

            /**
             * Constructs a new RoundStart.
             * @memberof fish.proto
             * @classdesc Represents a RoundStart.
             * @implements IRoundStart
             * @constructor
             * @param {fish.proto.IRoundStart=} [properties] Properties to set
             */
            function RoundStart(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RoundStart msgid.
             * @member {common.fish.proto.EMSGID} msgid
             * @memberof fish.proto.RoundStart
             * @instance
             */
            RoundStart.prototype.msgid = 0;

            /**
             * RoundStart roomUuid.
             * @member {string} roomUuid
             * @memberof fish.proto.RoundStart
             * @instance
             */
            RoundStart.prototype.roomUuid = "";

            /**
             * Creates a new RoundStart instance using the specified properties.
             * @function create
             * @memberof fish.proto.RoundStart
             * @static
             * @param {fish.proto.IRoundStart=} [properties] Properties to set
             * @returns {fish.proto.RoundStart} RoundStart instance
             */
            RoundStart.create = function create(properties) {
                return new RoundStart(properties);
            };

            /**
             * Encodes the specified RoundStart message. Does not implicitly {@link fish.proto.RoundStart.verify|verify} messages.
             * @function encode
             * @memberof fish.proto.RoundStart
             * @static
             * @param {fish.proto.IRoundStart} message RoundStart message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoundStart.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.msgid != null && Object.hasOwnProperty.call(message, "msgid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgid);
                if (message.roomUuid != null && Object.hasOwnProperty.call(message, "roomUuid"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomUuid);
                return writer;
            };

            /**
             * Encodes the specified RoundStart message, length delimited. Does not implicitly {@link fish.proto.RoundStart.verify|verify} messages.
             * @function encodeDelimited
             * @memberof fish.proto.RoundStart
             * @static
             * @param {fish.proto.IRoundStart} message RoundStart message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoundStart.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RoundStart message from the specified reader or buffer.
             * @function decode
             * @memberof fish.proto.RoundStart
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {fish.proto.RoundStart} RoundStart
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoundStart.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.fish.proto.RoundStart();
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
                            message.roomUuid = reader.string();
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
             * Decodes a RoundStart message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof fish.proto.RoundStart
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {fish.proto.RoundStart} RoundStart
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoundStart.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RoundStart message.
             * @function verify
             * @memberof fish.proto.RoundStart
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RoundStart.verify = function verify(message) {
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
                if (message.roomUuid != null && message.hasOwnProperty("roomUuid"))
                    if (!$util.isString(message.roomUuid))
                        return "roomUuid: string expected";
                return null;
            };

            /**
             * Creates a RoundStart message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof fish.proto.RoundStart
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {fish.proto.RoundStart} RoundStart
             */
            RoundStart.fromObject = function fromObject(object) {
                if (object instanceof $root.fish.proto.RoundStart)
                    return object;
                var message = new $root.fish.proto.RoundStart();
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
                if (object.roomUuid != null)
                    message.roomUuid = String(object.roomUuid);
                return message;
            };

            /**
             * Creates a plain object from a RoundStart message. Also converts values to other types if specified.
             * @function toObject
             * @memberof fish.proto.RoundStart
             * @static
             * @param {fish.proto.RoundStart} message RoundStart
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RoundStart.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.msgid = options.enums === String ? "eReserved" : 0;
                    object.roomUuid = "";
                }
                if (message.msgid != null && message.hasOwnProperty("msgid"))
                    object.msgid = options.enums === String ? $root.common.fish.proto.EMSGID[message.msgid] === undefined ? message.msgid : $root.common.fish.proto.EMSGID[message.msgid] : message.msgid;
                if (message.roomUuid != null && message.hasOwnProperty("roomUuid"))
                    object.roomUuid = message.roomUuid;
                return object;
            };

            /**
             * Converts this RoundStart to JSON.
             * @function toJSON
             * @memberof fish.proto.RoundStart
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RoundStart.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for RoundStart
             * @function getTypeUrl
             * @memberof fish.proto.RoundStart
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RoundStart.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/fish.proto.RoundStart";
            };

            return RoundStart;
        })();

        proto.RoundEnd = (function() {

            /**
             * Properties of a RoundEnd.
             * @memberof fish.proto
             * @interface IRoundEnd
             * @property {common.fish.proto.EMSGID|null} [msgid] RoundEnd msgid
             * @property {string|null} [roomUuid] RoundEnd roomUuid
             * @property {number|null} [nextScene] RoundEnd nextScene
             */

            /**
             * Constructs a new RoundEnd.
             * @memberof fish.proto
             * @classdesc Represents a RoundEnd.
             * @implements IRoundEnd
             * @constructor
             * @param {fish.proto.IRoundEnd=} [properties] Properties to set
             */
            function RoundEnd(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RoundEnd msgid.
             * @member {common.fish.proto.EMSGID} msgid
             * @memberof fish.proto.RoundEnd
             * @instance
             */
            RoundEnd.prototype.msgid = 0;

            /**
             * RoundEnd roomUuid.
             * @member {string} roomUuid
             * @memberof fish.proto.RoundEnd
             * @instance
             */
            RoundEnd.prototype.roomUuid = "";

            /**
             * RoundEnd nextScene.
             * @member {number} nextScene
             * @memberof fish.proto.RoundEnd
             * @instance
             */
            RoundEnd.prototype.nextScene = 0;

            /**
             * Creates a new RoundEnd instance using the specified properties.
             * @function create
             * @memberof fish.proto.RoundEnd
             * @static
             * @param {fish.proto.IRoundEnd=} [properties] Properties to set
             * @returns {fish.proto.RoundEnd} RoundEnd instance
             */
            RoundEnd.create = function create(properties) {
                return new RoundEnd(properties);
            };

            /**
             * Encodes the specified RoundEnd message. Does not implicitly {@link fish.proto.RoundEnd.verify|verify} messages.
             * @function encode
             * @memberof fish.proto.RoundEnd
             * @static
             * @param {fish.proto.IRoundEnd} message RoundEnd message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoundEnd.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.msgid != null && Object.hasOwnProperty.call(message, "msgid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgid);
                if (message.roomUuid != null && Object.hasOwnProperty.call(message, "roomUuid"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomUuid);
                if (message.nextScene != null && Object.hasOwnProperty.call(message, "nextScene"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nextScene);
                return writer;
            };

            /**
             * Encodes the specified RoundEnd message, length delimited. Does not implicitly {@link fish.proto.RoundEnd.verify|verify} messages.
             * @function encodeDelimited
             * @memberof fish.proto.RoundEnd
             * @static
             * @param {fish.proto.IRoundEnd} message RoundEnd message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoundEnd.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RoundEnd message from the specified reader or buffer.
             * @function decode
             * @memberof fish.proto.RoundEnd
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {fish.proto.RoundEnd} RoundEnd
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoundEnd.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.fish.proto.RoundEnd();
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
                            message.roomUuid = reader.string();
                            break;
                        }
                    case 3: {
                            message.nextScene = reader.int32();
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
             * Decodes a RoundEnd message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof fish.proto.RoundEnd
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {fish.proto.RoundEnd} RoundEnd
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoundEnd.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RoundEnd message.
             * @function verify
             * @memberof fish.proto.RoundEnd
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RoundEnd.verify = function verify(message) {
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
                if (message.roomUuid != null && message.hasOwnProperty("roomUuid"))
                    if (!$util.isString(message.roomUuid))
                        return "roomUuid: string expected";
                if (message.nextScene != null && message.hasOwnProperty("nextScene"))
                    if (!$util.isInteger(message.nextScene))
                        return "nextScene: integer expected";
                return null;
            };

            /**
             * Creates a RoundEnd message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof fish.proto.RoundEnd
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {fish.proto.RoundEnd} RoundEnd
             */
            RoundEnd.fromObject = function fromObject(object) {
                if (object instanceof $root.fish.proto.RoundEnd)
                    return object;
                var message = new $root.fish.proto.RoundEnd();
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
                if (object.roomUuid != null)
                    message.roomUuid = String(object.roomUuid);
                if (object.nextScene != null)
                    message.nextScene = object.nextScene | 0;
                return message;
            };

            /**
             * Creates a plain object from a RoundEnd message. Also converts values to other types if specified.
             * @function toObject
             * @memberof fish.proto.RoundEnd
             * @static
             * @param {fish.proto.RoundEnd} message RoundEnd
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RoundEnd.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.msgid = options.enums === String ? "eReserved" : 0;
                    object.roomUuid = "";
                    object.nextScene = 0;
                }
                if (message.msgid != null && message.hasOwnProperty("msgid"))
                    object.msgid = options.enums === String ? $root.common.fish.proto.EMSGID[message.msgid] === undefined ? message.msgid : $root.common.fish.proto.EMSGID[message.msgid] : message.msgid;
                if (message.roomUuid != null && message.hasOwnProperty("roomUuid"))
                    object.roomUuid = message.roomUuid;
                if (message.nextScene != null && message.hasOwnProperty("nextScene"))
                    object.nextScene = message.nextScene;
                return object;
            };

            /**
             * Converts this RoundEnd to JSON.
             * @function toJSON
             * @memberof fish.proto.RoundEnd
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RoundEnd.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for RoundEnd
             * @function getTypeUrl
             * @memberof fish.proto.RoundEnd
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RoundEnd.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/fish.proto.RoundEnd";
            };

            return RoundEnd;
        })();

        proto.BossComing = (function() {

            /**
             * Properties of a BossComing.
             * @memberof fish.proto
             * @interface IBossComing
             * @property {common.fish.proto.EMSGID|null} [msgid] BossComing msgid
             * @property {string|null} [roomUuid] BossComing roomUuid
             */

            /**
             * Constructs a new BossComing.
             * @memberof fish.proto
             * @classdesc Represents a BossComing.
             * @implements IBossComing
             * @constructor
             * @param {fish.proto.IBossComing=} [properties] Properties to set
             */
            function BossComing(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BossComing msgid.
             * @member {common.fish.proto.EMSGID} msgid
             * @memberof fish.proto.BossComing
             * @instance
             */
            BossComing.prototype.msgid = 0;

            /**
             * BossComing roomUuid.
             * @member {string} roomUuid
             * @memberof fish.proto.BossComing
             * @instance
             */
            BossComing.prototype.roomUuid = "";

            /**
             * Creates a new BossComing instance using the specified properties.
             * @function create
             * @memberof fish.proto.BossComing
             * @static
             * @param {fish.proto.IBossComing=} [properties] Properties to set
             * @returns {fish.proto.BossComing} BossComing instance
             */
            BossComing.create = function create(properties) {
                return new BossComing(properties);
            };

            /**
             * Encodes the specified BossComing message. Does not implicitly {@link fish.proto.BossComing.verify|verify} messages.
             * @function encode
             * @memberof fish.proto.BossComing
             * @static
             * @param {fish.proto.IBossComing} message BossComing message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BossComing.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.msgid != null && Object.hasOwnProperty.call(message, "msgid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgid);
                if (message.roomUuid != null && Object.hasOwnProperty.call(message, "roomUuid"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomUuid);
                return writer;
            };

            /**
             * Encodes the specified BossComing message, length delimited. Does not implicitly {@link fish.proto.BossComing.verify|verify} messages.
             * @function encodeDelimited
             * @memberof fish.proto.BossComing
             * @static
             * @param {fish.proto.IBossComing} message BossComing message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BossComing.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BossComing message from the specified reader or buffer.
             * @function decode
             * @memberof fish.proto.BossComing
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {fish.proto.BossComing} BossComing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BossComing.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.fish.proto.BossComing();
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
                            message.roomUuid = reader.string();
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
             * Decodes a BossComing message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof fish.proto.BossComing
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {fish.proto.BossComing} BossComing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BossComing.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BossComing message.
             * @function verify
             * @memberof fish.proto.BossComing
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BossComing.verify = function verify(message) {
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
                if (message.roomUuid != null && message.hasOwnProperty("roomUuid"))
                    if (!$util.isString(message.roomUuid))
                        return "roomUuid: string expected";
                return null;
            };

            /**
             * Creates a BossComing message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof fish.proto.BossComing
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {fish.proto.BossComing} BossComing
             */
            BossComing.fromObject = function fromObject(object) {
                if (object instanceof $root.fish.proto.BossComing)
                    return object;
                var message = new $root.fish.proto.BossComing();
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
                if (object.roomUuid != null)
                    message.roomUuid = String(object.roomUuid);
                return message;
            };

            /**
             * Creates a plain object from a BossComing message. Also converts values to other types if specified.
             * @function toObject
             * @memberof fish.proto.BossComing
             * @static
             * @param {fish.proto.BossComing} message BossComing
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BossComing.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.msgid = options.enums === String ? "eReserved" : 0;
                    object.roomUuid = "";
                }
                if (message.msgid != null && message.hasOwnProperty("msgid"))
                    object.msgid = options.enums === String ? $root.common.fish.proto.EMSGID[message.msgid] === undefined ? message.msgid : $root.common.fish.proto.EMSGID[message.msgid] : message.msgid;
                if (message.roomUuid != null && message.hasOwnProperty("roomUuid"))
                    object.roomUuid = message.roomUuid;
                return object;
            };

            /**
             * Converts this BossComing to JSON.
             * @function toJSON
             * @memberof fish.proto.BossComing
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BossComing.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BossComing
             * @function getTypeUrl
             * @memberof fish.proto.BossComing
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BossComing.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/fish.proto.BossComing";
            };

            return BossComing;
        })();

        proto.BroadcastFishIn = (function() {

            /**
             * Properties of a BroadcastFishIn.
             * @memberof fish.proto
             * @interface IBroadcastFishIn
             * @property {common.fish.proto.EMSGID|null} [msgid] BroadcastFishIn msgid
             * @property {string|null} [roomUuid] BroadcastFishIn roomUuid
             * @property {fish.proto.IFishInfo|null} [fish] BroadcastFishIn fish
             */

            /**
             * Constructs a new BroadcastFishIn.
             * @memberof fish.proto
             * @classdesc Represents a BroadcastFishIn.
             * @implements IBroadcastFishIn
             * @constructor
             * @param {fish.proto.IBroadcastFishIn=} [properties] Properties to set
             */
            function BroadcastFishIn(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BroadcastFishIn msgid.
             * @member {common.fish.proto.EMSGID} msgid
             * @memberof fish.proto.BroadcastFishIn
             * @instance
             */
            BroadcastFishIn.prototype.msgid = 0;

            /**
             * BroadcastFishIn roomUuid.
             * @member {string} roomUuid
             * @memberof fish.proto.BroadcastFishIn
             * @instance
             */
            BroadcastFishIn.prototype.roomUuid = "";

            /**
             * BroadcastFishIn fish.
             * @member {fish.proto.IFishInfo|null|undefined} fish
             * @memberof fish.proto.BroadcastFishIn
             * @instance
             */
            BroadcastFishIn.prototype.fish = null;

            /**
             * Creates a new BroadcastFishIn instance using the specified properties.
             * @function create
             * @memberof fish.proto.BroadcastFishIn
             * @static
             * @param {fish.proto.IBroadcastFishIn=} [properties] Properties to set
             * @returns {fish.proto.BroadcastFishIn} BroadcastFishIn instance
             */
            BroadcastFishIn.create = function create(properties) {
                return new BroadcastFishIn(properties);
            };

            /**
             * Encodes the specified BroadcastFishIn message. Does not implicitly {@link fish.proto.BroadcastFishIn.verify|verify} messages.
             * @function encode
             * @memberof fish.proto.BroadcastFishIn
             * @static
             * @param {fish.proto.IBroadcastFishIn} message BroadcastFishIn message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BroadcastFishIn.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.msgid != null && Object.hasOwnProperty.call(message, "msgid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgid);
                if (message.roomUuid != null && Object.hasOwnProperty.call(message, "roomUuid"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomUuid);
                if (message.fish != null && Object.hasOwnProperty.call(message, "fish"))
                    $root.fish.proto.FishInfo.encode(message.fish, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified BroadcastFishIn message, length delimited. Does not implicitly {@link fish.proto.BroadcastFishIn.verify|verify} messages.
             * @function encodeDelimited
             * @memberof fish.proto.BroadcastFishIn
             * @static
             * @param {fish.proto.IBroadcastFishIn} message BroadcastFishIn message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BroadcastFishIn.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BroadcastFishIn message from the specified reader or buffer.
             * @function decode
             * @memberof fish.proto.BroadcastFishIn
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {fish.proto.BroadcastFishIn} BroadcastFishIn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BroadcastFishIn.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.fish.proto.BroadcastFishIn();
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
                            message.roomUuid = reader.string();
                            break;
                        }
                    case 3: {
                            message.fish = $root.fish.proto.FishInfo.decode(reader, reader.uint32());
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
             * Decodes a BroadcastFishIn message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof fish.proto.BroadcastFishIn
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {fish.proto.BroadcastFishIn} BroadcastFishIn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BroadcastFishIn.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BroadcastFishIn message.
             * @function verify
             * @memberof fish.proto.BroadcastFishIn
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BroadcastFishIn.verify = function verify(message) {
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
                if (message.roomUuid != null && message.hasOwnProperty("roomUuid"))
                    if (!$util.isString(message.roomUuid))
                        return "roomUuid: string expected";
                if (message.fish != null && message.hasOwnProperty("fish")) {
                    var error = $root.fish.proto.FishInfo.verify(message.fish);
                    if (error)
                        return "fish." + error;
                }
                return null;
            };

            /**
             * Creates a BroadcastFishIn message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof fish.proto.BroadcastFishIn
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {fish.proto.BroadcastFishIn} BroadcastFishIn
             */
            BroadcastFishIn.fromObject = function fromObject(object) {
                if (object instanceof $root.fish.proto.BroadcastFishIn)
                    return object;
                var message = new $root.fish.proto.BroadcastFishIn();
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
                if (object.roomUuid != null)
                    message.roomUuid = String(object.roomUuid);
                if (object.fish != null) {
                    if (typeof object.fish !== "object")
                        throw TypeError(".fish.proto.BroadcastFishIn.fish: object expected");
                    message.fish = $root.fish.proto.FishInfo.fromObject(object.fish);
                }
                return message;
            };

            /**
             * Creates a plain object from a BroadcastFishIn message. Also converts values to other types if specified.
             * @function toObject
             * @memberof fish.proto.BroadcastFishIn
             * @static
             * @param {fish.proto.BroadcastFishIn} message BroadcastFishIn
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BroadcastFishIn.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.msgid = options.enums === String ? "eReserved" : 0;
                    object.roomUuid = "";
                    object.fish = null;
                }
                if (message.msgid != null && message.hasOwnProperty("msgid"))
                    object.msgid = options.enums === String ? $root.common.fish.proto.EMSGID[message.msgid] === undefined ? message.msgid : $root.common.fish.proto.EMSGID[message.msgid] : message.msgid;
                if (message.roomUuid != null && message.hasOwnProperty("roomUuid"))
                    object.roomUuid = message.roomUuid;
                if (message.fish != null && message.hasOwnProperty("fish"))
                    object.fish = $root.fish.proto.FishInfo.toObject(message.fish, options);
                return object;
            };

            /**
             * Converts this BroadcastFishIn to JSON.
             * @function toJSON
             * @memberof fish.proto.BroadcastFishIn
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BroadcastFishIn.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BroadcastFishIn
             * @function getTypeUrl
             * @memberof fish.proto.BroadcastFishIn
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BroadcastFishIn.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/fish.proto.BroadcastFishIn";
            };

            return BroadcastFishIn;
        })();

        proto.BroadcastFishOut = (function() {

            /**
             * Properties of a BroadcastFishOut.
             * @memberof fish.proto
             * @interface IBroadcastFishOut
             * @property {common.fish.proto.EMSGID|null} [msgid] BroadcastFishOut msgid
             * @property {string|null} [roomUuid] BroadcastFishOut roomUuid
             * @property {string|null} [uuid] BroadcastFishOut uuid
             * @property {number|null} [type] BroadcastFishOut type
             */

            /**
             * Constructs a new BroadcastFishOut.
             * @memberof fish.proto
             * @classdesc Represents a BroadcastFishOut.
             * @implements IBroadcastFishOut
             * @constructor
             * @param {fish.proto.IBroadcastFishOut=} [properties] Properties to set
             */
            function BroadcastFishOut(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BroadcastFishOut msgid.
             * @member {common.fish.proto.EMSGID} msgid
             * @memberof fish.proto.BroadcastFishOut
             * @instance
             */
            BroadcastFishOut.prototype.msgid = 0;

            /**
             * BroadcastFishOut roomUuid.
             * @member {string} roomUuid
             * @memberof fish.proto.BroadcastFishOut
             * @instance
             */
            BroadcastFishOut.prototype.roomUuid = "";

            /**
             * BroadcastFishOut uuid.
             * @member {string} uuid
             * @memberof fish.proto.BroadcastFishOut
             * @instance
             */
            BroadcastFishOut.prototype.uuid = "";

            /**
             * BroadcastFishOut type.
             * @member {number} type
             * @memberof fish.proto.BroadcastFishOut
             * @instance
             */
            BroadcastFishOut.prototype.type = 0;

            /**
             * Creates a new BroadcastFishOut instance using the specified properties.
             * @function create
             * @memberof fish.proto.BroadcastFishOut
             * @static
             * @param {fish.proto.IBroadcastFishOut=} [properties] Properties to set
             * @returns {fish.proto.BroadcastFishOut} BroadcastFishOut instance
             */
            BroadcastFishOut.create = function create(properties) {
                return new BroadcastFishOut(properties);
            };

            /**
             * Encodes the specified BroadcastFishOut message. Does not implicitly {@link fish.proto.BroadcastFishOut.verify|verify} messages.
             * @function encode
             * @memberof fish.proto.BroadcastFishOut
             * @static
             * @param {fish.proto.IBroadcastFishOut} message BroadcastFishOut message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BroadcastFishOut.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.msgid != null && Object.hasOwnProperty.call(message, "msgid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgid);
                if (message.roomUuid != null && Object.hasOwnProperty.call(message, "roomUuid"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomUuid);
                if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.uuid);
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type);
                return writer;
            };

            /**
             * Encodes the specified BroadcastFishOut message, length delimited. Does not implicitly {@link fish.proto.BroadcastFishOut.verify|verify} messages.
             * @function encodeDelimited
             * @memberof fish.proto.BroadcastFishOut
             * @static
             * @param {fish.proto.IBroadcastFishOut} message BroadcastFishOut message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BroadcastFishOut.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BroadcastFishOut message from the specified reader or buffer.
             * @function decode
             * @memberof fish.proto.BroadcastFishOut
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {fish.proto.BroadcastFishOut} BroadcastFishOut
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BroadcastFishOut.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.fish.proto.BroadcastFishOut();
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
                            message.roomUuid = reader.string();
                            break;
                        }
                    case 3: {
                            message.uuid = reader.string();
                            break;
                        }
                    case 4: {
                            message.type = reader.int32();
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
             * Decodes a BroadcastFishOut message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof fish.proto.BroadcastFishOut
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {fish.proto.BroadcastFishOut} BroadcastFishOut
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BroadcastFishOut.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BroadcastFishOut message.
             * @function verify
             * @memberof fish.proto.BroadcastFishOut
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BroadcastFishOut.verify = function verify(message) {
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
                if (message.roomUuid != null && message.hasOwnProperty("roomUuid"))
                    if (!$util.isString(message.roomUuid))
                        return "roomUuid: string expected";
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    if (!$util.isString(message.uuid))
                        return "uuid: string expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    if (!$util.isInteger(message.type))
                        return "type: integer expected";
                return null;
            };

            /**
             * Creates a BroadcastFishOut message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof fish.proto.BroadcastFishOut
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {fish.proto.BroadcastFishOut} BroadcastFishOut
             */
            BroadcastFishOut.fromObject = function fromObject(object) {
                if (object instanceof $root.fish.proto.BroadcastFishOut)
                    return object;
                var message = new $root.fish.proto.BroadcastFishOut();
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
                if (object.roomUuid != null)
                    message.roomUuid = String(object.roomUuid);
                if (object.uuid != null)
                    message.uuid = String(object.uuid);
                if (object.type != null)
                    message.type = object.type | 0;
                return message;
            };

            /**
             * Creates a plain object from a BroadcastFishOut message. Also converts values to other types if specified.
             * @function toObject
             * @memberof fish.proto.BroadcastFishOut
             * @static
             * @param {fish.proto.BroadcastFishOut} message BroadcastFishOut
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BroadcastFishOut.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.msgid = options.enums === String ? "eReserved" : 0;
                    object.roomUuid = "";
                    object.uuid = "";
                    object.type = 0;
                }
                if (message.msgid != null && message.hasOwnProperty("msgid"))
                    object.msgid = options.enums === String ? $root.common.fish.proto.EMSGID[message.msgid] === undefined ? message.msgid : $root.common.fish.proto.EMSGID[message.msgid] : message.msgid;
                if (message.roomUuid != null && message.hasOwnProperty("roomUuid"))
                    object.roomUuid = message.roomUuid;
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    object.uuid = message.uuid;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = message.type;
                return object;
            };

            /**
             * Converts this BroadcastFishOut to JSON.
             * @function toJSON
             * @memberof fish.proto.BroadcastFishOut
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BroadcastFishOut.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BroadcastFishOut
             * @function getTypeUrl
             * @memberof fish.proto.BroadcastFishOut
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BroadcastFishOut.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/fish.proto.BroadcastFishOut";
            };

            return BroadcastFishOut;
        })();

        proto.BroadcastGroupIn = (function() {

            /**
             * Properties of a BroadcastGroupIn.
             * @memberof fish.proto
             * @interface IBroadcastGroupIn
             * @property {common.fish.proto.EMSGID|null} [msgid] BroadcastGroupIn msgid
             * @property {string|null} [roomUuid] BroadcastGroupIn roomUuid
             * @property {Array.<fish.proto.IFishInfo>|null} [groupFish] BroadcastGroupIn groupFish
             */

            /**
             * Constructs a new BroadcastGroupIn.
             * @memberof fish.proto
             * @classdesc Represents a BroadcastGroupIn.
             * @implements IBroadcastGroupIn
             * @constructor
             * @param {fish.proto.IBroadcastGroupIn=} [properties] Properties to set
             */
            function BroadcastGroupIn(properties) {
                this.groupFish = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BroadcastGroupIn msgid.
             * @member {common.fish.proto.EMSGID} msgid
             * @memberof fish.proto.BroadcastGroupIn
             * @instance
             */
            BroadcastGroupIn.prototype.msgid = 0;

            /**
             * BroadcastGroupIn roomUuid.
             * @member {string} roomUuid
             * @memberof fish.proto.BroadcastGroupIn
             * @instance
             */
            BroadcastGroupIn.prototype.roomUuid = "";

            /**
             * BroadcastGroupIn groupFish.
             * @member {Array.<fish.proto.IFishInfo>} groupFish
             * @memberof fish.proto.BroadcastGroupIn
             * @instance
             */
            BroadcastGroupIn.prototype.groupFish = $util.emptyArray;

            /**
             * Creates a new BroadcastGroupIn instance using the specified properties.
             * @function create
             * @memberof fish.proto.BroadcastGroupIn
             * @static
             * @param {fish.proto.IBroadcastGroupIn=} [properties] Properties to set
             * @returns {fish.proto.BroadcastGroupIn} BroadcastGroupIn instance
             */
            BroadcastGroupIn.create = function create(properties) {
                return new BroadcastGroupIn(properties);
            };

            /**
             * Encodes the specified BroadcastGroupIn message. Does not implicitly {@link fish.proto.BroadcastGroupIn.verify|verify} messages.
             * @function encode
             * @memberof fish.proto.BroadcastGroupIn
             * @static
             * @param {fish.proto.IBroadcastGroupIn} message BroadcastGroupIn message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BroadcastGroupIn.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.msgid != null && Object.hasOwnProperty.call(message, "msgid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgid);
                if (message.roomUuid != null && Object.hasOwnProperty.call(message, "roomUuid"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomUuid);
                if (message.groupFish != null && message.groupFish.length)
                    for (var i = 0; i < message.groupFish.length; ++i)
                        $root.fish.proto.FishInfo.encode(message.groupFish[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified BroadcastGroupIn message, length delimited. Does not implicitly {@link fish.proto.BroadcastGroupIn.verify|verify} messages.
             * @function encodeDelimited
             * @memberof fish.proto.BroadcastGroupIn
             * @static
             * @param {fish.proto.IBroadcastGroupIn} message BroadcastGroupIn message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BroadcastGroupIn.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BroadcastGroupIn message from the specified reader or buffer.
             * @function decode
             * @memberof fish.proto.BroadcastGroupIn
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {fish.proto.BroadcastGroupIn} BroadcastGroupIn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BroadcastGroupIn.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.fish.proto.BroadcastGroupIn();
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
                            message.roomUuid = reader.string();
                            break;
                        }
                    case 3: {
                            if (!(message.groupFish && message.groupFish.length))
                                message.groupFish = [];
                            message.groupFish.push($root.fish.proto.FishInfo.decode(reader, reader.uint32()));
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
             * Decodes a BroadcastGroupIn message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof fish.proto.BroadcastGroupIn
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {fish.proto.BroadcastGroupIn} BroadcastGroupIn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BroadcastGroupIn.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BroadcastGroupIn message.
             * @function verify
             * @memberof fish.proto.BroadcastGroupIn
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BroadcastGroupIn.verify = function verify(message) {
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
                if (message.roomUuid != null && message.hasOwnProperty("roomUuid"))
                    if (!$util.isString(message.roomUuid))
                        return "roomUuid: string expected";
                if (message.groupFish != null && message.hasOwnProperty("groupFish")) {
                    if (!Array.isArray(message.groupFish))
                        return "groupFish: array expected";
                    for (var i = 0; i < message.groupFish.length; ++i) {
                        var error = $root.fish.proto.FishInfo.verify(message.groupFish[i]);
                        if (error)
                            return "groupFish." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a BroadcastGroupIn message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof fish.proto.BroadcastGroupIn
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {fish.proto.BroadcastGroupIn} BroadcastGroupIn
             */
            BroadcastGroupIn.fromObject = function fromObject(object) {
                if (object instanceof $root.fish.proto.BroadcastGroupIn)
                    return object;
                var message = new $root.fish.proto.BroadcastGroupIn();
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
                if (object.roomUuid != null)
                    message.roomUuid = String(object.roomUuid);
                if (object.groupFish) {
                    if (!Array.isArray(object.groupFish))
                        throw TypeError(".fish.proto.BroadcastGroupIn.groupFish: array expected");
                    message.groupFish = [];
                    for (var i = 0; i < object.groupFish.length; ++i) {
                        if (typeof object.groupFish[i] !== "object")
                            throw TypeError(".fish.proto.BroadcastGroupIn.groupFish: object expected");
                        message.groupFish[i] = $root.fish.proto.FishInfo.fromObject(object.groupFish[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a BroadcastGroupIn message. Also converts values to other types if specified.
             * @function toObject
             * @memberof fish.proto.BroadcastGroupIn
             * @static
             * @param {fish.proto.BroadcastGroupIn} message BroadcastGroupIn
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BroadcastGroupIn.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.groupFish = [];
                if (options.defaults) {
                    object.msgid = options.enums === String ? "eReserved" : 0;
                    object.roomUuid = "";
                }
                if (message.msgid != null && message.hasOwnProperty("msgid"))
                    object.msgid = options.enums === String ? $root.common.fish.proto.EMSGID[message.msgid] === undefined ? message.msgid : $root.common.fish.proto.EMSGID[message.msgid] : message.msgid;
                if (message.roomUuid != null && message.hasOwnProperty("roomUuid"))
                    object.roomUuid = message.roomUuid;
                if (message.groupFish && message.groupFish.length) {
                    object.groupFish = [];
                    for (var j = 0; j < message.groupFish.length; ++j)
                        object.groupFish[j] = $root.fish.proto.FishInfo.toObject(message.groupFish[j], options);
                }
                return object;
            };

            /**
             * Converts this BroadcastGroupIn to JSON.
             * @function toJSON
             * @memberof fish.proto.BroadcastGroupIn
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BroadcastGroupIn.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BroadcastGroupIn
             * @function getTypeUrl
             * @memberof fish.proto.BroadcastGroupIn
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BroadcastGroupIn.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/fish.proto.BroadcastGroupIn";
            };

            return BroadcastGroupIn;
        })();

        proto.AllFishCall = (function() {

            /**
             * Properties of an AllFishCall.
             * @memberof fish.proto
             * @interface IAllFishCall
             * @property {common.fish.proto.EMSGID|null} [msgid] AllFishCall msgid
             * @property {string|null} [roomUuid] AllFishCall roomUuid
             */

            /**
             * Constructs a new AllFishCall.
             * @memberof fish.proto
             * @classdesc Represents an AllFishCall.
             * @implements IAllFishCall
             * @constructor
             * @param {fish.proto.IAllFishCall=} [properties] Properties to set
             */
            function AllFishCall(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AllFishCall msgid.
             * @member {common.fish.proto.EMSGID} msgid
             * @memberof fish.proto.AllFishCall
             * @instance
             */
            AllFishCall.prototype.msgid = 0;

            /**
             * AllFishCall roomUuid.
             * @member {string} roomUuid
             * @memberof fish.proto.AllFishCall
             * @instance
             */
            AllFishCall.prototype.roomUuid = "";

            /**
             * Creates a new AllFishCall instance using the specified properties.
             * @function create
             * @memberof fish.proto.AllFishCall
             * @static
             * @param {fish.proto.IAllFishCall=} [properties] Properties to set
             * @returns {fish.proto.AllFishCall} AllFishCall instance
             */
            AllFishCall.create = function create(properties) {
                return new AllFishCall(properties);
            };

            /**
             * Encodes the specified AllFishCall message. Does not implicitly {@link fish.proto.AllFishCall.verify|verify} messages.
             * @function encode
             * @memberof fish.proto.AllFishCall
             * @static
             * @param {fish.proto.IAllFishCall} message AllFishCall message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AllFishCall.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.msgid != null && Object.hasOwnProperty.call(message, "msgid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgid);
                if (message.roomUuid != null && Object.hasOwnProperty.call(message, "roomUuid"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomUuid);
                return writer;
            };

            /**
             * Encodes the specified AllFishCall message, length delimited. Does not implicitly {@link fish.proto.AllFishCall.verify|verify} messages.
             * @function encodeDelimited
             * @memberof fish.proto.AllFishCall
             * @static
             * @param {fish.proto.IAllFishCall} message AllFishCall message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AllFishCall.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AllFishCall message from the specified reader or buffer.
             * @function decode
             * @memberof fish.proto.AllFishCall
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {fish.proto.AllFishCall} AllFishCall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AllFishCall.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.fish.proto.AllFishCall();
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
                            message.roomUuid = reader.string();
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
             * Decodes an AllFishCall message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof fish.proto.AllFishCall
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {fish.proto.AllFishCall} AllFishCall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AllFishCall.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AllFishCall message.
             * @function verify
             * @memberof fish.proto.AllFishCall
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AllFishCall.verify = function verify(message) {
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
                if (message.roomUuid != null && message.hasOwnProperty("roomUuid"))
                    if (!$util.isString(message.roomUuid))
                        return "roomUuid: string expected";
                return null;
            };

            /**
             * Creates an AllFishCall message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof fish.proto.AllFishCall
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {fish.proto.AllFishCall} AllFishCall
             */
            AllFishCall.fromObject = function fromObject(object) {
                if (object instanceof $root.fish.proto.AllFishCall)
                    return object;
                var message = new $root.fish.proto.AllFishCall();
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
                if (object.roomUuid != null)
                    message.roomUuid = String(object.roomUuid);
                return message;
            };

            /**
             * Creates a plain object from an AllFishCall message. Also converts values to other types if specified.
             * @function toObject
             * @memberof fish.proto.AllFishCall
             * @static
             * @param {fish.proto.AllFishCall} message AllFishCall
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AllFishCall.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.msgid = options.enums === String ? "eReserved" : 0;
                    object.roomUuid = "";
                }
                if (message.msgid != null && message.hasOwnProperty("msgid"))
                    object.msgid = options.enums === String ? $root.common.fish.proto.EMSGID[message.msgid] === undefined ? message.msgid : $root.common.fish.proto.EMSGID[message.msgid] : message.msgid;
                if (message.roomUuid != null && message.hasOwnProperty("roomUuid"))
                    object.roomUuid = message.roomUuid;
                return object;
            };

            /**
             * Converts this AllFishCall to JSON.
             * @function toJSON
             * @memberof fish.proto.AllFishCall
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AllFishCall.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AllFishCall
             * @function getTypeUrl
             * @memberof fish.proto.AllFishCall
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AllFishCall.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/fish.proto.AllFishCall";
            };

            return AllFishCall;
        })();

        proto.AllFishRecall = (function() {

            /**
             * Properties of an AllFishRecall.
             * @memberof fish.proto
             * @interface IAllFishRecall
             * @property {common.fish.proto.EMSGID|null} [msgid] AllFishRecall msgid
             * @property {string|null} [roomUuid] AllFishRecall roomUuid
             * @property {Array.<fish.proto.IFishInfo>|null} [allFish] AllFishRecall allFish
             */

            /**
             * Constructs a new AllFishRecall.
             * @memberof fish.proto
             * @classdesc Represents an AllFishRecall.
             * @implements IAllFishRecall
             * @constructor
             * @param {fish.proto.IAllFishRecall=} [properties] Properties to set
             */
            function AllFishRecall(properties) {
                this.allFish = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AllFishRecall msgid.
             * @member {common.fish.proto.EMSGID} msgid
             * @memberof fish.proto.AllFishRecall
             * @instance
             */
            AllFishRecall.prototype.msgid = 0;

            /**
             * AllFishRecall roomUuid.
             * @member {string} roomUuid
             * @memberof fish.proto.AllFishRecall
             * @instance
             */
            AllFishRecall.prototype.roomUuid = "";

            /**
             * AllFishRecall allFish.
             * @member {Array.<fish.proto.IFishInfo>} allFish
             * @memberof fish.proto.AllFishRecall
             * @instance
             */
            AllFishRecall.prototype.allFish = $util.emptyArray;

            /**
             * Creates a new AllFishRecall instance using the specified properties.
             * @function create
             * @memberof fish.proto.AllFishRecall
             * @static
             * @param {fish.proto.IAllFishRecall=} [properties] Properties to set
             * @returns {fish.proto.AllFishRecall} AllFishRecall instance
             */
            AllFishRecall.create = function create(properties) {
                return new AllFishRecall(properties);
            };

            /**
             * Encodes the specified AllFishRecall message. Does not implicitly {@link fish.proto.AllFishRecall.verify|verify} messages.
             * @function encode
             * @memberof fish.proto.AllFishRecall
             * @static
             * @param {fish.proto.IAllFishRecall} message AllFishRecall message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AllFishRecall.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.msgid != null && Object.hasOwnProperty.call(message, "msgid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgid);
                if (message.roomUuid != null && Object.hasOwnProperty.call(message, "roomUuid"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomUuid);
                if (message.allFish != null && message.allFish.length)
                    for (var i = 0; i < message.allFish.length; ++i)
                        $root.fish.proto.FishInfo.encode(message.allFish[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified AllFishRecall message, length delimited. Does not implicitly {@link fish.proto.AllFishRecall.verify|verify} messages.
             * @function encodeDelimited
             * @memberof fish.proto.AllFishRecall
             * @static
             * @param {fish.proto.IAllFishRecall} message AllFishRecall message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AllFishRecall.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AllFishRecall message from the specified reader or buffer.
             * @function decode
             * @memberof fish.proto.AllFishRecall
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {fish.proto.AllFishRecall} AllFishRecall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AllFishRecall.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.fish.proto.AllFishRecall();
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
                            message.roomUuid = reader.string();
                            break;
                        }
                    case 3: {
                            if (!(message.allFish && message.allFish.length))
                                message.allFish = [];
                            message.allFish.push($root.fish.proto.FishInfo.decode(reader, reader.uint32()));
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
             * Decodes an AllFishRecall message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof fish.proto.AllFishRecall
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {fish.proto.AllFishRecall} AllFishRecall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AllFishRecall.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AllFishRecall message.
             * @function verify
             * @memberof fish.proto.AllFishRecall
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AllFishRecall.verify = function verify(message) {
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
                if (message.roomUuid != null && message.hasOwnProperty("roomUuid"))
                    if (!$util.isString(message.roomUuid))
                        return "roomUuid: string expected";
                if (message.allFish != null && message.hasOwnProperty("allFish")) {
                    if (!Array.isArray(message.allFish))
                        return "allFish: array expected";
                    for (var i = 0; i < message.allFish.length; ++i) {
                        var error = $root.fish.proto.FishInfo.verify(message.allFish[i]);
                        if (error)
                            return "allFish." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an AllFishRecall message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof fish.proto.AllFishRecall
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {fish.proto.AllFishRecall} AllFishRecall
             */
            AllFishRecall.fromObject = function fromObject(object) {
                if (object instanceof $root.fish.proto.AllFishRecall)
                    return object;
                var message = new $root.fish.proto.AllFishRecall();
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
                if (object.roomUuid != null)
                    message.roomUuid = String(object.roomUuid);
                if (object.allFish) {
                    if (!Array.isArray(object.allFish))
                        throw TypeError(".fish.proto.AllFishRecall.allFish: array expected");
                    message.allFish = [];
                    for (var i = 0; i < object.allFish.length; ++i) {
                        if (typeof object.allFish[i] !== "object")
                            throw TypeError(".fish.proto.AllFishRecall.allFish: object expected");
                        message.allFish[i] = $root.fish.proto.FishInfo.fromObject(object.allFish[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an AllFishRecall message. Also converts values to other types if specified.
             * @function toObject
             * @memberof fish.proto.AllFishRecall
             * @static
             * @param {fish.proto.AllFishRecall} message AllFishRecall
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AllFishRecall.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.allFish = [];
                if (options.defaults) {
                    object.msgid = options.enums === String ? "eReserved" : 0;
                    object.roomUuid = "";
                }
                if (message.msgid != null && message.hasOwnProperty("msgid"))
                    object.msgid = options.enums === String ? $root.common.fish.proto.EMSGID[message.msgid] === undefined ? message.msgid : $root.common.fish.proto.EMSGID[message.msgid] : message.msgid;
                if (message.roomUuid != null && message.hasOwnProperty("roomUuid"))
                    object.roomUuid = message.roomUuid;
                if (message.allFish && message.allFish.length) {
                    object.allFish = [];
                    for (var j = 0; j < message.allFish.length; ++j)
                        object.allFish[j] = $root.fish.proto.FishInfo.toObject(message.allFish[j], options);
                }
                return object;
            };

            /**
             * Converts this AllFishRecall to JSON.
             * @function toJSON
             * @memberof fish.proto.AllFishRecall
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AllFishRecall.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AllFishRecall
             * @function getTypeUrl
             * @memberof fish.proto.AllFishRecall
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AllFishRecall.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/fish.proto.AllFishRecall";
            };

            return AllFishRecall;
        })();

        proto.FishInfo = (function() {

            /**
             * Properties of a FishInfo.
             * @memberof fish.proto
             * @interface IFishInfo
             * @property {string|null} [uuid] FishInfo uuid
             * @property {number|null} [symbolId] FishInfo symbolId
             * @property {string|null} [fishType] FishInfo fishType
             * @property {number|null} [fishLife] FishInfo fishLife
             * @property {number|Long|null} [elapsedTime] FishInfo elapsedTime
             * @property {string|null} [fishPath] FishInfo fishPath
             * @property {number|null} [fishSpeed] FishInfo fishSpeed
             * @property {fish.proto.IGroupInfo|null} [group] FishInfo group
             */

            /**
             * Constructs a new FishInfo.
             * @memberof fish.proto
             * @classdesc Represents a FishInfo.
             * @implements IFishInfo
             * @constructor
             * @param {fish.proto.IFishInfo=} [properties] Properties to set
             */
            function FishInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FishInfo uuid.
             * @member {string} uuid
             * @memberof fish.proto.FishInfo
             * @instance
             */
            FishInfo.prototype.uuid = "";

            /**
             * FishInfo symbolId.
             * @member {number} symbolId
             * @memberof fish.proto.FishInfo
             * @instance
             */
            FishInfo.prototype.symbolId = 0;

            /**
             * FishInfo fishType.
             * @member {string} fishType
             * @memberof fish.proto.FishInfo
             * @instance
             */
            FishInfo.prototype.fishType = "";

            /**
             * FishInfo fishLife.
             * @member {number} fishLife
             * @memberof fish.proto.FishInfo
             * @instance
             */
            FishInfo.prototype.fishLife = 0;

            /**
             * FishInfo elapsedTime.
             * @member {number|Long} elapsedTime
             * @memberof fish.proto.FishInfo
             * @instance
             */
            FishInfo.prototype.elapsedTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * FishInfo fishPath.
             * @member {string} fishPath
             * @memberof fish.proto.FishInfo
             * @instance
             */
            FishInfo.prototype.fishPath = "";

            /**
             * FishInfo fishSpeed.
             * @member {number} fishSpeed
             * @memberof fish.proto.FishInfo
             * @instance
             */
            FishInfo.prototype.fishSpeed = 0;

            /**
             * FishInfo group.
             * @member {fish.proto.IGroupInfo|null|undefined} group
             * @memberof fish.proto.FishInfo
             * @instance
             */
            FishInfo.prototype.group = null;

            /**
             * Creates a new FishInfo instance using the specified properties.
             * @function create
             * @memberof fish.proto.FishInfo
             * @static
             * @param {fish.proto.IFishInfo=} [properties] Properties to set
             * @returns {fish.proto.FishInfo} FishInfo instance
             */
            FishInfo.create = function create(properties) {
                return new FishInfo(properties);
            };

            /**
             * Encodes the specified FishInfo message. Does not implicitly {@link fish.proto.FishInfo.verify|verify} messages.
             * @function encode
             * @memberof fish.proto.FishInfo
             * @static
             * @param {fish.proto.IFishInfo} message FishInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FishInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
                if (message.symbolId != null && Object.hasOwnProperty.call(message, "symbolId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.symbolId);
                if (message.fishType != null && Object.hasOwnProperty.call(message, "fishType"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.fishType);
                if (message.fishLife != null && Object.hasOwnProperty.call(message, "fishLife"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.fishLife);
                if (message.elapsedTime != null && Object.hasOwnProperty.call(message, "elapsedTime"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.elapsedTime);
                if (message.fishPath != null && Object.hasOwnProperty.call(message, "fishPath"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.fishPath);
                if (message.fishSpeed != null && Object.hasOwnProperty.call(message, "fishSpeed"))
                    writer.uint32(/* id 7, wireType 1 =*/57).double(message.fishSpeed);
                if (message.group != null && Object.hasOwnProperty.call(message, "group"))
                    $root.fish.proto.GroupInfo.encode(message.group, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FishInfo message, length delimited. Does not implicitly {@link fish.proto.FishInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof fish.proto.FishInfo
             * @static
             * @param {fish.proto.IFishInfo} message FishInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FishInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FishInfo message from the specified reader or buffer.
             * @function decode
             * @memberof fish.proto.FishInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {fish.proto.FishInfo} FishInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FishInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.fish.proto.FishInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.uuid = reader.string();
                            break;
                        }
                    case 2: {
                            message.symbolId = reader.int32();
                            break;
                        }
                    case 3: {
                            message.fishType = reader.string();
                            break;
                        }
                    case 4: {
                            message.fishLife = reader.int32();
                            break;
                        }
                    case 5: {
                            message.elapsedTime = reader.int64();
                            break;
                        }
                    case 6: {
                            message.fishPath = reader.string();
                            break;
                        }
                    case 7: {
                            message.fishSpeed = reader.double();
                            break;
                        }
                    case 8: {
                            message.group = $root.fish.proto.GroupInfo.decode(reader, reader.uint32());
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
             * Decodes a FishInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof fish.proto.FishInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {fish.proto.FishInfo} FishInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FishInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FishInfo message.
             * @function verify
             * @memberof fish.proto.FishInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FishInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    if (!$util.isString(message.uuid))
                        return "uuid: string expected";
                if (message.symbolId != null && message.hasOwnProperty("symbolId"))
                    if (!$util.isInteger(message.symbolId))
                        return "symbolId: integer expected";
                if (message.fishType != null && message.hasOwnProperty("fishType"))
                    if (!$util.isString(message.fishType))
                        return "fishType: string expected";
                if (message.fishLife != null && message.hasOwnProperty("fishLife"))
                    if (!$util.isInteger(message.fishLife))
                        return "fishLife: integer expected";
                if (message.elapsedTime != null && message.hasOwnProperty("elapsedTime"))
                    if (!$util.isInteger(message.elapsedTime) && !(message.elapsedTime && $util.isInteger(message.elapsedTime.low) && $util.isInteger(message.elapsedTime.high)))
                        return "elapsedTime: integer|Long expected";
                if (message.fishPath != null && message.hasOwnProperty("fishPath"))
                    if (!$util.isString(message.fishPath))
                        return "fishPath: string expected";
                if (message.fishSpeed != null && message.hasOwnProperty("fishSpeed"))
                    if (typeof message.fishSpeed !== "number")
                        return "fishSpeed: number expected";
                if (message.group != null && message.hasOwnProperty("group")) {
                    var error = $root.fish.proto.GroupInfo.verify(message.group);
                    if (error)
                        return "group." + error;
                }
                return null;
            };

            /**
             * Creates a FishInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof fish.proto.FishInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {fish.proto.FishInfo} FishInfo
             */
            FishInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.fish.proto.FishInfo)
                    return object;
                var message = new $root.fish.proto.FishInfo();
                if (object.uuid != null)
                    message.uuid = String(object.uuid);
                if (object.symbolId != null)
                    message.symbolId = object.symbolId | 0;
                if (object.fishType != null)
                    message.fishType = String(object.fishType);
                if (object.fishLife != null)
                    message.fishLife = object.fishLife | 0;
                if (object.elapsedTime != null)
                    if ($util.Long)
                        (message.elapsedTime = $util.Long.fromValue(object.elapsedTime)).unsigned = false;
                    else if (typeof object.elapsedTime === "string")
                        message.elapsedTime = parseInt(object.elapsedTime, 10);
                    else if (typeof object.elapsedTime === "number")
                        message.elapsedTime = object.elapsedTime;
                    else if (typeof object.elapsedTime === "object")
                        message.elapsedTime = new $util.LongBits(object.elapsedTime.low >>> 0, object.elapsedTime.high >>> 0).toNumber();
                if (object.fishPath != null)
                    message.fishPath = String(object.fishPath);
                if (object.fishSpeed != null)
                    message.fishSpeed = Number(object.fishSpeed);
                if (object.group != null) {
                    if (typeof object.group !== "object")
                        throw TypeError(".fish.proto.FishInfo.group: object expected");
                    message.group = $root.fish.proto.GroupInfo.fromObject(object.group);
                }
                return message;
            };

            /**
             * Creates a plain object from a FishInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof fish.proto.FishInfo
             * @static
             * @param {fish.proto.FishInfo} message FishInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FishInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.uuid = "";
                    object.symbolId = 0;
                    object.fishType = "";
                    object.fishLife = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.elapsedTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.elapsedTime = options.longs === String ? "0" : 0;
                    object.fishPath = "";
                    object.fishSpeed = 0;
                    object.group = null;
                }
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    object.uuid = message.uuid;
                if (message.symbolId != null && message.hasOwnProperty("symbolId"))
                    object.symbolId = message.symbolId;
                if (message.fishType != null && message.hasOwnProperty("fishType"))
                    object.fishType = message.fishType;
                if (message.fishLife != null && message.hasOwnProperty("fishLife"))
                    object.fishLife = message.fishLife;
                if (message.elapsedTime != null && message.hasOwnProperty("elapsedTime"))
                    if (typeof message.elapsedTime === "number")
                        object.elapsedTime = options.longs === String ? String(message.elapsedTime) : message.elapsedTime;
                    else
                        object.elapsedTime = options.longs === String ? $util.Long.prototype.toString.call(message.elapsedTime) : options.longs === Number ? new $util.LongBits(message.elapsedTime.low >>> 0, message.elapsedTime.high >>> 0).toNumber() : message.elapsedTime;
                if (message.fishPath != null && message.hasOwnProperty("fishPath"))
                    object.fishPath = message.fishPath;
                if (message.fishSpeed != null && message.hasOwnProperty("fishSpeed"))
                    object.fishSpeed = options.json && !isFinite(message.fishSpeed) ? String(message.fishSpeed) : message.fishSpeed;
                if (message.group != null && message.hasOwnProperty("group"))
                    object.group = $root.fish.proto.GroupInfo.toObject(message.group, options);
                return object;
            };

            /**
             * Converts this FishInfo to JSON.
             * @function toJSON
             * @memberof fish.proto.FishInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FishInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FishInfo
             * @function getTypeUrl
             * @memberof fish.proto.FishInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FishInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/fish.proto.FishInfo";
            };

            return FishInfo;
        })();

        proto.BroadcastFishChange = (function() {

            /**
             * Properties of a BroadcastFishChange.
             * @memberof fish.proto
             * @interface IBroadcastFishChange
             * @property {common.fish.proto.EMSGID|null} [msgid] BroadcastFishChange msgid
             * @property {string|null} [roomUuid] BroadcastFishChange roomUuid
             * @property {string|null} [uuid] BroadcastFishChange uuid
             * @property {number|null} [symbolId] BroadcastFishChange symbolId
             */

            /**
             * Constructs a new BroadcastFishChange.
             * @memberof fish.proto
             * @classdesc Represents a BroadcastFishChange.
             * @implements IBroadcastFishChange
             * @constructor
             * @param {fish.proto.IBroadcastFishChange=} [properties] Properties to set
             */
            function BroadcastFishChange(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BroadcastFishChange msgid.
             * @member {common.fish.proto.EMSGID} msgid
             * @memberof fish.proto.BroadcastFishChange
             * @instance
             */
            BroadcastFishChange.prototype.msgid = 0;

            /**
             * BroadcastFishChange roomUuid.
             * @member {string} roomUuid
             * @memberof fish.proto.BroadcastFishChange
             * @instance
             */
            BroadcastFishChange.prototype.roomUuid = "";

            /**
             * BroadcastFishChange uuid.
             * @member {string} uuid
             * @memberof fish.proto.BroadcastFishChange
             * @instance
             */
            BroadcastFishChange.prototype.uuid = "";

            /**
             * BroadcastFishChange symbolId.
             * @member {number} symbolId
             * @memberof fish.proto.BroadcastFishChange
             * @instance
             */
            BroadcastFishChange.prototype.symbolId = 0;

            /**
             * Creates a new BroadcastFishChange instance using the specified properties.
             * @function create
             * @memberof fish.proto.BroadcastFishChange
             * @static
             * @param {fish.proto.IBroadcastFishChange=} [properties] Properties to set
             * @returns {fish.proto.BroadcastFishChange} BroadcastFishChange instance
             */
            BroadcastFishChange.create = function create(properties) {
                return new BroadcastFishChange(properties);
            };

            /**
             * Encodes the specified BroadcastFishChange message. Does not implicitly {@link fish.proto.BroadcastFishChange.verify|verify} messages.
             * @function encode
             * @memberof fish.proto.BroadcastFishChange
             * @static
             * @param {fish.proto.IBroadcastFishChange} message BroadcastFishChange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BroadcastFishChange.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.msgid != null && Object.hasOwnProperty.call(message, "msgid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgid);
                if (message.roomUuid != null && Object.hasOwnProperty.call(message, "roomUuid"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomUuid);
                if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.uuid);
                if (message.symbolId != null && Object.hasOwnProperty.call(message, "symbolId"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.symbolId);
                return writer;
            };

            /**
             * Encodes the specified BroadcastFishChange message, length delimited. Does not implicitly {@link fish.proto.BroadcastFishChange.verify|verify} messages.
             * @function encodeDelimited
             * @memberof fish.proto.BroadcastFishChange
             * @static
             * @param {fish.proto.IBroadcastFishChange} message BroadcastFishChange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BroadcastFishChange.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BroadcastFishChange message from the specified reader or buffer.
             * @function decode
             * @memberof fish.proto.BroadcastFishChange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {fish.proto.BroadcastFishChange} BroadcastFishChange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BroadcastFishChange.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.fish.proto.BroadcastFishChange();
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
                            message.roomUuid = reader.string();
                            break;
                        }
                    case 3: {
                            message.uuid = reader.string();
                            break;
                        }
                    case 4: {
                            message.symbolId = reader.int32();
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
             * Decodes a BroadcastFishChange message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof fish.proto.BroadcastFishChange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {fish.proto.BroadcastFishChange} BroadcastFishChange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BroadcastFishChange.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BroadcastFishChange message.
             * @function verify
             * @memberof fish.proto.BroadcastFishChange
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BroadcastFishChange.verify = function verify(message) {
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
                if (message.roomUuid != null && message.hasOwnProperty("roomUuid"))
                    if (!$util.isString(message.roomUuid))
                        return "roomUuid: string expected";
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    if (!$util.isString(message.uuid))
                        return "uuid: string expected";
                if (message.symbolId != null && message.hasOwnProperty("symbolId"))
                    if (!$util.isInteger(message.symbolId))
                        return "symbolId: integer expected";
                return null;
            };

            /**
             * Creates a BroadcastFishChange message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof fish.proto.BroadcastFishChange
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {fish.proto.BroadcastFishChange} BroadcastFishChange
             */
            BroadcastFishChange.fromObject = function fromObject(object) {
                if (object instanceof $root.fish.proto.BroadcastFishChange)
                    return object;
                var message = new $root.fish.proto.BroadcastFishChange();
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
                if (object.roomUuid != null)
                    message.roomUuid = String(object.roomUuid);
                if (object.uuid != null)
                    message.uuid = String(object.uuid);
                if (object.symbolId != null)
                    message.symbolId = object.symbolId | 0;
                return message;
            };

            /**
             * Creates a plain object from a BroadcastFishChange message. Also converts values to other types if specified.
             * @function toObject
             * @memberof fish.proto.BroadcastFishChange
             * @static
             * @param {fish.proto.BroadcastFishChange} message BroadcastFishChange
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BroadcastFishChange.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.msgid = options.enums === String ? "eReserved" : 0;
                    object.roomUuid = "";
                    object.uuid = "";
                    object.symbolId = 0;
                }
                if (message.msgid != null && message.hasOwnProperty("msgid"))
                    object.msgid = options.enums === String ? $root.common.fish.proto.EMSGID[message.msgid] === undefined ? message.msgid : $root.common.fish.proto.EMSGID[message.msgid] : message.msgid;
                if (message.roomUuid != null && message.hasOwnProperty("roomUuid"))
                    object.roomUuid = message.roomUuid;
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    object.uuid = message.uuid;
                if (message.symbolId != null && message.hasOwnProperty("symbolId"))
                    object.symbolId = message.symbolId;
                return object;
            };

            /**
             * Converts this BroadcastFishChange to JSON.
             * @function toJSON
             * @memberof fish.proto.BroadcastFishChange
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BroadcastFishChange.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BroadcastFishChange
             * @function getTypeUrl
             * @memberof fish.proto.BroadcastFishChange
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BroadcastFishChange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/fish.proto.BroadcastFishChange";
            };

            return BroadcastFishChange;
        })();

        proto.GroupInfo = (function() {

            /**
             * Properties of a GroupInfo.
             * @memberof fish.proto
             * @interface IGroupInfo
             * @property {string|null} [uuid] GroupInfo uuid
             * @property {number|null} [groupNumber] GroupInfo groupNumber
             * @property {string|null} [groupShape] GroupInfo groupShape
             */

            /**
             * Constructs a new GroupInfo.
             * @memberof fish.proto
             * @classdesc Represents a GroupInfo.
             * @implements IGroupInfo
             * @constructor
             * @param {fish.proto.IGroupInfo=} [properties] Properties to set
             */
            function GroupInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GroupInfo uuid.
             * @member {string} uuid
             * @memberof fish.proto.GroupInfo
             * @instance
             */
            GroupInfo.prototype.uuid = "";

            /**
             * GroupInfo groupNumber.
             * @member {number} groupNumber
             * @memberof fish.proto.GroupInfo
             * @instance
             */
            GroupInfo.prototype.groupNumber = 0;

            /**
             * GroupInfo groupShape.
             * @member {string} groupShape
             * @memberof fish.proto.GroupInfo
             * @instance
             */
            GroupInfo.prototype.groupShape = "";

            /**
             * Creates a new GroupInfo instance using the specified properties.
             * @function create
             * @memberof fish.proto.GroupInfo
             * @static
             * @param {fish.proto.IGroupInfo=} [properties] Properties to set
             * @returns {fish.proto.GroupInfo} GroupInfo instance
             */
            GroupInfo.create = function create(properties) {
                return new GroupInfo(properties);
            };

            /**
             * Encodes the specified GroupInfo message. Does not implicitly {@link fish.proto.GroupInfo.verify|verify} messages.
             * @function encode
             * @memberof fish.proto.GroupInfo
             * @static
             * @param {fish.proto.IGroupInfo} message GroupInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GroupInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
                if (message.groupNumber != null && Object.hasOwnProperty.call(message, "groupNumber"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.groupNumber);
                if (message.groupShape != null && Object.hasOwnProperty.call(message, "groupShape"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.groupShape);
                return writer;
            };

            /**
             * Encodes the specified GroupInfo message, length delimited. Does not implicitly {@link fish.proto.GroupInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof fish.proto.GroupInfo
             * @static
             * @param {fish.proto.IGroupInfo} message GroupInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GroupInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GroupInfo message from the specified reader or buffer.
             * @function decode
             * @memberof fish.proto.GroupInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {fish.proto.GroupInfo} GroupInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GroupInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.fish.proto.GroupInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.uuid = reader.string();
                            break;
                        }
                    case 2: {
                            message.groupNumber = reader.int32();
                            break;
                        }
                    case 3: {
                            message.groupShape = reader.string();
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
             * Decodes a GroupInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof fish.proto.GroupInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {fish.proto.GroupInfo} GroupInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GroupInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GroupInfo message.
             * @function verify
             * @memberof fish.proto.GroupInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GroupInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    if (!$util.isString(message.uuid))
                        return "uuid: string expected";
                if (message.groupNumber != null && message.hasOwnProperty("groupNumber"))
                    if (!$util.isInteger(message.groupNumber))
                        return "groupNumber: integer expected";
                if (message.groupShape != null && message.hasOwnProperty("groupShape"))
                    if (!$util.isString(message.groupShape))
                        return "groupShape: string expected";
                return null;
            };

            /**
             * Creates a GroupInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof fish.proto.GroupInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {fish.proto.GroupInfo} GroupInfo
             */
            GroupInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.fish.proto.GroupInfo)
                    return object;
                var message = new $root.fish.proto.GroupInfo();
                if (object.uuid != null)
                    message.uuid = String(object.uuid);
                if (object.groupNumber != null)
                    message.groupNumber = object.groupNumber | 0;
                if (object.groupShape != null)
                    message.groupShape = String(object.groupShape);
                return message;
            };

            /**
             * Creates a plain object from a GroupInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof fish.proto.GroupInfo
             * @static
             * @param {fish.proto.GroupInfo} message GroupInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GroupInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.uuid = "";
                    object.groupNumber = 0;
                    object.groupShape = "";
                }
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    object.uuid = message.uuid;
                if (message.groupNumber != null && message.hasOwnProperty("groupNumber"))
                    object.groupNumber = message.groupNumber;
                if (message.groupShape != null && message.hasOwnProperty("groupShape"))
                    object.groupShape = message.groupShape;
                return object;
            };

            /**
             * Converts this GroupInfo to JSON.
             * @function toJSON
             * @memberof fish.proto.GroupInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GroupInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GroupInfo
             * @function getTypeUrl
             * @memberof fish.proto.GroupInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GroupInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/fish.proto.GroupInfo";
            };

            return GroupInfo;
        })();

        return proto;
    })();

    return fish;
})();

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
