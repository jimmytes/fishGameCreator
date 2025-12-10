/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.bullet = (function() {

    /**
     * Namespace bullet.
     * @exports bullet
     * @namespace
     */
    var bullet = {};

    bullet.proto = (function() {

        /**
         * Namespace proto.
         * @memberof bullet
         * @namespace
         */
        var proto = {};

        proto.ExtraData = (function() {

            /**
             * Properties of an ExtraData.
             * @memberof bullet.proto
             * @interface IExtraData
             * @property {common.fish.proto.IPoint|null} [target] ExtraData target
             * @property {number|null} [shootMode] ExtraData shootMode
             * @property {number|null} [muzzleIdx] ExtraData muzzleIdx
             * @property {Array.<string>|null} [lockObjUuid] ExtraData lockObjUuid
             */

            /**
             * Constructs a new ExtraData.
             * @memberof bullet.proto
             * @classdesc Represents an ExtraData.
             * @implements IExtraData
             * @constructor
             * @param {bullet.proto.IExtraData=} [properties] Properties to set
             */
            function ExtraData(properties) {
                this.lockObjUuid = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ExtraData target.
             * @member {common.fish.proto.IPoint|null|undefined} target
             * @memberof bullet.proto.ExtraData
             * @instance
             */
            ExtraData.prototype.target = null;

            /**
             * ExtraData shootMode.
             * @member {number} shootMode
             * @memberof bullet.proto.ExtraData
             * @instance
             */
            ExtraData.prototype.shootMode = 0;

            /**
             * ExtraData muzzleIdx.
             * @member {number} muzzleIdx
             * @memberof bullet.proto.ExtraData
             * @instance
             */
            ExtraData.prototype.muzzleIdx = 0;

            /**
             * ExtraData lockObjUuid.
             * @member {Array.<string>} lockObjUuid
             * @memberof bullet.proto.ExtraData
             * @instance
             */
            ExtraData.prototype.lockObjUuid = $util.emptyArray;

            /**
             * Creates a new ExtraData instance using the specified properties.
             * @function create
             * @memberof bullet.proto.ExtraData
             * @static
             * @param {bullet.proto.IExtraData=} [properties] Properties to set
             * @returns {bullet.proto.ExtraData} ExtraData instance
             */
            ExtraData.create = function create(properties) {
                return new ExtraData(properties);
            };

            /**
             * Encodes the specified ExtraData message. Does not implicitly {@link bullet.proto.ExtraData.verify|verify} messages.
             * @function encode
             * @memberof bullet.proto.ExtraData
             * @static
             * @param {bullet.proto.IExtraData} message ExtraData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExtraData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.target != null && Object.hasOwnProperty.call(message, "target"))
                    $root.common.fish.proto.Point.encode(message.target, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.shootMode != null && Object.hasOwnProperty.call(message, "shootMode"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.shootMode);
                if (message.muzzleIdx != null && Object.hasOwnProperty.call(message, "muzzleIdx"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.muzzleIdx);
                if (message.lockObjUuid != null && message.lockObjUuid.length)
                    for (var i = 0; i < message.lockObjUuid.length; ++i)
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.lockObjUuid[i]);
                return writer;
            };

            /**
             * Encodes the specified ExtraData message, length delimited. Does not implicitly {@link bullet.proto.ExtraData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bullet.proto.ExtraData
             * @static
             * @param {bullet.proto.IExtraData} message ExtraData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExtraData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ExtraData message from the specified reader or buffer.
             * @function decode
             * @memberof bullet.proto.ExtraData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bullet.proto.ExtraData} ExtraData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExtraData.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bullet.proto.ExtraData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.target = $root.common.fish.proto.Point.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.shootMode = reader.int32();
                            break;
                        }
                    case 3: {
                            message.muzzleIdx = reader.int32();
                            break;
                        }
                    case 4: {
                            if (!(message.lockObjUuid && message.lockObjUuid.length))
                                message.lockObjUuid = [];
                            message.lockObjUuid.push(reader.string());
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
             * Decodes an ExtraData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bullet.proto.ExtraData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bullet.proto.ExtraData} ExtraData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExtraData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ExtraData message.
             * @function verify
             * @memberof bullet.proto.ExtraData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ExtraData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.target != null && message.hasOwnProperty("target")) {
                    var error = $root.common.fish.proto.Point.verify(message.target);
                    if (error)
                        return "target." + error;
                }
                if (message.shootMode != null && message.hasOwnProperty("shootMode"))
                    if (!$util.isInteger(message.shootMode))
                        return "shootMode: integer expected";
                if (message.muzzleIdx != null && message.hasOwnProperty("muzzleIdx"))
                    if (!$util.isInteger(message.muzzleIdx))
                        return "muzzleIdx: integer expected";
                if (message.lockObjUuid != null && message.hasOwnProperty("lockObjUuid")) {
                    if (!Array.isArray(message.lockObjUuid))
                        return "lockObjUuid: array expected";
                    for (var i = 0; i < message.lockObjUuid.length; ++i)
                        if (!$util.isString(message.lockObjUuid[i]))
                            return "lockObjUuid: string[] expected";
                }
                return null;
            };

            /**
             * Creates an ExtraData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bullet.proto.ExtraData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bullet.proto.ExtraData} ExtraData
             */
            ExtraData.fromObject = function fromObject(object) {
                if (object instanceof $root.bullet.proto.ExtraData)
                    return object;
                var message = new $root.bullet.proto.ExtraData();
                if (object.target != null) {
                    if (typeof object.target !== "object")
                        throw TypeError(".bullet.proto.ExtraData.target: object expected");
                    message.target = $root.common.fish.proto.Point.fromObject(object.target);
                }
                if (object.shootMode != null)
                    message.shootMode = object.shootMode | 0;
                if (object.muzzleIdx != null)
                    message.muzzleIdx = object.muzzleIdx | 0;
                if (object.lockObjUuid) {
                    if (!Array.isArray(object.lockObjUuid))
                        throw TypeError(".bullet.proto.ExtraData.lockObjUuid: array expected");
                    message.lockObjUuid = [];
                    for (var i = 0; i < object.lockObjUuid.length; ++i)
                        message.lockObjUuid[i] = String(object.lockObjUuid[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from an ExtraData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bullet.proto.ExtraData
             * @static
             * @param {bullet.proto.ExtraData} message ExtraData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ExtraData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.lockObjUuid = [];
                if (options.defaults) {
                    object.target = null;
                    object.shootMode = 0;
                    object.muzzleIdx = 0;
                }
                if (message.target != null && message.hasOwnProperty("target"))
                    object.target = $root.common.fish.proto.Point.toObject(message.target, options);
                if (message.shootMode != null && message.hasOwnProperty("shootMode"))
                    object.shootMode = message.shootMode;
                if (message.muzzleIdx != null && message.hasOwnProperty("muzzleIdx"))
                    object.muzzleIdx = message.muzzleIdx;
                if (message.lockObjUuid && message.lockObjUuid.length) {
                    object.lockObjUuid = [];
                    for (var j = 0; j < message.lockObjUuid.length; ++j)
                        object.lockObjUuid[j] = message.lockObjUuid[j];
                }
                return object;
            };

            /**
             * Converts this ExtraData to JSON.
             * @function toJSON
             * @memberof bullet.proto.ExtraData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ExtraData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ExtraData
             * @function getTypeUrl
             * @memberof bullet.proto.ExtraData
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ExtraData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bullet.proto.ExtraData";
            };

            return ExtraData;
        })();

        proto.Shoot = (function() {

            /**
             * Properties of a Shoot.
             * @memberof bullet.proto
             * @interface IShoot
             * @property {common.fish.proto.EMSGID|null} [msgid] Shoot msgid
             * @property {string|null} [token] Shoot token
             * @property {string|null} [roomUuid] Shoot roomUuid
             * @property {number|null} [seatId] Shoot seatId
             * @property {string|null} [bulletUuid] Shoot bulletUuid
             * @property {number|null} [bulletTypeId] Shoot bulletTypeId
             * @property {common.fish.proto.IBetRateLine|null} [betRateLine] Shoot betRateLine
             * @property {bullet.proto.IExtraData|null} [extraData] Shoot extraData
             */

            /**
             * Constructs a new Shoot.
             * @memberof bullet.proto
             * @classdesc Represents a Shoot.
             * @implements IShoot
             * @constructor
             * @param {bullet.proto.IShoot=} [properties] Properties to set
             */
            function Shoot(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Shoot msgid.
             * @member {common.fish.proto.EMSGID} msgid
             * @memberof bullet.proto.Shoot
             * @instance
             */
            Shoot.prototype.msgid = 0;

            /**
             * Shoot token.
             * @member {string} token
             * @memberof bullet.proto.Shoot
             * @instance
             */
            Shoot.prototype.token = "";

            /**
             * Shoot roomUuid.
             * @member {string} roomUuid
             * @memberof bullet.proto.Shoot
             * @instance
             */
            Shoot.prototype.roomUuid = "";

            /**
             * Shoot seatId.
             * @member {number} seatId
             * @memberof bullet.proto.Shoot
             * @instance
             */
            Shoot.prototype.seatId = 0;

            /**
             * Shoot bulletUuid.
             * @member {string} bulletUuid
             * @memberof bullet.proto.Shoot
             * @instance
             */
            Shoot.prototype.bulletUuid = "";

            /**
             * Shoot bulletTypeId.
             * @member {number} bulletTypeId
             * @memberof bullet.proto.Shoot
             * @instance
             */
            Shoot.prototype.bulletTypeId = 0;

            /**
             * Shoot betRateLine.
             * @member {common.fish.proto.IBetRateLine|null|undefined} betRateLine
             * @memberof bullet.proto.Shoot
             * @instance
             */
            Shoot.prototype.betRateLine = null;

            /**
             * Shoot extraData.
             * @member {bullet.proto.IExtraData|null|undefined} extraData
             * @memberof bullet.proto.Shoot
             * @instance
             */
            Shoot.prototype.extraData = null;

            /**
             * Creates a new Shoot instance using the specified properties.
             * @function create
             * @memberof bullet.proto.Shoot
             * @static
             * @param {bullet.proto.IShoot=} [properties] Properties to set
             * @returns {bullet.proto.Shoot} Shoot instance
             */
            Shoot.create = function create(properties) {
                return new Shoot(properties);
            };

            /**
             * Encodes the specified Shoot message. Does not implicitly {@link bullet.proto.Shoot.verify|verify} messages.
             * @function encode
             * @memberof bullet.proto.Shoot
             * @static
             * @param {bullet.proto.IShoot} message Shoot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Shoot.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.msgid != null && Object.hasOwnProperty.call(message, "msgid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgid);
                if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
                if (message.roomUuid != null && Object.hasOwnProperty.call(message, "roomUuid"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.roomUuid);
                if (message.seatId != null && Object.hasOwnProperty.call(message, "seatId"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.seatId);
                if (message.bulletUuid != null && Object.hasOwnProperty.call(message, "bulletUuid"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.bulletUuid);
                if (message.bulletTypeId != null && Object.hasOwnProperty.call(message, "bulletTypeId"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.bulletTypeId);
                if (message.betRateLine != null && Object.hasOwnProperty.call(message, "betRateLine"))
                    $root.common.fish.proto.BetRateLine.encode(message.betRateLine, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.extraData != null && Object.hasOwnProperty.call(message, "extraData"))
                    $root.bullet.proto.ExtraData.encode(message.extraData, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Shoot message, length delimited. Does not implicitly {@link bullet.proto.Shoot.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bullet.proto.Shoot
             * @static
             * @param {bullet.proto.IShoot} message Shoot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Shoot.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Shoot message from the specified reader or buffer.
             * @function decode
             * @memberof bullet.proto.Shoot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bullet.proto.Shoot} Shoot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Shoot.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bullet.proto.Shoot();
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
                            message.token = reader.string();
                            break;
                        }
                    case 3: {
                            message.roomUuid = reader.string();
                            break;
                        }
                    case 4: {
                            message.seatId = reader.int32();
                            break;
                        }
                    case 5: {
                            message.bulletUuid = reader.string();
                            break;
                        }
                    case 6: {
                            message.bulletTypeId = reader.int32();
                            break;
                        }
                    case 7: {
                            message.betRateLine = $root.common.fish.proto.BetRateLine.decode(reader, reader.uint32());
                            break;
                        }
                    case 8: {
                            message.extraData = $root.bullet.proto.ExtraData.decode(reader, reader.uint32());
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
             * Decodes a Shoot message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bullet.proto.Shoot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bullet.proto.Shoot} Shoot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Shoot.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Shoot message.
             * @function verify
             * @memberof bullet.proto.Shoot
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Shoot.verify = function verify(message) {
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
                if (message.token != null && message.hasOwnProperty("token"))
                    if (!$util.isString(message.token))
                        return "token: string expected";
                if (message.roomUuid != null && message.hasOwnProperty("roomUuid"))
                    if (!$util.isString(message.roomUuid))
                        return "roomUuid: string expected";
                if (message.seatId != null && message.hasOwnProperty("seatId"))
                    if (!$util.isInteger(message.seatId))
                        return "seatId: integer expected";
                if (message.bulletUuid != null && message.hasOwnProperty("bulletUuid"))
                    if (!$util.isString(message.bulletUuid))
                        return "bulletUuid: string expected";
                if (message.bulletTypeId != null && message.hasOwnProperty("bulletTypeId"))
                    if (!$util.isInteger(message.bulletTypeId))
                        return "bulletTypeId: integer expected";
                if (message.betRateLine != null && message.hasOwnProperty("betRateLine")) {
                    var error = $root.common.fish.proto.BetRateLine.verify(message.betRateLine);
                    if (error)
                        return "betRateLine." + error;
                }
                if (message.extraData != null && message.hasOwnProperty("extraData")) {
                    var error = $root.bullet.proto.ExtraData.verify(message.extraData);
                    if (error)
                        return "extraData." + error;
                }
                return null;
            };

            /**
             * Creates a Shoot message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bullet.proto.Shoot
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bullet.proto.Shoot} Shoot
             */
            Shoot.fromObject = function fromObject(object) {
                if (object instanceof $root.bullet.proto.Shoot)
                    return object;
                var message = new $root.bullet.proto.Shoot();
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
                if (object.token != null)
                    message.token = String(object.token);
                if (object.roomUuid != null)
                    message.roomUuid = String(object.roomUuid);
                if (object.seatId != null)
                    message.seatId = object.seatId | 0;
                if (object.bulletUuid != null)
                    message.bulletUuid = String(object.bulletUuid);
                if (object.bulletTypeId != null)
                    message.bulletTypeId = object.bulletTypeId | 0;
                if (object.betRateLine != null) {
                    if (typeof object.betRateLine !== "object")
                        throw TypeError(".bullet.proto.Shoot.betRateLine: object expected");
                    message.betRateLine = $root.common.fish.proto.BetRateLine.fromObject(object.betRateLine);
                }
                if (object.extraData != null) {
                    if (typeof object.extraData !== "object")
                        throw TypeError(".bullet.proto.Shoot.extraData: object expected");
                    message.extraData = $root.bullet.proto.ExtraData.fromObject(object.extraData);
                }
                return message;
            };

            /**
             * Creates a plain object from a Shoot message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bullet.proto.Shoot
             * @static
             * @param {bullet.proto.Shoot} message Shoot
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Shoot.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.msgid = options.enums === String ? "eReserved" : 0;
                    object.token = "";
                    object.roomUuid = "";
                    object.seatId = 0;
                    object.bulletUuid = "";
                    object.bulletTypeId = 0;
                    object.betRateLine = null;
                    object.extraData = null;
                }
                if (message.msgid != null && message.hasOwnProperty("msgid"))
                    object.msgid = options.enums === String ? $root.common.fish.proto.EMSGID[message.msgid] === undefined ? message.msgid : $root.common.fish.proto.EMSGID[message.msgid] : message.msgid;
                if (message.token != null && message.hasOwnProperty("token"))
                    object.token = message.token;
                if (message.roomUuid != null && message.hasOwnProperty("roomUuid"))
                    object.roomUuid = message.roomUuid;
                if (message.seatId != null && message.hasOwnProperty("seatId"))
                    object.seatId = message.seatId;
                if (message.bulletUuid != null && message.hasOwnProperty("bulletUuid"))
                    object.bulletUuid = message.bulletUuid;
                if (message.bulletTypeId != null && message.hasOwnProperty("bulletTypeId"))
                    object.bulletTypeId = message.bulletTypeId;
                if (message.betRateLine != null && message.hasOwnProperty("betRateLine"))
                    object.betRateLine = $root.common.fish.proto.BetRateLine.toObject(message.betRateLine, options);
                if (message.extraData != null && message.hasOwnProperty("extraData"))
                    object.extraData = $root.bullet.proto.ExtraData.toObject(message.extraData, options);
                return object;
            };

            /**
             * Converts this Shoot to JSON.
             * @function toJSON
             * @memberof bullet.proto.Shoot
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Shoot.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Shoot
             * @function getTypeUrl
             * @memberof bullet.proto.Shoot
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Shoot.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bullet.proto.Shoot";
            };

            return Shoot;
        })();

        proto.BroadcastShoot = (function() {

            /**
             * Properties of a BroadcastShoot.
             * @memberof bullet.proto
             * @interface IBroadcastShoot
             * @property {common.fish.proto.EMSGID|null} [msgid] BroadcastShoot msgid
             * @property {bullet.proto.IShoot|null} [shoot] BroadcastShoot shoot
             * @property {number|Long|null} [playerCent] BroadcastShoot playerCent
             */

            /**
             * Constructs a new BroadcastShoot.
             * @memberof bullet.proto
             * @classdesc Represents a BroadcastShoot.
             * @implements IBroadcastShoot
             * @constructor
             * @param {bullet.proto.IBroadcastShoot=} [properties] Properties to set
             */
            function BroadcastShoot(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BroadcastShoot msgid.
             * @member {common.fish.proto.EMSGID} msgid
             * @memberof bullet.proto.BroadcastShoot
             * @instance
             */
            BroadcastShoot.prototype.msgid = 0;

            /**
             * BroadcastShoot shoot.
             * @member {bullet.proto.IShoot|null|undefined} shoot
             * @memberof bullet.proto.BroadcastShoot
             * @instance
             */
            BroadcastShoot.prototype.shoot = null;

            /**
             * BroadcastShoot playerCent.
             * @member {number|Long} playerCent
             * @memberof bullet.proto.BroadcastShoot
             * @instance
             */
            BroadcastShoot.prototype.playerCent = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new BroadcastShoot instance using the specified properties.
             * @function create
             * @memberof bullet.proto.BroadcastShoot
             * @static
             * @param {bullet.proto.IBroadcastShoot=} [properties] Properties to set
             * @returns {bullet.proto.BroadcastShoot} BroadcastShoot instance
             */
            BroadcastShoot.create = function create(properties) {
                return new BroadcastShoot(properties);
            };

            /**
             * Encodes the specified BroadcastShoot message. Does not implicitly {@link bullet.proto.BroadcastShoot.verify|verify} messages.
             * @function encode
             * @memberof bullet.proto.BroadcastShoot
             * @static
             * @param {bullet.proto.IBroadcastShoot} message BroadcastShoot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BroadcastShoot.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.msgid != null && Object.hasOwnProperty.call(message, "msgid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgid);
                if (message.shoot != null && Object.hasOwnProperty.call(message, "shoot"))
                    $root.bullet.proto.Shoot.encode(message.shoot, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.playerCent != null && Object.hasOwnProperty.call(message, "playerCent"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.playerCent);
                return writer;
            };

            /**
             * Encodes the specified BroadcastShoot message, length delimited. Does not implicitly {@link bullet.proto.BroadcastShoot.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bullet.proto.BroadcastShoot
             * @static
             * @param {bullet.proto.IBroadcastShoot} message BroadcastShoot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BroadcastShoot.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BroadcastShoot message from the specified reader or buffer.
             * @function decode
             * @memberof bullet.proto.BroadcastShoot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bullet.proto.BroadcastShoot} BroadcastShoot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BroadcastShoot.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bullet.proto.BroadcastShoot();
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
                            message.shoot = $root.bullet.proto.Shoot.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.playerCent = reader.uint64();
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
             * Decodes a BroadcastShoot message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bullet.proto.BroadcastShoot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bullet.proto.BroadcastShoot} BroadcastShoot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BroadcastShoot.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BroadcastShoot message.
             * @function verify
             * @memberof bullet.proto.BroadcastShoot
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BroadcastShoot.verify = function verify(message) {
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
                if (message.shoot != null && message.hasOwnProperty("shoot")) {
                    var error = $root.bullet.proto.Shoot.verify(message.shoot);
                    if (error)
                        return "shoot." + error;
                }
                if (message.playerCent != null && message.hasOwnProperty("playerCent"))
                    if (!$util.isInteger(message.playerCent) && !(message.playerCent && $util.isInteger(message.playerCent.low) && $util.isInteger(message.playerCent.high)))
                        return "playerCent: integer|Long expected";
                return null;
            };

            /**
             * Creates a BroadcastShoot message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bullet.proto.BroadcastShoot
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bullet.proto.BroadcastShoot} BroadcastShoot
             */
            BroadcastShoot.fromObject = function fromObject(object) {
                if (object instanceof $root.bullet.proto.BroadcastShoot)
                    return object;
                var message = new $root.bullet.proto.BroadcastShoot();
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
                if (object.shoot != null) {
                    if (typeof object.shoot !== "object")
                        throw TypeError(".bullet.proto.BroadcastShoot.shoot: object expected");
                    message.shoot = $root.bullet.proto.Shoot.fromObject(object.shoot);
                }
                if (object.playerCent != null)
                    if ($util.Long)
                        (message.playerCent = $util.Long.fromValue(object.playerCent)).unsigned = true;
                    else if (typeof object.playerCent === "string")
                        message.playerCent = parseInt(object.playerCent, 10);
                    else if (typeof object.playerCent === "number")
                        message.playerCent = object.playerCent;
                    else if (typeof object.playerCent === "object")
                        message.playerCent = new $util.LongBits(object.playerCent.low >>> 0, object.playerCent.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a BroadcastShoot message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bullet.proto.BroadcastShoot
             * @static
             * @param {bullet.proto.BroadcastShoot} message BroadcastShoot
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BroadcastShoot.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.msgid = options.enums === String ? "eReserved" : 0;
                    object.shoot = null;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.playerCent = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.playerCent = options.longs === String ? "0" : 0;
                }
                if (message.msgid != null && message.hasOwnProperty("msgid"))
                    object.msgid = options.enums === String ? $root.common.fish.proto.EMSGID[message.msgid] === undefined ? message.msgid : $root.common.fish.proto.EMSGID[message.msgid] : message.msgid;
                if (message.shoot != null && message.hasOwnProperty("shoot"))
                    object.shoot = $root.bullet.proto.Shoot.toObject(message.shoot, options);
                if (message.playerCent != null && message.hasOwnProperty("playerCent"))
                    if (typeof message.playerCent === "number")
                        object.playerCent = options.longs === String ? String(message.playerCent) : message.playerCent;
                    else
                        object.playerCent = options.longs === String ? $util.Long.prototype.toString.call(message.playerCent) : options.longs === Number ? new $util.LongBits(message.playerCent.low >>> 0, message.playerCent.high >>> 0).toNumber(true) : message.playerCent;
                return object;
            };

            /**
             * Converts this BroadcastShoot to JSON.
             * @function toJSON
             * @memberof bullet.proto.BroadcastShoot
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BroadcastShoot.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BroadcastShoot
             * @function getTypeUrl
             * @memberof bullet.proto.BroadcastShoot
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BroadcastShoot.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bullet.proto.BroadcastShoot";
            };

            return BroadcastShoot;
        })();

        proto.BetChange = (function() {

            /**
             * Properties of a BetChange.
             * @memberof bullet.proto
             * @interface IBetChange
             * @property {common.fish.proto.EMSGID|null} [msgid] BetChange msgid
             * @property {string|null} [roomUuid] BetChange roomUuid
             * @property {number|null} [seatId] BetChange seatId
             * @property {number|null} [bulletTypeId] BetChange bulletTypeId
             * @property {common.fish.proto.IBetRateLine|null} [betRateLine] BetChange betRateLine
             * @property {number|null} [shootMode] BetChange shootMode
             */

            /**
             * Constructs a new BetChange.
             * @memberof bullet.proto
             * @classdesc Represents a BetChange.
             * @implements IBetChange
             * @constructor
             * @param {bullet.proto.IBetChange=} [properties] Properties to set
             */
            function BetChange(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BetChange msgid.
             * @member {common.fish.proto.EMSGID} msgid
             * @memberof bullet.proto.BetChange
             * @instance
             */
            BetChange.prototype.msgid = 0;

            /**
             * BetChange roomUuid.
             * @member {string} roomUuid
             * @memberof bullet.proto.BetChange
             * @instance
             */
            BetChange.prototype.roomUuid = "";

            /**
             * BetChange seatId.
             * @member {number} seatId
             * @memberof bullet.proto.BetChange
             * @instance
             */
            BetChange.prototype.seatId = 0;

            /**
             * BetChange bulletTypeId.
             * @member {number} bulletTypeId
             * @memberof bullet.proto.BetChange
             * @instance
             */
            BetChange.prototype.bulletTypeId = 0;

            /**
             * BetChange betRateLine.
             * @member {common.fish.proto.IBetRateLine|null|undefined} betRateLine
             * @memberof bullet.proto.BetChange
             * @instance
             */
            BetChange.prototype.betRateLine = null;

            /**
             * BetChange shootMode.
             * @member {number} shootMode
             * @memberof bullet.proto.BetChange
             * @instance
             */
            BetChange.prototype.shootMode = 0;

            /**
             * Creates a new BetChange instance using the specified properties.
             * @function create
             * @memberof bullet.proto.BetChange
             * @static
             * @param {bullet.proto.IBetChange=} [properties] Properties to set
             * @returns {bullet.proto.BetChange} BetChange instance
             */
            BetChange.create = function create(properties) {
                return new BetChange(properties);
            };

            /**
             * Encodes the specified BetChange message. Does not implicitly {@link bullet.proto.BetChange.verify|verify} messages.
             * @function encode
             * @memberof bullet.proto.BetChange
             * @static
             * @param {bullet.proto.IBetChange} message BetChange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BetChange.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.msgid != null && Object.hasOwnProperty.call(message, "msgid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgid);
                if (message.roomUuid != null && Object.hasOwnProperty.call(message, "roomUuid"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomUuid);
                if (message.seatId != null && Object.hasOwnProperty.call(message, "seatId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.seatId);
                if (message.bulletTypeId != null && Object.hasOwnProperty.call(message, "bulletTypeId"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.bulletTypeId);
                if (message.betRateLine != null && Object.hasOwnProperty.call(message, "betRateLine"))
                    $root.common.fish.proto.BetRateLine.encode(message.betRateLine, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.shootMode != null && Object.hasOwnProperty.call(message, "shootMode"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.shootMode);
                return writer;
            };

            /**
             * Encodes the specified BetChange message, length delimited. Does not implicitly {@link bullet.proto.BetChange.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bullet.proto.BetChange
             * @static
             * @param {bullet.proto.IBetChange} message BetChange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BetChange.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BetChange message from the specified reader or buffer.
             * @function decode
             * @memberof bullet.proto.BetChange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bullet.proto.BetChange} BetChange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BetChange.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bullet.proto.BetChange();
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
                            message.seatId = reader.int32();
                            break;
                        }
                    case 4: {
                            message.bulletTypeId = reader.int32();
                            break;
                        }
                    case 5: {
                            message.betRateLine = $root.common.fish.proto.BetRateLine.decode(reader, reader.uint32());
                            break;
                        }
                    case 6: {
                            message.shootMode = reader.int32();
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
             * Decodes a BetChange message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bullet.proto.BetChange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bullet.proto.BetChange} BetChange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BetChange.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BetChange message.
             * @function verify
             * @memberof bullet.proto.BetChange
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BetChange.verify = function verify(message) {
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
                if (message.seatId != null && message.hasOwnProperty("seatId"))
                    if (!$util.isInteger(message.seatId))
                        return "seatId: integer expected";
                if (message.bulletTypeId != null && message.hasOwnProperty("bulletTypeId"))
                    if (!$util.isInteger(message.bulletTypeId))
                        return "bulletTypeId: integer expected";
                if (message.betRateLine != null && message.hasOwnProperty("betRateLine")) {
                    var error = $root.common.fish.proto.BetRateLine.verify(message.betRateLine);
                    if (error)
                        return "betRateLine." + error;
                }
                if (message.shootMode != null && message.hasOwnProperty("shootMode"))
                    if (!$util.isInteger(message.shootMode))
                        return "shootMode: integer expected";
                return null;
            };

            /**
             * Creates a BetChange message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bullet.proto.BetChange
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bullet.proto.BetChange} BetChange
             */
            BetChange.fromObject = function fromObject(object) {
                if (object instanceof $root.bullet.proto.BetChange)
                    return object;
                var message = new $root.bullet.proto.BetChange();
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
                if (object.seatId != null)
                    message.seatId = object.seatId | 0;
                if (object.bulletTypeId != null)
                    message.bulletTypeId = object.bulletTypeId | 0;
                if (object.betRateLine != null) {
                    if (typeof object.betRateLine !== "object")
                        throw TypeError(".bullet.proto.BetChange.betRateLine: object expected");
                    message.betRateLine = $root.common.fish.proto.BetRateLine.fromObject(object.betRateLine);
                }
                if (object.shootMode != null)
                    message.shootMode = object.shootMode | 0;
                return message;
            };

            /**
             * Creates a plain object from a BetChange message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bullet.proto.BetChange
             * @static
             * @param {bullet.proto.BetChange} message BetChange
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BetChange.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.msgid = options.enums === String ? "eReserved" : 0;
                    object.roomUuid = "";
                    object.seatId = 0;
                    object.bulletTypeId = 0;
                    object.betRateLine = null;
                    object.shootMode = 0;
                }
                if (message.msgid != null && message.hasOwnProperty("msgid"))
                    object.msgid = options.enums === String ? $root.common.fish.proto.EMSGID[message.msgid] === undefined ? message.msgid : $root.common.fish.proto.EMSGID[message.msgid] : message.msgid;
                if (message.roomUuid != null && message.hasOwnProperty("roomUuid"))
                    object.roomUuid = message.roomUuid;
                if (message.seatId != null && message.hasOwnProperty("seatId"))
                    object.seatId = message.seatId;
                if (message.bulletTypeId != null && message.hasOwnProperty("bulletTypeId"))
                    object.bulletTypeId = message.bulletTypeId;
                if (message.betRateLine != null && message.hasOwnProperty("betRateLine"))
                    object.betRateLine = $root.common.fish.proto.BetRateLine.toObject(message.betRateLine, options);
                if (message.shootMode != null && message.hasOwnProperty("shootMode"))
                    object.shootMode = message.shootMode;
                return object;
            };

            /**
             * Converts this BetChange to JSON.
             * @function toJSON
             * @memberof bullet.proto.BetChange
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BetChange.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BetChange
             * @function getTypeUrl
             * @memberof bullet.proto.BetChange
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BetChange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bullet.proto.BetChange";
            };

            return BetChange;
        })();

        proto.BroadcastBetChange = (function() {

            /**
             * Properties of a BroadcastBetChange.
             * @memberof bullet.proto
             * @interface IBroadcastBetChange
             * @property {common.fish.proto.EMSGID|null} [msgid] BroadcastBetChange msgid
             * @property {bullet.proto.IBetChange|null} [betChange] BroadcastBetChange betChange
             */

            /**
             * Constructs a new BroadcastBetChange.
             * @memberof bullet.proto
             * @classdesc Represents a BroadcastBetChange.
             * @implements IBroadcastBetChange
             * @constructor
             * @param {bullet.proto.IBroadcastBetChange=} [properties] Properties to set
             */
            function BroadcastBetChange(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BroadcastBetChange msgid.
             * @member {common.fish.proto.EMSGID} msgid
             * @memberof bullet.proto.BroadcastBetChange
             * @instance
             */
            BroadcastBetChange.prototype.msgid = 0;

            /**
             * BroadcastBetChange betChange.
             * @member {bullet.proto.IBetChange|null|undefined} betChange
             * @memberof bullet.proto.BroadcastBetChange
             * @instance
             */
            BroadcastBetChange.prototype.betChange = null;

            /**
             * Creates a new BroadcastBetChange instance using the specified properties.
             * @function create
             * @memberof bullet.proto.BroadcastBetChange
             * @static
             * @param {bullet.proto.IBroadcastBetChange=} [properties] Properties to set
             * @returns {bullet.proto.BroadcastBetChange} BroadcastBetChange instance
             */
            BroadcastBetChange.create = function create(properties) {
                return new BroadcastBetChange(properties);
            };

            /**
             * Encodes the specified BroadcastBetChange message. Does not implicitly {@link bullet.proto.BroadcastBetChange.verify|verify} messages.
             * @function encode
             * @memberof bullet.proto.BroadcastBetChange
             * @static
             * @param {bullet.proto.IBroadcastBetChange} message BroadcastBetChange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BroadcastBetChange.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.msgid != null && Object.hasOwnProperty.call(message, "msgid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgid);
                if (message.betChange != null && Object.hasOwnProperty.call(message, "betChange"))
                    $root.bullet.proto.BetChange.encode(message.betChange, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified BroadcastBetChange message, length delimited. Does not implicitly {@link bullet.proto.BroadcastBetChange.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bullet.proto.BroadcastBetChange
             * @static
             * @param {bullet.proto.IBroadcastBetChange} message BroadcastBetChange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BroadcastBetChange.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BroadcastBetChange message from the specified reader or buffer.
             * @function decode
             * @memberof bullet.proto.BroadcastBetChange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bullet.proto.BroadcastBetChange} BroadcastBetChange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BroadcastBetChange.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bullet.proto.BroadcastBetChange();
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
                            message.betChange = $root.bullet.proto.BetChange.decode(reader, reader.uint32());
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
             * Decodes a BroadcastBetChange message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bullet.proto.BroadcastBetChange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bullet.proto.BroadcastBetChange} BroadcastBetChange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BroadcastBetChange.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BroadcastBetChange message.
             * @function verify
             * @memberof bullet.proto.BroadcastBetChange
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BroadcastBetChange.verify = function verify(message) {
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
                if (message.betChange != null && message.hasOwnProperty("betChange")) {
                    var error = $root.bullet.proto.BetChange.verify(message.betChange);
                    if (error)
                        return "betChange." + error;
                }
                return null;
            };

            /**
             * Creates a BroadcastBetChange message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bullet.proto.BroadcastBetChange
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bullet.proto.BroadcastBetChange} BroadcastBetChange
             */
            BroadcastBetChange.fromObject = function fromObject(object) {
                if (object instanceof $root.bullet.proto.BroadcastBetChange)
                    return object;
                var message = new $root.bullet.proto.BroadcastBetChange();
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
                if (object.betChange != null) {
                    if (typeof object.betChange !== "object")
                        throw TypeError(".bullet.proto.BroadcastBetChange.betChange: object expected");
                    message.betChange = $root.bullet.proto.BetChange.fromObject(object.betChange);
                }
                return message;
            };

            /**
             * Creates a plain object from a BroadcastBetChange message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bullet.proto.BroadcastBetChange
             * @static
             * @param {bullet.proto.BroadcastBetChange} message BroadcastBetChange
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BroadcastBetChange.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.msgid = options.enums === String ? "eReserved" : 0;
                    object.betChange = null;
                }
                if (message.msgid != null && message.hasOwnProperty("msgid"))
                    object.msgid = options.enums === String ? $root.common.fish.proto.EMSGID[message.msgid] === undefined ? message.msgid : $root.common.fish.proto.EMSGID[message.msgid] : message.msgid;
                if (message.betChange != null && message.hasOwnProperty("betChange"))
                    object.betChange = $root.bullet.proto.BetChange.toObject(message.betChange, options);
                return object;
            };

            /**
             * Converts this BroadcastBetChange to JSON.
             * @function toJSON
             * @memberof bullet.proto.BroadcastBetChange
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BroadcastBetChange.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BroadcastBetChange
             * @function getTypeUrl
             * @memberof bullet.proto.BroadcastBetChange
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BroadcastBetChange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bullet.proto.BroadcastBetChange";
            };

            return BroadcastBetChange;
        })();

        return proto;
    })();

    return bullet;
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
