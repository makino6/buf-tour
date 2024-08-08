"use strict";
// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeZone = exports.DateTime = void 0;
var protobuf_1 = require("@bufbuild/protobuf");
/**
 * Represents civil time (or occasionally physical time).
 *
 * This type can represent a civil time in one of a few possible ways:
 *
 *  * When utc_offset is set and time_zone is unset: a civil time on a calendar
 *    day with a particular offset from UTC.
 *  * When time_zone is set and utc_offset is unset: a civil time on a calendar
 *    day in a particular time zone.
 *  * When neither time_zone nor utc_offset is set: a civil time on a calendar
 *    day in local time.
 *
 * The date is relative to the Proleptic Gregorian Calendar.
 *
 * If year is 0, the DateTime is considered not to have a specific year. month
 * and day must have valid, non-zero values.
 *
 * This type may also be used to represent a physical time if all the date and
 * time fields are set and either case of the `time_offset` oneof is set.
 * Consider using `Timestamp` message for physical time instead. If your use
 * case also would like to store the user's timezone, that can be done in
 * another field.
 *
 * This type is more flexible than some applications may want. Make sure to
 * document and validate your application's limitations.
 *
 * @generated from message google.type.DateTime
 */
var DateTime = /** @class */ (function (_super) {
    __extends(DateTime, _super);
    function DateTime(data) {
        var _this = _super.call(this) || this;
        /**
         * Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a
         * datetime without a year.
         *
         * @generated from field: int32 year = 1;
         */
        _this.year = 0;
        /**
         * Required. Month of year. Must be from 1 to 12.
         *
         * @generated from field: int32 month = 2;
         */
        _this.month = 0;
        /**
         * Required. Day of month. Must be from 1 to 31 and valid for the year and
         * month.
         *
         * @generated from field: int32 day = 3;
         */
        _this.day = 0;
        /**
         * Required. Hours of day in 24 hour format. Should be from 0 to 23. An API
         * may choose to allow the value "24:00:00" for scenarios like business
         * closing time.
         *
         * @generated from field: int32 hours = 4;
         */
        _this.hours = 0;
        /**
         * Required. Minutes of hour of day. Must be from 0 to 59.
         *
         * @generated from field: int32 minutes = 5;
         */
        _this.minutes = 0;
        /**
         * Required. Seconds of minutes of the time. Must normally be from 0 to 59. An
         * API may allow the value 60 if it allows leap-seconds.
         *
         * @generated from field: int32 seconds = 6;
         */
        _this.seconds = 0;
        /**
         * Required. Fractions of seconds in nanoseconds. Must be from 0 to
         * 999,999,999.
         *
         * @generated from field: int32 nanos = 7;
         */
        _this.nanos = 0;
        /**
         * Optional. Specifies either the UTC offset or the time zone of the DateTime.
         * Choose carefully between them, considering that time zone data may change
         * in the future (for example, a country modifies their DST start/end dates,
         * and future DateTimes in the affected range had already been stored).
         * If omitted, the DateTime is considered to be in local time.
         *
         * @generated from oneof google.type.DateTime.time_offset
         */
        _this.timeOffset = { case: undefined };
        protobuf_1.proto3.util.initPartial(data, _this);
        return _this;
    }
    DateTime.fromBinary = function (bytes, options) {
        return new DateTime().fromBinary(bytes, options);
    };
    DateTime.fromJson = function (jsonValue, options) {
        return new DateTime().fromJson(jsonValue, options);
    };
    DateTime.fromJsonString = function (jsonString, options) {
        return new DateTime().fromJsonString(jsonString, options);
    };
    DateTime.equals = function (a, b) {
        return protobuf_1.proto3.util.equals(DateTime, a, b);
    };
    DateTime.runtime = protobuf_1.proto3;
    DateTime.typeName = "google.type.DateTime";
    DateTime.fields = protobuf_1.proto3.util.newFieldList(function () { return [
        { no: 1, name: "year", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
        { no: 2, name: "month", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
        { no: 3, name: "day", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
        { no: 4, name: "hours", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
        { no: 5, name: "minutes", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
        { no: 6, name: "seconds", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
        { no: 7, name: "nanos", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
        { no: 8, name: "utc_offset", kind: "message", T: protobuf_1.Duration, oneof: "time_offset" },
        { no: 9, name: "time_zone", kind: "message", T: TimeZone, oneof: "time_offset" },
    ]; });
    return DateTime;
}(protobuf_1.Message));
exports.DateTime = DateTime;
/**
 * Represents a time zone from the
 * [IANA Time Zone Database](https://www.iana.org/time-zones).
 *
 * @generated from message google.type.TimeZone
 */
var TimeZone = /** @class */ (function (_super) {
    __extends(TimeZone, _super);
    function TimeZone(data) {
        var _this = _super.call(this) || this;
        /**
         * IANA Time Zone Database time zone, e.g. "America/New_York".
         *
         * @generated from field: string id = 1;
         */
        _this.id = "";
        /**
         * Optional. IANA Time Zone Database version number, e.g. "2019a".
         *
         * @generated from field: string version = 2;
         */
        _this.version = "";
        protobuf_1.proto3.util.initPartial(data, _this);
        return _this;
    }
    TimeZone.fromBinary = function (bytes, options) {
        return new TimeZone().fromBinary(bytes, options);
    };
    TimeZone.fromJson = function (jsonValue, options) {
        return new TimeZone().fromJson(jsonValue, options);
    };
    TimeZone.fromJsonString = function (jsonString, options) {
        return new TimeZone().fromJsonString(jsonString, options);
    };
    TimeZone.equals = function (a, b) {
        return protobuf_1.proto3.util.equals(TimeZone, a, b);
    };
    TimeZone.runtime = protobuf_1.proto3;
    TimeZone.typeName = "google.type.TimeZone";
    TimeZone.fields = protobuf_1.proto3.util.newFieldList(function () { return [
        { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 2, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    ]; });
    return TimeZone;
}(protobuf_1.Message));
exports.TimeZone = TimeZone;
