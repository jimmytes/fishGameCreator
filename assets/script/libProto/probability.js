/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.probability = (function() {

    /**
     * Namespace probability.
     * @exports probability
     * @namespace
     */
    var probability = {};

    probability.proto = (function() {

        /**
         * Namespace proto.
         * @memberof probability
         * @namespace
         */
        var proto = {};

        proto.HitFish = (function() {

            /**
             * Properties of a HitFish.
             * @memberof probability.proto
             * @interface IHitFish
             * @property {string|null} [uuid] HitFish uuid
             * @property {number|null} [symbolId] HitFish symbolId
             */

            /**
             * Constructs a new HitFish.
             * @memberof probability.proto
             * @classdesc Represents a HitFish.
             * @implements IHitFish
             * @constructor
             * @param {probability.proto.IHitFish=} [properties] Properties to set
             */
            function HitFish(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * HitFish uuid.
             * @member {string} uuid
             * @memberof probability.proto.HitFish
             * @instance
             */
            HitFish.prototype.uuid = "";

            /**
             * HitFish symbolId.
             * @member {number} symbolId
             * @memberof probability.proto.HitFish
             * @instance
             */
            HitFish.prototype.symbolId = 0;

            /**
             * Creates a new HitFish instance using the specified properties.
             * @function create
             * @memberof probability.proto.HitFish
             * @static
             * @param {probability.proto.IHitFish=} [properties] Properties to set
             * @returns {probability.proto.HitFish} HitFish instance
             */
            HitFish.create = function create(properties) {
                return new HitFish(properties);
            };

            /**
             * Encodes the specified HitFish message. Does not implicitly {@link probability.proto.HitFish.verify|verify} messages.
             * @function encode
             * @memberof probability.proto.HitFish
             * @static
             * @param {probability.proto.IHitFish} message HitFish message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HitFish.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
                if (message.symbolId != null && Object.hasOwnProperty.call(message, "symbolId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.symbolId);
                return writer;
            };

            /**
             * Encodes the specified HitFish message, length delimited. Does not implicitly {@link probability.proto.HitFish.verify|verify} messages.
             * @function encodeDelimited
             * @memberof probability.proto.HitFish
             * @static
             * @param {probability.proto.IHitFish} message HitFish message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HitFish.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a HitFish message from the specified reader or buffer.
             * @function decode
             * @memberof probability.proto.HitFish
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {probability.proto.HitFish} HitFish
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HitFish.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.probability.proto.HitFish();
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
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a HitFish message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof probability.proto.HitFish
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {probability.proto.HitFish} HitFish
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HitFish.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a HitFish message.
             * @function verify
             * @memberof probability.proto.HitFish
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HitFish.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    if (!$util.isString(message.uuid))
                        return "uuid: string expected";
                if (message.symbolId != null && message.hasOwnProperty("symbolId"))
                    if (!$util.isInteger(message.symbolId))
                        return "symbolId: integer expected";
                return null;
            };

            /**
             * Creates a HitFish message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof probability.proto.HitFish
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {probability.proto.HitFish} HitFish
             */
            HitFish.fromObject = function fromObject(object) {
                if (object instanceof $root.probability.proto.HitFish)
                    return object;
                var message = new $root.probability.proto.HitFish();
                if (object.uuid != null)
                    message.uuid = String(object.uuid);
                if (object.symbolId != null)
                    message.symbolId = object.symbolId | 0;
                return message;
            };

            /**
             * Creates a plain object from a HitFish message. Also converts values to other types if specified.
             * @function toObject
             * @memberof probability.proto.HitFish
             * @static
             * @param {probability.proto.HitFish} message HitFish
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HitFish.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.uuid = "";
                    object.symbolId = 0;
                }
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    object.uuid = message.uuid;
                if (message.symbolId != null && message.hasOwnProperty("symbolId"))
                    object.symbolId = message.symbolId;
                return object;
            };

            /**
             * Converts this HitFish to JSON.
             * @function toJSON
             * @memberof probability.proto.HitFish
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HitFish.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for HitFish
             * @function getTypeUrl
             * @memberof probability.proto.HitFish
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            HitFish.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/probability.proto.HitFish";
            };

            return HitFish;
        })();

        proto.HitBullet = (function() {

            /**
             * Properties of a HitBullet.
             * @memberof probability.proto
             * @interface IHitBullet
             * @property {string|null} [uuid] HitBullet uuid
             * @property {number|null} [typeId] HitBullet typeId
             * @property {common.fish.proto.IPoint|null} [target] HitBullet target
             * @property {number|null} [shootMode] HitBullet shootMode
             */

            /**
             * Constructs a new HitBullet.
             * @memberof probability.proto
             * @classdesc Represents a HitBullet.
             * @implements IHitBullet
             * @constructor
             * @param {probability.proto.IHitBullet=} [properties] Properties to set
             */
            function HitBullet(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * HitBullet uuid.
             * @member {string} uuid
             * @memberof probability.proto.HitBullet
             * @instance
             */
            HitBullet.prototype.uuid = "";

            /**
             * HitBullet typeId.
             * @member {number} typeId
             * @memberof probability.proto.HitBullet
             * @instance
             */
            HitBullet.prototype.typeId = 0;

            /**
             * HitBullet target.
             * @member {common.fish.proto.IPoint|null|undefined} target
             * @memberof probability.proto.HitBullet
             * @instance
             */
            HitBullet.prototype.target = null;

            /**
             * HitBullet shootMode.
             * @member {number} shootMode
             * @memberof probability.proto.HitBullet
             * @instance
             */
            HitBullet.prototype.shootMode = 0;

            /**
             * Creates a new HitBullet instance using the specified properties.
             * @function create
             * @memberof probability.proto.HitBullet
             * @static
             * @param {probability.proto.IHitBullet=} [properties] Properties to set
             * @returns {probability.proto.HitBullet} HitBullet instance
             */
            HitBullet.create = function create(properties) {
                return new HitBullet(properties);
            };

            /**
             * Encodes the specified HitBullet message. Does not implicitly {@link probability.proto.HitBullet.verify|verify} messages.
             * @function encode
             * @memberof probability.proto.HitBullet
             * @static
             * @param {probability.proto.IHitBullet} message HitBullet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HitBullet.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
                if (message.typeId != null && Object.hasOwnProperty.call(message, "typeId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.typeId);
                if (message.target != null && Object.hasOwnProperty.call(message, "target"))
                    $root.common.fish.proto.Point.encode(message.target, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.shootMode != null && Object.hasOwnProperty.call(message, "shootMode"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.shootMode);
                return writer;
            };

            /**
             * Encodes the specified HitBullet message, length delimited. Does not implicitly {@link probability.proto.HitBullet.verify|verify} messages.
             * @function encodeDelimited
             * @memberof probability.proto.HitBullet
             * @static
             * @param {probability.proto.IHitBullet} message HitBullet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HitBullet.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a HitBullet message from the specified reader or buffer.
             * @function decode
             * @memberof probability.proto.HitBullet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {probability.proto.HitBullet} HitBullet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HitBullet.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.probability.proto.HitBullet();
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
                            message.typeId = reader.int32();
                            break;
                        }
                    case 3: {
                            message.target = $root.common.fish.proto.Point.decode(reader, reader.uint32());
                            break;
                        }
                    case 4: {
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
             * Decodes a HitBullet message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof probability.proto.HitBullet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {probability.proto.HitBullet} HitBullet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HitBullet.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a HitBullet message.
             * @function verify
             * @memberof probability.proto.HitBullet
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HitBullet.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    if (!$util.isString(message.uuid))
                        return "uuid: string expected";
                if (message.typeId != null && message.hasOwnProperty("typeId"))
                    if (!$util.isInteger(message.typeId))
                        return "typeId: integer expected";
                if (message.target != null && message.hasOwnProperty("target")) {
                    var error = $root.common.fish.proto.Point.verify(message.target);
                    if (error)
                        return "target." + error;
                }
                if (message.shootMode != null && message.hasOwnProperty("shootMode"))
                    if (!$util.isInteger(message.shootMode))
                        return "shootMode: integer expected";
                return null;
            };

            /**
             * Creates a HitBullet message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof probability.proto.HitBullet
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {probability.proto.HitBullet} HitBullet
             */
            HitBullet.fromObject = function fromObject(object) {
                if (object instanceof $root.probability.proto.HitBullet)
                    return object;
                var message = new $root.probability.proto.HitBullet();
                if (object.uuid != null)
                    message.uuid = String(object.uuid);
                if (object.typeId != null)
                    message.typeId = object.typeId | 0;
                if (object.target != null) {
                    if (typeof object.target !== "object")
                        throw TypeError(".probability.proto.HitBullet.target: object expected");
                    message.target = $root.common.fish.proto.Point.fromObject(object.target);
                }
                if (object.shootMode != null)
                    message.shootMode = object.shootMode | 0;
                return message;
            };

            /**
             * Creates a plain object from a HitBullet message. Also converts values to other types if specified.
             * @function toObject
             * @memberof probability.proto.HitBullet
             * @static
             * @param {probability.proto.HitBullet} message HitBullet
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HitBullet.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.uuid = "";
                    object.typeId = 0;
                    object.target = null;
                    object.shootMode = 0;
                }
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    object.uuid = message.uuid;
                if (message.typeId != null && message.hasOwnProperty("typeId"))
                    object.typeId = message.typeId;
                if (message.target != null && message.hasOwnProperty("target"))
                    object.target = $root.common.fish.proto.Point.toObject(message.target, options);
                if (message.shootMode != null && message.hasOwnProperty("shootMode"))
                    object.shootMode = message.shootMode;
                return object;
            };

            /**
             * Converts this HitBullet to JSON.
             * @function toJSON
             * @memberof probability.proto.HitBullet
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HitBullet.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for HitBullet
             * @function getTypeUrl
             * @memberof probability.proto.HitBullet
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            HitBullet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/probability.proto.HitBullet";
            };

            return HitBullet;
        })();

        proto.HitResult = (function() {

            /**
             * Properties of a HitResult.
             * @memberof probability.proto
             * @interface IHitResult
             * @property {number|Long|null} [pay] HitResult pay
             * @property {number|Long|null} [bet] HitResult bet
             * @property {number|Long|null} [rate] HitResult rate
             * @property {number|Long|null} [multiplier] HitResult multiplier
             * @property {number|Long|null} [playerCent] HitResult playerCent
             * @property {number|null} [obtainBonusTime] HitResult obtainBonusTime
             * @property {Array.<probability.proto.IExtraInfo>|null} [extraFishInfo] HitResult extraFishInfo
             * @property {number|null} [randomNumber] HitResult randomNumber
             */

            /**
             * Constructs a new HitResult.
             * @memberof probability.proto
             * @classdesc Represents a HitResult.
             * @implements IHitResult
             * @constructor
             * @param {probability.proto.IHitResult=} [properties] Properties to set
             */
            function HitResult(properties) {
                this.extraFishInfo = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * HitResult pay.
             * @member {number|Long} pay
             * @memberof probability.proto.HitResult
             * @instance
             */
            HitResult.prototype.pay = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * HitResult bet.
             * @member {number|Long} bet
             * @memberof probability.proto.HitResult
             * @instance
             */
            HitResult.prototype.bet = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * HitResult rate.
             * @member {number|Long} rate
             * @memberof probability.proto.HitResult
             * @instance
             */
            HitResult.prototype.rate = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * HitResult multiplier.
             * @member {number|Long} multiplier
             * @memberof probability.proto.HitResult
             * @instance
             */
            HitResult.prototype.multiplier = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * HitResult playerCent.
             * @member {number|Long} playerCent
             * @memberof probability.proto.HitResult
             * @instance
             */
            HitResult.prototype.playerCent = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * HitResult obtainBonusTime.
             * @member {number} obtainBonusTime
             * @memberof probability.proto.HitResult
             * @instance
             */
            HitResult.prototype.obtainBonusTime = 0;

            /**
             * HitResult extraFishInfo.
             * @member {Array.<probability.proto.IExtraInfo>} extraFishInfo
             * @memberof probability.proto.HitResult
             * @instance
             */
            HitResult.prototype.extraFishInfo = $util.emptyArray;

            /**
             * HitResult randomNumber.
             * @member {number} randomNumber
             * @memberof probability.proto.HitResult
             * @instance
             */
            HitResult.prototype.randomNumber = 0;

            /**
             * Creates a new HitResult instance using the specified properties.
             * @function create
             * @memberof probability.proto.HitResult
             * @static
             * @param {probability.proto.IHitResult=} [properties] Properties to set
             * @returns {probability.proto.HitResult} HitResult instance
             */
            HitResult.create = function create(properties) {
                return new HitResult(properties);
            };

            /**
             * Encodes the specified HitResult message. Does not implicitly {@link probability.proto.HitResult.verify|verify} messages.
             * @function encode
             * @memberof probability.proto.HitResult
             * @static
             * @param {probability.proto.IHitResult} message HitResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HitResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.pay != null && Object.hasOwnProperty.call(message, "pay"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.pay);
                if (message.bet != null && Object.hasOwnProperty.call(message, "bet"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.bet);
                if (message.rate != null && Object.hasOwnProperty.call(message, "rate"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.rate);
                if (message.multiplier != null && Object.hasOwnProperty.call(message, "multiplier"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.multiplier);
                if (message.playerCent != null && Object.hasOwnProperty.call(message, "playerCent"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.playerCent);
                if (message.obtainBonusTime != null && Object.hasOwnProperty.call(message, "obtainBonusTime"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.obtainBonusTime);
                if (message.extraFishInfo != null && message.extraFishInfo.length)
                    for (var i = 0; i < message.extraFishInfo.length; ++i)
                        $root.probability.proto.ExtraInfo.encode(message.extraFishInfo[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.randomNumber != null && Object.hasOwnProperty.call(message, "randomNumber"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int32(message.randomNumber);
                return writer;
            };

            /**
             * Encodes the specified HitResult message, length delimited. Does not implicitly {@link probability.proto.HitResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof probability.proto.HitResult
             * @static
             * @param {probability.proto.IHitResult} message HitResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HitResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a HitResult message from the specified reader or buffer.
             * @function decode
             * @memberof probability.proto.HitResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {probability.proto.HitResult} HitResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HitResult.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.probability.proto.HitResult();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.pay = reader.uint64();
                            break;
                        }
                    case 2: {
                            message.bet = reader.uint64();
                            break;
                        }
                    case 3: {
                            message.rate = reader.uint64();
                            break;
                        }
                    case 4: {
                            message.multiplier = reader.uint64();
                            break;
                        }
                    case 5: {
                            message.playerCent = reader.uint64();
                            break;
                        }
                    case 6: {
                            message.obtainBonusTime = reader.uint32();
                            break;
                        }
                    case 7: {
                            if (!(message.extraFishInfo && message.extraFishInfo.length))
                                message.extraFishInfo = [];
                            message.extraFishInfo.push($root.probability.proto.ExtraInfo.decode(reader, reader.uint32()));
                            break;
                        }
                    case 8: {
                            message.randomNumber = reader.int32();
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
             * Decodes a HitResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof probability.proto.HitResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {probability.proto.HitResult} HitResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HitResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a HitResult message.
             * @function verify
             * @memberof probability.proto.HitResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HitResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.pay != null && message.hasOwnProperty("pay"))
                    if (!$util.isInteger(message.pay) && !(message.pay && $util.isInteger(message.pay.low) && $util.isInteger(message.pay.high)))
                        return "pay: integer|Long expected";
                if (message.bet != null && message.hasOwnProperty("bet"))
                    if (!$util.isInteger(message.bet) && !(message.bet && $util.isInteger(message.bet.low) && $util.isInteger(message.bet.high)))
                        return "bet: integer|Long expected";
                if (message.rate != null && message.hasOwnProperty("rate"))
                    if (!$util.isInteger(message.rate) && !(message.rate && $util.isInteger(message.rate.low) && $util.isInteger(message.rate.high)))
                        return "rate: integer|Long expected";
                if (message.multiplier != null && message.hasOwnProperty("multiplier"))
                    if (!$util.isInteger(message.multiplier) && !(message.multiplier && $util.isInteger(message.multiplier.low) && $util.isInteger(message.multiplier.high)))
                        return "multiplier: integer|Long expected";
                if (message.playerCent != null && message.hasOwnProperty("playerCent"))
                    if (!$util.isInteger(message.playerCent) && !(message.playerCent && $util.isInteger(message.playerCent.low) && $util.isInteger(message.playerCent.high)))
                        return "playerCent: integer|Long expected";
                if (message.obtainBonusTime != null && message.hasOwnProperty("obtainBonusTime"))
                    if (!$util.isInteger(message.obtainBonusTime))
                        return "obtainBonusTime: integer expected";
                if (message.extraFishInfo != null && message.hasOwnProperty("extraFishInfo")) {
                    if (!Array.isArray(message.extraFishInfo))
                        return "extraFishInfo: array expected";
                    for (var i = 0; i < message.extraFishInfo.length; ++i) {
                        var error = $root.probability.proto.ExtraInfo.verify(message.extraFishInfo[i]);
                        if (error)
                            return "extraFishInfo." + error;
                    }
                }
                if (message.randomNumber != null && message.hasOwnProperty("randomNumber"))
                    if (!$util.isInteger(message.randomNumber))
                        return "randomNumber: integer expected";
                return null;
            };

            /**
             * Creates a HitResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof probability.proto.HitResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {probability.proto.HitResult} HitResult
             */
            HitResult.fromObject = function fromObject(object) {
                if (object instanceof $root.probability.proto.HitResult)
                    return object;
                var message = new $root.probability.proto.HitResult();
                if (object.pay != null)
                    if ($util.Long)
                        (message.pay = $util.Long.fromValue(object.pay)).unsigned = true;
                    else if (typeof object.pay === "string")
                        message.pay = parseInt(object.pay, 10);
                    else if (typeof object.pay === "number")
                        message.pay = object.pay;
                    else if (typeof object.pay === "object")
                        message.pay = new $util.LongBits(object.pay.low >>> 0, object.pay.high >>> 0).toNumber(true);
                if (object.bet != null)
                    if ($util.Long)
                        (message.bet = $util.Long.fromValue(object.bet)).unsigned = true;
                    else if (typeof object.bet === "string")
                        message.bet = parseInt(object.bet, 10);
                    else if (typeof object.bet === "number")
                        message.bet = object.bet;
                    else if (typeof object.bet === "object")
                        message.bet = new $util.LongBits(object.bet.low >>> 0, object.bet.high >>> 0).toNumber(true);
                if (object.rate != null)
                    if ($util.Long)
                        (message.rate = $util.Long.fromValue(object.rate)).unsigned = true;
                    else if (typeof object.rate === "string")
                        message.rate = parseInt(object.rate, 10);
                    else if (typeof object.rate === "number")
                        message.rate = object.rate;
                    else if (typeof object.rate === "object")
                        message.rate = new $util.LongBits(object.rate.low >>> 0, object.rate.high >>> 0).toNumber(true);
                if (object.multiplier != null)
                    if ($util.Long)
                        (message.multiplier = $util.Long.fromValue(object.multiplier)).unsigned = true;
                    else if (typeof object.multiplier === "string")
                        message.multiplier = parseInt(object.multiplier, 10);
                    else if (typeof object.multiplier === "number")
                        message.multiplier = object.multiplier;
                    else if (typeof object.multiplier === "object")
                        message.multiplier = new $util.LongBits(object.multiplier.low >>> 0, object.multiplier.high >>> 0).toNumber(true);
                if (object.playerCent != null)
                    if ($util.Long)
                        (message.playerCent = $util.Long.fromValue(object.playerCent)).unsigned = true;
                    else if (typeof object.playerCent === "string")
                        message.playerCent = parseInt(object.playerCent, 10);
                    else if (typeof object.playerCent === "number")
                        message.playerCent = object.playerCent;
                    else if (typeof object.playerCent === "object")
                        message.playerCent = new $util.LongBits(object.playerCent.low >>> 0, object.playerCent.high >>> 0).toNumber(true);
                if (object.obtainBonusTime != null)
                    message.obtainBonusTime = object.obtainBonusTime >>> 0;
                if (object.extraFishInfo) {
                    if (!Array.isArray(object.extraFishInfo))
                        throw TypeError(".probability.proto.HitResult.extraFishInfo: array expected");
                    message.extraFishInfo = [];
                    for (var i = 0; i < object.extraFishInfo.length; ++i) {
                        if (typeof object.extraFishInfo[i] !== "object")
                            throw TypeError(".probability.proto.HitResult.extraFishInfo: object expected");
                        message.extraFishInfo[i] = $root.probability.proto.ExtraInfo.fromObject(object.extraFishInfo[i]);
                    }
                }
                if (object.randomNumber != null)
                    message.randomNumber = object.randomNumber | 0;
                return message;
            };

            /**
             * Creates a plain object from a HitResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof probability.proto.HitResult
             * @static
             * @param {probability.proto.HitResult} message HitResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HitResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.extraFishInfo = [];
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.pay = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.pay = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.bet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bet = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.rate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.rate = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.multiplier = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.multiplier = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.playerCent = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.playerCent = options.longs === String ? "0" : 0;
                    object.obtainBonusTime = 0;
                    object.randomNumber = 0;
                }
                if (message.pay != null && message.hasOwnProperty("pay"))
                    if (typeof message.pay === "number")
                        object.pay = options.longs === String ? String(message.pay) : message.pay;
                    else
                        object.pay = options.longs === String ? $util.Long.prototype.toString.call(message.pay) : options.longs === Number ? new $util.LongBits(message.pay.low >>> 0, message.pay.high >>> 0).toNumber(true) : message.pay;
                if (message.bet != null && message.hasOwnProperty("bet"))
                    if (typeof message.bet === "number")
                        object.bet = options.longs === String ? String(message.bet) : message.bet;
                    else
                        object.bet = options.longs === String ? $util.Long.prototype.toString.call(message.bet) : options.longs === Number ? new $util.LongBits(message.bet.low >>> 0, message.bet.high >>> 0).toNumber(true) : message.bet;
                if (message.rate != null && message.hasOwnProperty("rate"))
                    if (typeof message.rate === "number")
                        object.rate = options.longs === String ? String(message.rate) : message.rate;
                    else
                        object.rate = options.longs === String ? $util.Long.prototype.toString.call(message.rate) : options.longs === Number ? new $util.LongBits(message.rate.low >>> 0, message.rate.high >>> 0).toNumber(true) : message.rate;
                if (message.multiplier != null && message.hasOwnProperty("multiplier"))
                    if (typeof message.multiplier === "number")
                        object.multiplier = options.longs === String ? String(message.multiplier) : message.multiplier;
                    else
                        object.multiplier = options.longs === String ? $util.Long.prototype.toString.call(message.multiplier) : options.longs === Number ? new $util.LongBits(message.multiplier.low >>> 0, message.multiplier.high >>> 0).toNumber(true) : message.multiplier;
                if (message.playerCent != null && message.hasOwnProperty("playerCent"))
                    if (typeof message.playerCent === "number")
                        object.playerCent = options.longs === String ? String(message.playerCent) : message.playerCent;
                    else
                        object.playerCent = options.longs === String ? $util.Long.prototype.toString.call(message.playerCent) : options.longs === Number ? new $util.LongBits(message.playerCent.low >>> 0, message.playerCent.high >>> 0).toNumber(true) : message.playerCent;
                if (message.obtainBonusTime != null && message.hasOwnProperty("obtainBonusTime"))
                    object.obtainBonusTime = message.obtainBonusTime;
                if (message.extraFishInfo && message.extraFishInfo.length) {
                    object.extraFishInfo = [];
                    for (var j = 0; j < message.extraFishInfo.length; ++j)
                        object.extraFishInfo[j] = $root.probability.proto.ExtraInfo.toObject(message.extraFishInfo[j], options);
                }
                if (message.randomNumber != null && message.hasOwnProperty("randomNumber"))
                    object.randomNumber = message.randomNumber;
                return object;
            };

            /**
             * Converts this HitResult to JSON.
             * @function toJSON
             * @memberof probability.proto.HitResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HitResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for HitResult
             * @function getTypeUrl
             * @memberof probability.proto.HitResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            HitResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/probability.proto.HitResult";
            };

            return HitResult;
        })();

        proto.ExtraInfo = (function() {

            /**
             * Properties of an ExtraInfo.
             * @memberof probability.proto
             * @interface IExtraInfo
             * @property {number|null} [win] ExtraInfo win
             * @property {number|null} [kind] ExtraInfo kind
             */

            /**
             * Constructs a new ExtraInfo.
             * @memberof probability.proto
             * @classdesc Represents an ExtraInfo.
             * @implements IExtraInfo
             * @constructor
             * @param {probability.proto.IExtraInfo=} [properties] Properties to set
             */
            function ExtraInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ExtraInfo win.
             * @member {number} win
             * @memberof probability.proto.ExtraInfo
             * @instance
             */
            ExtraInfo.prototype.win = 0;

            /**
             * ExtraInfo kind.
             * @member {number} kind
             * @memberof probability.proto.ExtraInfo
             * @instance
             */
            ExtraInfo.prototype.kind = 0;

            /**
             * Creates a new ExtraInfo instance using the specified properties.
             * @function create
             * @memberof probability.proto.ExtraInfo
             * @static
             * @param {probability.proto.IExtraInfo=} [properties] Properties to set
             * @returns {probability.proto.ExtraInfo} ExtraInfo instance
             */
            ExtraInfo.create = function create(properties) {
                return new ExtraInfo(properties);
            };

            /**
             * Encodes the specified ExtraInfo message. Does not implicitly {@link probability.proto.ExtraInfo.verify|verify} messages.
             * @function encode
             * @memberof probability.proto.ExtraInfo
             * @static
             * @param {probability.proto.IExtraInfo} message ExtraInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExtraInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.win != null && Object.hasOwnProperty.call(message, "win"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.win);
                if (message.kind != null && Object.hasOwnProperty.call(message, "kind"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.kind);
                return writer;
            };

            /**
             * Encodes the specified ExtraInfo message, length delimited. Does not implicitly {@link probability.proto.ExtraInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof probability.proto.ExtraInfo
             * @static
             * @param {probability.proto.IExtraInfo} message ExtraInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExtraInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ExtraInfo message from the specified reader or buffer.
             * @function decode
             * @memberof probability.proto.ExtraInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {probability.proto.ExtraInfo} ExtraInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExtraInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.probability.proto.ExtraInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.win = reader.int32();
                            break;
                        }
                    case 2: {
                            message.kind = reader.int32();
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
             * Decodes an ExtraInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof probability.proto.ExtraInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {probability.proto.ExtraInfo} ExtraInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExtraInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ExtraInfo message.
             * @function verify
             * @memberof probability.proto.ExtraInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ExtraInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.win != null && message.hasOwnProperty("win"))
                    if (!$util.isInteger(message.win))
                        return "win: integer expected";
                if (message.kind != null && message.hasOwnProperty("kind"))
                    if (!$util.isInteger(message.kind))
                        return "kind: integer expected";
                return null;
            };

            /**
             * Creates an ExtraInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof probability.proto.ExtraInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {probability.proto.ExtraInfo} ExtraInfo
             */
            ExtraInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.probability.proto.ExtraInfo)
                    return object;
                var message = new $root.probability.proto.ExtraInfo();
                if (object.win != null)
                    message.win = object.win | 0;
                if (object.kind != null)
                    message.kind = object.kind | 0;
                return message;
            };

            /**
             * Creates a plain object from an ExtraInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof probability.proto.ExtraInfo
             * @static
             * @param {probability.proto.ExtraInfo} message ExtraInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ExtraInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.win = 0;
                    object.kind = 0;
                }
                if (message.win != null && message.hasOwnProperty("win"))
                    object.win = message.win;
                if (message.kind != null && message.hasOwnProperty("kind"))
                    object.kind = message.kind;
                return object;
            };

            /**
             * Converts this ExtraInfo to JSON.
             * @function toJSON
             * @memberof probability.proto.ExtraInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ExtraInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ExtraInfo
             * @function getTypeUrl
             * @memberof probability.proto.ExtraInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ExtraInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/probability.proto.ExtraInfo";
            };

            return ExtraInfo;
        })();

        proto.ResultCall = (function() {

            /**
             * Properties of a ResultCall.
             * @memberof probability.proto
             * @interface IResultCall
             * @property {common.proto.EMSGID|null} [msgid] ResultCall msgid
             * @property {string|null} [token] ResultCall token
             * @property {string|null} [roomUuid] ResultCall roomUuid
             * @property {number|null} [seatId] ResultCall seatId
             * @property {probability.proto.IHitFish|null} [hitFish] ResultCall hitFish
             * @property {probability.proto.IHitBullet|null} [hitBullet] ResultCall hitBullet
             */

            /**
             * Constructs a new ResultCall.
             * @memberof probability.proto
             * @classdesc Represents a ResultCall.
             * @implements IResultCall
             * @constructor
             * @param {probability.proto.IResultCall=} [properties] Properties to set
             */
            function ResultCall(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResultCall msgid.
             * @member {common.proto.EMSGID} msgid
             * @memberof probability.proto.ResultCall
             * @instance
             */
            ResultCall.prototype.msgid = 0;

            /**
             * ResultCall token.
             * @member {string} token
             * @memberof probability.proto.ResultCall
             * @instance
             */
            ResultCall.prototype.token = "";

            /**
             * ResultCall roomUuid.
             * @member {string} roomUuid
             * @memberof probability.proto.ResultCall
             * @instance
             */
            ResultCall.prototype.roomUuid = "";

            /**
             * ResultCall seatId.
             * @member {number} seatId
             * @memberof probability.proto.ResultCall
             * @instance
             */
            ResultCall.prototype.seatId = 0;

            /**
             * ResultCall hitFish.
             * @member {probability.proto.IHitFish|null|undefined} hitFish
             * @memberof probability.proto.ResultCall
             * @instance
             */
            ResultCall.prototype.hitFish = null;

            /**
             * ResultCall hitBullet.
             * @member {probability.proto.IHitBullet|null|undefined} hitBullet
             * @memberof probability.proto.ResultCall
             * @instance
             */
            ResultCall.prototype.hitBullet = null;

            /**
             * Creates a new ResultCall instance using the specified properties.
             * @function create
             * @memberof probability.proto.ResultCall
             * @static
             * @param {probability.proto.IResultCall=} [properties] Properties to set
             * @returns {probability.proto.ResultCall} ResultCall instance
             */
            ResultCall.create = function create(properties) {
                return new ResultCall(properties);
            };

            /**
             * Encodes the specified ResultCall message. Does not implicitly {@link probability.proto.ResultCall.verify|verify} messages.
             * @function encode
             * @memberof probability.proto.ResultCall
             * @static
             * @param {probability.proto.IResultCall} message ResultCall message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResultCall.encode = function encode(message, writer) {
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
                if (message.hitFish != null && Object.hasOwnProperty.call(message, "hitFish"))
                    $root.probability.proto.HitFish.encode(message.hitFish, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.hitBullet != null && Object.hasOwnProperty.call(message, "hitBullet"))
                    $root.probability.proto.HitBullet.encode(message.hitBullet, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ResultCall message, length delimited. Does not implicitly {@link probability.proto.ResultCall.verify|verify} messages.
             * @function encodeDelimited
             * @memberof probability.proto.ResultCall
             * @static
             * @param {probability.proto.IResultCall} message ResultCall message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResultCall.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResultCall message from the specified reader or buffer.
             * @function decode
             * @memberof probability.proto.ResultCall
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {probability.proto.ResultCall} ResultCall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResultCall.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.probability.proto.ResultCall();
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
                            message.hitFish = $root.probability.proto.HitFish.decode(reader, reader.uint32());
                            break;
                        }
                    case 6: {
                            message.hitBullet = $root.probability.proto.HitBullet.decode(reader, reader.uint32());
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
             * Decodes a ResultCall message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof probability.proto.ResultCall
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {probability.proto.ResultCall} ResultCall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResultCall.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResultCall message.
             * @function verify
             * @memberof probability.proto.ResultCall
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResultCall.verify = function verify(message) {
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
                if (message.roomUuid != null && message.hasOwnProperty("roomUuid"))
                    if (!$util.isString(message.roomUuid))
                        return "roomUuid: string expected";
                if (message.seatId != null && message.hasOwnProperty("seatId"))
                    if (!$util.isInteger(message.seatId))
                        return "seatId: integer expected";
                if (message.hitFish != null && message.hasOwnProperty("hitFish")) {
                    var error = $root.probability.proto.HitFish.verify(message.hitFish);
                    if (error)
                        return "hitFish." + error;
                }
                if (message.hitBullet != null && message.hasOwnProperty("hitBullet")) {
                    var error = $root.probability.proto.HitBullet.verify(message.hitBullet);
                    if (error)
                        return "hitBullet." + error;
                }
                return null;
            };

            /**
             * Creates a ResultCall message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof probability.proto.ResultCall
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {probability.proto.ResultCall} ResultCall
             */
            ResultCall.fromObject = function fromObject(object) {
                if (object instanceof $root.probability.proto.ResultCall)
                    return object;
                var message = new $root.probability.proto.ResultCall();
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
                if (object.roomUuid != null)
                    message.roomUuid = String(object.roomUuid);
                if (object.seatId != null)
                    message.seatId = object.seatId | 0;
                if (object.hitFish != null) {
                    if (typeof object.hitFish !== "object")
                        throw TypeError(".probability.proto.ResultCall.hitFish: object expected");
                    message.hitFish = $root.probability.proto.HitFish.fromObject(object.hitFish);
                }
                if (object.hitBullet != null) {
                    if (typeof object.hitBullet !== "object")
                        throw TypeError(".probability.proto.ResultCall.hitBullet: object expected");
                    message.hitBullet = $root.probability.proto.HitBullet.fromObject(object.hitBullet);
                }
                return message;
            };

            /**
             * Creates a plain object from a ResultCall message. Also converts values to other types if specified.
             * @function toObject
             * @memberof probability.proto.ResultCall
             * @static
             * @param {probability.proto.ResultCall} message ResultCall
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResultCall.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.msgid = options.enums === String ? "eReserved" : 0;
                    object.token = "";
                    object.roomUuid = "";
                    object.seatId = 0;
                    object.hitFish = null;
                    object.hitBullet = null;
                }
                if (message.msgid != null && message.hasOwnProperty("msgid"))
                    object.msgid = options.enums === String ? $root.common.proto.EMSGID[message.msgid] === undefined ? message.msgid : $root.common.proto.EMSGID[message.msgid] : message.msgid;
                if (message.token != null && message.hasOwnProperty("token"))
                    object.token = message.token;
                if (message.roomUuid != null && message.hasOwnProperty("roomUuid"))
                    object.roomUuid = message.roomUuid;
                if (message.seatId != null && message.hasOwnProperty("seatId"))
                    object.seatId = message.seatId;
                if (message.hitFish != null && message.hasOwnProperty("hitFish"))
                    object.hitFish = $root.probability.proto.HitFish.toObject(message.hitFish, options);
                if (message.hitBullet != null && message.hasOwnProperty("hitBullet"))
                    object.hitBullet = $root.probability.proto.HitBullet.toObject(message.hitBullet, options);
                return object;
            };

            /**
             * Converts this ResultCall to JSON.
             * @function toJSON
             * @memberof probability.proto.ResultCall
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResultCall.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ResultCall
             * @function getTypeUrl
             * @memberof probability.proto.ResultCall
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ResultCall.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/probability.proto.ResultCall";
            };

            return ResultCall;
        })();

        proto.ResultRecall = (function() {

            /**
             * Properties of a ResultRecall.
             * @memberof probability.proto
             * @interface IResultRecall
             * @property {common.proto.EMSGID|null} [msgid] ResultRecall msgid
             * @property {common.proto.Status.Code|null} [statusCode] ResultRecall statusCode
             * @property {string|null} [roomUuid] ResultRecall roomUuid
             * @property {number|null} [seatId] ResultRecall seatId
             * @property {common.fish.proto.IBetRateLine|null} [betRateLine] ResultRecall betRateLine
             * @property {probability.proto.IHitFish|null} [hitFish] ResultRecall hitFish
             * @property {probability.proto.IHitBullet|null} [hitBullet] ResultRecall hitBullet
             * @property {probability.proto.IHitResult|null} [hitResult] ResultRecall hitResult
             */

            /**
             * Constructs a new ResultRecall.
             * @memberof probability.proto
             * @classdesc Represents a ResultRecall.
             * @implements IResultRecall
             * @constructor
             * @param {probability.proto.IResultRecall=} [properties] Properties to set
             */
            function ResultRecall(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResultRecall msgid.
             * @member {common.proto.EMSGID} msgid
             * @memberof probability.proto.ResultRecall
             * @instance
             */
            ResultRecall.prototype.msgid = 0;

            /**
             * ResultRecall statusCode.
             * @member {common.proto.Status.Code} statusCode
             * @memberof probability.proto.ResultRecall
             * @instance
             */
            ResultRecall.prototype.statusCode = 0;

            /**
             * ResultRecall roomUuid.
             * @member {string} roomUuid
             * @memberof probability.proto.ResultRecall
             * @instance
             */
            ResultRecall.prototype.roomUuid = "";

            /**
             * ResultRecall seatId.
             * @member {number} seatId
             * @memberof probability.proto.ResultRecall
             * @instance
             */
            ResultRecall.prototype.seatId = 0;

            /**
             * ResultRecall betRateLine.
             * @member {common.fish.proto.IBetRateLine|null|undefined} betRateLine
             * @memberof probability.proto.ResultRecall
             * @instance
             */
            ResultRecall.prototype.betRateLine = null;

            /**
             * ResultRecall hitFish.
             * @member {probability.proto.IHitFish|null|undefined} hitFish
             * @memberof probability.proto.ResultRecall
             * @instance
             */
            ResultRecall.prototype.hitFish = null;

            /**
             * ResultRecall hitBullet.
             * @member {probability.proto.IHitBullet|null|undefined} hitBullet
             * @memberof probability.proto.ResultRecall
             * @instance
             */
            ResultRecall.prototype.hitBullet = null;

            /**
             * ResultRecall hitResult.
             * @member {probability.proto.IHitResult|null|undefined} hitResult
             * @memberof probability.proto.ResultRecall
             * @instance
             */
            ResultRecall.prototype.hitResult = null;

            /**
             * Creates a new ResultRecall instance using the specified properties.
             * @function create
             * @memberof probability.proto.ResultRecall
             * @static
             * @param {probability.proto.IResultRecall=} [properties] Properties to set
             * @returns {probability.proto.ResultRecall} ResultRecall instance
             */
            ResultRecall.create = function create(properties) {
                return new ResultRecall(properties);
            };

            /**
             * Encodes the specified ResultRecall message. Does not implicitly {@link probability.proto.ResultRecall.verify|verify} messages.
             * @function encode
             * @memberof probability.proto.ResultRecall
             * @static
             * @param {probability.proto.IResultRecall} message ResultRecall message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResultRecall.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.msgid != null && Object.hasOwnProperty.call(message, "msgid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgid);
                if (message.statusCode != null && Object.hasOwnProperty.call(message, "statusCode"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.statusCode);
                if (message.roomUuid != null && Object.hasOwnProperty.call(message, "roomUuid"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.roomUuid);
                if (message.seatId != null && Object.hasOwnProperty.call(message, "seatId"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.seatId);
                if (message.betRateLine != null && Object.hasOwnProperty.call(message, "betRateLine"))
                    $root.common.fish.proto.BetRateLine.encode(message.betRateLine, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.hitFish != null && Object.hasOwnProperty.call(message, "hitFish"))
                    $root.probability.proto.HitFish.encode(message.hitFish, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.hitBullet != null && Object.hasOwnProperty.call(message, "hitBullet"))
                    $root.probability.proto.HitBullet.encode(message.hitBullet, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.hitResult != null && Object.hasOwnProperty.call(message, "hitResult"))
                    $root.probability.proto.HitResult.encode(message.hitResult, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ResultRecall message, length delimited. Does not implicitly {@link probability.proto.ResultRecall.verify|verify} messages.
             * @function encodeDelimited
             * @memberof probability.proto.ResultRecall
             * @static
             * @param {probability.proto.IResultRecall} message ResultRecall message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResultRecall.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResultRecall message from the specified reader or buffer.
             * @function decode
             * @memberof probability.proto.ResultRecall
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {probability.proto.ResultRecall} ResultRecall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResultRecall.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.probability.proto.ResultRecall();
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
                            message.roomUuid = reader.string();
                            break;
                        }
                    case 4: {
                            message.seatId = reader.int32();
                            break;
                        }
                    case 5: {
                            message.betRateLine = $root.common.fish.proto.BetRateLine.decode(reader, reader.uint32());
                            break;
                        }
                    case 6: {
                            message.hitFish = $root.probability.proto.HitFish.decode(reader, reader.uint32());
                            break;
                        }
                    case 7: {
                            message.hitBullet = $root.probability.proto.HitBullet.decode(reader, reader.uint32());
                            break;
                        }
                    case 8: {
                            message.hitResult = $root.probability.proto.HitResult.decode(reader, reader.uint32());
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
             * Decodes a ResultRecall message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof probability.proto.ResultRecall
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {probability.proto.ResultRecall} ResultRecall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResultRecall.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResultRecall message.
             * @function verify
             * @memberof probability.proto.ResultRecall
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResultRecall.verify = function verify(message) {
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
                if (message.roomUuid != null && message.hasOwnProperty("roomUuid"))
                    if (!$util.isString(message.roomUuid))
                        return "roomUuid: string expected";
                if (message.seatId != null && message.hasOwnProperty("seatId"))
                    if (!$util.isInteger(message.seatId))
                        return "seatId: integer expected";
                if (message.betRateLine != null && message.hasOwnProperty("betRateLine")) {
                    var error = $root.common.fish.proto.BetRateLine.verify(message.betRateLine);
                    if (error)
                        return "betRateLine." + error;
                }
                if (message.hitFish != null && message.hasOwnProperty("hitFish")) {
                    var error = $root.probability.proto.HitFish.verify(message.hitFish);
                    if (error)
                        return "hitFish." + error;
                }
                if (message.hitBullet != null && message.hasOwnProperty("hitBullet")) {
                    var error = $root.probability.proto.HitBullet.verify(message.hitBullet);
                    if (error)
                        return "hitBullet." + error;
                }
                if (message.hitResult != null && message.hasOwnProperty("hitResult")) {
                    var error = $root.probability.proto.HitResult.verify(message.hitResult);
                    if (error)
                        return "hitResult." + error;
                }
                return null;
            };

            /**
             * Creates a ResultRecall message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof probability.proto.ResultRecall
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {probability.proto.ResultRecall} ResultRecall
             */
            ResultRecall.fromObject = function fromObject(object) {
                if (object instanceof $root.probability.proto.ResultRecall)
                    return object;
                var message = new $root.probability.proto.ResultRecall();
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
                if (object.roomUuid != null)
                    message.roomUuid = String(object.roomUuid);
                if (object.seatId != null)
                    message.seatId = object.seatId | 0;
                if (object.betRateLine != null) {
                    if (typeof object.betRateLine !== "object")
                        throw TypeError(".probability.proto.ResultRecall.betRateLine: object expected");
                    message.betRateLine = $root.common.fish.proto.BetRateLine.fromObject(object.betRateLine);
                }
                if (object.hitFish != null) {
                    if (typeof object.hitFish !== "object")
                        throw TypeError(".probability.proto.ResultRecall.hitFish: object expected");
                    message.hitFish = $root.probability.proto.HitFish.fromObject(object.hitFish);
                }
                if (object.hitBullet != null) {
                    if (typeof object.hitBullet !== "object")
                        throw TypeError(".probability.proto.ResultRecall.hitBullet: object expected");
                    message.hitBullet = $root.probability.proto.HitBullet.fromObject(object.hitBullet);
                }
                if (object.hitResult != null) {
                    if (typeof object.hitResult !== "object")
                        throw TypeError(".probability.proto.ResultRecall.hitResult: object expected");
                    message.hitResult = $root.probability.proto.HitResult.fromObject(object.hitResult);
                }
                return message;
            };

            /**
             * Creates a plain object from a ResultRecall message. Also converts values to other types if specified.
             * @function toObject
             * @memberof probability.proto.ResultRecall
             * @static
             * @param {probability.proto.ResultRecall} message ResultRecall
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResultRecall.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.msgid = options.enums === String ? "eReserved" : 0;
                    object.statusCode = options.enums === String ? "kSuccess" : 0;
                    object.roomUuid = "";
                    object.seatId = 0;
                    object.betRateLine = null;
                    object.hitFish = null;
                    object.hitBullet = null;
                    object.hitResult = null;
                }
                if (message.msgid != null && message.hasOwnProperty("msgid"))
                    object.msgid = options.enums === String ? $root.common.proto.EMSGID[message.msgid] === undefined ? message.msgid : $root.common.proto.EMSGID[message.msgid] : message.msgid;
                if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                    object.statusCode = options.enums === String ? $root.common.proto.Status.Code[message.statusCode] === undefined ? message.statusCode : $root.common.proto.Status.Code[message.statusCode] : message.statusCode;
                if (message.roomUuid != null && message.hasOwnProperty("roomUuid"))
                    object.roomUuid = message.roomUuid;
                if (message.seatId != null && message.hasOwnProperty("seatId"))
                    object.seatId = message.seatId;
                if (message.betRateLine != null && message.hasOwnProperty("betRateLine"))
                    object.betRateLine = $root.common.fish.proto.BetRateLine.toObject(message.betRateLine, options);
                if (message.hitFish != null && message.hasOwnProperty("hitFish"))
                    object.hitFish = $root.probability.proto.HitFish.toObject(message.hitFish, options);
                if (message.hitBullet != null && message.hasOwnProperty("hitBullet"))
                    object.hitBullet = $root.probability.proto.HitBullet.toObject(message.hitBullet, options);
                if (message.hitResult != null && message.hasOwnProperty("hitResult"))
                    object.hitResult = $root.probability.proto.HitResult.toObject(message.hitResult, options);
                return object;
            };

            /**
             * Converts this ResultRecall to JSON.
             * @function toJSON
             * @memberof probability.proto.ResultRecall
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResultRecall.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ResultRecall
             * @function getTypeUrl
             * @memberof probability.proto.ResultRecall
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ResultRecall.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/probability.proto.ResultRecall";
            };

            return ResultRecall;
        })();

        proto.BroadcastResult = (function() {

            /**
             * Properties of a BroadcastResult.
             * @memberof probability.proto
             * @interface IBroadcastResult
             * @property {common.proto.EMSGID|null} [msgid] BroadcastResult msgid
             * @property {probability.proto.IResultRecall|null} [resultRecall] BroadcastResult resultRecall
             */

            /**
             * Constructs a new BroadcastResult.
             * @memberof probability.proto
             * @classdesc Represents a BroadcastResult.
             * @implements IBroadcastResult
             * @constructor
             * @param {probability.proto.IBroadcastResult=} [properties] Properties to set
             */
            function BroadcastResult(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BroadcastResult msgid.
             * @member {common.proto.EMSGID} msgid
             * @memberof probability.proto.BroadcastResult
             * @instance
             */
            BroadcastResult.prototype.msgid = 0;

            /**
             * BroadcastResult resultRecall.
             * @member {probability.proto.IResultRecall|null|undefined} resultRecall
             * @memberof probability.proto.BroadcastResult
             * @instance
             */
            BroadcastResult.prototype.resultRecall = null;

            /**
             * Creates a new BroadcastResult instance using the specified properties.
             * @function create
             * @memberof probability.proto.BroadcastResult
             * @static
             * @param {probability.proto.IBroadcastResult=} [properties] Properties to set
             * @returns {probability.proto.BroadcastResult} BroadcastResult instance
             */
            BroadcastResult.create = function create(properties) {
                return new BroadcastResult(properties);
            };

            /**
             * Encodes the specified BroadcastResult message. Does not implicitly {@link probability.proto.BroadcastResult.verify|verify} messages.
             * @function encode
             * @memberof probability.proto.BroadcastResult
             * @static
             * @param {probability.proto.IBroadcastResult} message BroadcastResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BroadcastResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.msgid != null && Object.hasOwnProperty.call(message, "msgid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgid);
                if (message.resultRecall != null && Object.hasOwnProperty.call(message, "resultRecall"))
                    $root.probability.proto.ResultRecall.encode(message.resultRecall, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified BroadcastResult message, length delimited. Does not implicitly {@link probability.proto.BroadcastResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof probability.proto.BroadcastResult
             * @static
             * @param {probability.proto.IBroadcastResult} message BroadcastResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BroadcastResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BroadcastResult message from the specified reader or buffer.
             * @function decode
             * @memberof probability.proto.BroadcastResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {probability.proto.BroadcastResult} BroadcastResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BroadcastResult.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.probability.proto.BroadcastResult();
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
                            message.resultRecall = $root.probability.proto.ResultRecall.decode(reader, reader.uint32());
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
             * Decodes a BroadcastResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof probability.proto.BroadcastResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {probability.proto.BroadcastResult} BroadcastResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BroadcastResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BroadcastResult message.
             * @function verify
             * @memberof probability.proto.BroadcastResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BroadcastResult.verify = function verify(message) {
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
                if (message.resultRecall != null && message.hasOwnProperty("resultRecall")) {
                    var error = $root.probability.proto.ResultRecall.verify(message.resultRecall);
                    if (error)
                        return "resultRecall." + error;
                }
                return null;
            };

            /**
             * Creates a BroadcastResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof probability.proto.BroadcastResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {probability.proto.BroadcastResult} BroadcastResult
             */
            BroadcastResult.fromObject = function fromObject(object) {
                if (object instanceof $root.probability.proto.BroadcastResult)
                    return object;
                var message = new $root.probability.proto.BroadcastResult();
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
                if (object.resultRecall != null) {
                    if (typeof object.resultRecall !== "object")
                        throw TypeError(".probability.proto.BroadcastResult.resultRecall: object expected");
                    message.resultRecall = $root.probability.proto.ResultRecall.fromObject(object.resultRecall);
                }
                return message;
            };

            /**
             * Creates a plain object from a BroadcastResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof probability.proto.BroadcastResult
             * @static
             * @param {probability.proto.BroadcastResult} message BroadcastResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BroadcastResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.msgid = options.enums === String ? "eReserved" : 0;
                    object.resultRecall = null;
                }
                if (message.msgid != null && message.hasOwnProperty("msgid"))
                    object.msgid = options.enums === String ? $root.common.proto.EMSGID[message.msgid] === undefined ? message.msgid : $root.common.proto.EMSGID[message.msgid] : message.msgid;
                if (message.resultRecall != null && message.hasOwnProperty("resultRecall"))
                    object.resultRecall = $root.probability.proto.ResultRecall.toObject(message.resultRecall, options);
                return object;
            };

            /**
             * Converts this BroadcastResult to JSON.
             * @function toJSON
             * @memberof probability.proto.BroadcastResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BroadcastResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BroadcastResult
             * @function getTypeUrl
             * @memberof probability.proto.BroadcastResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BroadcastResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/probability.proto.BroadcastResult";
            };

            return BroadcastResult;
        })();

        proto.OptionCall = (function() {

            /**
             * Properties of an OptionCall.
             * @memberof probability.proto
             * @interface IOptionCall
             * @property {common.proto.EMSGID|null} [msgid] OptionCall msgid
             * @property {Array.<common.fish.proto.IPoint>|null} [target] OptionCall target
             * @property {number|null} [fishSymbolId] OptionCall fishSymbolId
             * @property {number|null} [totalPay] OptionCall totalPay
             * @property {string|null} [token] OptionCall token
             * @property {string|null} [roomUuid] OptionCall roomUuid
             * @property {number|null} [seatId] OptionCall seatId
             */

            /**
             * Constructs a new OptionCall.
             * @memberof probability.proto
             * @classdesc Represents an OptionCall.
             * @implements IOptionCall
             * @constructor
             * @param {probability.proto.IOptionCall=} [properties] Properties to set
             */
            function OptionCall(properties) {
                this.target = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OptionCall msgid.
             * @member {common.proto.EMSGID} msgid
             * @memberof probability.proto.OptionCall
             * @instance
             */
            OptionCall.prototype.msgid = 0;

            /**
             * OptionCall target.
             * @member {Array.<common.fish.proto.IPoint>} target
             * @memberof probability.proto.OptionCall
             * @instance
             */
            OptionCall.prototype.target = $util.emptyArray;

            /**
             * OptionCall fishSymbolId.
             * @member {number} fishSymbolId
             * @memberof probability.proto.OptionCall
             * @instance
             */
            OptionCall.prototype.fishSymbolId = 0;

            /**
             * OptionCall totalPay.
             * @member {number} totalPay
             * @memberof probability.proto.OptionCall
             * @instance
             */
            OptionCall.prototype.totalPay = 0;

            /**
             * OptionCall token.
             * @member {string} token
             * @memberof probability.proto.OptionCall
             * @instance
             */
            OptionCall.prototype.token = "";

            /**
             * OptionCall roomUuid.
             * @member {string} roomUuid
             * @memberof probability.proto.OptionCall
             * @instance
             */
            OptionCall.prototype.roomUuid = "";

            /**
             * OptionCall seatId.
             * @member {number} seatId
             * @memberof probability.proto.OptionCall
             * @instance
             */
            OptionCall.prototype.seatId = 0;

            /**
             * Creates a new OptionCall instance using the specified properties.
             * @function create
             * @memberof probability.proto.OptionCall
             * @static
             * @param {probability.proto.IOptionCall=} [properties] Properties to set
             * @returns {probability.proto.OptionCall} OptionCall instance
             */
            OptionCall.create = function create(properties) {
                return new OptionCall(properties);
            };

            /**
             * Encodes the specified OptionCall message. Does not implicitly {@link probability.proto.OptionCall.verify|verify} messages.
             * @function encode
             * @memberof probability.proto.OptionCall
             * @static
             * @param {probability.proto.IOptionCall} message OptionCall message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OptionCall.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.msgid != null && Object.hasOwnProperty.call(message, "msgid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgid);
                if (message.target != null && message.target.length)
                    for (var i = 0; i < message.target.length; ++i)
                        $root.common.fish.proto.Point.encode(message.target[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.fishSymbolId != null && Object.hasOwnProperty.call(message, "fishSymbolId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.fishSymbolId);
                if (message.totalPay != null && Object.hasOwnProperty.call(message, "totalPay"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.totalPay);
                if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.token);
                if (message.roomUuid != null && Object.hasOwnProperty.call(message, "roomUuid"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.roomUuid);
                if (message.seatId != null && Object.hasOwnProperty.call(message, "seatId"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.seatId);
                return writer;
            };

            /**
             * Encodes the specified OptionCall message, length delimited. Does not implicitly {@link probability.proto.OptionCall.verify|verify} messages.
             * @function encodeDelimited
             * @memberof probability.proto.OptionCall
             * @static
             * @param {probability.proto.IOptionCall} message OptionCall message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OptionCall.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OptionCall message from the specified reader or buffer.
             * @function decode
             * @memberof probability.proto.OptionCall
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {probability.proto.OptionCall} OptionCall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OptionCall.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.probability.proto.OptionCall();
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
                            if (!(message.target && message.target.length))
                                message.target = [];
                            message.target.push($root.common.fish.proto.Point.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            message.fishSymbolId = reader.int32();
                            break;
                        }
                    case 4: {
                            message.totalPay = reader.int32();
                            break;
                        }
                    case 5: {
                            message.token = reader.string();
                            break;
                        }
                    case 6: {
                            message.roomUuid = reader.string();
                            break;
                        }
                    case 7: {
                            message.seatId = reader.int32();
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
             * Decodes an OptionCall message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof probability.proto.OptionCall
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {probability.proto.OptionCall} OptionCall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OptionCall.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OptionCall message.
             * @function verify
             * @memberof probability.proto.OptionCall
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OptionCall.verify = function verify(message) {
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
                if (message.target != null && message.hasOwnProperty("target")) {
                    if (!Array.isArray(message.target))
                        return "target: array expected";
                    for (var i = 0; i < message.target.length; ++i) {
                        var error = $root.common.fish.proto.Point.verify(message.target[i]);
                        if (error)
                            return "target." + error;
                    }
                }
                if (message.fishSymbolId != null && message.hasOwnProperty("fishSymbolId"))
                    if (!$util.isInteger(message.fishSymbolId))
                        return "fishSymbolId: integer expected";
                if (message.totalPay != null && message.hasOwnProperty("totalPay"))
                    if (!$util.isInteger(message.totalPay))
                        return "totalPay: integer expected";
                if (message.token != null && message.hasOwnProperty("token"))
                    if (!$util.isString(message.token))
                        return "token: string expected";
                if (message.roomUuid != null && message.hasOwnProperty("roomUuid"))
                    if (!$util.isString(message.roomUuid))
                        return "roomUuid: string expected";
                if (message.seatId != null && message.hasOwnProperty("seatId"))
                    if (!$util.isInteger(message.seatId))
                        return "seatId: integer expected";
                return null;
            };

            /**
             * Creates an OptionCall message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof probability.proto.OptionCall
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {probability.proto.OptionCall} OptionCall
             */
            OptionCall.fromObject = function fromObject(object) {
                if (object instanceof $root.probability.proto.OptionCall)
                    return object;
                var message = new $root.probability.proto.OptionCall();
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
                if (object.target) {
                    if (!Array.isArray(object.target))
                        throw TypeError(".probability.proto.OptionCall.target: array expected");
                    message.target = [];
                    for (var i = 0; i < object.target.length; ++i) {
                        if (typeof object.target[i] !== "object")
                            throw TypeError(".probability.proto.OptionCall.target: object expected");
                        message.target[i] = $root.common.fish.proto.Point.fromObject(object.target[i]);
                    }
                }
                if (object.fishSymbolId != null)
                    message.fishSymbolId = object.fishSymbolId | 0;
                if (object.totalPay != null)
                    message.totalPay = object.totalPay | 0;
                if (object.token != null)
                    message.token = String(object.token);
                if (object.roomUuid != null)
                    message.roomUuid = String(object.roomUuid);
                if (object.seatId != null)
                    message.seatId = object.seatId | 0;
                return message;
            };

            /**
             * Creates a plain object from an OptionCall message. Also converts values to other types if specified.
             * @function toObject
             * @memberof probability.proto.OptionCall
             * @static
             * @param {probability.proto.OptionCall} message OptionCall
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OptionCall.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.target = [];
                if (options.defaults) {
                    object.msgid = options.enums === String ? "eReserved" : 0;
                    object.fishSymbolId = 0;
                    object.totalPay = 0;
                    object.token = "";
                    object.roomUuid = "";
                    object.seatId = 0;
                }
                if (message.msgid != null && message.hasOwnProperty("msgid"))
                    object.msgid = options.enums === String ? $root.common.proto.EMSGID[message.msgid] === undefined ? message.msgid : $root.common.proto.EMSGID[message.msgid] : message.msgid;
                if (message.target && message.target.length) {
                    object.target = [];
                    for (var j = 0; j < message.target.length; ++j)
                        object.target[j] = $root.common.fish.proto.Point.toObject(message.target[j], options);
                }
                if (message.fishSymbolId != null && message.hasOwnProperty("fishSymbolId"))
                    object.fishSymbolId = message.fishSymbolId;
                if (message.totalPay != null && message.hasOwnProperty("totalPay"))
                    object.totalPay = message.totalPay;
                if (message.token != null && message.hasOwnProperty("token"))
                    object.token = message.token;
                if (message.roomUuid != null && message.hasOwnProperty("roomUuid"))
                    object.roomUuid = message.roomUuid;
                if (message.seatId != null && message.hasOwnProperty("seatId"))
                    object.seatId = message.seatId;
                return object;
            };

            /**
             * Converts this OptionCall to JSON.
             * @function toJSON
             * @memberof probability.proto.OptionCall
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OptionCall.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OptionCall
             * @function getTypeUrl
             * @memberof probability.proto.OptionCall
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OptionCall.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/probability.proto.OptionCall";
            };

            return OptionCall;
        })();

        proto.OptionRecall = (function() {

            /**
             * Properties of an OptionRecall.
             * @memberof probability.proto
             * @interface IOptionRecall
             * @property {common.proto.EMSGID|null} [msgid] OptionRecall msgid
             * @property {Array.<common.fish.proto.IPoint>|null} [target] OptionRecall target
             * @property {common.proto.Status.Code|null} [statusCode] OptionRecall statusCode
             * @property {number|null} [fishSymbolId] OptionRecall fishSymbolId
             * @property {string|null} [roomUuid] OptionRecall roomUuid
             * @property {number|null} [seatId] OptionRecall seatId
             * @property {Array.<probability.proto.IExtraInfo>|null} [extraFishInfo] OptionRecall extraFishInfo
             * @property {number|null} [randomNumber] OptionRecall randomNumber
             */

            /**
             * Constructs a new OptionRecall.
             * @memberof probability.proto
             * @classdesc Represents an OptionRecall.
             * @implements IOptionRecall
             * @constructor
             * @param {probability.proto.IOptionRecall=} [properties] Properties to set
             */
            function OptionRecall(properties) {
                this.target = [];
                this.extraFishInfo = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OptionRecall msgid.
             * @member {common.proto.EMSGID} msgid
             * @memberof probability.proto.OptionRecall
             * @instance
             */
            OptionRecall.prototype.msgid = 0;

            /**
             * OptionRecall target.
             * @member {Array.<common.fish.proto.IPoint>} target
             * @memberof probability.proto.OptionRecall
             * @instance
             */
            OptionRecall.prototype.target = $util.emptyArray;

            /**
             * OptionRecall statusCode.
             * @member {common.proto.Status.Code} statusCode
             * @memberof probability.proto.OptionRecall
             * @instance
             */
            OptionRecall.prototype.statusCode = 0;

            /**
             * OptionRecall fishSymbolId.
             * @member {number} fishSymbolId
             * @memberof probability.proto.OptionRecall
             * @instance
             */
            OptionRecall.prototype.fishSymbolId = 0;

            /**
             * OptionRecall roomUuid.
             * @member {string} roomUuid
             * @memberof probability.proto.OptionRecall
             * @instance
             */
            OptionRecall.prototype.roomUuid = "";

            /**
             * OptionRecall seatId.
             * @member {number} seatId
             * @memberof probability.proto.OptionRecall
             * @instance
             */
            OptionRecall.prototype.seatId = 0;

            /**
             * OptionRecall extraFishInfo.
             * @member {Array.<probability.proto.IExtraInfo>} extraFishInfo
             * @memberof probability.proto.OptionRecall
             * @instance
             */
            OptionRecall.prototype.extraFishInfo = $util.emptyArray;

            /**
             * OptionRecall randomNumber.
             * @member {number} randomNumber
             * @memberof probability.proto.OptionRecall
             * @instance
             */
            OptionRecall.prototype.randomNumber = 0;

            /**
             * Creates a new OptionRecall instance using the specified properties.
             * @function create
             * @memberof probability.proto.OptionRecall
             * @static
             * @param {probability.proto.IOptionRecall=} [properties] Properties to set
             * @returns {probability.proto.OptionRecall} OptionRecall instance
             */
            OptionRecall.create = function create(properties) {
                return new OptionRecall(properties);
            };

            /**
             * Encodes the specified OptionRecall message. Does not implicitly {@link probability.proto.OptionRecall.verify|verify} messages.
             * @function encode
             * @memberof probability.proto.OptionRecall
             * @static
             * @param {probability.proto.IOptionRecall} message OptionRecall message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OptionRecall.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.msgid != null && Object.hasOwnProperty.call(message, "msgid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgid);
                if (message.target != null && message.target.length)
                    for (var i = 0; i < message.target.length; ++i)
                        $root.common.fish.proto.Point.encode(message.target[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.statusCode != null && Object.hasOwnProperty.call(message, "statusCode"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.statusCode);
                if (message.fishSymbolId != null && Object.hasOwnProperty.call(message, "fishSymbolId"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.fishSymbolId);
                if (message.roomUuid != null && Object.hasOwnProperty.call(message, "roomUuid"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.roomUuid);
                if (message.seatId != null && Object.hasOwnProperty.call(message, "seatId"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.seatId);
                if (message.extraFishInfo != null && message.extraFishInfo.length)
                    for (var i = 0; i < message.extraFishInfo.length; ++i)
                        $root.probability.proto.ExtraInfo.encode(message.extraFishInfo[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.randomNumber != null && Object.hasOwnProperty.call(message, "randomNumber"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int32(message.randomNumber);
                return writer;
            };

            /**
             * Encodes the specified OptionRecall message, length delimited. Does not implicitly {@link probability.proto.OptionRecall.verify|verify} messages.
             * @function encodeDelimited
             * @memberof probability.proto.OptionRecall
             * @static
             * @param {probability.proto.IOptionRecall} message OptionRecall message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OptionRecall.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OptionRecall message from the specified reader or buffer.
             * @function decode
             * @memberof probability.proto.OptionRecall
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {probability.proto.OptionRecall} OptionRecall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OptionRecall.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.probability.proto.OptionRecall();
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
                            if (!(message.target && message.target.length))
                                message.target = [];
                            message.target.push($root.common.fish.proto.Point.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            message.statusCode = reader.int32();
                            break;
                        }
                    case 4: {
                            message.fishSymbolId = reader.int32();
                            break;
                        }
                    case 5: {
                            message.roomUuid = reader.string();
                            break;
                        }
                    case 6: {
                            message.seatId = reader.int32();
                            break;
                        }
                    case 7: {
                            if (!(message.extraFishInfo && message.extraFishInfo.length))
                                message.extraFishInfo = [];
                            message.extraFishInfo.push($root.probability.proto.ExtraInfo.decode(reader, reader.uint32()));
                            break;
                        }
                    case 8: {
                            message.randomNumber = reader.int32();
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
             * Decodes an OptionRecall message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof probability.proto.OptionRecall
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {probability.proto.OptionRecall} OptionRecall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OptionRecall.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OptionRecall message.
             * @function verify
             * @memberof probability.proto.OptionRecall
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OptionRecall.verify = function verify(message) {
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
                if (message.target != null && message.hasOwnProperty("target")) {
                    if (!Array.isArray(message.target))
                        return "target: array expected";
                    for (var i = 0; i < message.target.length; ++i) {
                        var error = $root.common.fish.proto.Point.verify(message.target[i]);
                        if (error)
                            return "target." + error;
                    }
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
                if (message.fishSymbolId != null && message.hasOwnProperty("fishSymbolId"))
                    if (!$util.isInteger(message.fishSymbolId))
                        return "fishSymbolId: integer expected";
                if (message.roomUuid != null && message.hasOwnProperty("roomUuid"))
                    if (!$util.isString(message.roomUuid))
                        return "roomUuid: string expected";
                if (message.seatId != null && message.hasOwnProperty("seatId"))
                    if (!$util.isInteger(message.seatId))
                        return "seatId: integer expected";
                if (message.extraFishInfo != null && message.hasOwnProperty("extraFishInfo")) {
                    if (!Array.isArray(message.extraFishInfo))
                        return "extraFishInfo: array expected";
                    for (var i = 0; i < message.extraFishInfo.length; ++i) {
                        var error = $root.probability.proto.ExtraInfo.verify(message.extraFishInfo[i]);
                        if (error)
                            return "extraFishInfo." + error;
                    }
                }
                if (message.randomNumber != null && message.hasOwnProperty("randomNumber"))
                    if (!$util.isInteger(message.randomNumber))
                        return "randomNumber: integer expected";
                return null;
            };

            /**
             * Creates an OptionRecall message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof probability.proto.OptionRecall
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {probability.proto.OptionRecall} OptionRecall
             */
            OptionRecall.fromObject = function fromObject(object) {
                if (object instanceof $root.probability.proto.OptionRecall)
                    return object;
                var message = new $root.probability.proto.OptionRecall();
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
                if (object.target) {
                    if (!Array.isArray(object.target))
                        throw TypeError(".probability.proto.OptionRecall.target: array expected");
                    message.target = [];
                    for (var i = 0; i < object.target.length; ++i) {
                        if (typeof object.target[i] !== "object")
                            throw TypeError(".probability.proto.OptionRecall.target: object expected");
                        message.target[i] = $root.common.fish.proto.Point.fromObject(object.target[i]);
                    }
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
                if (object.fishSymbolId != null)
                    message.fishSymbolId = object.fishSymbolId | 0;
                if (object.roomUuid != null)
                    message.roomUuid = String(object.roomUuid);
                if (object.seatId != null)
                    message.seatId = object.seatId | 0;
                if (object.extraFishInfo) {
                    if (!Array.isArray(object.extraFishInfo))
                        throw TypeError(".probability.proto.OptionRecall.extraFishInfo: array expected");
                    message.extraFishInfo = [];
                    for (var i = 0; i < object.extraFishInfo.length; ++i) {
                        if (typeof object.extraFishInfo[i] !== "object")
                            throw TypeError(".probability.proto.OptionRecall.extraFishInfo: object expected");
                        message.extraFishInfo[i] = $root.probability.proto.ExtraInfo.fromObject(object.extraFishInfo[i]);
                    }
                }
                if (object.randomNumber != null)
                    message.randomNumber = object.randomNumber | 0;
                return message;
            };

            /**
             * Creates a plain object from an OptionRecall message. Also converts values to other types if specified.
             * @function toObject
             * @memberof probability.proto.OptionRecall
             * @static
             * @param {probability.proto.OptionRecall} message OptionRecall
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OptionRecall.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.target = [];
                    object.extraFishInfo = [];
                }
                if (options.defaults) {
                    object.msgid = options.enums === String ? "eReserved" : 0;
                    object.statusCode = options.enums === String ? "kSuccess" : 0;
                    object.fishSymbolId = 0;
                    object.roomUuid = "";
                    object.seatId = 0;
                    object.randomNumber = 0;
                }
                if (message.msgid != null && message.hasOwnProperty("msgid"))
                    object.msgid = options.enums === String ? $root.common.proto.EMSGID[message.msgid] === undefined ? message.msgid : $root.common.proto.EMSGID[message.msgid] : message.msgid;
                if (message.target && message.target.length) {
                    object.target = [];
                    for (var j = 0; j < message.target.length; ++j)
                        object.target[j] = $root.common.fish.proto.Point.toObject(message.target[j], options);
                }
                if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                    object.statusCode = options.enums === String ? $root.common.proto.Status.Code[message.statusCode] === undefined ? message.statusCode : $root.common.proto.Status.Code[message.statusCode] : message.statusCode;
                if (message.fishSymbolId != null && message.hasOwnProperty("fishSymbolId"))
                    object.fishSymbolId = message.fishSymbolId;
                if (message.roomUuid != null && message.hasOwnProperty("roomUuid"))
                    object.roomUuid = message.roomUuid;
                if (message.seatId != null && message.hasOwnProperty("seatId"))
                    object.seatId = message.seatId;
                if (message.extraFishInfo && message.extraFishInfo.length) {
                    object.extraFishInfo = [];
                    for (var j = 0; j < message.extraFishInfo.length; ++j)
                        object.extraFishInfo[j] = $root.probability.proto.ExtraInfo.toObject(message.extraFishInfo[j], options);
                }
                if (message.randomNumber != null && message.hasOwnProperty("randomNumber"))
                    object.randomNumber = message.randomNumber;
                return object;
            };

            /**
             * Converts this OptionRecall to JSON.
             * @function toJSON
             * @memberof probability.proto.OptionRecall
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OptionRecall.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OptionRecall
             * @function getTypeUrl
             * @memberof probability.proto.OptionRecall
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OptionRecall.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/probability.proto.OptionRecall";
            };

            return OptionRecall;
        })();

        proto.BroadcastOption = (function() {

            /**
             * Properties of a BroadcastOption.
             * @memberof probability.proto
             * @interface IBroadcastOption
             * @property {common.proto.EMSGID|null} [msgid] BroadcastOption msgid
             * @property {probability.proto.IOptionRecall|null} [optionRecall] BroadcastOption optionRecall
             */

            /**
             * Constructs a new BroadcastOption.
             * @memberof probability.proto
             * @classdesc Represents a BroadcastOption.
             * @implements IBroadcastOption
             * @constructor
             * @param {probability.proto.IBroadcastOption=} [properties] Properties to set
             */
            function BroadcastOption(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BroadcastOption msgid.
             * @member {common.proto.EMSGID} msgid
             * @memberof probability.proto.BroadcastOption
             * @instance
             */
            BroadcastOption.prototype.msgid = 0;

            /**
             * BroadcastOption optionRecall.
             * @member {probability.proto.IOptionRecall|null|undefined} optionRecall
             * @memberof probability.proto.BroadcastOption
             * @instance
             */
            BroadcastOption.prototype.optionRecall = null;

            /**
             * Creates a new BroadcastOption instance using the specified properties.
             * @function create
             * @memberof probability.proto.BroadcastOption
             * @static
             * @param {probability.proto.IBroadcastOption=} [properties] Properties to set
             * @returns {probability.proto.BroadcastOption} BroadcastOption instance
             */
            BroadcastOption.create = function create(properties) {
                return new BroadcastOption(properties);
            };

            /**
             * Encodes the specified BroadcastOption message. Does not implicitly {@link probability.proto.BroadcastOption.verify|verify} messages.
             * @function encode
             * @memberof probability.proto.BroadcastOption
             * @static
             * @param {probability.proto.IBroadcastOption} message BroadcastOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BroadcastOption.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.msgid != null && Object.hasOwnProperty.call(message, "msgid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgid);
                if (message.optionRecall != null && Object.hasOwnProperty.call(message, "optionRecall"))
                    $root.probability.proto.OptionRecall.encode(message.optionRecall, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified BroadcastOption message, length delimited. Does not implicitly {@link probability.proto.BroadcastOption.verify|verify} messages.
             * @function encodeDelimited
             * @memberof probability.proto.BroadcastOption
             * @static
             * @param {probability.proto.IBroadcastOption} message BroadcastOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BroadcastOption.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BroadcastOption message from the specified reader or buffer.
             * @function decode
             * @memberof probability.proto.BroadcastOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {probability.proto.BroadcastOption} BroadcastOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BroadcastOption.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.probability.proto.BroadcastOption();
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
                            message.optionRecall = $root.probability.proto.OptionRecall.decode(reader, reader.uint32());
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
             * Decodes a BroadcastOption message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof probability.proto.BroadcastOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {probability.proto.BroadcastOption} BroadcastOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BroadcastOption.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BroadcastOption message.
             * @function verify
             * @memberof probability.proto.BroadcastOption
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BroadcastOption.verify = function verify(message) {
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
                if (message.optionRecall != null && message.hasOwnProperty("optionRecall")) {
                    var error = $root.probability.proto.OptionRecall.verify(message.optionRecall);
                    if (error)
                        return "optionRecall." + error;
                }
                return null;
            };

            /**
             * Creates a BroadcastOption message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof probability.proto.BroadcastOption
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {probability.proto.BroadcastOption} BroadcastOption
             */
            BroadcastOption.fromObject = function fromObject(object) {
                if (object instanceof $root.probability.proto.BroadcastOption)
                    return object;
                var message = new $root.probability.proto.BroadcastOption();
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
                if (object.optionRecall != null) {
                    if (typeof object.optionRecall !== "object")
                        throw TypeError(".probability.proto.BroadcastOption.optionRecall: object expected");
                    message.optionRecall = $root.probability.proto.OptionRecall.fromObject(object.optionRecall);
                }
                return message;
            };

            /**
             * Creates a plain object from a BroadcastOption message. Also converts values to other types if specified.
             * @function toObject
             * @memberof probability.proto.BroadcastOption
             * @static
             * @param {probability.proto.BroadcastOption} message BroadcastOption
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BroadcastOption.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.msgid = options.enums === String ? "eReserved" : 0;
                    object.optionRecall = null;
                }
                if (message.msgid != null && message.hasOwnProperty("msgid"))
                    object.msgid = options.enums === String ? $root.common.proto.EMSGID[message.msgid] === undefined ? message.msgid : $root.common.proto.EMSGID[message.msgid] : message.msgid;
                if (message.optionRecall != null && message.hasOwnProperty("optionRecall"))
                    object.optionRecall = $root.probability.proto.OptionRecall.toObject(message.optionRecall, options);
                return object;
            };

            /**
             * Converts this BroadcastOption to JSON.
             * @function toJSON
             * @memberof probability.proto.BroadcastOption
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BroadcastOption.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BroadcastOption
             * @function getTypeUrl
             * @memberof probability.proto.BroadcastOption
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BroadcastOption.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/probability.proto.BroadcastOption";
            };

            return BroadcastOption;
        })();

        return proto;
    })();

    return probability;
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

module.exports = $root;
