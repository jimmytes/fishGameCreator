/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.lobby = (function() {

    /**
     * Namespace lobby.
     * @exports lobby
     * @namespace
     */
    var lobby = {};

    lobby.setting = (function() {

        /**
         * Namespace setting.
         * @memberof lobby
         * @namespace
         */
        var setting = {};

        setting.proto = (function() {

            /**
             * Namespace proto.
             * @memberof lobby.setting
             * @namespace
             */
            var proto = {};

            proto.ConfigCall = (function() {

                /**
                 * Properties of a ConfigCall.
                 * @memberof lobby.setting.proto
                 * @interface IConfigCall
                 * @property {common.proto.EMSGID|null} [msgid] ConfigCall msgid
                 * @property {string|null} [token] ConfigCall token
                 * @property {string|null} [gameId] ConfigCall gameId
                 * @property {boolean|null} [clearPowerCycle] ConfigCall clearPowerCycle
                 * @property {number|null} [version] ConfigCall version
                 * @property {number|null} [gameVersion] ConfigCall gameVersion
                 * @property {number|null} [subgameId] ConfigCall subgameId
                 */

                /**
                 * Constructs a new ConfigCall.
                 * @memberof lobby.setting.proto
                 * @classdesc Represents a ConfigCall.
                 * @implements IConfigCall
                 * @constructor
                 * @param {lobby.setting.proto.IConfigCall=} [properties] Properties to set
                 */
                function ConfigCall(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ConfigCall msgid.
                 * @member {common.proto.EMSGID} msgid
                 * @memberof lobby.setting.proto.ConfigCall
                 * @instance
                 */
                ConfigCall.prototype.msgid = 0;

                /**
                 * ConfigCall token.
                 * @member {string} token
                 * @memberof lobby.setting.proto.ConfigCall
                 * @instance
                 */
                ConfigCall.prototype.token = "";

                /**
                 * ConfigCall gameId.
                 * @member {string} gameId
                 * @memberof lobby.setting.proto.ConfigCall
                 * @instance
                 */
                ConfigCall.prototype.gameId = "";

                /**
                 * ConfigCall clearPowerCycle.
                 * @member {boolean} clearPowerCycle
                 * @memberof lobby.setting.proto.ConfigCall
                 * @instance
                 */
                ConfigCall.prototype.clearPowerCycle = false;

                /**
                 * ConfigCall version.
                 * @member {number} version
                 * @memberof lobby.setting.proto.ConfigCall
                 * @instance
                 */
                ConfigCall.prototype.version = 0;

                /**
                 * ConfigCall gameVersion.
                 * @member {number} gameVersion
                 * @memberof lobby.setting.proto.ConfigCall
                 * @instance
                 */
                ConfigCall.prototype.gameVersion = 0;

                /**
                 * ConfigCall subgameId.
                 * @member {number} subgameId
                 * @memberof lobby.setting.proto.ConfigCall
                 * @instance
                 */
                ConfigCall.prototype.subgameId = 0;

                /**
                 * Creates a new ConfigCall instance using the specified properties.
                 * @function create
                 * @memberof lobby.setting.proto.ConfigCall
                 * @static
                 * @param {lobby.setting.proto.IConfigCall=} [properties] Properties to set
                 * @returns {lobby.setting.proto.ConfigCall} ConfigCall instance
                 */
                ConfigCall.create = function create(properties) {
                    return new ConfigCall(properties);
                };

                /**
                 * Encodes the specified ConfigCall message. Does not implicitly {@link lobby.setting.proto.ConfigCall.verify|verify} messages.
                 * @function encode
                 * @memberof lobby.setting.proto.ConfigCall
                 * @static
                 * @param {lobby.setting.proto.IConfigCall} message ConfigCall message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ConfigCall.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.msgid != null && Object.hasOwnProperty.call(message, "msgid"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgid);
                    if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
                    if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.gameId);
                    if (message.clearPowerCycle != null && Object.hasOwnProperty.call(message, "clearPowerCycle"))
                        writer.uint32(/* id 4, wireType 0 =*/32).bool(message.clearPowerCycle);
                    if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                        writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.version);
                    if (message.gameVersion != null && Object.hasOwnProperty.call(message, "gameVersion"))
                        writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.gameVersion);
                    if (message.subgameId != null && Object.hasOwnProperty.call(message, "subgameId"))
                        writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.subgameId);
                    return writer;
                };

                /**
                 * Encodes the specified ConfigCall message, length delimited. Does not implicitly {@link lobby.setting.proto.ConfigCall.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof lobby.setting.proto.ConfigCall
                 * @static
                 * @param {lobby.setting.proto.IConfigCall} message ConfigCall message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ConfigCall.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ConfigCall message from the specified reader or buffer.
                 * @function decode
                 * @memberof lobby.setting.proto.ConfigCall
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {lobby.setting.proto.ConfigCall} ConfigCall
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ConfigCall.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.setting.proto.ConfigCall();
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
                                message.gameId = reader.string();
                                break;
                            }
                        case 4: {
                                message.clearPowerCycle = reader.bool();
                                break;
                            }
                        case 5: {
                                message.version = reader.uint32();
                                break;
                            }
                        case 6: {
                                message.gameVersion = reader.uint32();
                                break;
                            }
                        case 7: {
                                message.subgameId = reader.uint32();
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
                 * Decodes a ConfigCall message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof lobby.setting.proto.ConfigCall
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {lobby.setting.proto.ConfigCall} ConfigCall
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ConfigCall.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ConfigCall message.
                 * @function verify
                 * @memberof lobby.setting.proto.ConfigCall
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ConfigCall.verify = function verify(message) {
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
                    if (message.token != null && message.hasOwnProperty("token"))
                        if (!$util.isString(message.token))
                            return "token: string expected";
                    if (message.gameId != null && message.hasOwnProperty("gameId"))
                        if (!$util.isString(message.gameId))
                            return "gameId: string expected";
                    if (message.clearPowerCycle != null && message.hasOwnProperty("clearPowerCycle"))
                        if (typeof message.clearPowerCycle !== "boolean")
                            return "clearPowerCycle: boolean expected";
                    if (message.version != null && message.hasOwnProperty("version"))
                        if (!$util.isInteger(message.version))
                            return "version: integer expected";
                    if (message.gameVersion != null && message.hasOwnProperty("gameVersion"))
                        if (!$util.isInteger(message.gameVersion))
                            return "gameVersion: integer expected";
                    if (message.subgameId != null && message.hasOwnProperty("subgameId"))
                        if (!$util.isInteger(message.subgameId))
                            return "subgameId: integer expected";
                    return null;
                };

                /**
                 * Creates a ConfigCall message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof lobby.setting.proto.ConfigCall
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {lobby.setting.proto.ConfigCall} ConfigCall
                 */
                ConfigCall.fromObject = function fromObject(object) {
                    if (object instanceof $root.lobby.setting.proto.ConfigCall)
                        return object;
                    var message = new $root.lobby.setting.proto.ConfigCall();
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
                    if (object.token != null)
                        message.token = String(object.token);
                    if (object.gameId != null)
                        message.gameId = String(object.gameId);
                    if (object.clearPowerCycle != null)
                        message.clearPowerCycle = Boolean(object.clearPowerCycle);
                    if (object.version != null)
                        message.version = object.version >>> 0;
                    if (object.gameVersion != null)
                        message.gameVersion = object.gameVersion >>> 0;
                    if (object.subgameId != null)
                        message.subgameId = object.subgameId >>> 0;
                    return message;
                };

                /**
                 * Creates a plain object from a ConfigCall message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof lobby.setting.proto.ConfigCall
                 * @static
                 * @param {lobby.setting.proto.ConfigCall} message ConfigCall
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ConfigCall.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.msgid = options.enums === String ? "eReserved" : 0;
                        object.token = "";
                        object.gameId = "";
                        object.clearPowerCycle = false;
                        object.version = 0;
                        object.gameVersion = 0;
                        object.subgameId = 0;
                    }
                    if (message.msgid != null && message.hasOwnProperty("msgid"))
                        object.msgid = options.enums === String ? $root.common.proto.EMSGID[message.msgid] === undefined ? message.msgid : $root.common.proto.EMSGID[message.msgid] : message.msgid;
                    if (message.token != null && message.hasOwnProperty("token"))
                        object.token = message.token;
                    if (message.gameId != null && message.hasOwnProperty("gameId"))
                        object.gameId = message.gameId;
                    if (message.clearPowerCycle != null && message.hasOwnProperty("clearPowerCycle"))
                        object.clearPowerCycle = message.clearPowerCycle;
                    if (message.version != null && message.hasOwnProperty("version"))
                        object.version = message.version;
                    if (message.gameVersion != null && message.hasOwnProperty("gameVersion"))
                        object.gameVersion = message.gameVersion;
                    if (message.subgameId != null && message.hasOwnProperty("subgameId"))
                        object.subgameId = message.subgameId;
                    return object;
                };

                /**
                 * Converts this ConfigCall to JSON.
                 * @function toJSON
                 * @memberof lobby.setting.proto.ConfigCall
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ConfigCall.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ConfigCall
                 * @function getTypeUrl
                 * @memberof lobby.setting.proto.ConfigCall
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ConfigCall.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/lobby.setting.proto.ConfigCall";
                };

                return ConfigCall;
            })();

            proto.ConfigRecall = (function() {

                /**
                 * Properties of a ConfigRecall.
                 * @memberof lobby.setting.proto
                 * @interface IConfigRecall
                 * @property {common.proto.EMSGID|null} [msgid] ConfigRecall msgid
                 * @property {common.proto.Status.Code|null} [statusCode] ConfigRecall statusCode
                 * @property {auth.proto.IUserInfo|null} [playerInfo] ConfigRecall playerInfo
                 * @property {Array.<lobby.setting.proto.ConfigRecall.IRoomInfo>|null} [roomInfo] ConfigRecall roomInfo
                 */

                /**
                 * Constructs a new ConfigRecall.
                 * @memberof lobby.setting.proto
                 * @classdesc Represents a ConfigRecall.
                 * @implements IConfigRecall
                 * @constructor
                 * @param {lobby.setting.proto.IConfigRecall=} [properties] Properties to set
                 */
                function ConfigRecall(properties) {
                    this.roomInfo = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ConfigRecall msgid.
                 * @member {common.proto.EMSGID} msgid
                 * @memberof lobby.setting.proto.ConfigRecall
                 * @instance
                 */
                ConfigRecall.prototype.msgid = 0;

                /**
                 * ConfigRecall statusCode.
                 * @member {common.proto.Status.Code} statusCode
                 * @memberof lobby.setting.proto.ConfigRecall
                 * @instance
                 */
                ConfigRecall.prototype.statusCode = 0;

                /**
                 * ConfigRecall playerInfo.
                 * @member {auth.proto.IUserInfo|null|undefined} playerInfo
                 * @memberof lobby.setting.proto.ConfigRecall
                 * @instance
                 */
                ConfigRecall.prototype.playerInfo = null;

                /**
                 * ConfigRecall roomInfo.
                 * @member {Array.<lobby.setting.proto.ConfigRecall.IRoomInfo>} roomInfo
                 * @memberof lobby.setting.proto.ConfigRecall
                 * @instance
                 */
                ConfigRecall.prototype.roomInfo = $util.emptyArray;

                /**
                 * Creates a new ConfigRecall instance using the specified properties.
                 * @function create
                 * @memberof lobby.setting.proto.ConfigRecall
                 * @static
                 * @param {lobby.setting.proto.IConfigRecall=} [properties] Properties to set
                 * @returns {lobby.setting.proto.ConfigRecall} ConfigRecall instance
                 */
                ConfigRecall.create = function create(properties) {
                    return new ConfigRecall(properties);
                };

                /**
                 * Encodes the specified ConfigRecall message. Does not implicitly {@link lobby.setting.proto.ConfigRecall.verify|verify} messages.
                 * @function encode
                 * @memberof lobby.setting.proto.ConfigRecall
                 * @static
                 * @param {lobby.setting.proto.IConfigRecall} message ConfigRecall message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ConfigRecall.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.msgid != null && Object.hasOwnProperty.call(message, "msgid"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgid);
                    if (message.statusCode != null && Object.hasOwnProperty.call(message, "statusCode"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.statusCode);
                    if (message.playerInfo != null && Object.hasOwnProperty.call(message, "playerInfo"))
                        $root.auth.proto.UserInfo.encode(message.playerInfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.roomInfo != null && message.roomInfo.length)
                        for (var i = 0; i < message.roomInfo.length; ++i)
                            $root.lobby.setting.proto.ConfigRecall.RoomInfo.encode(message.roomInfo[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ConfigRecall message, length delimited. Does not implicitly {@link lobby.setting.proto.ConfigRecall.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof lobby.setting.proto.ConfigRecall
                 * @static
                 * @param {lobby.setting.proto.IConfigRecall} message ConfigRecall message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ConfigRecall.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ConfigRecall message from the specified reader or buffer.
                 * @function decode
                 * @memberof lobby.setting.proto.ConfigRecall
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {lobby.setting.proto.ConfigRecall} ConfigRecall
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ConfigRecall.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.setting.proto.ConfigRecall();
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
                                message.statusCode = reader.int32();
                                break;
                            }
                        case 3: {
                                message.playerInfo = $root.auth.proto.UserInfo.decode(reader, reader.uint32());
                                break;
                            }
                        case 4: {
                                if (!(message.roomInfo && message.roomInfo.length))
                                    message.roomInfo = [];
                                message.roomInfo.push($root.lobby.setting.proto.ConfigRecall.RoomInfo.decode(reader, reader.uint32()));
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
                 * Decodes a ConfigRecall message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof lobby.setting.proto.ConfigRecall
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {lobby.setting.proto.ConfigRecall} ConfigRecall
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ConfigRecall.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ConfigRecall message.
                 * @function verify
                 * @memberof lobby.setting.proto.ConfigRecall
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ConfigRecall.verify = function verify(message) {
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
                    if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                        switch (message.statusCode) {
                        default:
                            return "statusCode: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                            break;
                        }
                    if (message.playerInfo != null && message.hasOwnProperty("playerInfo")) {
                        var error = $root.auth.proto.UserInfo.verify(message.playerInfo);
                        if (error)
                            return "playerInfo." + error;
                    }
                    if (message.roomInfo != null && message.hasOwnProperty("roomInfo")) {
                        if (!Array.isArray(message.roomInfo))
                            return "roomInfo: array expected";
                        for (var i = 0; i < message.roomInfo.length; ++i) {
                            var error = $root.lobby.setting.proto.ConfigRecall.RoomInfo.verify(message.roomInfo[i]);
                            if (error)
                                return "roomInfo." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a ConfigRecall message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof lobby.setting.proto.ConfigRecall
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {lobby.setting.proto.ConfigRecall} ConfigRecall
                 */
                ConfigRecall.fromObject = function fromObject(object) {
                    if (object instanceof $root.lobby.setting.proto.ConfigRecall)
                        return object;
                    var message = new $root.lobby.setting.proto.ConfigRecall();
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
                    switch (object.statusCode) {
                    default:
                        if (typeof object.statusCode === "number") {
                            message.statusCode = object.statusCode;
                            break;
                        }
                        break;
                    case "kSuccess":
                    case 0:
                        message.statusCode = 0;
                        break;
                    case "kInvalid":
                    case 1:
                        message.statusCode = 1;
                        break;
                    case "kOffline":
                    case 2:
                        message.statusCode = 2;
                        break;
                    case "kNoEnoughCredit":
                    case 3:
                        message.statusCode = 3;
                        break;
                    case "kHostError":
                    case 4:
                        message.statusCode = 4;
                        break;
                    case "kOutOfDate":
                    case 5:
                        message.statusCode = 5;
                        break;
                    case "kFreeGameEnd":
                    case 6:
                        message.statusCode = 6;
                        break;
                    case "kNoMoreBets":
                    case 7:
                        message.statusCode = 7;
                        break;
                    case "kNoSeatAvailable":
                    case 8:
                        message.statusCode = 8;
                        break;
                    case "kIdle":
                    case 9:
                        message.statusCode = 9;
                        break;
                    case "kGaming":
                    case 10:
                        message.statusCode = 10;
                        break;
                    case "kIPisSame":
                    case 11:
                        message.statusCode = 11;
                        break;
                    }
                    if (object.playerInfo != null) {
                        if (typeof object.playerInfo !== "object")
                            throw TypeError(".lobby.setting.proto.ConfigRecall.playerInfo: object expected");
                        message.playerInfo = $root.auth.proto.UserInfo.fromObject(object.playerInfo);
                    }
                    if (object.roomInfo) {
                        if (!Array.isArray(object.roomInfo))
                            throw TypeError(".lobby.setting.proto.ConfigRecall.roomInfo: array expected");
                        message.roomInfo = [];
                        for (var i = 0; i < object.roomInfo.length; ++i) {
                            if (typeof object.roomInfo[i] !== "object")
                                throw TypeError(".lobby.setting.proto.ConfigRecall.roomInfo: object expected");
                            message.roomInfo[i] = $root.lobby.setting.proto.ConfigRecall.RoomInfo.fromObject(object.roomInfo[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ConfigRecall message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof lobby.setting.proto.ConfigRecall
                 * @static
                 * @param {lobby.setting.proto.ConfigRecall} message ConfigRecall
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ConfigRecall.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.roomInfo = [];
                    if (options.defaults) {
                        object.msgid = options.enums === String ? "eReserved" : 0;
                        object.statusCode = options.enums === String ? "kSuccess" : 0;
                        object.playerInfo = null;
                    }
                    if (message.msgid != null && message.hasOwnProperty("msgid"))
                        object.msgid = options.enums === String ? $root.common.proto.EMSGID[message.msgid] === undefined ? message.msgid : $root.common.proto.EMSGID[message.msgid] : message.msgid;
                    if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                        object.statusCode = options.enums === String ? $root.common.proto.Status.Code[message.statusCode] === undefined ? message.statusCode : $root.common.proto.Status.Code[message.statusCode] : message.statusCode;
                    if (message.playerInfo != null && message.hasOwnProperty("playerInfo"))
                        object.playerInfo = $root.auth.proto.UserInfo.toObject(message.playerInfo, options);
                    if (message.roomInfo && message.roomInfo.length) {
                        object.roomInfo = [];
                        for (var j = 0; j < message.roomInfo.length; ++j)
                            object.roomInfo[j] = $root.lobby.setting.proto.ConfigRecall.RoomInfo.toObject(message.roomInfo[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this ConfigRecall to JSON.
                 * @function toJSON
                 * @memberof lobby.setting.proto.ConfigRecall
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ConfigRecall.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ConfigRecall
                 * @function getTypeUrl
                 * @memberof lobby.setting.proto.ConfigRecall
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ConfigRecall.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/lobby.setting.proto.ConfigRecall";
                };

                ConfigRecall.Bets = (function() {

                    /**
                     * Properties of a Bets.
                     * @memberof lobby.setting.proto.ConfigRecall
                     * @interface IBets
                     * @property {Array.<number>|null} [bet] Bets bet
                     */

                    /**
                     * Constructs a new Bets.
                     * @memberof lobby.setting.proto.ConfigRecall
                     * @classdesc Represents a Bets.
                     * @implements IBets
                     * @constructor
                     * @param {lobby.setting.proto.ConfigRecall.IBets=} [properties] Properties to set
                     */
                    function Bets(properties) {
                        this.bet = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Bets bet.
                     * @member {Array.<number>} bet
                     * @memberof lobby.setting.proto.ConfigRecall.Bets
                     * @instance
                     */
                    Bets.prototype.bet = $util.emptyArray;

                    /**
                     * Creates a new Bets instance using the specified properties.
                     * @function create
                     * @memberof lobby.setting.proto.ConfigRecall.Bets
                     * @static
                     * @param {lobby.setting.proto.ConfigRecall.IBets=} [properties] Properties to set
                     * @returns {lobby.setting.proto.ConfigRecall.Bets} Bets instance
                     */
                    Bets.create = function create(properties) {
                        return new Bets(properties);
                    };

                    /**
                     * Encodes the specified Bets message. Does not implicitly {@link lobby.setting.proto.ConfigRecall.Bets.verify|verify} messages.
                     * @function encode
                     * @memberof lobby.setting.proto.ConfigRecall.Bets
                     * @static
                     * @param {lobby.setting.proto.ConfigRecall.IBets} message Bets message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Bets.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.bet != null && message.bet.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.bet.length; ++i)
                                writer.uint32(message.bet[i]);
                            writer.ldelim();
                        }
                        return writer;
                    };

                    /**
                     * Encodes the specified Bets message, length delimited. Does not implicitly {@link lobby.setting.proto.ConfigRecall.Bets.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof lobby.setting.proto.ConfigRecall.Bets
                     * @static
                     * @param {lobby.setting.proto.ConfigRecall.IBets} message Bets message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Bets.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Bets message from the specified reader or buffer.
                     * @function decode
                     * @memberof lobby.setting.proto.ConfigRecall.Bets
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {lobby.setting.proto.ConfigRecall.Bets} Bets
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Bets.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.setting.proto.ConfigRecall.Bets();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    if (!(message.bet && message.bet.length))
                                        message.bet = [];
                                    if ((tag & 7) === 2) {
                                        var end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.bet.push(reader.uint32());
                                    } else
                                        message.bet.push(reader.uint32());
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
                     * Decodes a Bets message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof lobby.setting.proto.ConfigRecall.Bets
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {lobby.setting.proto.ConfigRecall.Bets} Bets
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Bets.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Bets message.
                     * @function verify
                     * @memberof lobby.setting.proto.ConfigRecall.Bets
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Bets.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.bet != null && message.hasOwnProperty("bet")) {
                            if (!Array.isArray(message.bet))
                                return "bet: array expected";
                            for (var i = 0; i < message.bet.length; ++i)
                                if (!$util.isInteger(message.bet[i]))
                                    return "bet: integer[] expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a Bets message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof lobby.setting.proto.ConfigRecall.Bets
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {lobby.setting.proto.ConfigRecall.Bets} Bets
                     */
                    Bets.fromObject = function fromObject(object) {
                        if (object instanceof $root.lobby.setting.proto.ConfigRecall.Bets)
                            return object;
                        var message = new $root.lobby.setting.proto.ConfigRecall.Bets();
                        if (object.bet) {
                            if (!Array.isArray(object.bet))
                                throw TypeError(".lobby.setting.proto.ConfigRecall.Bets.bet: array expected");
                            message.bet = [];
                            for (var i = 0; i < object.bet.length; ++i)
                                message.bet[i] = object.bet[i] >>> 0;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Bets message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof lobby.setting.proto.ConfigRecall.Bets
                     * @static
                     * @param {lobby.setting.proto.ConfigRecall.Bets} message Bets
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Bets.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.bet = [];
                        if (message.bet && message.bet.length) {
                            object.bet = [];
                            for (var j = 0; j < message.bet.length; ++j)
                                object.bet[j] = message.bet[j];
                        }
                        return object;
                    };

                    /**
                     * Converts this Bets to JSON.
                     * @function toJSON
                     * @memberof lobby.setting.proto.ConfigRecall.Bets
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Bets.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Bets
                     * @function getTypeUrl
                     * @memberof lobby.setting.proto.ConfigRecall.Bets
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Bets.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/lobby.setting.proto.ConfigRecall.Bets";
                    };

                    return Bets;
                })();

                ConfigRecall.RoomInfo = (function() {

                    /**
                     * Properties of a RoomInfo.
                     * @memberof lobby.setting.proto.ConfigRecall
                     * @interface IRoomInfo
                     * @property {string|null} [gameId] RoomInfo gameId
                     * @property {number|null} [subgameId] RoomInfo subgameId
                     * @property {Array.<lobby.setting.proto.ConfigRecall.IBets>|null} [levels] RoomInfo levels
                     * @property {Array.<number>|null} [line] RoomInfo line
                     * @property {Array.<number>|null} [rates] RoomInfo rates
                     * @property {Array.<string>|null} [languages] RoomInfo languages
                     * @property {number|null} [languagesDefaultIndex] RoomInfo languagesDefaultIndex
                     */

                    /**
                     * Constructs a new RoomInfo.
                     * @memberof lobby.setting.proto.ConfigRecall
                     * @classdesc Represents a RoomInfo.
                     * @implements IRoomInfo
                     * @constructor
                     * @param {lobby.setting.proto.ConfigRecall.IRoomInfo=} [properties] Properties to set
                     */
                    function RoomInfo(properties) {
                        this.levels = [];
                        this.line = [];
                        this.rates = [];
                        this.languages = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * RoomInfo gameId.
                     * @member {string} gameId
                     * @memberof lobby.setting.proto.ConfigRecall.RoomInfo
                     * @instance
                     */
                    RoomInfo.prototype.gameId = "";

                    /**
                     * RoomInfo subgameId.
                     * @member {number} subgameId
                     * @memberof lobby.setting.proto.ConfigRecall.RoomInfo
                     * @instance
                     */
                    RoomInfo.prototype.subgameId = 0;

                    /**
                     * RoomInfo levels.
                     * @member {Array.<lobby.setting.proto.ConfigRecall.IBets>} levels
                     * @memberof lobby.setting.proto.ConfigRecall.RoomInfo
                     * @instance
                     */
                    RoomInfo.prototype.levels = $util.emptyArray;

                    /**
                     * RoomInfo line.
                     * @member {Array.<number>} line
                     * @memberof lobby.setting.proto.ConfigRecall.RoomInfo
                     * @instance
                     */
                    RoomInfo.prototype.line = $util.emptyArray;

                    /**
                     * RoomInfo rates.
                     * @member {Array.<number>} rates
                     * @memberof lobby.setting.proto.ConfigRecall.RoomInfo
                     * @instance
                     */
                    RoomInfo.prototype.rates = $util.emptyArray;

                    /**
                     * RoomInfo languages.
                     * @member {Array.<string>} languages
                     * @memberof lobby.setting.proto.ConfigRecall.RoomInfo
                     * @instance
                     */
                    RoomInfo.prototype.languages = $util.emptyArray;

                    /**
                     * RoomInfo languagesDefaultIndex.
                     * @member {number} languagesDefaultIndex
                     * @memberof lobby.setting.proto.ConfigRecall.RoomInfo
                     * @instance
                     */
                    RoomInfo.prototype.languagesDefaultIndex = 0;

                    /**
                     * Creates a new RoomInfo instance using the specified properties.
                     * @function create
                     * @memberof lobby.setting.proto.ConfigRecall.RoomInfo
                     * @static
                     * @param {lobby.setting.proto.ConfigRecall.IRoomInfo=} [properties] Properties to set
                     * @returns {lobby.setting.proto.ConfigRecall.RoomInfo} RoomInfo instance
                     */
                    RoomInfo.create = function create(properties) {
                        return new RoomInfo(properties);
                    };

                    /**
                     * Encodes the specified RoomInfo message. Does not implicitly {@link lobby.setting.proto.ConfigRecall.RoomInfo.verify|verify} messages.
                     * @function encode
                     * @memberof lobby.setting.proto.ConfigRecall.RoomInfo
                     * @static
                     * @param {lobby.setting.proto.ConfigRecall.IRoomInfo} message RoomInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RoomInfo.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.gameId);
                        if (message.subgameId != null && Object.hasOwnProperty.call(message, "subgameId"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.subgameId);
                        if (message.levels != null && message.levels.length)
                            for (var i = 0; i < message.levels.length; ++i)
                                $root.lobby.setting.proto.ConfigRecall.Bets.encode(message.levels[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.line != null && message.line.length) {
                            writer.uint32(/* id 4, wireType 2 =*/34).fork();
                            for (var i = 0; i < message.line.length; ++i)
                                writer.uint32(message.line[i]);
                            writer.ldelim();
                        }
                        if (message.rates != null && message.rates.length) {
                            writer.uint32(/* id 5, wireType 2 =*/42).fork();
                            for (var i = 0; i < message.rates.length; ++i)
                                writer.uint32(message.rates[i]);
                            writer.ldelim();
                        }
                        if (message.languages != null && message.languages.length)
                            for (var i = 0; i < message.languages.length; ++i)
                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.languages[i]);
                        if (message.languagesDefaultIndex != null && Object.hasOwnProperty.call(message, "languagesDefaultIndex"))
                            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.languagesDefaultIndex);
                        return writer;
                    };

                    /**
                     * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link lobby.setting.proto.ConfigRecall.RoomInfo.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof lobby.setting.proto.ConfigRecall.RoomInfo
                     * @static
                     * @param {lobby.setting.proto.ConfigRecall.IRoomInfo} message RoomInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a RoomInfo message from the specified reader or buffer.
                     * @function decode
                     * @memberof lobby.setting.proto.ConfigRecall.RoomInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {lobby.setting.proto.ConfigRecall.RoomInfo} RoomInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RoomInfo.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.setting.proto.ConfigRecall.RoomInfo();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.gameId = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.subgameId = reader.uint32();
                                    break;
                                }
                            case 3: {
                                    if (!(message.levels && message.levels.length))
                                        message.levels = [];
                                    message.levels.push($root.lobby.setting.proto.ConfigRecall.Bets.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 4: {
                                    if (!(message.line && message.line.length))
                                        message.line = [];
                                    if ((tag & 7) === 2) {
                                        var end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.line.push(reader.uint32());
                                    } else
                                        message.line.push(reader.uint32());
                                    break;
                                }
                            case 5: {
                                    if (!(message.rates && message.rates.length))
                                        message.rates = [];
                                    if ((tag & 7) === 2) {
                                        var end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.rates.push(reader.uint32());
                                    } else
                                        message.rates.push(reader.uint32());
                                    break;
                                }
                            case 6: {
                                    if (!(message.languages && message.languages.length))
                                        message.languages = [];
                                    message.languages.push(reader.string());
                                    break;
                                }
                            case 7: {
                                    message.languagesDefaultIndex = reader.uint32();
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
                     * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof lobby.setting.proto.ConfigRecall.RoomInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {lobby.setting.proto.ConfigRecall.RoomInfo} RoomInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RoomInfo.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a RoomInfo message.
                     * @function verify
                     * @memberof lobby.setting.proto.ConfigRecall.RoomInfo
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RoomInfo.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.gameId != null && message.hasOwnProperty("gameId"))
                            if (!$util.isString(message.gameId))
                                return "gameId: string expected";
                        if (message.subgameId != null && message.hasOwnProperty("subgameId"))
                            if (!$util.isInteger(message.subgameId))
                                return "subgameId: integer expected";
                        if (message.levels != null && message.hasOwnProperty("levels")) {
                            if (!Array.isArray(message.levels))
                                return "levels: array expected";
                            for (var i = 0; i < message.levels.length; ++i) {
                                var error = $root.lobby.setting.proto.ConfigRecall.Bets.verify(message.levels[i]);
                                if (error)
                                    return "levels." + error;
                            }
                        }
                        if (message.line != null && message.hasOwnProperty("line")) {
                            if (!Array.isArray(message.line))
                                return "line: array expected";
                            for (var i = 0; i < message.line.length; ++i)
                                if (!$util.isInteger(message.line[i]))
                                    return "line: integer[] expected";
                        }
                        if (message.rates != null && message.hasOwnProperty("rates")) {
                            if (!Array.isArray(message.rates))
                                return "rates: array expected";
                            for (var i = 0; i < message.rates.length; ++i)
                                if (!$util.isInteger(message.rates[i]))
                                    return "rates: integer[] expected";
                        }
                        if (message.languages != null && message.hasOwnProperty("languages")) {
                            if (!Array.isArray(message.languages))
                                return "languages: array expected";
                            for (var i = 0; i < message.languages.length; ++i)
                                if (!$util.isString(message.languages[i]))
                                    return "languages: string[] expected";
                        }
                        if (message.languagesDefaultIndex != null && message.hasOwnProperty("languagesDefaultIndex"))
                            if (!$util.isInteger(message.languagesDefaultIndex))
                                return "languagesDefaultIndex: integer expected";
                        return null;
                    };

                    /**
                     * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof lobby.setting.proto.ConfigRecall.RoomInfo
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {lobby.setting.proto.ConfigRecall.RoomInfo} RoomInfo
                     */
                    RoomInfo.fromObject = function fromObject(object) {
                        if (object instanceof $root.lobby.setting.proto.ConfigRecall.RoomInfo)
                            return object;
                        var message = new $root.lobby.setting.proto.ConfigRecall.RoomInfo();
                        if (object.gameId != null)
                            message.gameId = String(object.gameId);
                        if (object.subgameId != null)
                            message.subgameId = object.subgameId >>> 0;
                        if (object.levels) {
                            if (!Array.isArray(object.levels))
                                throw TypeError(".lobby.setting.proto.ConfigRecall.RoomInfo.levels: array expected");
                            message.levels = [];
                            for (var i = 0; i < object.levels.length; ++i) {
                                if (typeof object.levels[i] !== "object")
                                    throw TypeError(".lobby.setting.proto.ConfigRecall.RoomInfo.levels: object expected");
                                message.levels[i] = $root.lobby.setting.proto.ConfigRecall.Bets.fromObject(object.levels[i]);
                            }
                        }
                        if (object.line) {
                            if (!Array.isArray(object.line))
                                throw TypeError(".lobby.setting.proto.ConfigRecall.RoomInfo.line: array expected");
                            message.line = [];
                            for (var i = 0; i < object.line.length; ++i)
                                message.line[i] = object.line[i] >>> 0;
                        }
                        if (object.rates) {
                            if (!Array.isArray(object.rates))
                                throw TypeError(".lobby.setting.proto.ConfigRecall.RoomInfo.rates: array expected");
                            message.rates = [];
                            for (var i = 0; i < object.rates.length; ++i)
                                message.rates[i] = object.rates[i] >>> 0;
                        }
                        if (object.languages) {
                            if (!Array.isArray(object.languages))
                                throw TypeError(".lobby.setting.proto.ConfigRecall.RoomInfo.languages: array expected");
                            message.languages = [];
                            for (var i = 0; i < object.languages.length; ++i)
                                message.languages[i] = String(object.languages[i]);
                        }
                        if (object.languagesDefaultIndex != null)
                            message.languagesDefaultIndex = object.languagesDefaultIndex >>> 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof lobby.setting.proto.ConfigRecall.RoomInfo
                     * @static
                     * @param {lobby.setting.proto.ConfigRecall.RoomInfo} message RoomInfo
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RoomInfo.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.levels = [];
                            object.line = [];
                            object.rates = [];
                            object.languages = [];
                        }
                        if (options.defaults) {
                            object.gameId = "";
                            object.subgameId = 0;
                            object.languagesDefaultIndex = 0;
                        }
                        if (message.gameId != null && message.hasOwnProperty("gameId"))
                            object.gameId = message.gameId;
                        if (message.subgameId != null && message.hasOwnProperty("subgameId"))
                            object.subgameId = message.subgameId;
                        if (message.levels && message.levels.length) {
                            object.levels = [];
                            for (var j = 0; j < message.levels.length; ++j)
                                object.levels[j] = $root.lobby.setting.proto.ConfigRecall.Bets.toObject(message.levels[j], options);
                        }
                        if (message.line && message.line.length) {
                            object.line = [];
                            for (var j = 0; j < message.line.length; ++j)
                                object.line[j] = message.line[j];
                        }
                        if (message.rates && message.rates.length) {
                            object.rates = [];
                            for (var j = 0; j < message.rates.length; ++j)
                                object.rates[j] = message.rates[j];
                        }
                        if (message.languages && message.languages.length) {
                            object.languages = [];
                            for (var j = 0; j < message.languages.length; ++j)
                                object.languages[j] = message.languages[j];
                        }
                        if (message.languagesDefaultIndex != null && message.hasOwnProperty("languagesDefaultIndex"))
                            object.languagesDefaultIndex = message.languagesDefaultIndex;
                        return object;
                    };

                    /**
                     * Converts this RoomInfo to JSON.
                     * @function toJSON
                     * @memberof lobby.setting.proto.ConfigRecall.RoomInfo
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RoomInfo.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for RoomInfo
                     * @function getTypeUrl
                     * @memberof lobby.setting.proto.ConfigRecall.RoomInfo
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    RoomInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/lobby.setting.proto.ConfigRecall.RoomInfo";
                    };

                    return RoomInfo;
                })();

                return ConfigRecall;
            })();

            return proto;
        })();

        return setting;
    })();

    return lobby;
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

$root.auth = (function() {

    /**
     * Namespace auth.
     * @exports auth
     * @namespace
     */
    var auth = {};

    auth.proto = (function() {

        /**
         * Namespace proto.
         * @memberof auth
         * @namespace
         */
        var proto = {};

        proto.LoginCall = (function() {

            /**
             * Properties of a LoginCall.
             * @memberof auth.proto
             * @interface ILoginCall
             * @property {common.proto.EMSGID|null} [msgid] LoginCall msgid
             * @property {string|null} [game] LoginCall game
             * @property {string|null} [language] LoginCall language
             * @property {string|null} [merchantCode] LoginCall merchantCode
             * @property {string|null} [acctId] LoginCall acctId
             * @property {string|null} [sid] LoginCall sid
             * @property {string|null} [token] LoginCall token
             * @property {string|null} [type] LoginCall type
             * @property {string|null} [currency] LoginCall currency
             */

            /**
             * Constructs a new LoginCall.
             * @memberof auth.proto
             * @classdesc Represents a LoginCall.
             * @implements ILoginCall
             * @constructor
             * @param {auth.proto.ILoginCall=} [properties] Properties to set
             */
            function LoginCall(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LoginCall msgid.
             * @member {common.proto.EMSGID} msgid
             * @memberof auth.proto.LoginCall
             * @instance
             */
            LoginCall.prototype.msgid = 0;

            /**
             * LoginCall game.
             * @member {string} game
             * @memberof auth.proto.LoginCall
             * @instance
             */
            LoginCall.prototype.game = "";

            /**
             * LoginCall language.
             * @member {string} language
             * @memberof auth.proto.LoginCall
             * @instance
             */
            LoginCall.prototype.language = "";

            /**
             * LoginCall merchantCode.
             * @member {string} merchantCode
             * @memberof auth.proto.LoginCall
             * @instance
             */
            LoginCall.prototype.merchantCode = "";

            /**
             * LoginCall acctId.
             * @member {string} acctId
             * @memberof auth.proto.LoginCall
             * @instance
             */
            LoginCall.prototype.acctId = "";

            /**
             * LoginCall sid.
             * @member {string} sid
             * @memberof auth.proto.LoginCall
             * @instance
             */
            LoginCall.prototype.sid = "";

            /**
             * LoginCall token.
             * @member {string} token
             * @memberof auth.proto.LoginCall
             * @instance
             */
            LoginCall.prototype.token = "";

            /**
             * LoginCall type.
             * @member {string} type
             * @memberof auth.proto.LoginCall
             * @instance
             */
            LoginCall.prototype.type = "";

            /**
             * LoginCall currency.
             * @member {string} currency
             * @memberof auth.proto.LoginCall
             * @instance
             */
            LoginCall.prototype.currency = "";

            /**
             * Creates a new LoginCall instance using the specified properties.
             * @function create
             * @memberof auth.proto.LoginCall
             * @static
             * @param {auth.proto.ILoginCall=} [properties] Properties to set
             * @returns {auth.proto.LoginCall} LoginCall instance
             */
            LoginCall.create = function create(properties) {
                return new LoginCall(properties);
            };

            /**
             * Encodes the specified LoginCall message. Does not implicitly {@link auth.proto.LoginCall.verify|verify} messages.
             * @function encode
             * @memberof auth.proto.LoginCall
             * @static
             * @param {auth.proto.ILoginCall} message LoginCall message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginCall.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.msgid != null && Object.hasOwnProperty.call(message, "msgid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgid);
                if (message.game != null && Object.hasOwnProperty.call(message, "game"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.game);
                if (message.language != null && Object.hasOwnProperty.call(message, "language"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.language);
                if (message.merchantCode != null && Object.hasOwnProperty.call(message, "merchantCode"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.merchantCode);
                if (message.acctId != null && Object.hasOwnProperty.call(message, "acctId"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.acctId);
                if (message.sid != null && Object.hasOwnProperty.call(message, "sid"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.sid);
                if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.token);
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.type);
                if (message.currency != null && Object.hasOwnProperty.call(message, "currency"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.currency);
                return writer;
            };

            /**
             * Encodes the specified LoginCall message, length delimited. Does not implicitly {@link auth.proto.LoginCall.verify|verify} messages.
             * @function encodeDelimited
             * @memberof auth.proto.LoginCall
             * @static
             * @param {auth.proto.ILoginCall} message LoginCall message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginCall.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LoginCall message from the specified reader or buffer.
             * @function decode
             * @memberof auth.proto.LoginCall
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {auth.proto.LoginCall} LoginCall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginCall.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.proto.LoginCall();
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
                            message.game = reader.string();
                            break;
                        }
                    case 3: {
                            message.language = reader.string();
                            break;
                        }
                    case 4: {
                            message.merchantCode = reader.string();
                            break;
                        }
                    case 5: {
                            message.acctId = reader.string();
                            break;
                        }
                    case 6: {
                            message.sid = reader.string();
                            break;
                        }
                    case 7: {
                            message.token = reader.string();
                            break;
                        }
                    case 8: {
                            message.type = reader.string();
                            break;
                        }
                    case 9: {
                            message.currency = reader.string();
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
             * Decodes a LoginCall message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof auth.proto.LoginCall
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {auth.proto.LoginCall} LoginCall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginCall.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LoginCall message.
             * @function verify
             * @memberof auth.proto.LoginCall
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LoginCall.verify = function verify(message) {
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
                if (message.game != null && message.hasOwnProperty("game"))
                    if (!$util.isString(message.game))
                        return "game: string expected";
                if (message.language != null && message.hasOwnProperty("language"))
                    if (!$util.isString(message.language))
                        return "language: string expected";
                if (message.merchantCode != null && message.hasOwnProperty("merchantCode"))
                    if (!$util.isString(message.merchantCode))
                        return "merchantCode: string expected";
                if (message.acctId != null && message.hasOwnProperty("acctId"))
                    if (!$util.isString(message.acctId))
                        return "acctId: string expected";
                if (message.sid != null && message.hasOwnProperty("sid"))
                    if (!$util.isString(message.sid))
                        return "sid: string expected";
                if (message.token != null && message.hasOwnProperty("token"))
                    if (!$util.isString(message.token))
                        return "token: string expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    if (!$util.isString(message.type))
                        return "type: string expected";
                if (message.currency != null && message.hasOwnProperty("currency"))
                    if (!$util.isString(message.currency))
                        return "currency: string expected";
                return null;
            };

            /**
             * Creates a LoginCall message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof auth.proto.LoginCall
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {auth.proto.LoginCall} LoginCall
             */
            LoginCall.fromObject = function fromObject(object) {
                if (object instanceof $root.auth.proto.LoginCall)
                    return object;
                var message = new $root.auth.proto.LoginCall();
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
                if (object.game != null)
                    message.game = String(object.game);
                if (object.language != null)
                    message.language = String(object.language);
                if (object.merchantCode != null)
                    message.merchantCode = String(object.merchantCode);
                if (object.acctId != null)
                    message.acctId = String(object.acctId);
                if (object.sid != null)
                    message.sid = String(object.sid);
                if (object.token != null)
                    message.token = String(object.token);
                if (object.type != null)
                    message.type = String(object.type);
                if (object.currency != null)
                    message.currency = String(object.currency);
                return message;
            };

            /**
             * Creates a plain object from a LoginCall message. Also converts values to other types if specified.
             * @function toObject
             * @memberof auth.proto.LoginCall
             * @static
             * @param {auth.proto.LoginCall} message LoginCall
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LoginCall.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.msgid = options.enums === String ? "eReserved" : 0;
                    object.game = "";
                    object.language = "";
                    object.merchantCode = "";
                    object.acctId = "";
                    object.sid = "";
                    object.token = "";
                    object.type = "";
                    object.currency = "";
                }
                if (message.msgid != null && message.hasOwnProperty("msgid"))
                    object.msgid = options.enums === String ? $root.common.proto.EMSGID[message.msgid] === undefined ? message.msgid : $root.common.proto.EMSGID[message.msgid] : message.msgid;
                if (message.game != null && message.hasOwnProperty("game"))
                    object.game = message.game;
                if (message.language != null && message.hasOwnProperty("language"))
                    object.language = message.language;
                if (message.merchantCode != null && message.hasOwnProperty("merchantCode"))
                    object.merchantCode = message.merchantCode;
                if (message.acctId != null && message.hasOwnProperty("acctId"))
                    object.acctId = message.acctId;
                if (message.sid != null && message.hasOwnProperty("sid"))
                    object.sid = message.sid;
                if (message.token != null && message.hasOwnProperty("token"))
                    object.token = message.token;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = message.type;
                if (message.currency != null && message.hasOwnProperty("currency"))
                    object.currency = message.currency;
                return object;
            };

            /**
             * Converts this LoginCall to JSON.
             * @function toJSON
             * @memberof auth.proto.LoginCall
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LoginCall.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for LoginCall
             * @function getTypeUrl
             * @memberof auth.proto.LoginCall
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            LoginCall.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/auth.proto.LoginCall";
            };

            return LoginCall;
        })();

        proto.LoginRecall = (function() {

            /**
             * Properties of a LoginRecall.
             * @memberof auth.proto
             * @interface ILoginRecall
             * @property {common.proto.EMSGID|null} [msgid] LoginRecall msgid
             * @property {common.proto.Status.Code|null} [statusCode] LoginRecall statusCode
             * @property {string|null} [token] LoginRecall token
             * @property {string|null} [backendVersion] LoginRecall backendVersion
             */

            /**
             * Constructs a new LoginRecall.
             * @memberof auth.proto
             * @classdesc Represents a LoginRecall.
             * @implements ILoginRecall
             * @constructor
             * @param {auth.proto.ILoginRecall=} [properties] Properties to set
             */
            function LoginRecall(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LoginRecall msgid.
             * @member {common.proto.EMSGID} msgid
             * @memberof auth.proto.LoginRecall
             * @instance
             */
            LoginRecall.prototype.msgid = 0;

            /**
             * LoginRecall statusCode.
             * @member {common.proto.Status.Code} statusCode
             * @memberof auth.proto.LoginRecall
             * @instance
             */
            LoginRecall.prototype.statusCode = 0;

            /**
             * LoginRecall token.
             * @member {string} token
             * @memberof auth.proto.LoginRecall
             * @instance
             */
            LoginRecall.prototype.token = "";

            /**
             * LoginRecall backendVersion.
             * @member {string} backendVersion
             * @memberof auth.proto.LoginRecall
             * @instance
             */
            LoginRecall.prototype.backendVersion = "";

            /**
             * Creates a new LoginRecall instance using the specified properties.
             * @function create
             * @memberof auth.proto.LoginRecall
             * @static
             * @param {auth.proto.ILoginRecall=} [properties] Properties to set
             * @returns {auth.proto.LoginRecall} LoginRecall instance
             */
            LoginRecall.create = function create(properties) {
                return new LoginRecall(properties);
            };

            /**
             * Encodes the specified LoginRecall message. Does not implicitly {@link auth.proto.LoginRecall.verify|verify} messages.
             * @function encode
             * @memberof auth.proto.LoginRecall
             * @static
             * @param {auth.proto.ILoginRecall} message LoginRecall message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginRecall.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.msgid != null && Object.hasOwnProperty.call(message, "msgid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgid);
                if (message.statusCode != null && Object.hasOwnProperty.call(message, "statusCode"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.statusCode);
                if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.token);
                if (message.backendVersion != null && Object.hasOwnProperty.call(message, "backendVersion"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.backendVersion);
                return writer;
            };

            /**
             * Encodes the specified LoginRecall message, length delimited. Does not implicitly {@link auth.proto.LoginRecall.verify|verify} messages.
             * @function encodeDelimited
             * @memberof auth.proto.LoginRecall
             * @static
             * @param {auth.proto.ILoginRecall} message LoginRecall message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginRecall.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LoginRecall message from the specified reader or buffer.
             * @function decode
             * @memberof auth.proto.LoginRecall
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {auth.proto.LoginRecall} LoginRecall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginRecall.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.proto.LoginRecall();
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
                            message.statusCode = reader.int32();
                            break;
                        }
                    case 3: {
                            message.token = reader.string();
                            break;
                        }
                    case 4: {
                            message.backendVersion = reader.string();
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
             * Decodes a LoginRecall message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof auth.proto.LoginRecall
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {auth.proto.LoginRecall} LoginRecall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginRecall.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LoginRecall message.
             * @function verify
             * @memberof auth.proto.LoginRecall
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LoginRecall.verify = function verify(message) {
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
                if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                    switch (message.statusCode) {
                    default:
                        return "statusCode: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                        break;
                    }
                if (message.token != null && message.hasOwnProperty("token"))
                    if (!$util.isString(message.token))
                        return "token: string expected";
                if (message.backendVersion != null && message.hasOwnProperty("backendVersion"))
                    if (!$util.isString(message.backendVersion))
                        return "backendVersion: string expected";
                return null;
            };

            /**
             * Creates a LoginRecall message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof auth.proto.LoginRecall
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {auth.proto.LoginRecall} LoginRecall
             */
            LoginRecall.fromObject = function fromObject(object) {
                if (object instanceof $root.auth.proto.LoginRecall)
                    return object;
                var message = new $root.auth.proto.LoginRecall();
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
                switch (object.statusCode) {
                default:
                    if (typeof object.statusCode === "number") {
                        message.statusCode = object.statusCode;
                        break;
                    }
                    break;
                case "kSuccess":
                case 0:
                    message.statusCode = 0;
                    break;
                case "kInvalid":
                case 1:
                    message.statusCode = 1;
                    break;
                case "kOffline":
                case 2:
                    message.statusCode = 2;
                    break;
                case "kNoEnoughCredit":
                case 3:
                    message.statusCode = 3;
                    break;
                case "kHostError":
                case 4:
                    message.statusCode = 4;
                    break;
                case "kOutOfDate":
                case 5:
                    message.statusCode = 5;
                    break;
                case "kFreeGameEnd":
                case 6:
                    message.statusCode = 6;
                    break;
                case "kNoMoreBets":
                case 7:
                    message.statusCode = 7;
                    break;
                case "kNoSeatAvailable":
                case 8:
                    message.statusCode = 8;
                    break;
                case "kIdle":
                case 9:
                    message.statusCode = 9;
                    break;
                case "kGaming":
                case 10:
                    message.statusCode = 10;
                    break;
                case "kIPisSame":
                case 11:
                    message.statusCode = 11;
                    break;
                }
                if (object.token != null)
                    message.token = String(object.token);
                if (object.backendVersion != null)
                    message.backendVersion = String(object.backendVersion);
                return message;
            };

            /**
             * Creates a plain object from a LoginRecall message. Also converts values to other types if specified.
             * @function toObject
             * @memberof auth.proto.LoginRecall
             * @static
             * @param {auth.proto.LoginRecall} message LoginRecall
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LoginRecall.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.msgid = options.enums === String ? "eReserved" : 0;
                    object.statusCode = options.enums === String ? "kSuccess" : 0;
                    object.token = "";
                    object.backendVersion = "";
                }
                if (message.msgid != null && message.hasOwnProperty("msgid"))
                    object.msgid = options.enums === String ? $root.common.proto.EMSGID[message.msgid] === undefined ? message.msgid : $root.common.proto.EMSGID[message.msgid] : message.msgid;
                if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                    object.statusCode = options.enums === String ? $root.common.proto.Status.Code[message.statusCode] === undefined ? message.statusCode : $root.common.proto.Status.Code[message.statusCode] : message.statusCode;
                if (message.token != null && message.hasOwnProperty("token"))
                    object.token = message.token;
                if (message.backendVersion != null && message.hasOwnProperty("backendVersion"))
                    object.backendVersion = message.backendVersion;
                return object;
            };

            /**
             * Converts this LoginRecall to JSON.
             * @function toJSON
             * @memberof auth.proto.LoginRecall
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LoginRecall.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for LoginRecall
             * @function getTypeUrl
             * @memberof auth.proto.LoginRecall
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            LoginRecall.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/auth.proto.LoginRecall";
            };

            return LoginRecall;
        })();

        proto.UserInfoAsk = (function() {

            /**
             * Properties of a UserInfoAsk.
             * @memberof auth.proto
             * @interface IUserInfoAsk
             * @property {common.proto.EMSGID|null} [msgid] UserInfoAsk msgid
             * @property {Array.<auth.proto.IUserInfo>|null} [player] UserInfoAsk player
             */

            /**
             * Constructs a new UserInfoAsk.
             * @memberof auth.proto
             * @classdesc Represents a UserInfoAsk.
             * @implements IUserInfoAsk
             * @constructor
             * @param {auth.proto.IUserInfoAsk=} [properties] Properties to set
             */
            function UserInfoAsk(properties) {
                this.player = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UserInfoAsk msgid.
             * @member {common.proto.EMSGID} msgid
             * @memberof auth.proto.UserInfoAsk
             * @instance
             */
            UserInfoAsk.prototype.msgid = 0;

            /**
             * UserInfoAsk player.
             * @member {Array.<auth.proto.IUserInfo>} player
             * @memberof auth.proto.UserInfoAsk
             * @instance
             */
            UserInfoAsk.prototype.player = $util.emptyArray;

            /**
             * Creates a new UserInfoAsk instance using the specified properties.
             * @function create
             * @memberof auth.proto.UserInfoAsk
             * @static
             * @param {auth.proto.IUserInfoAsk=} [properties] Properties to set
             * @returns {auth.proto.UserInfoAsk} UserInfoAsk instance
             */
            UserInfoAsk.create = function create(properties) {
                return new UserInfoAsk(properties);
            };

            /**
             * Encodes the specified UserInfoAsk message. Does not implicitly {@link auth.proto.UserInfoAsk.verify|verify} messages.
             * @function encode
             * @memberof auth.proto.UserInfoAsk
             * @static
             * @param {auth.proto.IUserInfoAsk} message UserInfoAsk message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserInfoAsk.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.msgid != null && Object.hasOwnProperty.call(message, "msgid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgid);
                if (message.player != null && message.player.length)
                    for (var i = 0; i < message.player.length; ++i)
                        $root.auth.proto.UserInfo.encode(message.player[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified UserInfoAsk message, length delimited. Does not implicitly {@link auth.proto.UserInfoAsk.verify|verify} messages.
             * @function encodeDelimited
             * @memberof auth.proto.UserInfoAsk
             * @static
             * @param {auth.proto.IUserInfoAsk} message UserInfoAsk message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserInfoAsk.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UserInfoAsk message from the specified reader or buffer.
             * @function decode
             * @memberof auth.proto.UserInfoAsk
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {auth.proto.UserInfoAsk} UserInfoAsk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserInfoAsk.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.proto.UserInfoAsk();
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
                            if (!(message.player && message.player.length))
                                message.player = [];
                            message.player.push($root.auth.proto.UserInfo.decode(reader, reader.uint32()));
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
             * Decodes a UserInfoAsk message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof auth.proto.UserInfoAsk
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {auth.proto.UserInfoAsk} UserInfoAsk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserInfoAsk.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UserInfoAsk message.
             * @function verify
             * @memberof auth.proto.UserInfoAsk
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserInfoAsk.verify = function verify(message) {
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
                if (message.player != null && message.hasOwnProperty("player")) {
                    if (!Array.isArray(message.player))
                        return "player: array expected";
                    for (var i = 0; i < message.player.length; ++i) {
                        var error = $root.auth.proto.UserInfo.verify(message.player[i]);
                        if (error)
                            return "player." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a UserInfoAsk message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof auth.proto.UserInfoAsk
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {auth.proto.UserInfoAsk} UserInfoAsk
             */
            UserInfoAsk.fromObject = function fromObject(object) {
                if (object instanceof $root.auth.proto.UserInfoAsk)
                    return object;
                var message = new $root.auth.proto.UserInfoAsk();
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
                if (object.player) {
                    if (!Array.isArray(object.player))
                        throw TypeError(".auth.proto.UserInfoAsk.player: array expected");
                    message.player = [];
                    for (var i = 0; i < object.player.length; ++i) {
                        if (typeof object.player[i] !== "object")
                            throw TypeError(".auth.proto.UserInfoAsk.player: object expected");
                        message.player[i] = $root.auth.proto.UserInfo.fromObject(object.player[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a UserInfoAsk message. Also converts values to other types if specified.
             * @function toObject
             * @memberof auth.proto.UserInfoAsk
             * @static
             * @param {auth.proto.UserInfoAsk} message UserInfoAsk
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserInfoAsk.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.player = [];
                if (options.defaults)
                    object.msgid = options.enums === String ? "eReserved" : 0;
                if (message.msgid != null && message.hasOwnProperty("msgid"))
                    object.msgid = options.enums === String ? $root.common.proto.EMSGID[message.msgid] === undefined ? message.msgid : $root.common.proto.EMSGID[message.msgid] : message.msgid;
                if (message.player && message.player.length) {
                    object.player = [];
                    for (var j = 0; j < message.player.length; ++j)
                        object.player[j] = $root.auth.proto.UserInfo.toObject(message.player[j], options);
                }
                return object;
            };

            /**
             * Converts this UserInfoAsk to JSON.
             * @function toJSON
             * @memberof auth.proto.UserInfoAsk
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserInfoAsk.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UserInfoAsk
             * @function getTypeUrl
             * @memberof auth.proto.UserInfoAsk
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UserInfoAsk.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/auth.proto.UserInfoAsk";
            };

            return UserInfoAsk;
        })();

        proto.UserInfo = (function() {

            /**
             * Properties of a UserInfo.
             * @memberof auth.proto
             * @interface IUserInfo
             * @property {string|null} [playerId] UserInfo playerId
             * @property {string|null} [playerName] UserInfo playerName
             * @property {number|Long|null} [playerCent] UserInfo playerCent
             * @property {number|null} [seatId] UserInfo seatId
             * @property {common.fish.proto.IBetRateLine|null} [betRateLine] UserInfo betRateLine
             * @property {string|null} [avatarId] UserInfo avatarId
             * @property {auth.proto.UserInfo.IColumn|null} [visible] UserInfo visible
             * @property {auth.proto.PLAYER_TYPE|null} [playerType] UserInfo playerType
             * @property {string|null} [creditFormat] UserInfo creditFormat
             */

            /**
             * Constructs a new UserInfo.
             * @memberof auth.proto
             * @classdesc Represents a UserInfo.
             * @implements IUserInfo
             * @constructor
             * @param {auth.proto.IUserInfo=} [properties] Properties to set
             */
            function UserInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UserInfo playerId.
             * @member {string} playerId
             * @memberof auth.proto.UserInfo
             * @instance
             */
            UserInfo.prototype.playerId = "";

            /**
             * UserInfo playerName.
             * @member {string} playerName
             * @memberof auth.proto.UserInfo
             * @instance
             */
            UserInfo.prototype.playerName = "";

            /**
             * UserInfo playerCent.
             * @member {number|Long} playerCent
             * @memberof auth.proto.UserInfo
             * @instance
             */
            UserInfo.prototype.playerCent = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * UserInfo seatId.
             * @member {number} seatId
             * @memberof auth.proto.UserInfo
             * @instance
             */
            UserInfo.prototype.seatId = 0;

            /**
             * UserInfo betRateLine.
             * @member {common.fish.proto.IBetRateLine|null|undefined} betRateLine
             * @memberof auth.proto.UserInfo
             * @instance
             */
            UserInfo.prototype.betRateLine = null;

            /**
             * UserInfo avatarId.
             * @member {string} avatarId
             * @memberof auth.proto.UserInfo
             * @instance
             */
            UserInfo.prototype.avatarId = "";

            /**
             * UserInfo visible.
             * @member {auth.proto.UserInfo.IColumn|null|undefined} visible
             * @memberof auth.proto.UserInfo
             * @instance
             */
            UserInfo.prototype.visible = null;

            /**
             * UserInfo playerType.
             * @member {auth.proto.PLAYER_TYPE} playerType
             * @memberof auth.proto.UserInfo
             * @instance
             */
            UserInfo.prototype.playerType = 0;

            /**
             * UserInfo creditFormat.
             * @member {string} creditFormat
             * @memberof auth.proto.UserInfo
             * @instance
             */
            UserInfo.prototype.creditFormat = "";

            /**
             * Creates a new UserInfo instance using the specified properties.
             * @function create
             * @memberof auth.proto.UserInfo
             * @static
             * @param {auth.proto.IUserInfo=} [properties] Properties to set
             * @returns {auth.proto.UserInfo} UserInfo instance
             */
            UserInfo.create = function create(properties) {
                return new UserInfo(properties);
            };

            /**
             * Encodes the specified UserInfo message. Does not implicitly {@link auth.proto.UserInfo.verify|verify} messages.
             * @function encode
             * @memberof auth.proto.UserInfo
             * @static
             * @param {auth.proto.IUserInfo} message UserInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
                if (message.playerName != null && Object.hasOwnProperty.call(message, "playerName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerName);
                if (message.playerCent != null && Object.hasOwnProperty.call(message, "playerCent"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.playerCent);
                if (message.seatId != null && Object.hasOwnProperty.call(message, "seatId"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.seatId);
                if (message.betRateLine != null && Object.hasOwnProperty.call(message, "betRateLine"))
                    $root.common.fish.proto.BetRateLine.encode(message.betRateLine, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.avatarId != null && Object.hasOwnProperty.call(message, "avatarId"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.avatarId);
                if (message.visible != null && Object.hasOwnProperty.call(message, "visible"))
                    $root.auth.proto.UserInfo.Column.encode(message.visible, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.playerType != null && Object.hasOwnProperty.call(message, "playerType"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int32(message.playerType);
                if (message.creditFormat != null && Object.hasOwnProperty.call(message, "creditFormat"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.creditFormat);
                return writer;
            };

            /**
             * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link auth.proto.UserInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof auth.proto.UserInfo
             * @static
             * @param {auth.proto.IUserInfo} message UserInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UserInfo message from the specified reader or buffer.
             * @function decode
             * @memberof auth.proto.UserInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {auth.proto.UserInfo} UserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.proto.UserInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.playerId = reader.string();
                            break;
                        }
                    case 2: {
                            message.playerName = reader.string();
                            break;
                        }
                    case 3: {
                            message.playerCent = reader.uint64();
                            break;
                        }
                    case 4: {
                            message.seatId = reader.uint32();
                            break;
                        }
                    case 5: {
                            message.betRateLine = $root.common.fish.proto.BetRateLine.decode(reader, reader.uint32());
                            break;
                        }
                    case 6: {
                            message.avatarId = reader.string();
                            break;
                        }
                    case 7: {
                            message.visible = $root.auth.proto.UserInfo.Column.decode(reader, reader.uint32());
                            break;
                        }
                    case 8: {
                            message.playerType = reader.int32();
                            break;
                        }
                    case 9: {
                            message.creditFormat = reader.string();
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
             * Decodes a UserInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof auth.proto.UserInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {auth.proto.UserInfo} UserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UserInfo message.
             * @function verify
             * @memberof auth.proto.UserInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (!$util.isString(message.playerId))
                        return "playerId: string expected";
                if (message.playerName != null && message.hasOwnProperty("playerName"))
                    if (!$util.isString(message.playerName))
                        return "playerName: string expected";
                if (message.playerCent != null && message.hasOwnProperty("playerCent"))
                    if (!$util.isInteger(message.playerCent) && !(message.playerCent && $util.isInteger(message.playerCent.low) && $util.isInteger(message.playerCent.high)))
                        return "playerCent: integer|Long expected";
                if (message.seatId != null && message.hasOwnProperty("seatId"))
                    if (!$util.isInteger(message.seatId))
                        return "seatId: integer expected";
                if (message.betRateLine != null && message.hasOwnProperty("betRateLine")) {
                    var error = $root.common.fish.proto.BetRateLine.verify(message.betRateLine);
                    if (error)
                        return "betRateLine." + error;
                }
                if (message.avatarId != null && message.hasOwnProperty("avatarId"))
                    if (!$util.isString(message.avatarId))
                        return "avatarId: string expected";
                if (message.visible != null && message.hasOwnProperty("visible")) {
                    var error = $root.auth.proto.UserInfo.Column.verify(message.visible);
                    if (error)
                        return "visible." + error;
                }
                if (message.playerType != null && message.hasOwnProperty("playerType"))
                    switch (message.playerType) {
                    default:
                        return "playerType: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.creditFormat != null && message.hasOwnProperty("creditFormat"))
                    if (!$util.isString(message.creditFormat))
                        return "creditFormat: string expected";
                return null;
            };

            /**
             * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof auth.proto.UserInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {auth.proto.UserInfo} UserInfo
             */
            UserInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.auth.proto.UserInfo)
                    return object;
                var message = new $root.auth.proto.UserInfo();
                if (object.playerId != null)
                    message.playerId = String(object.playerId);
                if (object.playerName != null)
                    message.playerName = String(object.playerName);
                if (object.playerCent != null)
                    if ($util.Long)
                        (message.playerCent = $util.Long.fromValue(object.playerCent)).unsigned = true;
                    else if (typeof object.playerCent === "string")
                        message.playerCent = parseInt(object.playerCent, 10);
                    else if (typeof object.playerCent === "number")
                        message.playerCent = object.playerCent;
                    else if (typeof object.playerCent === "object")
                        message.playerCent = new $util.LongBits(object.playerCent.low >>> 0, object.playerCent.high >>> 0).toNumber(true);
                if (object.seatId != null)
                    message.seatId = object.seatId >>> 0;
                if (object.betRateLine != null) {
                    if (typeof object.betRateLine !== "object")
                        throw TypeError(".auth.proto.UserInfo.betRateLine: object expected");
                    message.betRateLine = $root.common.fish.proto.BetRateLine.fromObject(object.betRateLine);
                }
                if (object.avatarId != null)
                    message.avatarId = String(object.avatarId);
                if (object.visible != null) {
                    if (typeof object.visible !== "object")
                        throw TypeError(".auth.proto.UserInfo.visible: object expected");
                    message.visible = $root.auth.proto.UserInfo.Column.fromObject(object.visible);
                }
                switch (object.playerType) {
                default:
                    if (typeof object.playerType === "number") {
                        message.playerType = object.playerType;
                        break;
                    }
                    break;
                case "GAME":
                case 0:
                    message.playerType = 0;
                    break;
                case "BOT":
                case 1:
                    message.playerType = 1;
                    break;
                }
                if (object.creditFormat != null)
                    message.creditFormat = String(object.creditFormat);
                return message;
            };

            /**
             * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof auth.proto.UserInfo
             * @static
             * @param {auth.proto.UserInfo} message UserInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.playerId = "";
                    object.playerName = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.playerCent = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.playerCent = options.longs === String ? "0" : 0;
                    object.seatId = 0;
                    object.betRateLine = null;
                    object.avatarId = "";
                    object.visible = null;
                    object.playerType = options.enums === String ? "GAME" : 0;
                    object.creditFormat = "";
                }
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    object.playerId = message.playerId;
                if (message.playerName != null && message.hasOwnProperty("playerName"))
                    object.playerName = message.playerName;
                if (message.playerCent != null && message.hasOwnProperty("playerCent"))
                    if (typeof message.playerCent === "number")
                        object.playerCent = options.longs === String ? String(message.playerCent) : message.playerCent;
                    else
                        object.playerCent = options.longs === String ? $util.Long.prototype.toString.call(message.playerCent) : options.longs === Number ? new $util.LongBits(message.playerCent.low >>> 0, message.playerCent.high >>> 0).toNumber(true) : message.playerCent;
                if (message.seatId != null && message.hasOwnProperty("seatId"))
                    object.seatId = message.seatId;
                if (message.betRateLine != null && message.hasOwnProperty("betRateLine"))
                    object.betRateLine = $root.common.fish.proto.BetRateLine.toObject(message.betRateLine, options);
                if (message.avatarId != null && message.hasOwnProperty("avatarId"))
                    object.avatarId = message.avatarId;
                if (message.visible != null && message.hasOwnProperty("visible"))
                    object.visible = $root.auth.proto.UserInfo.Column.toObject(message.visible, options);
                if (message.playerType != null && message.hasOwnProperty("playerType"))
                    object.playerType = options.enums === String ? $root.auth.proto.PLAYER_TYPE[message.playerType] === undefined ? message.playerType : $root.auth.proto.PLAYER_TYPE[message.playerType] : message.playerType;
                if (message.creditFormat != null && message.hasOwnProperty("creditFormat"))
                    object.creditFormat = message.creditFormat;
                return object;
            };

            /**
             * Converts this UserInfo to JSON.
             * @function toJSON
             * @memberof auth.proto.UserInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UserInfo
             * @function getTypeUrl
             * @memberof auth.proto.UserInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UserInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/auth.proto.UserInfo";
            };

            UserInfo.Column = (function() {

                /**
                 * Properties of a Column.
                 * @memberof auth.proto.UserInfo
                 * @interface IColumn
                 * @property {boolean|null} [id] Column id
                 * @property {boolean|null} [name] Column name
                 * @property {boolean|null} [balance] Column balance
                 * @property {boolean|null} [avatar] Column avatar
                 */

                /**
                 * Constructs a new Column.
                 * @memberof auth.proto.UserInfo
                 * @classdesc Represents a Column.
                 * @implements IColumn
                 * @constructor
                 * @param {auth.proto.UserInfo.IColumn=} [properties] Properties to set
                 */
                function Column(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Column id.
                 * @member {boolean} id
                 * @memberof auth.proto.UserInfo.Column
                 * @instance
                 */
                Column.prototype.id = false;

                /**
                 * Column name.
                 * @member {boolean} name
                 * @memberof auth.proto.UserInfo.Column
                 * @instance
                 */
                Column.prototype.name = false;

                /**
                 * Column balance.
                 * @member {boolean} balance
                 * @memberof auth.proto.UserInfo.Column
                 * @instance
                 */
                Column.prototype.balance = false;

                /**
                 * Column avatar.
                 * @member {boolean} avatar
                 * @memberof auth.proto.UserInfo.Column
                 * @instance
                 */
                Column.prototype.avatar = false;

                /**
                 * Creates a new Column instance using the specified properties.
                 * @function create
                 * @memberof auth.proto.UserInfo.Column
                 * @static
                 * @param {auth.proto.UserInfo.IColumn=} [properties] Properties to set
                 * @returns {auth.proto.UserInfo.Column} Column instance
                 */
                Column.create = function create(properties) {
                    return new Column(properties);
                };

                /**
                 * Encodes the specified Column message. Does not implicitly {@link auth.proto.UserInfo.Column.verify|verify} messages.
                 * @function encode
                 * @memberof auth.proto.UserInfo.Column
                 * @static
                 * @param {auth.proto.UserInfo.IColumn} message Column message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Column.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.id);
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.name);
                    if (message.balance != null && Object.hasOwnProperty.call(message, "balance"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.balance);
                    if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                        writer.uint32(/* id 4, wireType 0 =*/32).bool(message.avatar);
                    return writer;
                };

                /**
                 * Encodes the specified Column message, length delimited. Does not implicitly {@link auth.proto.UserInfo.Column.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof auth.proto.UserInfo.Column
                 * @static
                 * @param {auth.proto.UserInfo.IColumn} message Column message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Column.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Column message from the specified reader or buffer.
                 * @function decode
                 * @memberof auth.proto.UserInfo.Column
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {auth.proto.UserInfo.Column} Column
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Column.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.proto.UserInfo.Column();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.id = reader.bool();
                                break;
                            }
                        case 2: {
                                message.name = reader.bool();
                                break;
                            }
                        case 3: {
                                message.balance = reader.bool();
                                break;
                            }
                        case 4: {
                                message.avatar = reader.bool();
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
                 * Decodes a Column message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof auth.proto.UserInfo.Column
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {auth.proto.UserInfo.Column} Column
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Column.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Column message.
                 * @function verify
                 * @memberof auth.proto.UserInfo.Column
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Column.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (typeof message.id !== "boolean")
                            return "id: boolean expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (typeof message.name !== "boolean")
                            return "name: boolean expected";
                    if (message.balance != null && message.hasOwnProperty("balance"))
                        if (typeof message.balance !== "boolean")
                            return "balance: boolean expected";
                    if (message.avatar != null && message.hasOwnProperty("avatar"))
                        if (typeof message.avatar !== "boolean")
                            return "avatar: boolean expected";
                    return null;
                };

                /**
                 * Creates a Column message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof auth.proto.UserInfo.Column
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {auth.proto.UserInfo.Column} Column
                 */
                Column.fromObject = function fromObject(object) {
                    if (object instanceof $root.auth.proto.UserInfo.Column)
                        return object;
                    var message = new $root.auth.proto.UserInfo.Column();
                    if (object.id != null)
                        message.id = Boolean(object.id);
                    if (object.name != null)
                        message.name = Boolean(object.name);
                    if (object.balance != null)
                        message.balance = Boolean(object.balance);
                    if (object.avatar != null)
                        message.avatar = Boolean(object.avatar);
                    return message;
                };

                /**
                 * Creates a plain object from a Column message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof auth.proto.UserInfo.Column
                 * @static
                 * @param {auth.proto.UserInfo.Column} message Column
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Column.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = false;
                        object.name = false;
                        object.balance = false;
                        object.avatar = false;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.balance != null && message.hasOwnProperty("balance"))
                        object.balance = message.balance;
                    if (message.avatar != null && message.hasOwnProperty("avatar"))
                        object.avatar = message.avatar;
                    return object;
                };

                /**
                 * Converts this Column to JSON.
                 * @function toJSON
                 * @memberof auth.proto.UserInfo.Column
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Column.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Column
                 * @function getTypeUrl
                 * @memberof auth.proto.UserInfo.Column
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Column.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/auth.proto.UserInfo.Column";
                };

                return Column;
            })();

            return UserInfo;
        })();

        proto.BroadcastPlayerIn = (function() {

            /**
             * Properties of a BroadcastPlayerIn.
             * @memberof auth.proto
             * @interface IBroadcastPlayerIn
             * @property {common.proto.EMSGID|null} [msgid] BroadcastPlayerIn msgid
             * @property {string|null} [roomUuid] BroadcastPlayerIn roomUuid
             * @property {Array.<auth.proto.IUserInfo>|null} [player] BroadcastPlayerIn player
             */

            /**
             * Constructs a new BroadcastPlayerIn.
             * @memberof auth.proto
             * @classdesc Represents a BroadcastPlayerIn.
             * @implements IBroadcastPlayerIn
             * @constructor
             * @param {auth.proto.IBroadcastPlayerIn=} [properties] Properties to set
             */
            function BroadcastPlayerIn(properties) {
                this.player = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BroadcastPlayerIn msgid.
             * @member {common.proto.EMSGID} msgid
             * @memberof auth.proto.BroadcastPlayerIn
             * @instance
             */
            BroadcastPlayerIn.prototype.msgid = 0;

            /**
             * BroadcastPlayerIn roomUuid.
             * @member {string} roomUuid
             * @memberof auth.proto.BroadcastPlayerIn
             * @instance
             */
            BroadcastPlayerIn.prototype.roomUuid = "";

            /**
             * BroadcastPlayerIn player.
             * @member {Array.<auth.proto.IUserInfo>} player
             * @memberof auth.proto.BroadcastPlayerIn
             * @instance
             */
            BroadcastPlayerIn.prototype.player = $util.emptyArray;

            /**
             * Creates a new BroadcastPlayerIn instance using the specified properties.
             * @function create
             * @memberof auth.proto.BroadcastPlayerIn
             * @static
             * @param {auth.proto.IBroadcastPlayerIn=} [properties] Properties to set
             * @returns {auth.proto.BroadcastPlayerIn} BroadcastPlayerIn instance
             */
            BroadcastPlayerIn.create = function create(properties) {
                return new BroadcastPlayerIn(properties);
            };

            /**
             * Encodes the specified BroadcastPlayerIn message. Does not implicitly {@link auth.proto.BroadcastPlayerIn.verify|verify} messages.
             * @function encode
             * @memberof auth.proto.BroadcastPlayerIn
             * @static
             * @param {auth.proto.IBroadcastPlayerIn} message BroadcastPlayerIn message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BroadcastPlayerIn.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.msgid != null && Object.hasOwnProperty.call(message, "msgid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgid);
                if (message.roomUuid != null && Object.hasOwnProperty.call(message, "roomUuid"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomUuid);
                if (message.player != null && message.player.length)
                    for (var i = 0; i < message.player.length; ++i)
                        $root.auth.proto.UserInfo.encode(message.player[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified BroadcastPlayerIn message, length delimited. Does not implicitly {@link auth.proto.BroadcastPlayerIn.verify|verify} messages.
             * @function encodeDelimited
             * @memberof auth.proto.BroadcastPlayerIn
             * @static
             * @param {auth.proto.IBroadcastPlayerIn} message BroadcastPlayerIn message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BroadcastPlayerIn.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BroadcastPlayerIn message from the specified reader or buffer.
             * @function decode
             * @memberof auth.proto.BroadcastPlayerIn
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {auth.proto.BroadcastPlayerIn} BroadcastPlayerIn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BroadcastPlayerIn.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.proto.BroadcastPlayerIn();
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
                            if (!(message.player && message.player.length))
                                message.player = [];
                            message.player.push($root.auth.proto.UserInfo.decode(reader, reader.uint32()));
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
             * Decodes a BroadcastPlayerIn message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof auth.proto.BroadcastPlayerIn
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {auth.proto.BroadcastPlayerIn} BroadcastPlayerIn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BroadcastPlayerIn.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BroadcastPlayerIn message.
             * @function verify
             * @memberof auth.proto.BroadcastPlayerIn
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BroadcastPlayerIn.verify = function verify(message) {
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
                if (message.roomUuid != null && message.hasOwnProperty("roomUuid"))
                    if (!$util.isString(message.roomUuid))
                        return "roomUuid: string expected";
                if (message.player != null && message.hasOwnProperty("player")) {
                    if (!Array.isArray(message.player))
                        return "player: array expected";
                    for (var i = 0; i < message.player.length; ++i) {
                        var error = $root.auth.proto.UserInfo.verify(message.player[i]);
                        if (error)
                            return "player." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a BroadcastPlayerIn message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof auth.proto.BroadcastPlayerIn
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {auth.proto.BroadcastPlayerIn} BroadcastPlayerIn
             */
            BroadcastPlayerIn.fromObject = function fromObject(object) {
                if (object instanceof $root.auth.proto.BroadcastPlayerIn)
                    return object;
                var message = new $root.auth.proto.BroadcastPlayerIn();
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
                if (object.roomUuid != null)
                    message.roomUuid = String(object.roomUuid);
                if (object.player) {
                    if (!Array.isArray(object.player))
                        throw TypeError(".auth.proto.BroadcastPlayerIn.player: array expected");
                    message.player = [];
                    for (var i = 0; i < object.player.length; ++i) {
                        if (typeof object.player[i] !== "object")
                            throw TypeError(".auth.proto.BroadcastPlayerIn.player: object expected");
                        message.player[i] = $root.auth.proto.UserInfo.fromObject(object.player[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a BroadcastPlayerIn message. Also converts values to other types if specified.
             * @function toObject
             * @memberof auth.proto.BroadcastPlayerIn
             * @static
             * @param {auth.proto.BroadcastPlayerIn} message BroadcastPlayerIn
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BroadcastPlayerIn.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.player = [];
                if (options.defaults) {
                    object.msgid = options.enums === String ? "eReserved" : 0;
                    object.roomUuid = "";
                }
                if (message.msgid != null && message.hasOwnProperty("msgid"))
                    object.msgid = options.enums === String ? $root.common.proto.EMSGID[message.msgid] === undefined ? message.msgid : $root.common.proto.EMSGID[message.msgid] : message.msgid;
                if (message.roomUuid != null && message.hasOwnProperty("roomUuid"))
                    object.roomUuid = message.roomUuid;
                if (message.player && message.player.length) {
                    object.player = [];
                    for (var j = 0; j < message.player.length; ++j)
                        object.player[j] = $root.auth.proto.UserInfo.toObject(message.player[j], options);
                }
                return object;
            };

            /**
             * Converts this BroadcastPlayerIn to JSON.
             * @function toJSON
             * @memberof auth.proto.BroadcastPlayerIn
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BroadcastPlayerIn.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BroadcastPlayerIn
             * @function getTypeUrl
             * @memberof auth.proto.BroadcastPlayerIn
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BroadcastPlayerIn.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/auth.proto.BroadcastPlayerIn";
            };

            return BroadcastPlayerIn;
        })();

        proto.BroadcastPlayerOut = (function() {

            /**
             * Properties of a BroadcastPlayerOut.
             * @memberof auth.proto
             * @interface IBroadcastPlayerOut
             * @property {common.proto.EMSGID|null} [msgid] BroadcastPlayerOut msgid
             * @property {string|null} [roomUuid] BroadcastPlayerOut roomUuid
             * @property {auth.proto.IUserInfo|null} [player] BroadcastPlayerOut player
             */

            /**
             * Constructs a new BroadcastPlayerOut.
             * @memberof auth.proto
             * @classdesc Represents a BroadcastPlayerOut.
             * @implements IBroadcastPlayerOut
             * @constructor
             * @param {auth.proto.IBroadcastPlayerOut=} [properties] Properties to set
             */
            function BroadcastPlayerOut(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BroadcastPlayerOut msgid.
             * @member {common.proto.EMSGID} msgid
             * @memberof auth.proto.BroadcastPlayerOut
             * @instance
             */
            BroadcastPlayerOut.prototype.msgid = 0;

            /**
             * BroadcastPlayerOut roomUuid.
             * @member {string} roomUuid
             * @memberof auth.proto.BroadcastPlayerOut
             * @instance
             */
            BroadcastPlayerOut.prototype.roomUuid = "";

            /**
             * BroadcastPlayerOut player.
             * @member {auth.proto.IUserInfo|null|undefined} player
             * @memberof auth.proto.BroadcastPlayerOut
             * @instance
             */
            BroadcastPlayerOut.prototype.player = null;

            /**
             * Creates a new BroadcastPlayerOut instance using the specified properties.
             * @function create
             * @memberof auth.proto.BroadcastPlayerOut
             * @static
             * @param {auth.proto.IBroadcastPlayerOut=} [properties] Properties to set
             * @returns {auth.proto.BroadcastPlayerOut} BroadcastPlayerOut instance
             */
            BroadcastPlayerOut.create = function create(properties) {
                return new BroadcastPlayerOut(properties);
            };

            /**
             * Encodes the specified BroadcastPlayerOut message. Does not implicitly {@link auth.proto.BroadcastPlayerOut.verify|verify} messages.
             * @function encode
             * @memberof auth.proto.BroadcastPlayerOut
             * @static
             * @param {auth.proto.IBroadcastPlayerOut} message BroadcastPlayerOut message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BroadcastPlayerOut.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.msgid != null && Object.hasOwnProperty.call(message, "msgid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgid);
                if (message.roomUuid != null && Object.hasOwnProperty.call(message, "roomUuid"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomUuid);
                if (message.player != null && Object.hasOwnProperty.call(message, "player"))
                    $root.auth.proto.UserInfo.encode(message.player, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified BroadcastPlayerOut message, length delimited. Does not implicitly {@link auth.proto.BroadcastPlayerOut.verify|verify} messages.
             * @function encodeDelimited
             * @memberof auth.proto.BroadcastPlayerOut
             * @static
             * @param {auth.proto.IBroadcastPlayerOut} message BroadcastPlayerOut message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BroadcastPlayerOut.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BroadcastPlayerOut message from the specified reader or buffer.
             * @function decode
             * @memberof auth.proto.BroadcastPlayerOut
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {auth.proto.BroadcastPlayerOut} BroadcastPlayerOut
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BroadcastPlayerOut.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.proto.BroadcastPlayerOut();
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
                            message.player = $root.auth.proto.UserInfo.decode(reader, reader.uint32());
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
             * Decodes a BroadcastPlayerOut message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof auth.proto.BroadcastPlayerOut
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {auth.proto.BroadcastPlayerOut} BroadcastPlayerOut
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BroadcastPlayerOut.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BroadcastPlayerOut message.
             * @function verify
             * @memberof auth.proto.BroadcastPlayerOut
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BroadcastPlayerOut.verify = function verify(message) {
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
                if (message.roomUuid != null && message.hasOwnProperty("roomUuid"))
                    if (!$util.isString(message.roomUuid))
                        return "roomUuid: string expected";
                if (message.player != null && message.hasOwnProperty("player")) {
                    var error = $root.auth.proto.UserInfo.verify(message.player);
                    if (error)
                        return "player." + error;
                }
                return null;
            };

            /**
             * Creates a BroadcastPlayerOut message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof auth.proto.BroadcastPlayerOut
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {auth.proto.BroadcastPlayerOut} BroadcastPlayerOut
             */
            BroadcastPlayerOut.fromObject = function fromObject(object) {
                if (object instanceof $root.auth.proto.BroadcastPlayerOut)
                    return object;
                var message = new $root.auth.proto.BroadcastPlayerOut();
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
                if (object.roomUuid != null)
                    message.roomUuid = String(object.roomUuid);
                if (object.player != null) {
                    if (typeof object.player !== "object")
                        throw TypeError(".auth.proto.BroadcastPlayerOut.player: object expected");
                    message.player = $root.auth.proto.UserInfo.fromObject(object.player);
                }
                return message;
            };

            /**
             * Creates a plain object from a BroadcastPlayerOut message. Also converts values to other types if specified.
             * @function toObject
             * @memberof auth.proto.BroadcastPlayerOut
             * @static
             * @param {auth.proto.BroadcastPlayerOut} message BroadcastPlayerOut
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BroadcastPlayerOut.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.msgid = options.enums === String ? "eReserved" : 0;
                    object.roomUuid = "";
                    object.player = null;
                }
                if (message.msgid != null && message.hasOwnProperty("msgid"))
                    object.msgid = options.enums === String ? $root.common.proto.EMSGID[message.msgid] === undefined ? message.msgid : $root.common.proto.EMSGID[message.msgid] : message.msgid;
                if (message.roomUuid != null && message.hasOwnProperty("roomUuid"))
                    object.roomUuid = message.roomUuid;
                if (message.player != null && message.hasOwnProperty("player"))
                    object.player = $root.auth.proto.UserInfo.toObject(message.player, options);
                return object;
            };

            /**
             * Converts this BroadcastPlayerOut to JSON.
             * @function toJSON
             * @memberof auth.proto.BroadcastPlayerOut
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BroadcastPlayerOut.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BroadcastPlayerOut
             * @function getTypeUrl
             * @memberof auth.proto.BroadcastPlayerOut
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BroadcastPlayerOut.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/auth.proto.BroadcastPlayerOut";
            };

            return BroadcastPlayerOut;
        })();

        /**
         * PLAYER_TYPE enum.
         * @name auth.proto.PLAYER_TYPE
         * @enum {number}
         * @property {number} GAME=0 GAME value
         * @property {number} BOT=1 BOT value
         */
        proto.PLAYER_TYPE = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "GAME"] = 0;
            values[valuesById[1] = "BOT"] = 1;
            return values;
        })();

        return proto;
    })();

    return auth;
})();

module.exports = $root;
